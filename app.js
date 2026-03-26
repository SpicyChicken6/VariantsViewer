const ENABLE_PROTEIN_MODULE = true;
const ALPHAMISSENSE_THRESHOLDS = {
  likelyPathogenic: 0.564,
  likelyBenign: 0.34
};
const PROTEIN_RENDER_DEBOUNCE_MS = 120;

const FALLBACK_DATA = {
  "genes": {
    "totalCount": 60,
    "pageSize": 10,
    "rows": [
      {
        "gene": "MECP2",
        "rank": 1,
        "synonyms": "MRX16, RTT",
        "ensembl": "ENSG00000169057",
        "ncbi": 4204,
        "clingenClassification": "Definitive",
        "moi": "XLD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "52.3/48/0.92/0.89",
        "missense": "145.2/158/1.09/1.12",
        "lof": "18.6/3/0.98/0.16",
        "selected": true
      },
      {
        "gene": "TXNIP",
        "rank": 2,
        "synonyms": "VDUP1, HHCPA78",
        "ensembl": "ENSG0000011676",
        "ncbi": 10629,
        "clingenClassification": "Limited",
        "moi": "AD",
        "hiScore": "0",
        "tsScore": "0",
        "synonymous": "49.2/51/1.05/1.02",
        "missense": "132.8/125/0.94/0.91",
        "lof": "16.2/8/0.85/0.49",
        "selected": false
      },
      {
        "gene": "SHANK3",
        "rank": 3,
        "synonyms": "PROSAP2, PSAP2",
        "ensembl": "ENSG00000251322",
        "ncbi": 85360,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "62.4/59/0.96/0.93",
        "missense": "178.9/195/1.09/1.15",
        "lof": "24.3/5/0.92/0.21",
        "selected": false
      },
      {
        "gene": "RBFOX3",
        "rank": 4,
        "synonyms": "NEUN, HNRNP3",
        "ensembl": "ENSG00000167281",
        "ncbi": 14676,
        "clingenClassification": "Moderate",
        "moi": "AD",
        "hiScore": "2",
        "tsScore": "0",
        "synonymous": "39.7/41/1.07/1.04",
        "missense": "98.5/88/0.89/0.86",
        "lof": "12.8/2/0.95/0.16",
        "selected": false
      },
      {
        "gene": "MKI67",
        "rank": 5,
        "synonyms": "KIA, MIB-1",
        "ensembl": "ENSG00000148773",
        "ncbi": 4292,
        "clingenClassification": "Limited",
        "moi": "AD",
        "hiScore": "0",
        "tsScore": "1",
        "synonymous": "73.5/68/0.95/0.91",
        "missense": "205.3/218/1.06/1.09",
        "lof": "28.7/12/0.88/0.42",
        "selected": false
      },
      {
        "gene": "DCX",
        "rank": 6,
        "synonyms": "DC, DBCN",
        "ensembl": "ENSG00000077279",
        "ncbi": 1646,
        "clingenClassification": "Definitive",
        "moi": "XLD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "46.3/46/1.05/1.01",
        "missense": "118.6/105/0.89/0.85",
        "lof": "15.4/4/0.91/0.26",
        "selected": false
      },
      {
        "gene": "ADNP",
        "rank": 7,
        "synonyms": "ADNP1, MRX10",
        "ensembl": "ENSG00000101126",
        "ncbi": 23394,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "41.2/38/0.92/0.92",
        "missense": "112.5/120/1.07/1.07",
        "lof": "13.4/2/0.94/0.15",
        "selected": false
      },
      {
        "gene": "GRIN2B",
        "rank": 8,
        "synonyms": "NR2B, MRD6",
        "ensembl": "ENSG00000116748",
        "ncbi": 2904,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "68.4/65/0.95/0.95",
        "missense": "192.1/205/1.10/1.09",
        "lof": "26.2/8/0.91/0.31",
        "selected": false
      },
      {
        "gene": "SYNGAP1",
        "rank": 9,
        "synonyms": "KIAA1938",
        "ensembl": "ENSG00000197283",
        "ncbi": 8831,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "43.9/40/0.97/0.93",
        "missense": "121.4/130/1.08/1.07",
        "lof": "14.1/2/0.96/0.14",
        "selected": false
      },
      {
        "gene": "SCN2A",
        "rank": 10,
        "synonyms": "DEE11, NAC2",
        "ensembl": "ENSG00000136531",
        "ncbi": 6326,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "77.8/74/0.93/0.95",
        "missense": "214.0/226/1.06/1.06",
        "lof": "29.2/9/0.90/0.31",
        "selected": false
      },
      {
        "gene": "DYRK1A",
        "rank": 11,
        "synonyms": "MNBH, MRD7",
        "ensembl": "ENSG00000157540",
        "ncbi": 1859,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "61.6/178/1.05/0.5",
        "missense": "114.3/53/0.8/0.59",
        "lof": "25.1/9/0.95/0.46",
        "selected": false
      },
      {
        "gene": "SATB2",
        "rank": 12,
        "synonyms": "GLSS, MIPHI",
        "ensembl": "ENSG00000119042",
        "ncbi": 23314,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "73.5/215/1.0/0.47",
        "missense": "129.7/295/0.83/1.14",
        "lof": "19.3/7/0.85/0.27",
        "selected": false
      },
      {
        "gene": "TBR1",
        "rank": 13,
        "synonyms": "AUTS13",
        "ensembl": "ENSG00000136535",
        "ncbi": 10716,
        "clingenClassification": "Strong",
        "moi": "AD",
        "hiScore": "2",
        "tsScore": "0",
        "synonymous": "53.0/96/0.83/0.89",
        "missense": "142.7/184/0.87/1.02",
        "lof": "13.4/4/0.91/0.35",
        "selected": false
      },
      {
        "gene": "PTEN",
        "rank": 14,
        "synonyms": "MMAC1",
        "ensembl": "ENSG00000171862",
        "ncbi": 5728,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "1",
        "synonymous": "44.7/61/0.85/0.46",
        "missense": "164.0/123/0.88/0.73",
        "lof": "27.9/0/0.89/0.4",
        "selected": false
      },
      {
        "gene": "CHD8",
        "rank": 15,
        "synonyms": "AUTS18",
        "ensembl": "ENSG00000100888",
        "ncbi": 57680,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "64.8/13/0.94/0.96",
        "missense": "156.3/273/0.99/0.67",
        "lof": "13.6/4/0.97/0.15",
        "selected": false
      },
      {
        "gene": "CNTNAP2",
        "rank": 16,
        "synonyms": "CASPR2",
        "ensembl": "ENSG00000174469",
        "ncbi": 26047,
        "clingenClassification": "Moderate",
        "moi": "AR",
        "hiScore": "1",
        "tsScore": "0",
        "synonymous": "74.2/161/0.91/0.78",
        "missense": "162.0/302/1.18/1.1",
        "lof": "15.5/4/0.9/0.32",
        "selected": false
      },
      {
        "gene": "KMT2A",
        "rank": 17,
        "synonyms": "MLL1",
        "ensembl": "ENSG00000118058",
        "ncbi": 4297,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "67.9/136/1.03/0.85",
        "missense": "219.1/205/0.8/0.94",
        "lof": "28.2/3/0.81/0.17",
        "selected": false
      },
      {
        "gene": "KAT6A",
        "rank": 18,
        "synonyms": "MYST3, MOZ",
        "ensembl": "ENSG00000125730",
        "ncbi": 7994,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "76.5/123/0.88/0.44",
        "missense": "207.0/88/0.98/0.58",
        "lof": "20.9/1/0.94/0.41",
        "selected": false
      },
      {
        "gene": "SETD2",
        "rank": 19,
        "synonyms": "HYPB, HIF-1",
        "ensembl": "ENSG00000181555",
        "ncbi": 29072,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "62.8/157/1.07/0.86",
        "missense": "208.0/264/1.19/1.04",
        "lof": "20.8/1/0.85/0.24",
        "selected": false
      },
      {
        "gene": "AUTS2",
        "rank": 20,
        "synonyms": "AUTS2",
        "ensembl": "ENSG00000158321",
        "ncbi": 26053,
        "clingenClassification": "Strong",
        "moi": "AD",
        "hiScore": "2",
        "tsScore": "0",
        "synonymous": "41.0/200/0.89/0.48",
        "missense": "210.3/20/1.1/0.92",
        "lof": "10.6/9/0.95/0.4",
        "selected": false
      },
      {
        "gene": "MECP22",
        "rank": 21,
        "synonyms": "MRX16, RTT",
        "ensembl": "ENSG00000169057",
        "ncbi": 4204,
        "clingenClassification": "Definitive",
        "moi": "XLD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "60.9/160/0.98/0.5",
        "missense": "98.8/334/1.04/0.49",
        "lof": "27.0/10/0.81/0.4",
        "selected": false
      },
      {
        "gene": "TXNIP2",
        "rank": 22,
        "synonyms": "VDUP1, HHCPA78",
        "ensembl": "ENSG0000011676",
        "ncbi": 10629,
        "clingenClassification": "Limited",
        "moi": "AD",
        "hiScore": "0",
        "tsScore": "0",
        "synonymous": "66.1/175/1.02/0.91",
        "missense": "172.7/300/0.72/0.66",
        "lof": "10.4/2/0.96/0.17",
        "selected": false
      },
      {
        "gene": "SHANK32",
        "rank": 23,
        "synonyms": "PROSAP2, PSAP2",
        "ensembl": "ENSG00000251322",
        "ncbi": 85360,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "65.0/127/1.07/0.59",
        "missense": "125.5/208/1.14/1.13",
        "lof": "12.6/1/0.85/0.28",
        "selected": false
      },
      {
        "gene": "RBFOX32",
        "rank": 24,
        "synonyms": "NEUN, HNRNP3",
        "ensembl": "ENSG00000167281",
        "ncbi": 14676,
        "clingenClassification": "Moderate",
        "moi": "AD",
        "hiScore": "2",
        "tsScore": "0",
        "synonymous": "60.2/130/1.01/0.86",
        "missense": "113.7/227/0.74/0.74",
        "lof": "12.0/6/0.93/0.3",
        "selected": false
      },
      {
        "gene": "MKI672",
        "rank": 25,
        "synonyms": "KIA, MIB-1",
        "ensembl": "ENSG00000148773",
        "ncbi": 4292,
        "clingenClassification": "Limited",
        "moi": "AD",
        "hiScore": "0",
        "tsScore": "1",
        "synonymous": "61.5/70/1.08/0.17",
        "missense": "96.0/331/1.19/0.87",
        "lof": "14.2/0/0.88/0.45",
        "selected": false
      },
      {
        "gene": "DCX2",
        "rank": 26,
        "synonyms": "DC, DBCN",
        "ensembl": "ENSG00000077279",
        "ncbi": 1646,
        "clingenClassification": "Definitive",
        "moi": "XLD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "52.2/16/1.08/0.56",
        "missense": "172.0/65/0.99/0.83",
        "lof": "22.6/12/0.91/0.35",
        "selected": false
      },
      {
        "gene": "ADNP2",
        "rank": 27,
        "synonyms": "ADNP1, MRX10",
        "ensembl": "ENSG00000101126",
        "ncbi": 23394,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "36.2/9/1.08/0.43",
        "missense": "192.9/253/0.82/1.14",
        "lof": "27.3/9/0.98/0.3",
        "selected": false
      },
      {
        "gene": "GRIN2B2",
        "rank": 28,
        "synonyms": "NR2B, MRD6",
        "ensembl": "ENSG00000166748",
        "ncbi": 2904,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "76.4/22/0.9/0.76",
        "missense": "180.7/263/1.04/0.95",
        "lof": "16.8/2/0.84/0.25",
        "selected": false
      },
      {
        "gene": "SYNGAP12",
        "rank": 29,
        "synonyms": "KIAA1938",
        "ensembl": "ENSG00000197283",
        "ncbi": 8831,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "49.8/63/0.98/0.89",
        "missense": "139.8/72/1.13/0.47",
        "lof": "13.0/1/0.92/0.43",
        "selected": false
      },
      {
        "gene": "SCN2A2",
        "rank": 30,
        "synonyms": "DEE11, NAC2",
        "ensembl": "ENSG00000136531",
        "ncbi": 6326,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "36.5/69/1.06/0.27",
        "missense": "156.9/216/1.05/0.56",
        "lof": "11.2/3/0.83/0.32",
        "selected": false
      },
      {
        "gene": "DYRK1A2",
        "rank": 31,
        "synonyms": "MNBH, MRD7",
        "ensembl": "ENSG00000157540",
        "ncbi": 1859,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "75.0/203/1.05/0.24",
        "missense": "214.6/165/0.71/0.63",
        "lof": "25.8/3/0.94/0.23",
        "selected": false
      },
      {
        "gene": "SATB22",
        "rank": 32,
        "synonyms": "GLSS, MIPHI",
        "ensembl": "ENSG00000119042",
        "ncbi": 23314,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "64.3/89/1.02/0.9",
        "missense": "154.3/25/0.96/0.74",
        "lof": "24.3/8/1.0/0.17",
        "selected": false
      },
      {
        "gene": "TBR12",
        "rank": 33,
        "synonyms": "AUTS13",
        "ensembl": "ENSG00000136535",
        "ncbi": 10716,
        "clingenClassification": "Strong",
        "moi": "AD",
        "hiScore": "2",
        "tsScore": "0",
        "synonymous": "70.6/46/0.83/0.88",
        "missense": "114.2/98/0.8/1.07",
        "lof": "10.8/12/0.83/0.35",
        "selected": false
      },
      {
        "gene": "PTEN2",
        "rank": 34,
        "synonyms": "MMAC1",
        "ensembl": "ENSG00000171862",
        "ncbi": 5728,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "1",
        "synonymous": "65.9/186/0.82/0.37",
        "missense": "88.4/245/0.72/0.52",
        "lof": "21.6/6/0.86/0.4",
        "selected": false
      },
      {
        "gene": "CHD82",
        "rank": 35,
        "synonyms": "AUTS18",
        "ensembl": "ENSG00000100888",
        "ncbi": 57680,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "64.8/114/1.02/0.82",
        "missense": "202.2/207/0.96/0.89",
        "lof": "26.3/4/0.93/0.35",
        "selected": false
      },
      {
        "gene": "CNTNAP22",
        "rank": 36,
        "synonyms": "CASPR2",
        "ensembl": "ENSG00000174469",
        "ncbi": 26047,
        "clingenClassification": "Moderate",
        "moi": "AR",
        "hiScore": "1",
        "tsScore": "0",
        "synonymous": "73.2/12/0.83/0.16",
        "missense": "190.0/26/1.01/1.04",
        "lof": "12.9/9/0.82/0.46",
        "selected": false
      },
      {
        "gene": "KMT2A2",
        "rank": 37,
        "synonyms": "MLL1",
        "ensembl": "ENSG00000118058",
        "ncbi": 4297,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "47.7/187/0.96/0.22",
        "missense": "132.7/49/1.01/0.75",
        "lof": "22.6/9/0.94/0.42",
        "selected": false
      },
      {
        "gene": "KAT6A2",
        "rank": 38,
        "synonyms": "MYST3, MOZ",
        "ensembl": "ENSG00000125730",
        "ncbi": 7994,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "75.8/149/1.0/0.6",
        "missense": "112.4/99/0.83/1.12",
        "lof": "25.3/9/0.89/0.46",
        "selected": false
      },
      {
        "gene": "SETD22",
        "rank": 39,
        "synonyms": "HYPB, HIF-1",
        "ensembl": "ENSG00000181555",
        "ncbi": 29072,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "53.5/210/0.87/0.16",
        "missense": "208.6/105/0.85/1.09",
        "lof": "20.9/6/0.89/0.26",
        "selected": false
      },
      {
        "gene": "AUTS22",
        "rank": 40,
        "synonyms": "AUTS2",
        "ensembl": "ENSG00000158321",
        "ncbi": 26053,
        "clingenClassification": "Strong",
        "moi": "AD",
        "hiScore": "2",
        "tsScore": "0",
        "synonymous": "47.3/202/1.0/0.56",
        "missense": "114.4/140/0.94/0.58",
        "lof": "27.8/6/0.86/0.35",
        "selected": false
      },
      {
        "gene": "MECP23",
        "rank": 41,
        "synonyms": "MRX16, RTT",
        "ensembl": "ENSG00000169057",
        "ncbi": 4204,
        "clingenClassification": "Definitive",
        "moi": "XLD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "37.6/82/0.9/0.87",
        "missense": "162.1/130/0.91/0.81",
        "lof": "21.2/5/0.96/0.15",
        "selected": false
      },
      {
        "gene": "TXNIP3",
        "rank": 42,
        "synonyms": "VDUP1, HHCPA78",
        "ensembl": "ENSG0000011676",
        "ncbi": 10629,
        "clingenClassification": "Limited",
        "moi": "AD",
        "hiScore": "0",
        "tsScore": "0",
        "synonymous": "46.7/184/0.96/0.44",
        "missense": "106.4/292/0.95/0.56",
        "lof": "15.2/2/0.82/0.26",
        "selected": false
      },
      {
        "gene": "SHANK33",
        "rank": 43,
        "synonyms": "PROSAP2, PSAP2",
        "ensembl": "ENSG00000251322",
        "ncbi": 85360,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "58.0/95/1.07/0.94",
        "missense": "132.9/149/0.71/0.47",
        "lof": "17.9/3/0.93/0.21",
        "selected": false
      },
      {
        "gene": "RBFOX33",
        "rank": 44,
        "synonyms": "NEUN, HNRNP3",
        "ensembl": "ENSG00000167281",
        "ncbi": 14676,
        "clingenClassification": "Moderate",
        "moi": "AD",
        "hiScore": "2",
        "tsScore": "0",
        "synonymous": "67.0/187/0.85/0.82",
        "missense": "150.4/80/1.07/0.73",
        "lof": "23.5/7/0.86/0.49",
        "selected": false
      },
      {
        "gene": "MKI673",
        "rank": 45,
        "synonyms": "KIA, MIB-1",
        "ensembl": "ENSG00000148773",
        "ncbi": 4292,
        "clingenClassification": "Limited",
        "moi": "AD",
        "hiScore": "0",
        "tsScore": "1",
        "synonymous": "44.7/176/0.85/0.59",
        "missense": "169.9/86/0.76/1.07",
        "lof": "17.8/6/0.96/0.44",
        "selected": false
      },
      {
        "gene": "DCX3",
        "rank": 46,
        "synonyms": "DC, DBCN",
        "ensembl": "ENSG00000077279",
        "ncbi": 1646,
        "clingenClassification": "Definitive",
        "moi": "XLD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "68.1/168/0.8/0.79",
        "missense": "108.1/270/0.86/0.5",
        "lof": "17.4/4/1.0/0.2",
        "selected": false
      },
      {
        "gene": "ADNP3",
        "rank": 47,
        "synonyms": "ADNP1, MRX10",
        "ensembl": "ENSG00000101126",
        "ncbi": 23394,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "55.7/108/0.88/0.48",
        "missense": "129.6/263/1.18/0.6",
        "lof": "28.3/6/0.87/0.29",
        "selected": false
      },
      {
        "gene": "GRIN2B3",
        "rank": 48,
        "synonyms": "NR2B, MRD6",
        "ensembl": "ENSG00000166748",
        "ncbi": 2904,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "62.9/115/1.09/0.17",
        "missense": "123.9/58/0.85/0.61",
        "lof": "26.5/8/0.89/0.28",
        "selected": false
      },
      {
        "gene": "SYNGAP13",
        "rank": 49,
        "synonyms": "KIAA1938",
        "ensembl": "ENSG00000197283",
        "ncbi": 8831,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "40.0/14/1.07/0.52",
        "missense": "180.1/145/1.14/0.93",
        "lof": "24.6/4/0.97/0.45",
        "selected": false
      },
      {
        "gene": "SCN2A3",
        "rank": 50,
        "synonyms": "DEE11, NAC2",
        "ensembl": "ENSG00000136531",
        "ncbi": 6326,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "56.6/112/0.93/0.56",
        "missense": "159.9/124/0.8/0.85",
        "lof": "24.1/8/0.98/0.48",
        "selected": false
      },
      {
        "gene": "DYRK1A3",
        "rank": 51,
        "synonyms": "MNBH, MRD7",
        "ensembl": "ENSG00000157540",
        "ncbi": 1859,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "38.1/14/1.01/0.51",
        "missense": "213.9/325/0.79/0.61",
        "lof": "12.2/9/0.85/0.18",
        "selected": false
      },
      {
        "gene": "SATB23",
        "rank": 52,
        "synonyms": "GLSS, MIPHI",
        "ensembl": "ENSG00000119042",
        "ncbi": 23314,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "39.4/148/0.92/0.29",
        "missense": "118.7/296/1.19/0.82",
        "lof": "21.5/8/0.8/0.41",
        "selected": false
      },
      {
        "gene": "TBR13",
        "rank": 53,
        "synonyms": "AUTS13",
        "ensembl": "ENSG00000136535",
        "ncbi": 10716,
        "clingenClassification": "Strong",
        "moi": "AD",
        "hiScore": "2",
        "tsScore": "0",
        "synonymous": "54.0/205/0.89/0.16",
        "missense": "136.4/181/1.02/0.68",
        "lof": "25.2/6/0.86/0.16",
        "selected": false
      },
      {
        "gene": "PTEN3",
        "rank": 54,
        "synonyms": "MMAC1",
        "ensembl": "ENSG00000171862",
        "ncbi": 5728,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "1",
        "synonymous": "71.6/123/0.87/0.62",
        "missense": "216.5/134/0.72/0.64",
        "lof": "17.4/5/0.98/0.2",
        "selected": false
      },
      {
        "gene": "CHD83",
        "rank": 55,
        "synonyms": "AUTS18",
        "ensembl": "ENSG00000100888",
        "ncbi": 57680,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "40.8/181/0.99/0.34",
        "missense": "151.7/334/0.99/0.76",
        "lof": "18.8/4/0.9/0.47",
        "selected": false
      },
      {
        "gene": "CNTNAP23",
        "rank": 56,
        "synonyms": "CASPR2",
        "ensembl": "ENSG00000174469",
        "ncbi": 26047,
        "clingenClassification": "Moderate",
        "moi": "AR",
        "hiScore": "1",
        "tsScore": "0",
        "synonymous": "63.6/178/0.95/0.81",
        "missense": "195.0/225/0.72/0.86",
        "lof": "24.4/7/0.89/0.25",
        "selected": false
      },
      {
        "gene": "KMT2A3",
        "rank": 57,
        "synonyms": "MLL1",
        "ensembl": "ENSG00000118058",
        "ncbi": 4297,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "51.2/97/0.87/0.79",
        "missense": "143.1/54/1.15/0.59",
        "lof": "18.3/0/0.94/0.38",
        "selected": false
      },
      {
        "gene": "KAT6A3",
        "rank": 58,
        "synonyms": "MYST3, MOZ",
        "ensembl": "ENSG00000125730",
        "ncbi": 7994,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "37.6/219/0.88/0.81",
        "missense": "205.4/183/0.87/0.71",
        "lof": "23.8/2/0.88/0.21",
        "selected": false
      },
      {
        "gene": "SETD23",
        "rank": 59,
        "synonyms": "HYPB, HIF-1",
        "ensembl": "ENSG00000181555",
        "ncbi": 29072,
        "clingenClassification": "Definitive",
        "moi": "AD",
        "hiScore": "3",
        "tsScore": "0",
        "synonymous": "47.3/149/0.89/0.78",
        "missense": "118.2/271/0.88/0.91",
        "lof": "23.4/7/0.97/0.33",
        "selected": false
      },
      {
        "gene": "AUTS23",
        "rank": 60,
        "synonyms": "AUTS2",
        "ensembl": "ENSG00000158321",
        "ncbi": 26053,
        "clingenClassification": "Strong",
        "moi": "AD",
        "hiScore": "2",
        "tsScore": "0",
        "synonymous": "65.7/140/0.8/0.13",
        "missense": "134.4/59/0.94/1.03",
        "lof": "17.0/4/0.83/0.48",
        "selected": false
      }
    ]
  },
  "variants": {
    "totalCount": 342,
    "pageSize": 20,
    "rows": [
      {
        "variant": "2-104856069-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104856069-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104856069-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104856069-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104856069-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104856254-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104856291-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104856328-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104856365-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104856402-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104856439-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104856476-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104856513-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104856550-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104856587-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104856624-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104856661-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104856698-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104856735-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104856772-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104856809-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104856846-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104856883-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104856920-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104856957-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104856994-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104857031-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104857068-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104857105-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104857142-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104857179-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104857216-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104857253-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104857290-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104857327-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104857364-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104857401-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104857438-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104857475-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104857512-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104857549-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104857586-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104857623-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104857660-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104857697-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104857734-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104857771-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104857808-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104857845-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104857882-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104857919-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104857956-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104857993-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104858030-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104858067-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104858104-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104858141-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104858178-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104858215-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104858252-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104858289-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104858326-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104858363-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104858400-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104858437-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104858474-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104858511-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104858548-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104858585-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104858622-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104858659-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104858696-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104858733-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104858770-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104858807-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104858844-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104858881-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104858918-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104858955-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104858992-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104859029-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104859066-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104859103-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104859140-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104859177-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104859214-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104859251-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104859288-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104859325-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104859362-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104859399-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104859436-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104859473-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104859510-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104859547-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104859584-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104859621-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104859658-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104859695-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104859732-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104859769-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104859806-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104859843-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104859880-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104859917-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104859954-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104859991-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104860028-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104860065-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104860102-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104860139-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104860176-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104860213-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104860250-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104860287-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104860324-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104860361-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104860398-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104860435-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104860472-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104860509-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104860546-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104860583-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104860620-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104860657-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104860694-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104860731-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104860768-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104860805-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104860842-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104860879-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104860916-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104860953-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104860990-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104861027-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104861064-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104861101-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104861138-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104861175-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104861212-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104861249-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104861286-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104861323-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104861360-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104861397-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104861434-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104861471-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104861508-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104861545-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104861582-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104861619-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104861656-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104861693-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104861730-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104861767-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104861804-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104861841-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104861878-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104861915-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104861952-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104861989-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104862026-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104862063-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104862100-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104862137-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104862174-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104862211-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104862248-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104862285-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104862322-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104862359-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104862396-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104862433-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104862470-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104862507-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104862544-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104862581-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104862618-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104862655-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104862692-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104862729-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104862766-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104862803-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104862840-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104862877-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104862914-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104862951-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104862988-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104863025-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104863062-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104863099-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104863136-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104863173-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104863210-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104863247-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104863284-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104863321-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104863358-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104863395-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104863432-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104863469-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104863506-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104863543-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104863580-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104863617-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104863654-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104863691-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104863728-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104863765-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104863802-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104863839-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104863876-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104863913-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104863950-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104863987-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104864024-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104864061-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104864098-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104864135-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104864172-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104864209-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104864246-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104864283-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104864320-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104864357-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104864394-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104864431-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104864468-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104864505-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104864542-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104864579-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104864616-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104864653-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104864690-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104864727-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104864764-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104864801-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104864838-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104864875-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104864912-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104864949-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104864986-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104865023-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104865060-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104865097-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104865134-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104865171-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104865208-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104865245-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104865282-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104865319-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104865356-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104865393-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104865430-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104865467-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104865504-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104865541-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104865578-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104865615-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104865652-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104865689-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104865726-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104865763-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104865800-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104865837-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104865874-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104865911-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104865948-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104865985-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104866022-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104866059-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104866096-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104866133-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104866170-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104866207-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104866244-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104866281-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104866318-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104866355-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104866392-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104866429-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104866466-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104866503-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104866540-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104866577-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104866614-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104866651-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104866688-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104866725-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104866762-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104866799-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104866836-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104866873-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104866910-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104866947-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104866984-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104867021-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104867058-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104867095-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104867132-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104867169-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104867206-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104867243-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104867280-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104867317-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104867354-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104867391-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104867428-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104867465-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104867502-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104867539-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104867576-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104867613-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104867650-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "17-104867687-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "11-104867724-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104867761-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104867798-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104867835-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "7-104867872-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "17-104867909-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104867946-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104867983-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104868020-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "2-104868057-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "7-104868094-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104868131-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104868168-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "X-104868205-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "16-104868242-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "2-104868279-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104868316-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104868353-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "11-104868390-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "X-104868427-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "16-104868464-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "2-104868501-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      },
      {
        "variant": "7-104868538-G-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "intron_variant",
        "clinvar": "B",
        "gnomad": "0.00002285"
      },
      {
        "variant": "17-104868575-T-C",
        "transcript": "NM_004992.4",
        "hgvsc": "ENST00000269571.7:c.892+5G>A",
        "effect": "splice_region_variant",
        "clinvar": "VUS",
        "gnomad": "0.00001312"
      },
      {
        "variant": "11-104868612-A-G",
        "transcript": "NM_000546.6",
        "hgvsc": "ENST00000269305.9:c.637C>T",
        "effect": "stop_gained",
        "clinvar": "P/LP",
        "gnomad": "0.00000151"
      },
      {
        "variant": "X-104868649-T-TG",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "frameshift_variant",
        "clinvar": "Unknown",
        "gnomad": "0.00002285"
      },
      {
        "variant": "16-104868686-C-A",
        "transcript": "NM_001110792.2",
        "hgvsc": "ENST00000361360.4:c.565dup",
        "effect": "missense",
        "clinvar": "B/LB",
        "gnomad": "0.00002285"
      }
    ]
  },
  "phenotypes": {
    "itemsVisible": 4,
    "slides": [
      {
        "id": "head-neck",
        "label": "Head and neck",
        "icon": "assets/organs/head-and-neck.svg",
        "active": true,
        "omimPhenotypes": [
          { "phenotype": "Craniosynostosis", "inheritance": "AD", "match": "38%" },
          { "phenotype": "Treacher Collins syndrome", "inheritance": "AD", "match": "33%" },
          { "phenotype": "Branchio-oto-renal syndrome", "inheritance": "AD", "match": "28%" },
          { "phenotype": "Pierre Robin sequence", "inheritance": "AD", "match": "24%" },
          { "phenotype": "Apert syndrome", "inheritance": "AD", "match": "22%" },
          { "phenotype": "Crouzon syndrome", "inheritance": "AD", "match": "19%" },
          { "phenotype": "Pfeiffer syndrome", "inheritance": "AD", "match": "17%" },
          { "phenotype": "Saethre-Chotzen syndrome", "inheritance": "AD", "match": "15%" },
          { "phenotype": "Muenke syndrome", "inheritance": "AD", "match": "12%" }
        ],
        "hpoTerms": [
          { "code": "HP:0000238", "name": "Hydrocephalus" },
          { "code": "HP:0000347", "name": "Micrognathia" },
          { "code": "HP:0000365", "name": "Hearing impairment" },
          { "code": "HP:0000252", "name": "Microcephaly" },
          { "code": "HP:0000316", "name": "Hypertelorism" },
          { "code": "HP:0000431", "name": "Wide nasal bridge" },
          { "code": "HP:0000278", "name": "Retrognathia" },
          { "code": "HP:0011329", "name": "Abnormality of cranial sutures" },
          { "code": "HP:0000384", "name": "Preauricular skin tag" },
          { "code": "HP:0000405", "name": "Conductive hearing impairment" }
        ]
      },
      {
        "id": "neurologic",
        "label": "Nervous system",
        "icon": "assets/organs/nervous-system.svg",
        "omimPhenotypes": [
          { "phenotype": "Tay-Sachs disease", "inheritance": "AR", "match": "42%" },
          { "phenotype": "Hemophilia A", "inheritance": "XLR", "match": "40%" },
          { "phenotype": "Duchenne dystrophy", "inheritance": "XLR", "match": "38%" },
          { "phenotype": "Cystic Fibrosis", "inheritance": "AR", "match": "35%" },
          { "phenotype": "Rett syndrome", "inheritance": "XLD", "match": "32%" },
          { "phenotype": "Angelman syndrome", "inheritance": "AD", "match": "28%" },
          { "phenotype": "Huntington disease", "inheritance": "AD", "match": "25%" },
          { "phenotype": "Charcot-Marie-Tooth type 1A", "inheritance": "AD", "match": "22%" },
          { "phenotype": "Tuberous sclerosis", "inheritance": "AD", "match": "18%" }
        ],
        "hpoTerms": [
          { "code": "HP:0001250", "name": "Seizures" },
          { "code": "HP:0001263", "name": "Global developmental delay" },
          { "code": "HP:0002488", "name": "Acute leukemia" },
          { "code": "HP:0001249", "name": "Intellectual disability" },
          { "code": "HP:0002072", "name": "Chorea" },
          { "code": "HP:0001332", "name": "Dystonia" },
          { "code": "HP:0000729", "name": "Autistic behavior" },
          { "code": "HP:0001257", "name": "Spasticity" },
          { "code": "HP:0002120", "name": "Cerebral cortical atrophy" },
          { "code": "HP:0001290", "name": "Generalized hypotonia" }
        ]
      },
      {
        "id": "endocrine",
        "label": "Endocrine system",
        "icon": "assets/organs/endocrine-system.svg",
        "omimPhenotypes": [
          { "phenotype": "Congenital adrenal hyperplasia", "inheritance": "AR", "match": "36%" },
          { "phenotype": "Thyroid dyshormonogenesis", "inheritance": "AR", "match": "31%" },
          { "phenotype": "Hyperinsulinism familial", "inheritance": "AR", "match": "27%" },
          { "phenotype": "Growth hormone deficiency", "inheritance": "AR", "match": "23%" },
          { "phenotype": "Multiple endocrine neoplasia type 1", "inheritance": "AD", "match": "20%" },
          { "phenotype": "Kallmann syndrome", "inheritance": "XLR", "match": "18%" },
          { "phenotype": "Pseudohypoparathyroidism", "inheritance": "AD", "match": "15%" },
          { "phenotype": "Adrenal insufficiency", "inheritance": "AR", "match": "13%" }
        ],
        "hpoTerms": [
          { "code": "HP:0000821", "name": "Hypothyroidism" },
          { "code": "HP:0000845", "name": "Growth hormone excess" },
          { "code": "HP:0000829", "name": "Hypoparathyroidism" },
          { "code": "HP:0000819", "name": "Diabetes mellitus" },
          { "code": "HP:0000853", "name": "Goiter" },
          { "code": "HP:0000858", "name": "Menstrual irregularities" },
          { "code": "HP:0000824", "name": "Decreased response to GH stimulation" },
          { "code": "HP:0004322", "name": "Short stature" },
          { "code": "HP:0000840", "name": "Adrenogenital syndrome" }
        ]
      },
      {
        "id": "integument",
        "label": "Integument",
        "icon": "assets/organs/integument.svg",
        "omimPhenotypes": [
          { "phenotype": "Epidermolysis bullosa", "inheritance": "AR", "match": "35%" },
          { "phenotype": "Ichthyosis vulgaris", "inheritance": "AD", "match": "30%" },
          { "phenotype": "Ectodermal dysplasia", "inheritance": "XLR", "match": "26%" },
          { "phenotype": "Albinism oculocutaneous", "inheritance": "AR", "match": "22%" },
          { "phenotype": "Psoriasis susceptibility", "inheritance": "AD", "match": "19%" },
          { "phenotype": "Xeroderma pigmentosum", "inheritance": "AR", "match": "16%" },
          { "phenotype": "Incontinentia pigmenti", "inheritance": "XLD", "match": "14%" },
          { "phenotype": "Darier disease", "inheritance": "AD", "match": "11%" }
        ],
        "hpoTerms": [
          { "code": "HP:0000958", "name": "Dry skin" },
          { "code": "HP:0001030", "name": "Fragile skin" },
          { "code": "HP:0001010", "name": "Hypopigmentation" },
          { "code": "HP:0008066", "name": "Abnormal blistering" },
          { "code": "HP:0000962", "name": "Hyperkeratosis" },
          { "code": "HP:0001000", "name": "Abnormality of skin pigmentation" },
          { "code": "HP:0001056", "name": "Milia" },
          { "code": "HP:0200034", "name": "Papule" },
          { "code": "HP:0000982", "name": "Palmoplantar keratoderma" }
        ]
      },
      {
        "id": "limb",
        "label": "Limb and appendage",
        "icon": "assets/organs/limb-and-appendage.svg",
        "omimPhenotypes": [
          { "phenotype": "Polydactyly preaxial", "inheritance": "AD", "match": "33%" },
          { "phenotype": "Brachydactyly type A1", "inheritance": "AD", "match": "29%" },
          { "phenotype": "Ectrodactyly", "inheritance": "AD", "match": "25%" },
          { "phenotype": "Acheiropody", "inheritance": "AR", "match": "20%" },
          { "phenotype": "Holt-Oram syndrome", "inheritance": "AD", "match": "18%" },
          { "phenotype": "Nail-patella syndrome", "inheritance": "AD", "match": "15%" },
          { "phenotype": "Thrombocytopenia absent radius", "inheritance": "AR", "match": "13%" },
          { "phenotype": "Fanconi anemia", "inheritance": "AR", "match": "10%" },
          { "phenotype": "Cornelia de Lange syndrome", "inheritance": "AD", "match": "8%" }
        ],
        "hpoTerms": [
          { "code": "HP:0001159", "name": "Syndactyly" },
          { "code": "HP:0100258", "name": "Preaxial polydactyly" },
          { "code": "HP:0001171", "name": "Split hand" },
          { "code": "HP:0009778", "name": "Short thumb" },
          { "code": "HP:0009381", "name": "Short finger" },
          { "code": "HP:0001191", "name": "Abnormal carpal morphology" },
          { "code": "HP:0002984", "name": "Hypoplasia of the radius" },
          { "code": "HP:0006101", "name": "Finger syndactyly" },
          { "code": "HP:0001770", "name": "Toe syndactyly" },
          { "code": "HP:0004691", "name": "2-3 toe syndactyly" }
        ]
      },
      {
        "id": "skeletal",
        "label": "Skeletal and connective tissue",
        "icon": "assets/organs/skeletal-connective-tissue.svg",
        "omimPhenotypes": [
          { "phenotype": "Osteogenesis imperfecta", "inheritance": "AD", "match": "37%" },
          { "phenotype": "Marfan syndrome", "inheritance": "AD", "match": "32%" },
          { "phenotype": "Ehlers-Danlos syndrome", "inheritance": "AD", "match": "28%" },
          { "phenotype": "Achondroplasia", "inheritance": "AD", "match": "25%" },
          { "phenotype": "Stickler syndrome", "inheritance": "AD", "match": "21%" },
          { "phenotype": "Hypophosphatasia", "inheritance": "AR", "match": "18%" },
          { "phenotype": "Fibrodysplasia ossificans", "inheritance": "AD", "match": "15%" },
          { "phenotype": "Cleidocranial dysplasia", "inheritance": "AD", "match": "12%" }
        ],
        "hpoTerms": [
          { "code": "HP:0001382", "name": "Joint hypermobility" },
          { "code": "HP:0000939", "name": "Osteoporosis" },
          { "code": "HP:0002650", "name": "Scoliosis" },
          { "code": "HP:0004322", "name": "Short stature" },
          { "code": "HP:0002515", "name": "Waddling gait" },
          { "code": "HP:0003019", "name": "Abnormality of the wrist" },
          { "code": "HP:0001376", "name": "Limitation of joint mobility" },
          { "code": "HP:0000944", "name": "Abnormality of the metaphysis" },
          { "code": "HP:0002758", "name": "Osteoarthritis" }
        ]
      },
      {
        "id": "muscular",
        "label": "Muscular system",
        "icon": "assets/organs/muscular-system.svg",
        "omimPhenotypes": [
          { "phenotype": "Duchenne muscular dystrophy", "inheritance": "XLR", "match": "40%" },
          { "phenotype": "Myotonic dystrophy type 1", "inheritance": "AD", "match": "35%" },
          { "phenotype": "Spinal muscular atrophy", "inheritance": "AR", "match": "31%" },
          { "phenotype": "Congenital myopathy", "inheritance": "AR", "match": "26%" },
          { "phenotype": "Becker muscular dystrophy", "inheritance": "XLR", "match": "23%" },
          { "phenotype": "Limb-girdle muscular dystrophy", "inheritance": "AR", "match": "20%" },
          { "phenotype": "Facioscapulohumeral dystrophy", "inheritance": "AD", "match": "17%" },
          { "phenotype": "Emery-Dreifuss muscular dystrophy", "inheritance": "XLR", "match": "14%" },
          { "phenotype": "Myasthenia gravis congenital", "inheritance": "AR", "match": "11%" }
        ],
        "hpoTerms": [
          { "code": "HP:0001324", "name": "Muscle weakness" },
          { "code": "HP:0003202", "name": "Muscle atrophy" },
          { "code": "HP:0003458", "name": "Elevated CK" },
          { "code": "HP:0001252", "name": "Hypotonia" },
          { "code": "HP:0003325", "name": "Limb-girdle muscle weakness" },
          { "code": "HP:0003701", "name": "Proximal muscle weakness" },
          { "code": "HP:0003560", "name": "Muscular dystrophy" },
          { "code": "HP:0001371", "name": "Flexion contracture" },
          { "code": "HP:0003307", "name": "Hyperlordosis" },
          { "code": "HP:0002093", "name": "Respiratory insufficiency" }
        ]
      },
      {
        "id": "cardiac",
        "label": "Cardiovascular system",
        "icon": "assets/organs/cardiovascular-system.svg",
        "omimPhenotypes": [
          { "phenotype": "Dilated cardiomyopathy", "inheritance": "AD", "match": "44%" },
          { "phenotype": "Long QT syndrome", "inheritance": "AD", "match": "39%" },
          { "phenotype": "Arrhythmogenic cardiomyopathy", "inheritance": "AD", "match": "35%" },
          { "phenotype": "Brugada syndrome", "inheritance": "AD", "match": "31%" },
          { "phenotype": "Hypertrophic cardiomyopathy", "inheritance": "AD", "match": "28%" },
          { "phenotype": "Catecholaminergic polymorphic VT", "inheritance": "AD", "match": "24%" },
          { "phenotype": "Familial atrial fibrillation", "inheritance": "AD", "match": "20%" },
          { "phenotype": "Left ventricular noncompaction", "inheritance": "AD", "match": "17%" }
        ],
        "hpoTerms": [
          { "code": "HP:0001644", "name": "Dilated cardiomyopathy" },
          { "code": "HP:0001711", "name": "Ventricular arrhythmia" },
          { "code": "HP:0011675", "name": "Long QTc" },
          { "code": "HP:0001638", "name": "Cardiomyopathy" },
          { "code": "HP:0001712", "name": "Left ventricular hypertrophy" },
          { "code": "HP:0001645", "name": "Sudden cardiac death" },
          { "code": "HP:0004308", "name": "Ventricular tachycardia" },
          { "code": "HP:0005110", "name": "Atrial fibrillation" },
          { "code": "HP:0001635", "name": "Congestive heart failure" }
        ]
      },
      {
        "id": "hematologic",
        "label": "Blood and immune system",
        "icon": "assets/organs/blood-immune-system.svg",
        "omimPhenotypes": [
          { "phenotype": "Diamond-Blackfan anemia", "inheritance": "AD", "match": "34%" },
          { "phenotype": "Congenital neutropenia", "inheritance": "AD", "match": "29%" },
          { "phenotype": "Thrombocytopenia 2", "inheritance": "AD", "match": "25%" },
          { "phenotype": "Bone marrow failure", "inheritance": "AD", "match": "23%" },
          { "phenotype": "Sickle cell disease", "inheritance": "AR", "match": "20%" },
          { "phenotype": "Hemophilia B", "inheritance": "XLR", "match": "17%" },
          { "phenotype": "Fanconi anemia complementation", "inheritance": "AR", "match": "14%" },
          { "phenotype": "Von Willebrand disease type 1", "inheritance": "AD", "match": "12%" },
          { "phenotype": "Hereditary spherocytosis", "inheritance": "AD", "match": "9%" }
        ],
        "hpoTerms": [
          { "code": "HP:0001871", "name": "Thrombocytopenia" },
          { "code": "HP:0001880", "name": "Neutropenia" },
          { "code": "HP:0001903", "name": "Anemia" },
          { "code": "HP:0005528", "name": "Bone marrow hypocellularity" },
          { "code": "HP:0001972", "name": "Macrocytic anemia" },
          { "code": "HP:0004444", "name": "Spherocytosis" },
          { "code": "HP:0001873", "name": "Thrombocytopenia" },
          { "code": "HP:0001892", "name": "Abnormal bleeding" },
          { "code": "HP:0002719", "name": "Recurrent infections" }
        ]
      },
      {
        "id": "pulmonary",
        "label": "Respiratory system",
        "icon": "assets/organs/respiratory-system.svg",
        "omimPhenotypes": [
          { "phenotype": "Primary ciliary dyskinesia", "inheritance": "AR", "match": "37%" },
          { "phenotype": "Childhood interstitial lung disease", "inheritance": "AD", "match": "34%" },
          { "phenotype": "Pulmonary fibrosis susceptibility", "inheritance": "AD", "match": "29%" },
          { "phenotype": "Surfactant metabolism dysfunction", "inheritance": "AR", "match": "27%" },
          { "phenotype": "Alpha-1-antitrypsin deficiency", "inheritance": "AR", "match": "24%" },
          { "phenotype": "Cystic fibrosis lung disease", "inheritance": "AR", "match": "21%" },
          { "phenotype": "Pulmonary alveolar proteinosis", "inheritance": "AR", "match": "18%" },
          { "phenotype": "Hereditary hemorrhagic telangiectasia", "inheritance": "AD", "match": "15%" }
        ],
        "hpoTerms": [
          { "code": "HP:0002205", "name": "Recurrent respiratory infections" },
          { "code": "HP:0002094", "name": "Dyspnea" },
          { "code": "HP:0002783", "name": "Bronchiectasis" },
          { "code": "HP:0002787", "name": "Pulmonary fibrosis" },
          { "code": "HP:0002835", "name": "Aspiration" },
          { "code": "HP:0002795", "name": "Impaired gas exchange" },
          { "code": "HP:0002107", "name": "Pneumothorax" },
          { "code": "HP:0030828", "name": "Wheezing" },
          { "code": "HP:0012735", "name": "Cough" }
        ]
      },
      {
        "id": "digestive",
        "label": "Digestive system",
        "icon": "assets/organs/digestive-system.svg",
        "omimPhenotypes": [
          { "phenotype": "Methylmalonic acidemia", "inheritance": "AR", "match": "36%" },
          { "phenotype": "Glycogen storage disease", "inheritance": "AR", "match": "33%" },
          { "phenotype": "Mitochondrial disorder", "inheritance": "AR", "match": "29%" },
          { "phenotype": "Urea cycle defect", "inheritance": "AR", "match": "24%" },
          { "phenotype": "Galactosemia", "inheritance": "AR", "match": "21%" },
          { "phenotype": "Wilson disease", "inheritance": "AR", "match": "18%" },
          { "phenotype": "Hereditary fructose intolerance", "inheritance": "AR", "match": "15%" },
          { "phenotype": "Maple syrup urine disease", "inheritance": "AR", "match": "12%" },
          { "phenotype": "Phenylketonuria", "inheritance": "AR", "match": "10%" }
        ],
        "hpoTerms": [
          { "code": "HP:0001943", "name": "Metabolic acidosis" },
          { "code": "HP:0002013", "name": "Vomiting" },
          { "code": "HP:0002240", "name": "Hepatomegaly" },
          { "code": "HP:0002014", "name": "Diarrhea" },
          { "code": "HP:0001508", "name": "Failure to thrive" },
          { "code": "HP:0001254", "name": "Lethargy" },
          { "code": "HP:0003256", "name": "Abnormality of ammonia metabolism" },
          { "code": "HP:0001942", "name": "Metabolic alkalosis" },
          { "code": "HP:0003128", "name": "Lactic acidosis" },
          { "code": "HP:0001399", "name": "Hepatic failure" }
        ]
      },
      {
        "id": "genitourinary",
        "label": "Genitourinary system",
        "icon": "assets/organs/genitourinary-system.svg",
        "omimPhenotypes": [
          { "phenotype": "Polycystic kidney disease", "inheritance": "AD", "match": "35%" },
          { "phenotype": "Nephrotic syndrome", "inheritance": "AR", "match": "30%" },
          { "phenotype": "Renal tubular acidosis", "inheritance": "AR", "match": "26%" },
          { "phenotype": "Alport syndrome", "inheritance": "XLD", "match": "22%" },
          { "phenotype": "Bartter syndrome", "inheritance": "AR", "match": "19%" },
          { "phenotype": "Cystinosis", "inheritance": "AR", "match": "16%" },
          { "phenotype": "Autosomal recessive PKD", "inheritance": "AR", "match": "13%" },
          { "phenotype": "Nephrogenic diabetes insipidus", "inheritance": "XLR", "match": "10%" }
        ],
        "hpoTerms": [
          { "code": "HP:0000083", "name": "Renal insufficiency" },
          { "code": "HP:0000093", "name": "Proteinuria" },
          { "code": "HP:0000107", "name": "Renal cysts" },
          { "code": "HP:0000104", "name": "Renal agenesis" },
          { "code": "HP:0000112", "name": "Nephropathy" },
          { "code": "HP:0000790", "name": "Hematuria" },
          { "code": "HP:0000822", "name": "Hypertension" },
          { "code": "HP:0003774", "name": "Stage 5 chronic kidney disease" },
          { "code": "HP:0012622", "name": "Chronic kidney disease" }
        ]
      }
    ],
    "hpoLogo": "assets/hpo-logo.png"
  },
  "family": {
    "default": {
      "members": [
        {
          "id": "proband",
          "displayName": "Proband (Patient)",
          "sampleId": "PR_9921",
          "icon": "proband",
          "badge": {
            "text": "De Novo",
            "tone": "rose"
          },
          "gt": "0/1",
          "vaf": "0.48",
          "cov": "112x",
          "qual": "99",
          "featured": true
        },
        {
          "id": "paternal",
          "displayName": "Paternal (Father)",
          "sampleId": "FA_9922",
          "icon": "paternal",
          "badge": {
            "text": "Reference",
            "tone": "slate"
          },
          "gt": "0/0",
          "vaf": "0.00",
          "cov": "98x",
          "qual": "99"
        },
        {
          "id": "maternal",
          "displayName": "Maternal (Mother)",
          "sampleId": "MO_9923",
          "icon": "maternal",
          "badge": {
            "text": "Reference",
            "tone": "slate"
          },
          "gt": "0/0",
          "vaf": "0.00",
          "cov": "124x",
          "qual": "100"
        }
      ]
    },
    "variants": {
      "2-104856069-T-TG": {
        "members": [
          {
            "id": "proband",
            "displayName": "Proband (Patient)",
            "sampleId": "PR_9921",
            "icon": "proband",
            "badge": {
              "text": "De Novo",
              "tone": "rose"
            },
            "gt": "0/1",
            "vaf": "0.48",
            "cov": "112x",
            "qual": "99",
            "featured": true
          },
          {
            "id": "paternal",
            "displayName": "Paternal (Father)",
            "sampleId": "FA_9922",
            "icon": "paternal",
            "badge": {
              "text": "Reference",
              "tone": "slate"
            },
            "gt": "0/0",
            "vaf": "0.00",
            "cov": "98x",
            "qual": "99"
          },
          {
            "id": "maternal",
            "displayName": "Maternal (Mother)",
            "sampleId": "MO_9923",
            "icon": "maternal",
            "badge": {
              "text": "Reference",
              "tone": "slate"
            },
            "gt": "0/0",
            "vaf": "0.00",
            "cov": "124x",
            "qual": "100"
          }
        ]
      },
      "16-104856254-T-TG": {
        "members": [
          {
            "id": "proband",
            "displayName": "Proband (Patient)",
            "sampleId": "PR_9921",
            "icon": "proband",
            "badge": {
              "text": "Paternal",
              "tone": "indigo"
            },
            "gt": "0/1",
            "vaf": "0.51",
            "cov": "109x",
            "qual": "98",
            "featured": true
          },
          {
            "id": "paternal",
            "displayName": "Paternal (Father)",
            "sampleId": "FA_9922",
            "icon": "paternal",
            "badge": {
              "text": "Carrier",
              "tone": "indigo"
            },
            "gt": "0/1",
            "vaf": "0.49",
            "cov": "101x",
            "qual": "99"
          },
          {
            "id": "maternal",
            "displayName": "Maternal (Mother)",
            "sampleId": "MO_9923",
            "icon": "maternal",
            "badge": {
              "text": "Reference",
              "tone": "slate"
            },
            "gt": "0/0",
            "vaf": "0.00",
            "cov": "127x",
            "qual": "99"
          }
        ]
      },
      "2-104856291-C-A": {
        "members": [
          {
            "id": "proband",
            "displayName": "Proband (Patient)",
            "sampleId": "PR_9921",
            "icon": "proband",
            "badge": {
              "text": "Maternal",
              "tone": "blue"
            },
            "gt": "0/1",
            "vaf": "0.44",
            "cov": "117x",
            "qual": "97",
            "featured": true
          },
          {
            "id": "paternal",
            "displayName": "Paternal (Father)",
            "sampleId": "FA_9922",
            "icon": "paternal",
            "badge": {
              "text": "Reference",
              "tone": "slate"
            },
            "gt": "0/0",
            "vaf": "0.00",
            "cov": "103x",
            "qual": "98"
          },
          {
            "id": "maternal",
            "displayName": "Maternal (Mother)",
            "sampleId": "MO_9923",
            "icon": "maternal",
            "badge": {
              "text": "Carrier",
              "tone": "blue"
            },
            "gt": "0/1",
            "vaf": "0.47",
            "cov": "121x",
            "qual": "100"
          }
        ]
      },
      "7-104856328-G-A": {
        "members": [
          {
            "id": "proband",
            "displayName": "Proband (Patient)",
            "sampleId": "PR_9921",
            "icon": "proband",
            "badge": {
              "text": "Recessive",
              "tone": "amber"
            },
            "gt": "1/1",
            "vaf": "0.96",
            "cov": "118x",
            "qual": "99",
            "featured": true
          },
          {
            "id": "paternal",
            "displayName": "Paternal (Father)",
            "sampleId": "FA_9922",
            "icon": "paternal",
            "badge": {
              "text": "Carrier",
              "tone": "amber"
            },
            "gt": "0/1",
            "vaf": "0.50",
            "cov": "104x",
            "qual": "98"
          },
          {
            "id": "maternal",
            "displayName": "Maternal (Mother)",
            "sampleId": "MO_9923",
            "icon": "maternal",
            "badge": {
              "text": "Carrier",
              "tone": "amber"
            },
            "gt": "0/1",
            "vaf": "0.52",
            "cov": "126x",
            "qual": "100"
          }
        ]
      },
      "17-104856365-T-C": {
        "members": [
          {
            "id": "proband",
            "displayName": "Proband (Patient)",
            "sampleId": "PR_9921",
            "icon": "proband",
            "badge": {
              "text": "Observed",
              "tone": "indigo"
            },
            "gt": "0/1",
            "vaf": "0.36",
            "cov": "106x",
            "qual": "95",
            "featured": true
          },
          {
            "id": "paternal",
            "displayName": "Paternal (Father)",
            "sampleId": "FA_9922",
            "icon": "paternal",
            "badge": {
              "text": "Reference",
              "tone": "slate"
            },
            "gt": "0/0",
            "vaf": "0.00",
            "cov": "92x",
            "qual": "97"
          },
          {
            "id": "maternal",
            "displayName": "Maternal (Mother)",
            "sampleId": "MO_9923",
            "icon": "maternal",
            "badge": {
              "text": "Low level",
              "tone": "blue"
            },
            "gt": "0/1",
            "vaf": "0.12",
            "cov": "131x",
            "qual": "98"
          }
        ]
      }
    }
  },
  "cohort": {
    "default": {
      "cohortSize": 612,
      "hitCount": 0,
      "frequency": "0.00%",
      "matchingSampleIds": []
    },
    "variants": {
      "2-104856069-T-TG": {
        "cohortSize": 612,
        "hitCount": 3,
        "frequency": "0.50%",
        "matchingSampleIds": [
          "COH_0012",
          "COH_0045",
          "COH_0091"
        ]
      },
      "16-104856254-T-TG": {
        "cohortSize": 612,
        "hitCount": 2,
        "frequency": "0.32%",
        "matchingSampleIds": [
          "COH_0178",
          "COH_1022"
        ]
      },
      "2-104856291-C-A": {
        "cohortSize": 612,
        "hitCount": 1,
        "frequency": "0.11%",
        "matchingSampleIds": [
          "COH_0874"
        ]
      },
      "7-104856328-G-A": {
        "cohortSize": 612,
        "hitCount": 0,
        "frequency": "0.00%",
        "matchingSampleIds": []
      },
      "17-104856365-T-C": {
        "cohortSize": 612,
        "hitCount": 4,
        "frequency": "0.67%",
        "matchingSampleIds": [
          "COH_0008",
          "COH_0341",
          "COH_0775",
          "COH_1211"
        ]
      }
    }
  },
  "predictions": {
    "tabs": [
      {
        "id": "inheritance",
        "label": "INHERITANCE"
      },
      {
        "id": "prediction",
        "label": "PREDICTION",
        "metrics": [
          {
            "label": "CADD PHRED",
            "value": "27.4",
            "tone": "danger"
          },
          {
            "label": "REVEL",
            "value": "0.2250",
            "tone": "default"
          },
          {
            "label": "MUTATIONTASTER",
            "value": "DISEASE CAUSING",
            "tone": "danger"
          },
          {
            "label": "MUTATIONASSESSOR",
            "value": "Low (Non-Functional)",
            "tone": "default"
          },
          {
            "label": "DANN",
            "value": "0.9940",
            "tone": "danger"
          },
          {
            "label": "ALPHAMISSENSE",
            "value": "Likely Pathogenic",
            "tone": "danger"
          },
          {
            "label": "GERP++",
            "value": "5.28",
            "tone": "default",
            "group": "Conservation Scores"
          },
          {
            "label": "PHYLOP",
            "value": "2.841",
            "tone": "default",
            "group": "Conservation Scores"
          }
        ],
        "detailTitle": "Variant interpretation summary",
        "detailText": "This mock detail panel is intentionally minimal to preserve the open whitespace and card balance of the reference design. Swap in your own prediction narratives, ACMG notes, or embedded widgets here later."
      },
      {
        "id": "acmg",
        "label": "ACMG",
        "headline": "ACMG evidence",
        "items": [
          "PVS1: predicted null variant in a gene where loss of function is a known disease mechanism.",
          "PS2: de novo occurrence in the proband with no evidence of parental transmission.",
          "PM2: absent or extremely rare in population datasets.",
          "PP3: multiple computational tools support a deleterious effect."
        ]
      },
      {
        "id": "igv",
        "label": "IGV",
        "headline": "Read-level review",
        "items": [
          "Aligned read pileup placeholder",
          "Split-read support placeholder",
          "Coverage track placeholder",
          "Mapping quality summary placeholder"
        ]
      },
      {
        "id": "protein",
        "label": "PROTEIN",
        "headline": "Protein impact",
        "items": [
          "Protein domain disruption placeholder",
          "Conservation track placeholder",
          "Structural effect placeholder",
          "Motif interruption placeholder"
        ]
      },
      {
        "id": "evaluation",
        "label": "EVALUATION",
        "headline": "Case evaluation",
        "items": [
          "Phenotype concordance review placeholder",
          "Segregation summary placeholder",
          "Gene-disease validity placeholder",
          "Recommendation notes placeholder"
        ]
      }
    ]
  }
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
  proteinModuleState: { status: 'idle' },
  proteinViewer: null,
  proteinViewerModelUrl: null,
  proteinViewerRequestId: 0,
  proteinRenderTimer: null,
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
  igv: 'data/igv.json',
  proteinAnnotations: 'data/protein_annotations.json'
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
  wireProteinModuleControls();
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
  queueProteinModuleRender();
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
      queueProteinModuleRender();
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
      queueProteinModuleRender();
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
    queueProteinModuleRender();
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

function getProteinAnnotationsForGene(geneSymbol) {
  const annotations = state.data.proteinAnnotations || {};
  if (!geneSymbol) return null;
  return annotations[geneSymbol] || null;
}

function isMissenseVariant(variantRow) {
  return String(variantRow?.effect || '').toLowerCase().includes('missense');
}

function deriveAlphaMissenseClass(score) {
  if (!Number.isFinite(score)) return null;
  if (score >= ALPHAMISSENSE_THRESHOLDS.likelyPathogenic) return 'likely_pathogenic';
  if (score <= ALPHAMISSENSE_THRESHOLDS.likelyBenign) return 'likely_benign';
  return 'ambiguous';
}

function buildProteinModuleState() {
  const selectedGene = state.selectedGeneRow;
  const selectedVariant = state.selectedVariantRow;

  if (!selectedGene) return { status: 'no_gene' };
  if (!selectedVariant) return { status: 'no_variant', gene: selectedGene.gene };
  if (!isMissenseVariant(selectedVariant)) {
    return { status: 'non_missense', gene: selectedGene.gene, variant: selectedVariant };
  }

  const geneEntry = getProteinAnnotationsForGene(selectedGene.gene);
  if (!geneEntry?.alphafold?.modelUrl) {
    return { status: 'missing_structure', gene: selectedGene.gene, variant: selectedVariant };
  }

  const variantEntry = geneEntry.variants?.[selectedVariant.variant];
  const baseState = {
    status: 'missing_alphamissense',
    gene: selectedGene.gene,
    variant: selectedVariant,
    modelUrl: geneEntry.alphafold.modelUrl,
    alphafoldEntry: geneEntry.alphafold.entryId,
    alphafoldUrl: geneEntry.alphafold.entryUrl || `https://alphafold.ebi.ac.uk/entry/${geneEntry.alphafold.entryId}`,
    proteinChange: variantEntry?.proteinChange || 'Not provided',
    transcript: variantEntry?.transcript || selectedVariant.transcript || 'Unknown',
    residue: variantEntry?.proteinPosition ?? null,
    score: variantEntry?.alphamissense?.score ?? null,
    classification: variantEntry?.alphamissense?.class || null
  };

  if (!Number.isFinite(baseState.score)) return baseState;
  return {
    ...baseState,
    status: 'ready',
    classification: baseState.classification || deriveAlphaMissenseClass(baseState.score)
  };
}

function getProteinStatusCopy(moduleState) {
  const statusMap = {
    no_gene: 'Select a gene to enable protein context.',
    no_variant: 'Select a variant to load AlphaFold and AlphaMissense context.',
    non_missense: 'AlphaMissense is available for missense substitutions only.',
    missing_structure: 'AlphaFold structure unavailable for this gene in the local annotation set.',
    missing_alphamissense: 'Structure is available, but AlphaMissense score is unavailable for this missense variant.',
    ready: 'Protein structure and AlphaMissense prediction loaded.'
  };
  return statusMap[moduleState.status] || 'Protein module is waiting for a valid selection.';
}

function formatClassificationLabel(classification) {
  if (!classification) return 'Unavailable';
  return classification.replaceAll('_', ' ');
}

function queueProteinModuleRender() {
  if (!ENABLE_PROTEIN_MODULE) return;
  if (state.proteinRenderTimer) window.clearTimeout(state.proteinRenderTimer);
  state.proteinRenderTimer = window.setTimeout(() => {
    state.proteinRenderTimer = null;
    renderProteinModule();
  }, PROTEIN_RENDER_DEBOUNCE_MS);
}

async function getOrCreateProteinViewer() {
  if (state.proteinViewer) return state.proteinViewer;
  if (!window.molstar?.Viewer?.create) return null;
  const viewer = await window.molstar.Viewer.create('protein-viewer', {
    layoutShowControls: false,
    layoutShowLeftPanel: false,
    layoutShowSequence: false,
    layoutShowLog: false,
    viewportShowExpand: false
  });
  state.proteinViewer = viewer;
  return viewer;
}

async function loadProteinStructure(moduleState) {
  const statusHost = document.querySelector('#protein-module-status');
  const retryBtn = document.querySelector('#protein-retry-btn');
  if (!moduleState?.modelUrl) return;

  const requestId = state.proteinViewerRequestId + 1;
  state.proteinViewerRequestId = requestId;
  statusHost.textContent = `Loading AlphaFold model ${moduleState.alphafoldEntry || ''}...`;
  retryBtn?.classList.add('is-hidden');

  try {
    const viewer = await getOrCreateProteinViewer();
    if (!viewer) {
      statusHost.textContent = 'Mol* did not load. Check network access and reload.';
      return;
    }

    if (moduleState.modelUrl !== state.proteinViewerModelUrl) {
      await viewer.loadStructureFromUrl(moduleState.modelUrl, 'mmcif', false);
      state.proteinViewerModelUrl = moduleState.modelUrl;
    }

    if (requestId !== state.proteinViewerRequestId) return;
    if (moduleState.residue) {
      statusHost.textContent = `Loaded ${moduleState.alphafoldEntry}. Residue ${moduleState.residue} is selected in metadata panel.`;
    } else {
      statusHost.textContent = `Loaded ${moduleState.alphafoldEntry}.`;
    }
  } catch (error) {
    if (requestId !== state.proteinViewerRequestId) return;
    statusHost.textContent = `Failed to load AlphaFold structure: ${error?.message || 'Unknown error'}`;
    retryBtn?.classList.remove('is-hidden');
    console.error(error);
  }
}

function renderProteinMetadata(moduleState) {
  const statusHost = document.querySelector('#protein-module-status');
  const noteHost = document.querySelector('#protein-module-note');
  const geneHost = document.querySelector('#protein-gene');
  const changeHost = document.querySelector('#protein-change');
  const transcriptHost = document.querySelector('#protein-transcript');
  const residueHost = document.querySelector('#protein-residue');
  const scoreHost = document.querySelector('#protein-score');
  const classHost = document.querySelector('#protein-class');
  const alphaFoldLink = document.querySelector('#protein-alphafold-link');

  statusHost.textContent = getProteinStatusCopy(moduleState);
  geneHost.textContent = moduleState.gene || '-';
  changeHost.textContent = moduleState.proteinChange || moduleState.variant?.hgvsc || '-';
  transcriptHost.textContent = moduleState.transcript || moduleState.variant?.transcript || '-';
  residueHost.textContent = Number.isFinite(moduleState.residue) ? String(moduleState.residue) : '-';
  scoreHost.textContent = Number.isFinite(moduleState.score) ? moduleState.score.toFixed(3) : 'Unavailable';
  classHost.textContent = formatClassificationLabel(moduleState.classification);
  classHost.className = `protein-class-badge ${moduleState.classification || 'neutral'}`;
  noteHost.textContent = 'AlphaMissense is predictive evidence and should not be used as standalone clinical evidence.';

  if (moduleState.alphafoldUrl) {
    alphaFoldLink.href = moduleState.alphafoldUrl;
    alphaFoldLink.setAttribute('aria-disabled', 'false');
  } else {
    alphaFoldLink.href = '#';
    alphaFoldLink.setAttribute('aria-disabled', 'true');
  }
}

function clearProteinViewerForStatus(status) {
  const viewerHost = document.querySelector('#protein-viewer');
  if (!viewerHost) return;
  if (status === 'ready' || status === 'missing_alphamissense') return;
  viewerHost.innerHTML = '<div class=\"protein-viewer-empty\">No structure loaded for this selection.</div>';
  state.proteinViewerModelUrl = null;
}

async function renderProteinModule() {
  if (!ENABLE_PROTEIN_MODULE) return;
  const moduleCard = document.querySelector('.protein-module-card');
  if (!moduleCard) return;

  const moduleState = buildProteinModuleState();
  state.proteinModuleState = moduleState;
  renderProteinMetadata(moduleState);
  clearProteinViewerForStatus(moduleState.status);

  if (moduleState.status === 'ready' || moduleState.status === 'missing_alphamissense') {
    await loadProteinStructure(moduleState);
  }
}

function wireProteinModuleControls() {
  const retryBtn = document.querySelector('#protein-retry-btn');
  if (!retryBtn || retryBtn.dataset.wired === 'true') return;
  retryBtn.dataset.wired = 'true';
  retryBtn.addEventListener('click', () => {
    queueProteinModuleRender();
  });
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
