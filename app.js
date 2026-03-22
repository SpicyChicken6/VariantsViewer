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
        "synonymous": "65.7/140/0.8/0.13",
        "missense": "134.4/59/0.94/1.03",
        "lof": "17.0/4/0.83/0.48",
        "selected": false
      }
    ]
  },
  "variants": {
    "totalCount": 342,
    "pageSize": 5,
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
        "id": "neurologic",
        "label": "Neurologic",
        "icon": "assets/icon-brain.svg",
        "active": true,
        "omimPhenotypes": [
          {
            "phenotype": "Tay-Sachs disease",
            "inheritance": "AR",
            "match": "42%"
          },
          {
            "phenotype": "Hemophilia A",
            "inheritance": "XLR",
            "match": "40%"
          },
          {
            "phenotype": "Duchenne dystrophy",
            "inheritance": "XLR",
            "match": "38%"
          },
          {
            "phenotype": "Cystic Fibrosis",
            "inheritance": "AR",
            "match": "35%"
          }
        ],
        "hpoTerms": [
          {
            "code": "HP:0001878",
            "name": "Hemolytic anemia"
          },
          {
            "code": "HP:0001903",
            "name": "Anemia"
          },
          {
            "code": "HP:0002488",
            "name": "Acute leukemia"
          },
          {
            "code": "HP:0001250",
            "name": "Seizures"
          }
        ]
      },
      {
        "id": "cardiac",
        "label": "Cardiac",
        "icon": "assets/icon-heart.svg",
        "omimPhenotypes": [
          {
            "phenotype": "Dilated cardiomyopathy",
            "inheritance": "AD",
            "match": "44%"
          },
          {
            "phenotype": "Long QT syndrome",
            "inheritance": "AD",
            "match": "39%"
          },
          {
            "phenotype": "Arrhythmogenic cardiomyopathy",
            "inheritance": "AD",
            "match": "35%"
          },
          {
            "phenotype": "Brugada syndrome",
            "inheritance": "AD",
            "match": "31%"
          }
        ],
        "hpoTerms": [
          {
            "code": "HP:0001644",
            "name": "Dilated cardiomyopathy"
          },
          {
            "code": "HP:0001711",
            "name": "Ventricular arrhythmia"
          },
          {
            "code": "HP:0011675",
            "name": "Long QTc"
          },
          {
            "code": "HP:0001638",
            "name": "Cardiomyopathy"
          }
        ]
      },
      {
        "id": "pulmonary",
        "label": "Pulmonary",
        "icon": "assets/icon-lung.svg",
        "omimPhenotypes": [
          {
            "phenotype": "Primary ciliary dyskinesia",
            "inheritance": "AR",
            "match": "37%"
          },
          {
            "phenotype": "Childhood interstitial lung disease",
            "inheritance": "AD",
            "match": "34%"
          },
          {
            "phenotype": "Pulmonary fibrosis susceptibility",
            "inheritance": "AD",
            "match": "29%"
          },
          {
            "phenotype": "Surfactant metabolism dysfunction",
            "inheritance": "AR",
            "match": "27%"
          }
        ],
        "hpoTerms": [
          {
            "code": "HP:0002205",
            "name": "Recurrent respiratory infections"
          },
          {
            "code": "HP:0002094",
            "name": "Dyspnea"
          },
          {
            "code": "HP:0002783",
            "name": "Bronchiectasis"
          },
          {
            "code": "HP:0002787",
            "name": "Pulmonary fibrosis"
          }
        ]
      },
      {
        "id": "metabolic",
        "label": "Metabolic",
        "icon": "assets/icon-metabolism.svg",
        "omimPhenotypes": [
          {
            "phenotype": "Methylmalonic acidemia",
            "inheritance": "AR",
            "match": "36%"
          },
          {
            "phenotype": "Glycogen storage disease",
            "inheritance": "AR",
            "match": "33%"
          },
          {
            "phenotype": "Mitochondrial disorder",
            "inheritance": "AR",
            "match": "29%"
          },
          {
            "phenotype": "Urea cycle defect",
            "inheritance": "AR",
            "match": "24%"
          }
        ],
        "hpoTerms": [
          {
            "code": "HP:0001943",
            "name": "Metabolic acidosis"
          },
          {
            "code": "HP:0003212",
            "name": "Hyperammonemia"
          },
          {
            "code": "HP:0002151",
            "name": "Elevated serum lactate"
          },
          {
            "code": "HP:0003128",
            "name": "Lactic acidosis"
          }
        ]
      },
      {
        "id": "hematologic",
        "label": "Hematologic",
        "icon": "assets/icon-blood.svg",
        "omimPhenotypes": [
          {
            "phenotype": "Diamond-Blackfan anemia",
            "inheritance": "AD",
            "match": "34%"
          },
          {
            "phenotype": "Congenital neutropenia",
            "inheritance": "AD",
            "match": "29%"
          },
          {
            "phenotype": "Thrombocytopenia 2",
            "inheritance": "AD",
            "match": "25%"
          },
          {
            "phenotype": "Bone marrow failure",
            "inheritance": "AD",
            "match": "23%"
          }
        ],
        "hpoTerms": [
          {
            "code": "HP:0001871",
            "name": "Thrombocytopenia"
          },
          {
            "code": "HP:0001880",
            "name": "Neutropenia"
          },
          {
            "code": "HP:0001903",
            "name": "Anemia"
          },
          {
            "code": "HP:0005528",
            "name": "Bone marrow hypocellularity"
          }
        ]
      },
      {
        "id": "other",
        "label": "Other",
        "icon": "assets/icon-info.svg",
        "omimPhenotypes": [
          {
            "phenotype": "Nonspecific syndromic disorder",
            "inheritance": "AD",
            "match": "18%"
          },
          {
            "phenotype": "Neurodevelopmental syndrome",
            "inheritance": "AD",
            "match": "17%"
          },
          {
            "phenotype": "Connective tissue disorder",
            "inheritance": "AD",
            "match": "15%"
          },
          {
            "phenotype": "Undifferentiated syndrome",
            "inheritance": "Unknown",
            "match": "14%"
          }
        ],
        "hpoTerms": [
          {
            "code": "HP:0012823",
            "name": "Clinical modifier"
          },
          {
            "code": "HP:0000118",
            "name": "Phenotypic abnormality"
          },
          {
            "code": "HP:0032443",
            "name": "Clinical comment"
          },
          {
            "code": "HP:0000001",
            "name": "All"
          }
        ]
      }
    ],
    "hpoLogo": "assets/hpo-placeholder.svg"
  },
  "family": {
    "rows": [
      {
        "status": "Proband",
        "badge": {
          "text": "De Novo",
          "tone": "rose"
        },
        "gt": "0/1",
        "vaf": "0.52",
        "cov": "98",
        "qual": "85"
      },
      {
        "status": "Paternal",
        "badge": {
          "text": "Carrier",
          "tone": "amber"
        },
        "gt": "0/1",
        "vaf": "0.48",
        "cov": "125",
        "qual": "99"
      },
      {
        "status": "Maternal",
        "badge": {
          "text": "Reference",
          "tone": "blue"
        },
        "gt": "0/0",
        "vaf": "0.00",
        "cov": "110",
        "qual": "100"
      }
    ]
  },
  "cohort": {
    "rows": [
      {
        "sampleId": "COH_0012",
        "genotype": "0/1",
        "frequency": ""
      },
      {
        "sampleId": "COH_0045",
        "genotype": "0/1",
        "frequency": "0.5%"
      },
      {
        "sampleId": "COH_0091",
        "genotype": "1/1",
        "frequency": ""
      }
    ]
  },
  "predictions": {
    "tabs": [
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
  phenotypeOffset: 0,
  activePhenotypeId: null,
  activePredictionTab: 'prediction',
  nav: 'home',
  geneQuery: '',
  data: {}
};

const DATA_MAP = {
  genes: 'data/genes.json',
  variants: 'data/variants.json',
  phenotypes: 'data/phenotypes.json',
  family: 'data/family.json',
  cohort: 'data/cohort.json',
  predictions: 'data/predictions.json'
};

async function loadJson(key, url) {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`Falling back to embedded data for ${key} because external loading failed.`, err);
    return FALLBACK_DATA[key];
  }
}

async function boot() {
  const entries = await Promise.all(
    Object.entries(DATA_MAP).map(async ([key, url]) => [key, await loadJson(key, url)])
  );
  state.data = Object.fromEntries(entries);
  state.activePhenotypeId = state.data.phenotypes.slides.find(s => s.active)?.id || state.data.phenotypes.slides[0].id;
  wireSearch();
  wirePills();
  wirePredictionTabs();
  renderAll();
}

function renderAll() {
  renderGeneTable();
  renderVariantTable();
  renderPhenotypePanel();
  renderFamily();
  renderCohort();
  renderPredictionTab();
}

function paginateRows(rows, page, pageSize) {
  const start = (page - 1) * pageSize;
  return rows.slice(start, start + pageSize);
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
  tbody.innerHTML = pageRows.map(row => `
    <tr>
      <td><span class="${row.selected ? 'cell-selected' : ''}">${row.gene}</span></td>
      <td>${row.rank}</td>
      <td title="${row.synonyms}">${row.synonyms}</td>
      <td title="${row.ensembl}">${row.ensembl}</td>
      <td>${row.ncbi}</td>
      <td>${row.synonymous}</td>
      <td>${row.missense}</td>
      <td>${row.lof}</td>
    </tr>
  `).join('');

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / data.pageSize));
  const start = filteredRows.length ? (state.genesPage - 1) * data.pageSize + 1 : 0;
  const end = Math.min(state.genesPage * data.pageSize, filteredRows.length);
  document.querySelector('#genes-count').textContent = state.geneQuery
    ? `Showing ${start} to ${end} of ${filteredRows.length} matched genes`
    : `Showing ${start} to ${end} of ${data.totalCount} genes`;
  renderPagination(document.querySelector('#genes-pagination'), totalPages, state.genesPage, (page) => {
    state.genesPage = page;
    renderGeneTable();
  });
}

function renderVariantTable() {
  const data = state.data.variants;
  const tbody = document.querySelector('#variants-tbody');
  const pageRows = paginateRows(data.rows, state.variantsPage, data.pageSize);
  tbody.innerHTML = pageRows.map(row => `
    <tr>
      <td>${row.variant}</td>
      <td>${row.transcript}</td>
      <td title="${row.hgvsc}">${row.hgvsc}</td>
      <td class="${String(row.effect).includes('frameshift') || String(row.effect).includes('stop') ? 'effect-danger' : ''}">${row.effect}</td>
      <td>${row.clinvar}</td>
      <td class="mono">${row.gnomad}</td>
    </tr>
  `).join('');

  const totalPages = Math.ceil(data.totalCount / data.pageSize);
  document.querySelector('#variants-count').textContent = `Showing ${(state.variantsPage - 1) * data.pageSize + 1} to ${Math.min(state.variantsPage * data.pageSize, data.totalCount)} of ${data.totalCount} variants`;
  renderPagination(document.querySelector('#variants-pagination'), totalPages, state.variantsPage, (page) => {
    state.variantsPage = page;
    renderVariantTable();
  });
}

function renderPhenotypePanel() {
  const data = state.data.phenotypes;
  const slides = data.slides;
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
      renderPhenotypePanel();
    });
  });

  document.querySelector('#carousel-prev').disabled = state.phenotypeOffset === 0;
  document.querySelector('#carousel-next').disabled = state.phenotypeOffset >= maxOffset;
  document.querySelector('#carousel-prev').onclick = () => {
    state.phenotypeOffset = Math.max(0, state.phenotypeOffset - 1);
    renderPhenotypePanel();
  };
  document.querySelector('#carousel-next').onclick = () => {
    state.phenotypeOffset = Math.min(maxOffset, state.phenotypeOffset + 1);
    renderPhenotypePanel();
  };

  const active = slides.find(s => s.id === state.activePhenotypeId) || slides[0];

  document.querySelector('#omim-tbody').innerHTML = active.omimPhenotypes.map(row => `
    <tr>
      <td>${row.phenotype}</td>
      <td>${row.inheritance}</td>
      <td>${row.match}</td>
    </tr>
  `).join('');

  document.querySelector('#hpo-tbody').innerHTML = active.hpoTerms.map(row => `
    <tr>
      <td><a class="link" href="#">${row.code}</a></td>
      <td>${row.name}</td>
    </tr>
  `).join('');
}

function renderFamily() {
  const rows = state.data.family.rows;
  document.querySelector('#family-tbody').innerHTML = rows.map(r => `
    <tr>
      <td>${r.status} ${
        r.badge ? `<span class="badge ${r.badge.tone}">${r.badge.text}</span>` : ''
      }</td>
      <td>${r.gt}</td>
      <td>${r.vaf}</td>
      <td>${r.cov}</td>
      <td>${r.qual}</td>
    </tr>
  `).join('');
}

function renderCohort() {
  const rows = state.data.cohort.rows;
  document.querySelector('#cohort-tbody').innerHTML = rows.map(r => `
    <tr>
      <td>${r.sampleId}</td>
      <td>${r.genotype}</td>
      <td>${r.frequency}</td>
    </tr>
  `).join('');
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
  const metricsHost = document.querySelector('#prediction-grid');
  const detailHost = document.querySelector('#prediction-detail');

  if (tab.id === 'prediction') {
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