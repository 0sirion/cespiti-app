let ItemsArr = [
  {
    id: 1,
    progr_scheda: 376,
    numero_inventario: 20227,
    descrizione: "Notebook HP",
    categoria_fiscale: "20",
    classificazione: "I1",
    stato_conservazione: "O",
    annotazione: "HP Probook 6440B + RAM 2Gb + borsa HP",
    date: new Date(2021, 5, 12),
  },
  {
    id: 2,
    progr_scheda: 79324,
    numero_inventario: 20029,
    descrizione: "Personal computer Fujitsu",
    categoria_fiscale: "20",
    classificazione: "I1",
    stato_conservazione: "O",
    annotazione: "Personal computer Fujitsu esprimo P2550",
    date: new Date(2021, 5, 12),
  },
  {
    id: 3,
    progr_scheda: 125,
    numero_inventario: 12345,
    descrizione: "Smartphone Samsung",
    categoria_fiscale: "30",
    classificazione: "I2",
    stato_conservazione: "O",
    annotazione: "Samsung Galaxy S21",
    date: new Date(2022, 2, 1),
  },
  {
    id: 4,
    progr_scheda: 879,
    numero_inventario: 67890,
    descrizione: "Tablet Apple",
    categoria_fiscale: "30",
    classificazione: "I2",
    stato_conservazione: "O",
    annotazione: "iPad Pro 12.9-inch",
    date: new Date(2022, 4, 15),
  },
  {
    id: 5,
    progr_scheda: 532,
    numero_inventario: 54321,
    descrizione: "Digital Camera Canon",
    categoria_fiscale: "40",
    classificazione: "I3",
    stato_conservazione: "O",
    annotazione: "Canon EOS R6",
    date: new Date(2022, 8, 10),
  },
  {
    id: 6,
    progr_scheda: 789,
    numero_inventario: 98765,
    descrizione: "Smart TV LG",
    categoria_fiscale: "50",
    classificazione: "I3",
    stato_conservazione: "O",
    annotazione: "LG OLED C9",
    date: new Date(2022, 6, 5),
  },
  {
    id: 7,
    progr_scheda: 456,
    numero_inventario: 24680,
    descrizione: "Bluetooth Speaker JBL",
    categoria_fiscale: "60",
    classificazione: "I4",
    stato_conservazione: "O",
    annotazione: "JBL Flip 5",
    date: new Date(2022, 9, 20),
  },
  {
    id: 8,
    progr_scheda: 245,
    numero_inventario: 86420,
    descrizione: "Monitor Dell",
    categoria_fiscale: "70",
    classificazione: "I4",
    stato_conservazione: "O",
    annotazione: "Dell UltraSharp U2719D",
    date: new Date(2022, 7, 15),
  },
  {
    id: 9,
    progr_scheda: 741,
    numero_inventario: 35791,
    descrizione: "External Hard Drive Seagate",
    categoria_fiscale: "80",
    classificazione: "I5",
    stato_conservazione: "O",
    annotazione: "Seagate Backup Plus Hub 8TB",
    date: new Date(2022, 10, 8),
  },
  {
    id: 10,
    progr_scheda: 369,
    numero_inventario: 68420,
    descrizione: "Keyboard Logitech",
    categoria_fiscale: "90",
    classificazione: "I5",
    stato_conservazione: "O",
    annotazione: "Logitech G413 Mechanical Keyboard",
    date: new Date(2022, 12, 1),
  },
  {
    id: 11,
    progr_scheda: 963,
    numero_inventario: 13579,
    descrizione: "Printer Epson",
    categoria_fiscale: "100",
    classificazione: "I6",
    stato_conservazione: "O",
    annotazione: "Epson EcoTank ET-2720",
    date: new Date(2023, 2, 25),
  },
  {
    id: 12,
    progr_scheda: 852,
    numero_inventario: 46802,
    descrizione: "Headphones Sony",
    categoria_fiscale: "110",
    classificazione: "I6",
    stato_conservazione: "O",
    annotazione: "Sony WH-1000XM4",
    date: new Date(2023, 4, 12),
  },
  {
    id: 13,
    progr_scheda: 147,
    numero_inventario: 82460,
    descrizione: "Game Console Xbox",
    categoria_fiscale: "120",
    classificazione: "I7",
    stato_conservazione: "O",
    annotazione: "Xbox Series X",
    date: new Date(2023, 6, 2),
  },
  {
    id: 14,
    progr_scheda: 963,
    numero_inventario: 25973,
    descrizione: "Smartwatch Apple",
    categoria_fiscale: "130",
    classificazione: "I7",
    stato_conservazione: "O",
    annotazione: "Apple Watch Series 6",
    date: new Date(2023, 7, 18),
  },
  {
    id: 15,
    progr_scheda: 753,
    numero_inventario: 64982,
    descrizione: "Wireless Router TP-Link",
    categoria_fiscale: "140",
    classificazione: "I8",
    stato_conservazione: "O",
    annotazione: "TP-Link Archer AX6000",
    date: new Date(2023, 9, 5),
  },
  {
    id: 16,
    progr_scheda: 951,
    numero_inventario: 73682,
    descrizione: "Smart Speaker Amazon",
    categoria_fiscale: "150",
    classificazione: "I8",
    stato_conservazione: "O",
    annotazione: "Amazon Echo (4th Gen)",
    date: new Date(2023, 11, 21),
  },
  {
    id: 17,
    progr_scheda: 258,
    numero_inventario: 59362,
    descrizione: "Fitness Tracker Fitbit",
    categoria_fiscale: "160",
    classificazione: "I9",
    stato_conservazione: "O",
    annotazione: "Fitbit Charge 4",
    date: new Date(2024, 1, 7),
  },
  {
    id: 18,
    progr_scheda: 456,
    numero_inventario: 92736,
    descrizione: "Gaming Mouse Razer",
    categoria_fiscale: "170",
    classificazione: "I9",
    stato_conservazione: "O",
    annotazione: "Razer DeathAdder V2",
    date: new Date(2024, 3, 24),
  },
  {
    id: 19,
    progr_scheda: 753,
    numero_inventario: 82460,
    descrizione: "Power Bank Anker",
    categoria_fiscale: "180",
    classificazione: "I10",
    stato_conservazione: "O",
    annotazione: "Anker PowerCore 26800mAh",
    date: new Date(2024, 5, 11),
  },
  {
    id: 20,
    progr_scheda: 951,
    numero_inventario: 92736,
    descrizione: "Smart Thermostat Nest",
    categoria_fiscale: "190",
    classificazione: "I10",
    stato_conservazione: "O",
    annotazione: "Nest Learning Thermostat",
    date: new Date(2024, 7, 28),
  },
];

export default ItemsArr;
