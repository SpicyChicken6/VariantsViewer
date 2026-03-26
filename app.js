const FALLBACK_DATA = {
  genes: { totalCount: 0, pageSize: 10, rows: [] },
  variants: { totalCount: 0, pageSize: 20, rows: [] },
  phenotypes: { itemsVisible: 4, slides: [], omimRows: [] },
  family: { default: { members: [] }, rows: [] },
  cohort: { default: { cohortSize: 0, hitCount: 0, frequency: '0.00%', rank: '-' }, byGene: {} },
  predictions: { tabs: [] },
  igv: { defaultGenome: 'hg38', defaultFlank: 120, defaultTracks: [] }
};
const state = {
  genesPage: 1,
  variantsPage: 1,
  selectedGeneRow: null,
  selectedVariantRow: null,
  phenotypeOffset: 0,
  activePhenotypeId: null,
  selectedOmimIndex: 0,
  activeOrgans: ['head-neck', 'neurologic'],
  activePredictionTab: 'inheritance',
  geneSummaryExpanded: false,
  geneSummaryKey: null,
  nav: 'home',
  geneQuery: '',
  data: {},
  igvBrowser: null,
  igvBrowserRequestId: 0,
  igvBrowserReady: false,
  igvTrackError: ''
};

function disposeIgvBrowser() {
  if (state.igvBrowser && typeof state.igvBrowser.dispose === 'function') {
    state.igvBrowser.dispose();
  }
  state.igvBrowser = null;
  state.igvBrowserReady = false;
}

const DATA_MAP = {
  genes: 'data/genes.json',
  variants: 'data/variants.json',
  phenotypes: 'data/phenotypes.json',
  family: 'data/family.json',
  cohort: 'data/cohort.json',
  predictions: 'data/predictions.json',
  igv: 'data/igv.json'
};

const RESPONSIVE_TABLES = {
  genes: {
    dataKey: 'genes',
    stateKey: 'genesPage',
    minPageSize: 10,
    maxPageSize: 22,
    fallbackRowHeight: 40
  },
  variants: {
    dataKey: 'variants',
    stateKey: 'variantsPage',
    minPageSize: 20,
    maxPageSize: 34,
    fallbackRowHeight: 40
  }
};

let responsiveResizeFrame = 0;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

async function loadJson(key, url) {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`Falling back to embedded data for ${key} because external loading failed.`, err);
    return FALLBACK_DATA[key] || {};
  }
}

async function boot() {
  const ring = document.querySelector('.app-logo-ring');
  ring.classList.add('spinning');

  const entries = await Promise.all(
    Object.entries(DATA_MAP).map(async ([key, url]) => [key, await loadJson(key, url)])
  );
  state.data = Object.fromEntries(entries);
  state.selectedGeneRow = getDefaultSelectedRow(state.data.genes.rows);
  state.selectedVariantRow = getDefaultSelectedRow(state.data.variants.rows);
  const visibleSlides = state.data.phenotypes.slides.filter(s => state.activeOrgans.includes(s.id));
  state.activePhenotypeId = visibleSlides.find(s => s.active)?.id || visibleSlides[0]?.id || state.data.phenotypes.slides[0].id;
  wireTableScrollControls('genes');
  wireTableScrollControls('variants');
  wireSearch();
  wirePills();
  wirePredictionTabs();
  renderAll();
  syncResponsivePageSizes();
  window.addEventListener('resize', handleResponsiveResize, { passive: true });

  ring.classList.remove('spinning');
}

function renderAll() {
  renderGeneTable();
  renderVariantTable();
  renderPhenotypePanel();
  renderPredictionTab();
}

function paginateRows(rows, page, pageSize) {
  const start = (page - 1) * pageSize;
  return rows.slice(start, start + pageSize);
}

function estimateTablePageSize(section) {
  const config = RESPONSIVE_TABLES[section];
  const scroller = document.querySelector(`.${section}-card .table-scroll`);
  if (!config || !scroller) return null;

  const thead = scroller.querySelector('thead');
  const sampleRow = scroller.querySelector('tbody tr');
  const headerHeight = thead ? thead.getBoundingClientRect().height : 42;
  const rowHeight = sampleRow ? sampleRow.getBoundingClientRect().height : config.fallbackRowHeight;
  const availableHeight = Math.max(0, scroller.clientHeight - headerHeight - 4);
  const pageSize = Math.floor(availableHeight / Math.max(rowHeight, 1));
  return clamp(pageSize, config.minPageSize, config.maxPageSize);
}

function syncResponsivePageSizes() {
  if (!state.data.genes || !state.data.variants) return false;

  let changed = false;
  Object.entries(RESPONSIVE_TABLES).forEach(([section, config]) => {
    const nextPageSize = estimateTablePageSize(section);
    if (!nextPageSize || state.data[config.dataKey].pageSize === nextPageSize) return;

    state.data[config.dataKey].pageSize = nextPageSize;
    const totalRows = state.data[config.dataKey].rows.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / nextPageSize));
    state[config.stateKey] = Math.min(state[config.stateKey], totalPages);
    changed = true;
  });

  if (changed) renderAll();
  return changed;
}

function handleResponsiveResize() {
  if (responsiveResizeFrame) cancelAnimationFrame(responsiveResizeFrame);
  responsiveResizeFrame = requestAnimationFrame(() => {
    responsiveResizeFrame = 0;
    syncResponsivePageSizes();
  });
}

function getDefaultSelectedRow(rows) {
  return rows.find(row => row.selected) || rows[0] || null;
}

function hasActiveTextSelection() {
  const selection = window.getSelection();
  return Boolean(selection && String(selection).trim());
}

function ensureVisibleSelection(rows, visibleRows, currentRow) {
  if (!rows.length || !visibleRows.length) return null;
  if (!currentRow || !rows.includes(currentRow)) return visibleRows[0];
  return visibleRows.includes(currentRow) ? currentRow : visibleRows[0];
}

function getTableScrollElements(section) {
  return {
    scroller: document.querySelector(`.${section}-card .table-scroll`),
    controls: document.querySelector(`#${section}-scroll-controls`),
    upBtn: document.querySelector(`#${section}-scroll-up`),
    downBtn: document.querySelector(`#${section}-scroll-down`)
  };
}

function updateTableScrollControls(section) {
  const { scroller, controls, upBtn, downBtn } = getTableScrollElements(section);
  if (!scroller || !controls || !upBtn || !downBtn) return;

  const maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
  const hasOverflow = maxScroll > 2;
  controls.classList.toggle('is-hidden', !hasOverflow);
  upBtn.disabled = !hasOverflow || scroller.scrollTop <= 2;
  downBtn.disabled = !hasOverflow || scroller.scrollTop >= maxScroll - 2;
}

function scrollTableRows(section, direction) {
  const { scroller } = getTableScrollElements(section);
  if (!scroller) return;

  const firstRow = scroller.querySelector('tbody tr');
  const rowHeight = firstRow ? firstRow.getBoundingClientRect().height : 36;
  scroller.scrollBy({
    top: direction * rowHeight * 3,
    behavior: 'smooth'
  });
}

function wireTableScrollControls(section) {
  const { scroller, upBtn, downBtn } = getTableScrollElements(section);
  if (!scroller || !upBtn || !downBtn || scroller.dataset.scrollWired === 'true') return;

  scroller.dataset.scrollWired = 'true';
  scroller.addEventListener('scroll', () => updateTableScrollControls(section), { passive: true });
  upBtn.addEventListener('click', () => scrollTableRows(section, -1));
  downBtn.addEventListener('click', () => scrollTableRows(section, 1));
  window.addEventListener('resize', () => updateTableScrollControls(section));
  updateTableScrollControls(section);
}

function buildCompactPagination(totalPages, current) {
  const parts = [];
  const pushNum = (n) => parts.push({ type: 'page', value: n, active: n === current });
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) pushNum(i);
    return parts;
  }
  pushNum(1);
  if (current > 3) parts.push({ type: 'ellipsis' });
  const middle = new Set([current - 1, current, current + 1].filter(n => n > 1 && n < totalPages));
  if (current <= 3) middle.add(2), middle.add(3);
  if (current >= totalPages - 2) middle.add(totalPages - 2), middle.add(totalPages - 1);
  [...middle].sort((a,b)=>a-b).forEach(pushNum);
  if (current < totalPages - 2) parts.push({ type: 'ellipsis' });
  pushNum(totalPages);
  return parts;
}

function renderPagination(el, totalPages, current, onChange) {
  const parts = buildCompactPagination(totalPages, current);
  el.innerHTML = '';
  const prev = document.createElement('button');
  prev.className = 'page-btn';
  prev.textContent = '‹';
  prev.disabled = current === 1;
  prev.addEventListener('click', () => onChange(Math.max(1, current - 1)));
  el.appendChild(prev);

  parts.forEach(part => {
    if (part.type === 'ellipsis') {
      const span = document.createElement('span');
      span.className = 'ellipsis';
      span.textContent = '...';
      el.appendChild(span);
      return;
    }
    const btn = document.createElement('button');
    btn.className = 'page-num' + (part.active ? ' active' : '');
    btn.textContent = part.value;
    btn.addEventListener('click', () => onChange(part.value));
    el.appendChild(btn);
  });

  const next = document.createElement('button');
  next.className = 'page-btn';
  next.textContent = '›';
  next.disabled = current === totalPages;
  next.addEventListener('click', () => onChange(Math.min(totalPages, current + 1)));
  el.appendChild(next);
}

function getFilteredGenes() {
  const rows = state.data.genes.rows;
  const q = state.geneQuery.trim().toLowerCase();
  if (!q) return rows;
  return rows.filter(row =>
    [row.gene, row.synonyms, row.ensembl, String(row.ncbi)].join(' ').toLowerCase().includes(q)
  );
}

function renderGeneTable() {
  const data = state.data.genes;
  const tbody = document.querySelector('#genes-tbody');
  const filteredRows = getFilteredGenes();
  const totalFilteredPages = Math.max(1, Math.ceil(filteredRows.length / data.pageSize));
  if (state.genesPage > totalFilteredPages) state.genesPage = 1;
  const pageRows = paginateRows(filteredRows, state.genesPage, data.pageSize);
  state.selectedGeneRow = ensureVisibleSelection(filteredRows, pageRows, state.selectedGeneRow);
  tbody.innerHTML = pageRows.map((row, index) => `
    <tr class="data-row${row === state.selectedGeneRow ? ' is-selected' : ''}" data-row-index="${index}" aria-selected="${row === state.selectedGeneRow}">
      <td>${row === state.selectedGeneRow ? `<span class="cell-selected-wrap"><span class="cell-selected">${row.gene}</span><span class="cell-selected-bg" aria-hidden="true"></span></span>` : row.gene}</td>
      <td>${row.rank}</td>
      <td title="${row.synonyms}">${row.synonyms}</td>
      <td title="${row.ensembl}">${row.ensembl}</td>
      <td>${row.ncbi}</td>
      <td title="${row.clingenClassification || ''}">${row.clingenClassification || '-'}</td>
      <td>${row.moi || '-'}</td>
      <td>${row.hiScore || '-'}</td>
      <td>${row.tsScore || '-'}</td>
    </tr>
  `).join('');
  tbody.querySelectorAll('.data-row').forEach(tr => {
    tr.addEventListener('click', () => {
      if (hasActiveTextSelection()) return;
      state.selectedGeneRow = pageRows[parseInt(tr.dataset.rowIndex, 10)];
      renderGeneTable();
    });
  });

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / data.pageSize));
  const start = filteredRows.length ? (state.genesPage - 1) * data.pageSize + 1 : 0;
  const end = Math.min(state.genesPage * data.pageSize, filteredRows.length);
  document.querySelector('#genes-count').textContent = state.geneQuery
    ? `Showing ${start} to ${end} of ${filteredRows.length} matched genes`
    : `Showing ${start} to ${end} of ${data.totalCount} genes`;
  renderPagination(document.querySelector('#genes-pagination'), totalPages, state.genesPage, (page) => {
    state.genesPage = page;
    const { scroller } = getTableScrollElements('genes');
    if (scroller) scroller.scrollTop = 0;
    renderGeneTable();
  });
  renderGnomadGeneSummary();
  requestAnimationFrame(() => updateTableScrollControls('genes'));
}

function renderVariantTable() {
  const data = state.data.variants;
  const tbody = document.querySelector('#variants-tbody');
  const pageRows = paginateRows(data.rows, state.variantsPage, data.pageSize);
  state.selectedVariantRow = ensureVisibleSelection(data.rows, pageRows, state.selectedVariantRow);
  tbody.innerHTML = pageRows.map((row, index) => `
    <tr class="data-row${row === state.selectedVariantRow ? ' is-selected' : ''}" data-row-index="${index}" aria-selected="${row === state.selectedVariantRow}">
      <td>${row.variant}</td>
      <td>${row.transcript}</td>
      <td title="${row.hgvsc}">${row.hgvsc}</td>
      <td class="${String(row.effect).includes('frameshift') || String(row.effect).includes('stop') ? 'effect-danger' : ''}">${row.effect}</td>
      <td>${row.clinvar}</td>
      <td class="mono">${row.gnomad}</td>
    </tr>
  `).join('');
  tbody.querySelectorAll('.data-row').forEach(tr => {
    tr.addEventListener('click', () => {
      if (hasActiveTextSelection()) return;
      state.selectedVariantRow = pageRows[parseInt(tr.dataset.rowIndex, 10)];
      renderVariantTable();
      renderPredictionTab();
    });
  });

  const totalPages = Math.ceil(data.totalCount / data.pageSize);
  document.querySelector('#variants-count').textContent = `Showing ${(state.variantsPage - 1) * data.pageSize + 1} to ${Math.min(state.variantsPage * data.pageSize, data.totalCount)} of ${data.totalCount} variants`;
  renderPagination(document.querySelector('#variants-pagination'), totalPages, state.variantsPage, (page) => {
    state.variantsPage = page;
    const { scroller } = getTableScrollElements('variants');
    if (scroller) scroller.scrollTop = 0;
    renderVariantTable();
    renderPredictionTab();
  });
  requestAnimationFrame(() => updateTableScrollControls('variants'));
}

function renderPhenotypePanel() {
  const data = state.data.phenotypes;
  const slides = data.slides.filter(s => state.activeOrgans.includes(s.id));
  const hpoLogo = document.querySelector('.hpo-logo');
  if (hpoLogo && data.hpoLogo) hpoLogo.src = data.hpoLogo;
  const itemsVisible = data.itemsVisible || 4;
  const maxOffset = Math.max(0, slides.length - itemsVisible);
  state.phenotypeOffset = Math.min(state.phenotypeOffset, maxOffset);
  const visible = slides.slice(state.phenotypeOffset, state.phenotypeOffset + itemsVisible);

  const track = document.querySelector('#phenotype-track');
  track.innerHTML = visible.map(slide => `
    <button class="icon-chip ${slide.id === state.activePhenotypeId ? 'active' : ''}" data-id="${slide.id}" title="${slide.label}">
      <img src="${slide.icon}" alt="${slide.label}">
    </button>
  `).join('');

  track.querySelectorAll('.icon-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activePhenotypeId = btn.dataset.id;
      state.selectedOmimIndex = 0;
      renderPhenotypePanel();
    });
  });

  const prevBtn = document.querySelector('#carousel-prev');
  const nextBtn = document.querySelector('#carousel-next');
  const needsScroll = slides.length > itemsVisible;
  prevBtn.style.display = needsScroll ? '' : 'none';
  nextBtn.style.display = needsScroll ? '' : 'none';
  prevBtn.disabled = state.phenotypeOffset === 0;
  nextBtn.disabled = state.phenotypeOffset >= maxOffset;
  prevBtn.onclick = () => {
    state.phenotypeOffset = Math.max(0, state.phenotypeOffset - 1);
    renderPhenotypePanel();
  };
  nextBtn.onclick = () => {
    state.phenotypeOffset = Math.min(maxOffset, state.phenotypeOffset + 1);
    renderPhenotypePanel();
  };

  const active = slides.find(s => s.id === state.activePhenotypeId) || slides[0];

  const omimTbody = document.querySelector('#omim-tbody');
  omimTbody.innerHTML = active.omimPhenotypes.map((row, i) => `
    <tr class="omim-row${i === state.selectedOmimIndex ? ' is-selected' : ''}" data-idx="${i}">
      <td>${row.phenotype}</td>
      <td>${row.inheritance}</td>
      <td>${row.match}</td>
    </tr>
  `).join('');

  omimTbody.querySelectorAll('.omim-row').forEach(tr => {
    tr.addEventListener('click', () => {
      if (hasActiveTextSelection()) return;
      state.selectedOmimIndex = parseInt(tr.dataset.idx, 10);
      renderPhenotypePanel();
    });
  });

  /* Each OMIM phenotype shows a rotating window of HPO terms so that
     different phenotypes surface different (but overlapping) HPOs. */
  const allHpo = active.hpoTerms;
  const hpoCount = allHpo.length;
  const windowSize = Math.min(5, hpoCount);
  const start = state.selectedOmimIndex % hpoCount;
  const selectedHpos = [];
  for (let i = 0; i < windowSize; i++) {
    selectedHpos.push(allHpo[(start + i) % hpoCount]);
  }

  document.querySelector('#hpo-tbody').innerHTML = selectedHpos.map(row => `
    <tr>
      <td><a class="link" href="#">${row.code}</a></td>
      <td>${row.name}</td>
    </tr>
  `).join('');
}

function parseConstraintSeries(value, category) {
  const parts = String(value || '').split('/');
  const [expected = '', observed = '', metric = '', oe = ''] = parts;
  const metricLabel = category === 'lof' ? 'pLI' : 'Z';
  return {
    expected: expected || 'NA',
    observed: observed || 'NA',
    metricLabel,
    metricValue: metric || 'NA',
    oe: oe || 'NA'
  };
}

function getGnomadRowsForGene(geneRow) {
  if (!geneRow) return [];
  return [
    {
      label: 'Synonymous',
      ...parseConstraintSeries(geneRow.synonymous, 'synonymous')
    },
    {
      label: 'Missense',
      ...parseConstraintSeries(geneRow.missense, 'missense')
    },
    {
      label: 'LoF',
      ...parseConstraintSeries(geneRow.lof, 'lof')
    }
  ];
}

function getGeneSummaryText(geneRow) {
  if (!geneRow) return 'No gene selected.';

  return `The ${geneRow.gene} gene provides instructions for making a protein that supports normal cellular function and development. This gene is especially relevant in tissues that depend on tightly controlled gene activity, and disruption can contribute to disease-related phenotypes.`;
}

function buildCollapsedSummary(text, maxLength = 120) {
  if (text.length <= maxLength) {
    return { preview: text, expandable: false };
  }

  const preview = text.slice(0, maxLength).replace(/\s+\S*$/, '').trimEnd();
  return {
    preview: `${preview}...`,
    expandable: true
  };
}

function renderGnomadGeneSummary() {
  const titleHost = document.querySelector('#gnomad-gene-title');
  const marrvelLink = document.querySelector('#marrvel-link');
  const metaHost = document.querySelector('#gnomad-gene-meta');
  const tbody = document.querySelector('#gnomad-gene-tbody');
  const geneRow = state.selectedGeneRow;

  if (!titleHost || !metaHost || !tbody) return;

  if (!geneRow) {
    titleHost.textContent = 'GENE SUMMARY';
    if (marrvelLink) marrvelLink.href = 'https://marrvel.org/';
    metaHost.classList.remove('is-expanded');
    metaHost.textContent = getGeneSummaryText(null);
    tbody.innerHTML = '';
    state.geneSummaryExpanded = false;
    state.geneSummaryKey = null;
    return;
  }

  const geneKey = geneRow.gene;
  if (state.geneSummaryKey !== geneKey) {
    state.geneSummaryExpanded = false;
    state.geneSummaryKey = geneKey;
  }

  const fullSummary = getGeneSummaryText(geneRow);
  const { preview, expandable } = buildCollapsedSummary(fullSummary);
  const summaryText = state.geneSummaryExpanded ? fullSummary : preview;
  metaHost.classList.toggle('is-expanded', expandable && state.geneSummaryExpanded);

  titleHost.textContent = 'GENE SUMMARY';
  if (marrvelLink) marrvelLink.href = `https://marrvel.org/human/gene/${geneRow.ncbi}`;
  metaHost.innerHTML = `
    <span class="gnomad-summary-text">${summaryText}</span>
    ${expandable ? `<button type="button" class="summary-toggle">${state.geneSummaryExpanded ? 'Less' : 'More'}</button>` : ''}
  `;

  const toggle = metaHost.querySelector('.summary-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      state.geneSummaryExpanded = !state.geneSummaryExpanded;
      renderGnomadGeneSummary();
    });
  }

  tbody.innerHTML = getGnomadRowsForGene(geneRow).map(row => `
    <tr>
      <td>${row.label}</td>
      <td>${row.expected}</td>
      <td>${row.observed}</td>
      <td>${row.metricLabel}=${row.metricValue}</td>
      <td>${row.oe}</td>
    </tr>
  `).join('');
}

function formatVafPercent(vaf) {
  const numericVaf = Number(vaf);
  if (Number.isFinite(numericVaf)) {
    return `${Math.round(numericVaf * 100)}%`;
  }
  return vaf || 'NA';
}

function parsePercentValue(value) {
  const numeric = Number.parseFloat(String(value || '').replace('%', '').trim());
  return Number.isFinite(numeric) ? numeric : null;
}

function getVariantScopedData(container, variantKey) {
  if (!container) return null;
  if (variantKey && container.variants && container.variants[variantKey]) {
    return container.variants[variantKey];
  }
  return container.default || container;
}

function getInheritanceSectionIcon(kind) {
  if (kind === 'family') {
    return `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="8" r="5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }
  return `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21V3" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 21V9" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 21v-6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function getInheritanceMemberIcon(kind) {
  if (kind === 'proband') {
    return `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.7"/>
        <path d="M12 11.5v8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M8.5 15.5h7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      </svg>
    `;
  }
  if (kind === 'paternal') {
    return `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="10" cy="14" r="4.25" stroke="currentColor" stroke-width="1.7"/>
        <path d="M13 11 19 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M15.5 5H19v3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }
  if (kind === 'maternal') {
    return `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="1.7"/>
        <path d="M12 11v8m-3.5-4.5h7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      </svg>
    `;
  }
  return `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7.5" r="3" stroke="currentColor" stroke-width="1.7"/>
      <path d="M6.5 18a5.5 5.5 0 0 1 11 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    </svg>
  `;
}

const FAMILY_PHENOTYPE_SUMMARIES = {
  default: 'Global developmental delay, hypotonia, and intermittent seizure-like episodes remain the leading phenotype features in the proband.',
  '2-104856069-T-TG': 'Global developmental delay, hypotonia, and intermittent seizure-like episodes remain the leading phenotype features in the proband.',
  '16-104856254-T-TG': 'Speech delay, behavioral dysregulation, and mild motor incoordination are the main phenotype features noted in the proband.',
  '2-104856291-C-A': 'Developmental delay with autism-spectrum features and sensory dysregulation best matches the proband phenotype profile.',
  '7-104856328-G-A': 'The proband shows early-onset neurodevelopmental impairment with severe hypotonia and a more syndromic presentation.',
  '17-104856365-T-C': 'The proband phenotype includes developmental delay and episodic neurologic findings with partial familial overlap.'
};

const FAMILY_PHENOTYPE_BADGES = {
  default: {
    proband: { text: 'Affected', tone: 'rose' },
    paternal: { text: 'Unaffected', tone: 'slate' },
    maternal: { text: 'Unaffected', tone: 'slate' }
  },
  '2-104856069-T-TG': {
    proband: { text: 'Affected', tone: 'rose' },
    paternal: { text: 'Unaffected', tone: 'slate' },
    maternal: { text: 'Unaffected', tone: 'slate' }
  },
  '16-104856254-T-TG': {
    proband: { text: 'Affected', tone: 'rose' },
    paternal: { text: 'Unaffected', tone: 'slate' },
    maternal: { text: 'Unaffected', tone: 'slate' }
  },
  '2-104856291-C-A': {
    proband: { text: 'Affected', tone: 'rose' },
    paternal: { text: 'Unaffected', tone: 'slate' },
    maternal: { text: 'Mildly affected', tone: 'blue' }
  },
  '7-104856328-G-A': {
    proband: { text: 'Affected', tone: 'rose' },
    paternal: { text: 'Unaffected', tone: 'slate' },
    maternal: { text: 'Unaffected', tone: 'slate' }
  },
  '17-104856365-T-C': {
    proband: { text: 'Affected', tone: 'rose' },
    paternal: { text: 'Unaffected', tone: 'slate' },
    maternal: { text: 'Possibly affected', tone: 'blue' }
  }
};

function getFamilyPhenotypeSummary(variantKey) {
  return FAMILY_PHENOTYPE_SUMMARIES[variantKey] || FAMILY_PHENOTYPE_SUMMARIES.default;
}

function getFamilyPhenotypeBadge(variantKey, memberId) {
  const scoped = FAMILY_PHENOTYPE_BADGES[variantKey] || FAMILY_PHENOTYPE_BADGES.default;
  return scoped[memberId] || { text: 'Unknown', tone: 'slate' };
}

function getFamilyDisplayName(row) {
  const rawName = row.displayName || row.status || row.id || 'Unknown';
  return String(rawName).replace(/\s*\([^)]*\)\s*$/, '');
}

function renderInheritanceTab(detailHost) {
  const variantKey = state.selectedVariantRow?.variant || 'No variant selected';
  const familyContext = getVariantScopedData(state.data.family, state.selectedVariantRow?.variant) || {};
  const cohortContext = getVariantScopedData(state.data.cohort, state.selectedVariantRow?.variant) || {};
  const familyRows = familyContext.members || familyContext.rows || [];
  const phenotypeSummary = getFamilyPhenotypeSummary(state.selectedVariantRow?.variant);
  const cohortFrequency = cohortContext.frequency || '0.00%';
  const cohortSize = cohortContext.cohortSize || 'NA';
  const matchingSampleIds = cohortContext.matchingSampleIds || [];
  const cohortHitCount = Number.isFinite(Number(cohortContext.hitCount))
    ? Number(cohortContext.hitCount)
    : matchingSampleIds.length;

  detailHost.innerHTML = `
    <div class="inheritance-layout">
      <section class="inheritance-panel">
        <div class="inheritance-section-head">
          <span class="inheritance-section-icon">${getInheritanceSectionIcon('family')}</span>
          <div class="tab-headline">Family Segregation</div>
        </div>
        <div class="inheritance-phenotype-summary">
          <div class="inheritance-phenotype-title">Phenotype</div>
          <p>${phenotypeSummary}</p>
        </div>
        <div class="inheritance-family-stack">
          ${familyRows.map(row => {
            const phenotypeBadge = getFamilyPhenotypeBadge(state.selectedVariantRow?.variant, row.id);
            return `
            <article class="inheritance-member-card${row.featured ? ' is-featured' : ''}">
              <div class="inheritance-member-top">
                <div class="inheritance-member-ident">
                  <div class="inheritance-member-icon">${getInheritanceMemberIcon(row.icon || row.id)}</div>
                  <div>
                    <div class="inheritance-member-name">${getFamilyDisplayName(row)}</div>
                    <div class="inheritance-member-sample">SAMPLE_ID: ${row.sampleId || 'NA'}</div>
                  </div>
                </div>
                <div class="inheritance-member-badges">
                  ${row.badge ? `<span class="badge ${row.badge.tone}">${row.badge.text}</span>` : ''}
                  <span class="badge ${phenotypeBadge.tone}">${phenotypeBadge.text}</span>
                </div>
              </div>
              <div class="inheritance-genotype-grid">
                <div class="inheritance-genotype-stat">
                  <div class="inheritance-genotype-label">GT</div>
                  <div class="inheritance-genotype-value">${row.gt || 'NA'}</div>
                </div>
                <div class="inheritance-genotype-stat">
                  <div class="inheritance-genotype-label">VAF</div>
                  <div class="inheritance-genotype-value">${formatVafPercent(row.vaf)}</div>
                </div>
                <div class="inheritance-genotype-stat">
                  <div class="inheritance-genotype-label">COV</div>
                  <div class="inheritance-genotype-value">${row.cov || 'NA'}</div>
                </div>
                <div class="inheritance-genotype-stat">
                  <div class="inheritance-genotype-label">QUAL</div>
                  <div class="inheritance-genotype-value">${row.qual || 'NA'}</div>
                </div>
              </div>
            </article>
          `;
          }).join('')}
        </div>
      </section>

      <section class="inheritance-panel inheritance-panel-cohort">
        <div class="inheritance-section-head">
          <span class="inheritance-section-icon">${getInheritanceSectionIcon('cohort')}</span>
          <div class="tab-headline">Cohort Context</div>
        </div>
        <div class="inheritance-cohort-callout">
          <div class="inheritance-cohort-callout-line">
            <strong>${cohortHitCount}</strong> cohort sample${cohortHitCount === 1 ? '' : 's'} currently carry this exact variant.
          </div>
          <div class="inheritance-cohort-callout-line">
            Cohort size: <strong>${cohortSize}</strong>. Reported frequency: <strong>${cohortFrequency}</strong>.
          </div>
        </div>
        <div class="inheritance-cohort-summary">
          <div class="inheritance-cohort-metric">
            <div class="inheritance-cohort-label">Variant</div>
            <div class="inheritance-cohort-value">${variantKey}</div>
          </div>
          <div class="inheritance-cohort-metric">
            <div class="inheritance-cohort-label">Cohort Hits</div>
            <div class="inheritance-cohort-value">${cohortHitCount}</div>
          </div>
          <div class="inheritance-cohort-metric">
            <div class="inheritance-cohort-label">Frequency</div>
            <div class="inheritance-cohort-value">${cohortFrequency}</div>
          </div>
        </div>
        <div class="inheritance-sample-card">
          <div class="inheritance-sample-card-title">Matching Sample IDs</div>
          ${matchingSampleIds.length ? `
            <div class="inheritance-sample-list">
              ${matchingSampleIds.map(sampleId => `<span class="inheritance-sample-chip">${sampleId}</span>`).join('')}
            </div>
          ` : `
            <div class="inheritance-empty">No other cohort sample IDs are currently reported for this exact variant.</div>
          `}
        </div>
      </section>
    </div>
  `;
}

function getIgvDataConfig() {
  return state.data.igv || {};
}

function getIgvTracksForVariant(variantRow) {
  const igvConfig = getIgvDataConfig();
  const variantKey = variantRow?.variant;
  const variantScopedTracks = variantKey ? igvConfig.variantTracks?.[variantKey] : null;
  const tracks = Array.isArray(variantScopedTracks) && variantScopedTracks.length
    ? variantScopedTracks
    : (Array.isArray(igvConfig.defaultTracks) ? igvConfig.defaultTracks : []);

  return tracks.map(track => ({ ...track }));
}

function extractTrackNameFromUrl(rawUrl) {
  try {
    const parsedUrl = new URL(rawUrl);
    return parsedUrl.pathname.split('/').pop() || 'BAM';
  } catch (error) {
    return 'BAM';
  }
}

function parseVariantCoordinates(variantKey) {
  if (!variantKey || typeof variantKey !== 'string') return null;
  const [chromosome, positionText] = variantKey.split('-');
  const position = Number(positionText);
  if (!chromosome || !Number.isFinite(position)) return null;
  const chrLabel = chromosome.toLowerCase().startsWith('chr') ? chromosome : `chr${chromosome}`;
  return { chromosome: chrLabel, position };
}

function getVariantLocus(variantRow, flank = Number(getIgvDataConfig().defaultFlank) || 120) {
  const fallback = 'chr2:104,855,950-104,856,250';
  const parsed = parseVariantCoordinates(variantRow?.variant);
  if (!parsed) return fallback;
  const start = Math.max(1, parsed.position - flank);
  const end = parsed.position + flank;
  return `${parsed.chromosome}:${start.toLocaleString('en-US')}-${end.toLocaleString('en-US')}`;
}

function getVariantGenome() {
  return getIgvDataConfig().defaultGenome || 'hg38';
}

async function createOrRefreshIgvBrowser() {
  const igvHost = document.querySelector('#igv-browser-host');
  const status = document.querySelector('#igv-status');
  if (!igvHost || !status) return;

  if (!window.igv || typeof window.igv.createBrowser !== 'function') {
    status.textContent = 'IGV.js did not load. Check network access or CSP policy, then reload the page.';
    status.classList.add('error');
    return;
  }

  const locus = getVariantLocus(state.selectedVariantRow);
  const tracks = getIgvTracksForVariant(state.selectedVariantRow);
  const config = {
    genome: getVariantGenome(),
    locus,
    showNavigation: true,
    showRuler: true,
    tracks
  };

  status.textContent = `Loading BAM alignments at ${locus}...`;
  status.classList.remove('error');
  const requestId = state.igvBrowserRequestId + 1;
  state.igvBrowserRequestId = requestId;

  try {
    igvHost.innerHTML = '';
    disposeIgvBrowser();
    const browser = await window.igv.createBrowser(igvHost, config);
    if (requestId !== state.igvBrowserRequestId) {
      if (browser && typeof browser.dispose === 'function') {
        browser.dispose();
      }
      return;
    }
    state.igvBrowser = browser;
    state.igvBrowserReady = true;
    status.textContent = `Loaded ${tracks.length} BAM track${tracks.length === 1 ? '' : 's'} at ${locus}.`;
  } catch (error) {
    if (requestId !== state.igvBrowserRequestId) return;
    state.igvBrowser = null;
    state.igvBrowserReady = false;
    state.igvTrackError = error?.message || 'Unknown IGV initialization error';
    status.textContent = `Unable to load IGV alignment tracks: ${state.igvTrackError}`;
    status.classList.add('error');
    console.error(error);
  }
}

function wireIgvControls() {
  const jumpBtn = document.querySelector('#igv-jump-btn');
  const locusInput = document.querySelector('#igv-locus-input');
  const bamInput = document.querySelector('#igv-bam-url-input');
  const baiInput = document.querySelector('#igv-bai-url-input');
  const addTrackBtn = document.querySelector('#igv-add-track-btn');
  const status = document.querySelector('#igv-status');

  if (locusInput) locusInput.value = getVariantLocus(state.selectedVariantRow);

  jumpBtn?.addEventListener('click', async () => {
    if (!state.igvBrowser || !locusInput?.value.trim()) return;
    await state.igvBrowser.search(locusInput.value.trim());
    status.textContent = `Moved to ${locusInput.value.trim()}.`;
    status.classList.remove('error');
  });

  addTrackBtn?.addEventListener('click', async () => {
    const bamUrl = bamInput?.value.trim();
    const baiUrl = baiInput?.value.trim();
    if (!state.igvBrowser || !bamUrl || !baiUrl) {
      status.textContent = 'Enter both BAM and BAI URLs before adding a track.';
      status.classList.add('error');
      return;
    }

    try {
      await state.igvBrowser.loadTrack({
        type: 'alignment',
        format: 'bam',
        name: `Custom ${extractTrackNameFromUrl(bamUrl)}`,
        url: bamUrl,
        indexURL: baiUrl,
        height: 180
      });
      status.textContent = 'Custom BAM track added successfully.';
      status.classList.remove('error');
      bamInput.value = '';
      baiInput.value = '';
    } catch (error) {
      status.textContent = `Failed to add custom BAM track: ${error?.message || 'Unknown error'}`;
      status.classList.add('error');
    }
  });
}

function renderIgvTab(detailHost) {
  detailHost.innerHTML = `
    <section class="igv-panel">
      <div class="igv-toolbar">
        <div class="igv-field">
          <label for="igv-locus-input">Locus</label>
          <input id="igv-locus-input" type="text" value="${getVariantLocus(state.selectedVariantRow)}" placeholder="chr2:104,855,950-104,856,250">
        </div>
        <button id="igv-jump-btn" class="tab-action-btn" type="button">Jump to locus</button>
      </div>
      <div class="igv-toolbar igv-toolbar-secondary">
        <div class="igv-field">
          <label for="igv-bam-url-input">BAM URL</label>
          <input id="igv-bam-url-input" type="url" placeholder="https://server/path/sample.bam">
        </div>
        <div class="igv-field">
          <label for="igv-bai-url-input">BAI URL</label>
          <input id="igv-bai-url-input" type="url" placeholder="https://server/path/sample.bam.bai">
        </div>
        <button id="igv-add-track-btn" class="tab-action-btn" type="button">Add BAM</button>
      </div>
      <p class="igv-help">Tip: BAM/BAI endpoints must support CORS and HTTP range requests for IGV streaming.</p>
      <p id="igv-status" class="igv-status" role="status" aria-live="polite"></p>
      <div id="igv-browser-host" class="igv-browser-host" aria-label="IGV genome browser"></div>
    </section>
  `;

  wireIgvControls();
  createOrRefreshIgvBrowser();
}

function wirePredictionTabs() {
  const tabs = state.data.predictions.tabs;
  const host = document.querySelector('#prediction-tabs');
  host.innerHTML = tabs.map(t => `
    <button class="tab-btn ${t.id === state.activePredictionTab ? 'active' : ''}" data-id="${t.id}">${t.label}</button>
  `).join('');
  host.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activePredictionTab = btn.dataset.id;
      renderPredictionTab();
    });
  });
}

function renderPredictionTab() {
  wirePredictionTabs();
  const tab = state.data.predictions.tabs.find(t => t.id === state.activePredictionTab) || state.data.predictions.tabs[0];
  const titleHost = document.querySelector('#prediction-title');
  const metricsHost = document.querySelector('#prediction-grid');
  const detailHost = document.querySelector('#prediction-detail');
  const showsMetrics = tab.id === 'prediction';

  if (titleHost) {
    titleHost.textContent = tab.label;
  }

  metricsHost.classList.toggle('is-hidden', !showsMetrics);
  detailHost.classList.toggle('is-standalone', !showsMetrics);
  if (tab.id !== 'igv') {
    state.igvBrowserRequestId += 1;
    disposeIgvBrowser();
  }

  if (tab.id === 'inheritance') {
    metricsHost.innerHTML = '';
    renderInheritanceTab(detailHost);
  } else if (tab.id === 'igv') {
    metricsHost.innerHTML = '';
    renderIgvTab(detailHost);
  } else if (tab.id === 'prediction') {
    const seenGroups = new Set();
    metricsHost.innerHTML = tab.metrics.map(metric => {
      let groupLabel = '';
      if (metric.group && !seenGroups.has(metric.group)) {
        seenGroups.add(metric.group);
        groupLabel = `<div class="metric-group-label">${metric.group}</div>`;
      }
      return `${groupLabel}<div class="metric-card">
        <div class="metric-label">${metric.label}</div>
        <div class="metric-value ${metric.tone === 'danger' ? 'danger' : ''}">${metric.value}</div>
      </div>`;
    }).join('');
    detailHost.innerHTML = `
      <h4>${tab.detailTitle}</h4>
      <p>${tab.detailText}</p>
    `;
  } else {
    metricsHost.innerHTML = '';
    detailHost.innerHTML = `
      <div class="tab-headline">${tab.headline}</div>
      <ul class="bullets">
        ${tab.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }
}

function wireSearch() {
  const input = document.querySelector('#gene-search');
  input.addEventListener('input', () => {
    state.geneQuery = input.value || '';
    state.genesPage = 1;
    const { scroller } = getTableScrollElements('genes');
    if (scroller) scroller.scrollTop = 0;
    renderGeneTable();
  });
}

function wirePills() {
  document.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      state.nav = btn.dataset.view;
    });
  });
}

document.addEventListener('DOMContentLoaded', boot);
