/* Data for RAIN.
   barangays: the official 48 Tanauan barangays (names from tanauan.gpkg). approx:true = no verified hall pin,
   so the pin sits inside the barangay boundary (boundary centre). Hall pins marked approx:false were checked to fall inside their own barangay polygon.
   evacuationCenters: tanauan_city_evacuation_centers_and_schools.txt (address = barangay the point falls in, from the boundary file). */
window.RAIN_DEMO = {
  emergencyContacts: [
 {
  "name": "National Emergency",
  "tag": "Police",
  "numbers": [
   "911"
  ]
 },
 {
  "name": "CDRRMO Tanauan",
  "tag": "CDRRMO",
  "numbers": [
   "0962 347 5073"
  ]
 },
 {
  "name": "BFP Tanauan City",
  "tag": "Fire",
  "numbers": [
   "(043) 702-9678",
   "0922 344 8887"
  ]
 },
 {
  "name": "PNP Tanauan",
  "tag": "Police",
  "numbers": [
   "0939-322-7848",
   "0977-685-6947"
  ]
 },
 {
  "name": "Philippine Red Cross",
  "tag": "Medical",
  "numbers": [
   "0930 358 3051"
  ]
 },
 {
  "name": "Philippine Coast Guard Batangas",
  "tag": "Coast Guard",
  "numbers": [
   "0956-904-6653",
   "0997-912-5851"
  ]
 },
 {
  "name": "Traffic Management Office",
  "tag": "Traffic",
  "numbers": [
   "(043) 778 4829"
  ]
 }
],
  barangays: [
 {
  "name": "Altura Bata",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.12492,
  "lng": 121.07776,
  "approx": true
 },
 {
  "name": "Altura Matanda",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.13463,
  "lng": 121.08074,
  "approx": true
 },
 {
  "name": "Altura South",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.1273,
  "lng": 121.09013,
  "approx": true
 },
 {
  "name": "Ambulong",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.09025,
  "lng": 121.05844,
  "approx": true
 },
 {
  "name": "Bañadero",
  "hall": "Banadero Barangay Hall",
  "lat": 14.0861,
  "lng": 121.0711,
  "approx": false
 },
 {
  "name": "Bagbag",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.04743,
  "lng": 121.09748,
  "approx": true
 },
 {
  "name": "Bagumbayan",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.075,
  "lng": 121.13266,
  "approx": true
 },
 {
  "name": "Balele",
  "hall": "Balele Barangay Hall",
  "lat": 14.0624,
  "lng": 121.0916,
  "approx": false
 },
 {
  "name": "Banjo East",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.05692,
  "lng": 121.14094,
  "approx": true
 },
 {
  "name": "Banjo Laurel (West)",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.05373,
  "lng": 121.12449,
  "approx": true
 },
 {
  "name": "Bilog-bilog",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.10938,
  "lng": 121.0827,
  "approx": true
 },
 {
  "name": "Boot",
  "hall": "Boot Barangay Hall",
  "lat": 14.0548,
  "lng": 121.0858,
  "approx": false
 },
 {
  "name": "Cale",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.11273,
  "lng": 121.09802,
  "approx": true
 },
 {
  "name": "Darasa",
  "hall": "Darasa Barangay Hall",
  "lat": 14.0672,
  "lng": 121.1531,
  "approx": false
 },
 {
  "name": "Pagaspas",
  "hall": "Pagaspas Barangay Hall",
  "lat": 14.0991,
  "lng": 121.1375,
  "approx": false
 },
 {
  "name": "Gonzales",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.07383,
  "lng": 121.07364,
  "approx": true
 },
 {
  "name": "Hidalgo",
  "hall": "Barangay Hidalgo Hall",
  "lat": 14.0709,
  "lng": 121.1411,
  "approx": false
 },
 {
  "name": "Janopol",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.08206,
  "lng": 121.08486,
  "approx": true
 },
 {
  "name": "Janopol Oriental",
  "hall": "Janopol Oriental Brgy Hall",
  "lat": 14.0811,
  "lng": 121.0983,
  "approx": false
 },
 {
  "name": "Laurel",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.14435,
  "lng": 121.10605,
  "approx": true
 },
 {
  "name": "Luyos",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.11989,
  "lng": 121.0701,
  "approx": true
 },
 {
  "name": "Mabini",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.05467,
  "lng": 121.1053,
  "approx": true
 },
 {
  "name": "Malaking Pulo",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.13742,
  "lng": 121.09166,
  "approx": true
 },
 {
  "name": "Maria Paz",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.03924,
  "lng": 121.06655,
  "approx": true
 },
 {
  "name": "Maugat",
  "hall": "Maugat Barangay Hall",
  "lat": 14.0988,
  "lng": 121.0694,
  "approx": false
 },
 {
  "name": "Montaña (Ik-ik)",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.12891,
  "lng": 121.06478,
  "approx": true
 },
 {
  "name": "Natatas",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.07633,
  "lng": 121.11415,
  "approx": true
 },
 {
  "name": "Pantay Matanda",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.11578,
  "lng": 121.11935,
  "approx": true
 },
 {
  "name": "Pantay Bata",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.12629,
  "lng": 121.1112,
  "approx": true
 },
 {
  "name": "Poblacion Barangay 1",
  "hall": "Poblacion 1 New Brgy Hall",
  "lat": 14.0863,
  "lng": 121.1511,
  "approx": false
 },
 {
  "name": "Poblacion Barangay 2",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.08355,
  "lng": 121.15202,
  "approx": true
 },
 {
  "name": "Poblacion Barangay 3",
  "hall": "Poblacion 3 Sampalucan Hall",
  "lat": 14.0789,
  "lng": 121.1539,
  "approx": false
 },
 {
  "name": "Poblacion Barangay 4",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.08843,
  "lng": 121.14791,
  "approx": true
 },
 {
  "name": "Poblacion Barangay 5",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.08248,
  "lng": 121.14903,
  "approx": true
 },
 {
  "name": "Poblacion Barangay 6",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.08711,
  "lng": 121.14602,
  "approx": true
 },
 {
  "name": "Poblacion Barangay 7",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.08022,
  "lng": 121.14659,
  "approx": true
 },
 {
  "name": "Sala",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.10202,
  "lng": 121.1149,
  "approx": true
 },
 {
  "name": "Sambat",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.08234,
  "lng": 121.13389,
  "approx": true
 },
 {
  "name": "San Jose",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.11305,
  "lng": 121.06813,
  "approx": true
 },
 {
  "name": "Santol (Doña Jacoba Garcia)",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.14989,
  "lng": 121.08762,
  "approx": true
 },
 {
  "name": "Santor",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.08748,
  "lng": 121.11437,
  "approx": true
 },
 {
  "name": "Sulpoc",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.14268,
  "lng": 121.05703,
  "approx": true
 },
 {
  "name": "Suplang",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.14764,
  "lng": 121.06611,
  "approx": true
 },
 {
  "name": "Talaga",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.09416,
  "lng": 121.08317,
  "approx": true
 },
 {
  "name": "Tinurik",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.06575,
  "lng": 121.12084,
  "approx": true
 },
 {
  "name": "Trapiche",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.09184,
  "lng": 121.1291,
  "approx": true
 },
 {
  "name": "Ulango",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.1362,
  "lng": 121.11432,
  "approx": true
 },
 {
  "name": "Wawa",
  "hall": "Barangay centre (from boundary file)",
  "lat": 14.06029,
  "lng": 121.0778,
  "approx": true
 }
],
  evacuationCenters: [
    {
      "name": "Tanauan City Gymnasium / Evacuation Hub (Poblacion)",
      "category": "shelter",
      "type": "Evacuation Center",
      "address": "Brgy. Poblacion Barangay 1",
      "lat": 14.0865,
      "lng": 121.1518
    },
 {
  "name": "Bañadero Covered Court & Evacuation Center",
  "category": "shelter",
  "type": "Evacuation Center",
  "address": "Brgy. Bañadero",
  "lat": 14.0861,
  "lng": 121.0711
 },
 {
  "name": "Boot Barangay Gymnasium / Evacuation Center",
  "category": "shelter",
  "type": "Evacuation Center",
  "address": "Brgy. Boot",
  "lat": 14.0548,
  "lng": 121.0858
 },
 {
  "name": "Balele Multi-Purpose Evacuation Center",
  "category": "shelter",
  "type": "Evacuation Center",
  "address": "Brgy. Balele",
  "lat": 14.0624,
  "lng": 121.0916
 },
 {
  "name": "Darasa Barangay Covered Court & Evacuation Center",
  "category": "shelter",
  "type": "Evacuation Center",
  "address": "Brgy. Darasa",
  "lat": 14.0672,
  "lng": 121.1531
 },
 {
  "name": "Altura South Covered Court & Evacuation Center",
  "category": "shelter",
  "type": "Evacuation Center",
  "address": "Brgy. Sambat",
  "lat": 14.0789,
  "lng": 121.1238
 },
 {
  "name": "Natatas Multi-Purpose Evacuation Center",
  "category": "shelter",
  "type": "Evacuation Center",
  "address": "Brgy. Pagaspas",
  "lat": 14.0934,
  "lng": 121.1442
 },
 {
  "name": "Janopol Oriental Evacuation Center",
  "category": "shelter",
  "type": "Evacuation Center",
  "address": "Brgy. Janopol Oriental",
  "lat": 14.0811,
  "lng": 121.0983
 },
 {
  "name": "Trapiche Evacuation & Multi-Purpose Center",
  "category": "shelter",
  "type": "Evacuation Center",
  "address": "Brgy. Poblacion Barangay 4",
  "lat": 14.0911,
  "lng": 121.1488
 },
 {
  "name": "Ambulong Multi-Purpose Facility",
  "category": "shelter",
  "type": "Evacuation Center",
  "address": "Brgy. Janopol",
  "lat": 14.0874,
  "lng": 121.0851
 },
 {
  "name": "Tanauan North Central Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Poblacion Barangay 1",
  "lat": 14.0894,
  "lng": 121.1494
 },
 {
  "name": "Tanauan South Central Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Poblacion Barangay 1",
  "lat": 14.0867,
  "lng": 121.15
 },
 {
  "name": "Natatas Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Natatas",
  "lat": 14.082,
  "lng": 121.1196
 },
 {
  "name": "Bañadero Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Bañadero",
  "lat": 14.0858,
  "lng": 121.0715
 },
 {
  "name": "Boot Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Boot",
  "lat": 14.0545,
  "lng": 121.0861
 },
 {
  "name": "Balele Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Balele",
  "lat": 14.062,
  "lng": 121.0912
 },
 {
  "name": "Darasa Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Darasa",
  "lat": 14.0678,
  "lng": 121.1528
 },
 {
  "name": "Janopol Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Janopol Oriental",
  "lat": 14.0815,
  "lng": 121.098
 },
 {
  "name": "Trapiche Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Tanauan City, Batangas",
  "lat": 14.0915,
  "lng": 121.1485
 },
 {
  "name": "Ambulong Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Janopol",
  "lat": 14.087,
  "lng": 121.0855
 },
 {
  "name": "Bagumbayan Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Poblacion Barangay 3",
  "lat": 14.0785,
  "lng": 121.1525
 },
 {
  "name": "Santor Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Bagumbayan",
  "lat": 14.0715,
  "lng": 121.1242
 },
 {
  "name": "Pantay Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Pantay Matanda",
  "lat": 14.122,
  "lng": 121.1195
 },
 {
  "name": "Cale Elementary School",
  "category": "shelter",
  "type": "Public Elementary School",
  "address": "Brgy. Pantay Matanda",
  "lat": 14.1205,
  "lng": 121.1178
 },
 {
  "name": "Tanauan City National High School",
  "category": "shelter",
  "type": "Public High School",
  "address": "Brgy. Poblacion Barangay 2",
  "lat": 14.0845,
  "lng": 121.1502
 },
 {
  "name": "Tanauan School of Fisheries (Ambulong)",
  "category": "shelter",
  "type": "Public High School",
  "address": "Brgy. Talaga",
  "lat": 14.088,
  "lng": 121.0842
 },
 {
  "name": "Balele National High School",
  "category": "shelter",
  "type": "Public High School",
  "address": "Brgy. Balele",
  "lat": 14.0628,
  "lng": 121.092
 },
 {
  "name": "Boot National High School",
  "category": "shelter",
  "type": "Public High School",
  "address": "Brgy. Boot",
  "lat": 14.055,
  "lng": 121.0852
 },
 {
  "name": "Janopol National High School",
  "category": "shelter",
  "type": "Public High School",
  "address": "Brgy. Janopol Oriental",
  "lat": 14.0808,
  "lng": 121.0988
 },
 {
  "name": "Natatas National High School",
  "category": "shelter",
  "type": "Public High School",
  "address": "Brgy. Pagaspas",
  "lat": 14.093,
  "lng": 121.1438
 },
 {
  "name": "First Asia Institute of Technology and Humanities",
  "category": "shelter",
  "type": "College / Private School",
  "address": "Brgy. Poblacion Barangay 3",
  "lat": 14.0812,
  "lng": 121.1535
 },
 {
  "name": "La Consolacion College Tanauan",
  "category": "shelter",
  "type": "College / Private School",
  "address": "Brgy. Poblacion Barangay 1",
  "lat": 14.0852,
  "lng": 121.151
 },
 {
  "name": "Tanauan Institute",
  "category": "shelter",
  "type": "College / Private School",
  "address": "Brgy. Poblacion Barangay 4",
  "lat": 14.087,
  "lng": 121.149
 },
 {
  "name": "Christian College of Tanauan",
  "category": "shelter",
  "type": "College / Private School",
  "address": "Brgy. Poblacion Barangay 2",
  "lat": 14.0838,
  "lng": 121.152
 }
],
};
