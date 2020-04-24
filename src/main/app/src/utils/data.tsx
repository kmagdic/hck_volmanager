export interface DataItem { 
  id: number, 
  name: string, 
};

export interface Place { 
  id: number, 
  name: string, 
  county: string, 
  postCode: number, 
};

export interface SkillGroup {
	id: number,
	name: string,
	orderNum?: number
}

export interface Skill { 
  id: number, 
  name: string, 
	skillGroup: SkillGroup,
	orderNum?: number
};

export const genders = [
  { value: "M", label: "muški" },
  { value: "F", label: "ženski" },
  { value: "A", label: "ne želim se izjasniti" }
];
export const places = [
  { id: 1, name: "Place A", county: 1 },
  { id: 2, name: "Place B", county: 2 },
  { id: 3, name: "Place C", county: 3 },
  { id: 4, name: "Place D", county: 1 },
];
export const counties = [
  { id: 1, name: "County A" },
  { id: 2, name: "County B" },
  { id: 3, name: "County C" },
];
export const qualificationsData: DataItem[] = [
  { id: 1, name: "Qualification A" },
  { id: 2, name: "Qualification B" },
  { id: 3, name: "Qualification C" },
  { id: 4, name: "Qualification D" },
  { id: 5, name: "Qualification E" },
  { id: 6, name: "Qualification F" },
  { id: 7, name: "Qualification G" },
  { id: 8, name: "Qualification H" },
];
export const experiencesData: DataItem[] = [
  { id: 1, name: "Experience A" },
  { id: 2, name: "Experience B" },
  { id: 3, name: "Experience C" },
  { id: 4, name: "Experience D" },
  { id: 5, name: "Experience E" },
  { id: 6, name: "Experience F" },
  { id: 7, name: "Experience G" },
  { id: 8, name: "Experience H" },
];
export const servicesData: DataItem[] = [
  { id: 1, name: "Service A" },
  { id: 2, name: "Service B" },
  { id: 3, name: "Service C" },
  { id: 4, name: "Service D" },
  { id: 5, name: "Service E" },
  { id: 6, name: "Service F" },
  { id: 7, name: "Service G" },
  { id: 8, name: "Service H" },
];
export const skillsData: DataItem[] = [
  { id: 1, name: "Skill A" },
  { id: 2, name: "Skill B" },
  { id: 3, name: "Skill C" },
  { id: 4, name: "Skill D" },
  { id: 5, name: "Skill E" },
  { id: 6, name: "Skill F" },
  { id: 7, name: "Skill G" },
  { id: 8, name: "Skill H" },
];
/*
export const skillsData2: Skill[] = [
  { id: 1, name: "Skill A", group: "psycho" },
  { id: 2, name: "Skill B", group: "psycho" },
  { id: 3, name: "Skill C", group: "tech" },
  { id: 4, name: "Skill D", group: "tech" },
  { id: 5, name: "Skill E", group: "psycho" },
  { id: 6, name: "Skill F", group: "physical" },
  { id: 7, name: "Skill G", group: "physical" },
  { id: 8, name: "Skill H", group: "psycho" },
];
*/
export const placesData0: Place[] = [
	{ id: 2, name: "Ivanec", county: "Varaždinska županija", postCode: 42100 },
	{ id: 3, name: "Ludbreg", county: "Varaždinska županija", postCode: 42000 },
	{ id: 21, name: "Zagreb", county: "Zagrebačka županija", postCode: 10000 },
	{ id: 1, name: "Varaždin", county: "Varaždinska županija", postCode: 42000 },
	{ id: 31, name: "Bjelovar", county: "Bjelovarska županija", postCode: 43000 },
	{ id: 41, name: "Zadar", county: "Zadarska županija", postCode: 21000 },
	{ id: 42, name: "Benkovac", county: "Zadarska županija", postCode: 21000 },
	{ id: 43, name: "Pakoštane", county: "Zadarska županija", postCode: 21000 },
];
export const placesData = [
  {
      "id": 11,
      "name": "Beli Manastir",
      "county": "Osječko-baranjska",
      "postCode": 31300
  },
  {
      "id": 12,
      "name": "Draž",
      "county": "Osječko-baranjska",
      "postCode": 31300
  },
  {
      "id": 13,
      "name": "Čeminac",
      "county": "Osječko-baranjska",
      "postCode": 31300
  },
  {
      "id": 14,
      "name": "Kneževi Vinogradi",
      "county": "Osječko-baranjska",
      "postCode": 31300
  },
  {
      "id": 15,
      "name": "Popovac",
      "county": "Osječko-baranjska",
      "postCode": 31300
  },
  {
      "id": 16,
      "name": "Petlovac",
      "county": "Osječko-baranjska",
      "postCode": 31300
  },
  {
      "id": 17,
      "name": "Jagodnjak",
      "county": "Osječko-baranjska",
      "postCode": 31300
  },
  {
      "id": 18,
      "name": "Benkovac",
      "county": "Zadarska",
      "postCode": 23420
  },
  {
      "id": 19,
      "name": "Polača",
      "county": "Zadarska",
      "postCode": 22300
  },
  {
      "id": 20,
      "name": "Stankovci",
      "county": "Zadarska",
      "postCode": 23422
  },
  {
      "id": 21,
      "name": "Lišane Ostrovičke",
      "county": "Zadarska",
      "postCode": 23420
  },
  {
      "id": 22,
      "name": "Biograd na moru",
      "county": "Zadarska",
      "postCode": 23210
  },
  {
      "id": 23,
      "name": "Sveti Filip i Jakov",
      "county": "Zadarska",
      "postCode": 23210
  },
  {
      "id": 24,
      "name": "Pakoštane",
      "county": "Zadarska",
      "postCode": 23210
  },
  {
      "id": 25,
      "name": "Pašman",
      "county": "Zadarska",
      "postCode": 23212
  },
  {
      "id": 26,
      "name": "Tkon",
      "county": "Zadarska",
      "postCode": 23212
  },
  {
      "id": 27,
      "name": "Bjelovar",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43000
  },
  {
      "id": 28,
      "name": "Kapela",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43000
  },
  {
      "id": 29,
      "name": "Nova Rača",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43270
  },
  {
      "id": 30,
      "name": "Rovišće",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43000
  },
  {
      "id": 31,
      "name": "Severin",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43000
  },
  {
      "id": 32,
      "name": "Šandrovac",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43000
  },
  {
      "id": 33,
      "name": "Velika Pisanica",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43270
  },
  {
      "id": 34,
      "name": "Veliko Trojstvo",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43000
  },
  {
      "id": 35,
      "name": "Zrinski Topolovac",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43000
  },
  {
      "id": 36,
      "name": "Buje - Buie",
      "county": "Istarska",
      "postCode": 52460
  },
  {
      "id": 37,
      "name": "Novigrad - Cittanova",
      "county": "Istarska",
      "postCode": 52466
  },
  {
      "id": 38,
      "name": "Umag - Umago",
      "county": "Istarska",
      "postCode": 52470
  },
  {
      "id": 39,
      "name": "Brtonigla - Verteneglio",
      "county": "Istarska",
      "postCode": 52466
  },
  {
      "id": 40,
      "name": "Grožnjan - Grisignana",
      "county": "Istarska",
      "postCode": 52460
  },
  {
      "id": 41,
      "name": "Oprtalj - Portole",
      "county": "Istarska",
      "postCode": 52460
  },
  {
      "id": 42,
      "name": "Buzet",
      "county": "Istarska",
      "postCode": 52420
  },
  {
      "id": 43,
      "name": "Lanišće",
      "county": "Istarska",
      "postCode": 10450
  },
  {
      "id": 44,
      "name": "Crikvenica",
      "county": "Primorsko-goranska",
      "postCode": 51260
  },
  {
      "id": 45,
      "name": "Čabar",
      "county": "Primorsko-goranska",
      "postCode": 51306
  },
  {
      "id": 46,
      "name": "Čakovec",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 47,
      "name": "Belica",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 48,
      "name": "Dekanovec",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 49,
      "name": "Domašinec",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 50,
      "name": "Donja Dubrava",
      "county": "Međimurska",
      "postCode": 40320
  },
  {
      "id": 51,
      "name": "Donji Kraljevec",
      "county": "Međimurska",
      "postCode": 40320
  },
  {
      "id": 52,
      "name": "Donji Vidovec",
      "county": "Međimurska",
      "postCode": 40320
  },
  {
      "id": 53,
      "name": "Goričan",
      "county": "Međimurska",
      "postCode": 40320
  },
  {
      "id": 54,
      "name": "Gornji Mihaljevec",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 55,
      "name": "Kotoriba",
      "county": "Međimurska",
      "postCode": 40320
  },
  {
      "id": 56,
      "name": "Mala Subotica",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 57,
      "name": "Nedelišće",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 58,
      "name": "Orehovica",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 59,
      "name": "Podturen",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 60,
      "name": "Pribislavec",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 61,
      "name": "Selnica",
      "county": "Međimurska",
      "postCode": 40313
  },
  {
      "id": 62,
      "name": "Strahoninec",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 63,
      "name": "Sveta Marija",
      "county": "Međimurska",
      "postCode": 40320
  },
  {
      "id": 64,
      "name": "Sveti Juraj na Bregu",
      "county": "Međimurska",
      "postCode": 40000
  },
  {
      "id": 65,
      "name": "Sveti Martin na Muri",
      "county": "Međimurska",
      "postCode": 40313
  },
  {
      "id": 66,
      "name": "Šenkovec",
      "county": "Međimurska",
      "postCode": 10292
  },
  {
      "id": 67,
      "name": "Štrigova",
      "county": "Međimurska",
      "postCode": 40313
  },
  {
      "id": 68,
      "name": "Vratišinec",
      "county": "Međimurska",
      "postCode": 40315
  },
  {
      "id": 69,
      "name": "Čazma",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43240
  },
  {
      "id": 70,
      "name": "Štefanje",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43240
  },
  {
      "id": 71,
      "name": "Ivanska",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43000
  },
  {
      "id": 72,
      "name": "Darda",
      "county": "Osječko-baranjska",
      "postCode": 31326
  },
  {
      "id": 73,
      "name": "Bilje",
      "county": "Osječko-baranjska",
      "postCode": 31000
  },
  {
      "id": 74,
      "name": "Daruvar",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43500
  },
  {
      "id": 75,
      "name": "Dežanovac",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43500
  },
  {
      "id": 76,
      "name": "Đulovac",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43500
  },
  {
      "id": 77,
      "name": "Končanica",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43500
  },
  {
      "id": 78,
      "name": "Sirač",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43500
  },
  {
      "id": 79,
      "name": "Delnice",
      "county": "Primorsko-goranska",
      "postCode": 51300
  },
  {
      "id": 80,
      "name": "Mrkopalj",
      "county": "Primorsko-goranska",
      "postCode": 51300
  },
  {
      "id": 81,
      "name": "Fužine",
      "county": "Primorsko-goranska",
      "postCode": 51300
  },
  {
      "id": 82,
      "name": "Lokve",
      "county": "Primorsko-goranska",
      "postCode": 51300
  },
  {
      "id": 83,
      "name": "Brod Moravice",
      "county": "Primorsko-goranska",
      "postCode": 51326
  },
  {
      "id": 84,
      "name": "Skrad",
      "county": "Primorsko-goranska",
      "postCode": 51300
  },
  {
      "id": 85,
      "name": "Ravna Gora",
      "county": "Primorsko-goranska",
      "postCode": 51300
  },
  {
      "id": 86,
      "name": "Donja Stubica",
      "county": "Krapinsko-zagorska",
      "postCode": 49240
  },
  {
      "id": 87,
      "name": "Oroslavje",
      "county": "Krapinsko-zagorska",
      "postCode": 49243
  },
  {
      "id": 88,
      "name": "Marija Bistrica",
      "county": "Krapinsko-zagorska",
      "postCode": 49246
  },
  {
      "id": 89,
      "name": "Gornja Stubica",
      "county": "Krapinsko-zagorska",
      "postCode": 49240
  },
  {
      "id": 90,
      "name": "Stubičke Toplice",
      "county": "Krapinsko-zagorska",
      "postCode": 49240
  },
  {
      "id": 91,
      "name": "Donji Lapac",
      "county": "Ličko-senjska",
      "postCode": 53250
  },
  {
      "id": 92,
      "name": "Donji Miholjac",
      "county": "Osječko-baranjska",
      "postCode": 31540
  },
  {
      "id": 93,
      "name": "Marijanci",
      "county": "Osječko-baranjska",
      "postCode": 31551
  },
  {
      "id": 94,
      "name": "Viljevo",
      "county": "Osječko-baranjska",
      "postCode": 31540
  },
  {
      "id": 95,
      "name": "Magadenovac",
      "county": "Osječko-baranjska",
      "postCode": 31540
  },
  {
      "id": 96,
      "name": "Podravska Moslavina",
      "county": "Osječko-baranjska",
      "postCode": 31540
  },
  {
      "id": 97,
      "name": "Drniš",
      "county": "Šibensko-kninska",
      "postCode": 22320
  },
  {
      "id": 98,
      "name": "Promina",
      "county": "Šibensko-kninska",
      "postCode": 22320
  },
  {
      "id": 99,
      "name": "Ružić",
      "county": "Šibensko-kninska",
      "postCode": 22320
  },
  {
      "id": 100,
      "name": "Unešić",
      "county": "Šibensko-kninska",
      "postCode": 22323
  },
  {
      "id": 101,
      "name": "Dubrovnik",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20000
  },
  {
      "id": 102,
      "name": "Župa Dubrovačka",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20207
  },
  {
      "id": 103,
      "name": "Konavle",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20210
  },
  {
      "id": 104,
      "name": "Ston",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20230
  },
  {
      "id": 105,
      "name": "Janjina",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20246
  },
  {
      "id": 106,
      "name": "Trpanj",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20240
  },
  {
      "id": 107,
      "name": "Mljet",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20225
  },
  {
      "id": 108,
      "name": "Dubrovačko primorje",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20232
  },
  {
      "id": 109,
      "name": "Duga Resa",
      "county": "Karlovačka",
      "postCode": 47250
  },
  {
      "id": 110,
      "name": "Netretić",
      "county": "Karlovačka",
      "postCode": 47000
  },
  {
      "id": 111,
      "name": "Barilović",
      "county": "Karlovačka",
      "postCode": 47250
  },
  {
      "id": 112,
      "name": "Generalski Stol",
      "county": "Karlovačka",
      "postCode": 47250
  },
  {
      "id": 113,
      "name": "Bosiljevo",
      "county": "Karlovačka",
      "postCode": 43240
  },
  {
      "id": 114,
      "name": "Dugo Selo",
      "county": "Zagrebačka",
      "postCode": 10370
  },
  {
      "id": 115,
      "name": "Brckovljani",
      "county": "Zagrebačka",
      "postCode": 10370
  },
  {
      "id": 116,
      "name": "Rugvica",
      "county": "Zagrebačka",
      "postCode": 10370
  },
  {
      "id": 117,
      "name": "Dvor",
      "county": "Sisačko-moslavačka",
      "postCode": 44440
  },
  {
      "id": 118,
      "name": "Đakovo",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 119,
      "name": "Drenje",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 120,
      "name": "Gorjani",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 121,
      "name": "Levanjska Varoš",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 122,
      "name": "Strizivojna",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 123,
      "name": "Semeljci",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 124,
      "name": "Satnica Đakovačka",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 125,
      "name": "Punitovci",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 126,
      "name": "Trnava",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 127,
      "name": "Viškovci",
      "county": "Osječko-baranjska",
      "postCode": 31400
  },
  {
      "id": 128,
      "name": "Đurđevac",
      "county": "Koprivničko-križevačka",
      "postCode": 48350
  },
  {
      "id": 129,
      "name": "Ferdinandovac",
      "county": "Koprivničko-križevačka",
      "postCode": 48350
  },
  {
      "id": 130,
      "name": "Kalinovac",
      "county": "Koprivničko-križevačka",
      "postCode": 48350
  },
  {
      "id": 131,
      "name": "Kloštar Podravski",
      "county": "Koprivničko-križevačka",
      "postCode": 48350
  },
  {
      "id": 132,
      "name": "Podravske Sesvete",
      "county": "Koprivničko-križevačka",
      "postCode": 48350
  },
  {
      "id": 133,
      "name": "Molve",
      "county": "Koprivničko-križevačka",
      "postCode": 48350
  },
  {
      "id": 134,
      "name": "Novo Virje",
      "county": "Koprivničko-križevačka",
      "postCode": 48350
  },
  {
      "id": 135,
      "name": "Virje",
      "county": "Koprivničko-križevačka",
      "postCode": 48350
  },
  {
      "id": 136,
      "name": "Garešnica",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43280
  },
  {
      "id": 137,
      "name": "Berek",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43000
  },
  {
      "id": 138,
      "name": "Hercegovac",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43280
  },
  {
      "id": 139,
      "name": "Velika Trnovitica",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43280
  },
  {
      "id": 140,
      "name": "Glina",
      "county": "Sisačko-moslavačka",
      "postCode": 44400
  },
  {
      "id": 141,
      "name": "Gospić",
      "county": "Ličko-senjska",
      "postCode": 53000
  },
  {
      "id": 142,
      "name": "Perušić",
      "county": "Ličko-senjska",
      "postCode": 53202
  },
  {
      "id": 143,
      "name": "Karlobag",
      "county": "Ličko-senjska",
      "postCode": 53288
  },
  {
      "id": 144,
      "name": "Lovinac",
      "county": "Ličko-senjska",
      "postCode": 23241
  },
  {
      "id": 145,
      "name": "Gračac",
      "county": "Zadarska",
      "postCode": 22222
  },
  {
      "id": 146,
      "name": "Grad Zagreb",
      "county": "Grad Zagreb",
      "postCode": 10000
  },
  {
      "id": 147,
      "name": "Grubišno Polje",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43290
  },
  {
      "id": 148,
      "name": "Veliki Grđevac",
      "county": "Bjelovarsko-bilogorska",
      "postCode": 43270
  },
  {
      "id": 149,
      "name": "Gvozd",
      "county": "Sisačko-moslavačka",
      "postCode": 44410
  },
  {
      "id": 150,
      "name": "Hrvatska Kostajnica",
      "county": "Sisačko-moslavačka",
      "postCode": 44430
  },
  {
      "id": 151,
      "name": "Hrvatska Dubica",
      "county": "Sisačko-moslavačka",
      "postCode": 44430
  },
  {
      "id": 152,
      "name": "Majur",
      "county": "Sisačko-moslavačka",
      "postCode": 10342
  },
  {
      "id": 153,
      "name": "Donji Kukuruzari",
      "county": "Sisačko-moslavačka",
      "postCode": 44430
  },
  {
      "id": 154,
      "name": "Hvar",
      "county": "Splitsko-dalmatinska",
      "postCode": 21450
  },
  {
      "id": 155,
      "name": "Stari Grad",
      "county": "Splitsko-dalmatinska",
      "postCode": 21460
  },
  {
      "id": 156,
      "name": "Jelsa",
      "county": "Splitsko-dalmatinska",
      "postCode": 21465
  },
  {
      "id": 157,
      "name": "Sućuraj",
      "county": "Splitsko-dalmatinska",
      "postCode": 21469
  },
  {
      "id": 158,
      "name": "Ilok",
      "county": "Vukovarsko-srijemska",
      "postCode": 32236
  },
  {
      "id": 159,
      "name": "Imotski",
      "county": "Splitsko-dalmatinska",
      "postCode": 21260
  },
  {
      "id": 160,
      "name": "Runović",
      "county": "Splitsko-dalmatinska",
      "postCode": 21260
  },
  {
      "id": 161,
      "name": "Zmijavci",
      "county": "Splitsko-dalmatinska",
      "postCode": 21260
  },
  {
      "id": 162,
      "name": "Podbablje",
      "county": "Splitsko-dalmatinska",
      "postCode": 21262
  },
  {
      "id": 163,
      "name": "Zagvozd",
      "county": "Splitsko-dalmatinska",
      "postCode": 21270
  },
  {
      "id": 164,
      "name": "Lokvičići",
      "county": "Splitsko-dalmatinska",
      "postCode": 21260
  },
  {
      "id": 165,
      "name": "Cista",
      "county": "Splitsko-dalmatinska",
      "postCode": 21256
  },
  {
      "id": 166,
      "name": "Proložac",
      "county": "Splitsko-dalmatinska",
      "postCode": 21260
  },
  {
      "id": 167,
      "name": "Ivanec",
      "county": "Varaždinska",
      "postCode": 42240
  },
  {
      "id": 168,
      "name": "Lepoglava",
      "county": "Varaždinska",
      "postCode": 42250
  },
  {
      "id": 169,
      "name": "Bednja",
      "county": "Varaždinska",
      "postCode": 42250
  },
  {
      "id": 170,
      "name": "Maruševec",
      "county": "Varaždinska",
      "postCode": 42243
  },
  {
      "id": 171,
      "name": "Klenovnik",
      "county": "Varaždinska",
      "postCode": 42240
  },
  {
      "id": 172,
      "name": "Donja Voća",
      "county": "Varaždinska",
      "postCode": 42240
  },
  {
      "id": 173,
      "name": "Ivanić-Grad",
      "county": "Zagrebačka",
      "postCode": 10310
  },
  {
      "id": 174,
      "name": "Kloštar Ivanić",
      "county": "Zagrebačka",
      "postCode": 10310
  },
  {
      "id": 175,
      "name": "Križ",
      "county": "Zagrebačka",
      "postCode": 10315
  },
  {
      "id": 176,
      "name": "Jastrebarsko",
      "county": "Zagrebačka",
      "postCode": 10450
  },
  {
      "id": 177,
      "name": "Klinča Sela",
      "county": "Zagrebačka",
      "postCode": 10450
  },
  {
      "id": 178,
      "name": "Krašić",
      "county": "Zagrebačka",
      "postCode": 10454
  },
  {
      "id": 179,
      "name": "Pisarovina",
      "county": "Zagrebačka",
      "postCode": 10451
  },
  {
      "id": 180,
      "name": "Žumberak",
      "county": "Zagrebačka",
      "postCode": 10454
  },
  {
      "id": 181,
      "name": "Karlovac",
      "county": "Karlovačka",
      "postCode": 47000
  },
  {
      "id": 182,
      "name": "Draganić",
      "county": "Karlovačka",
      "postCode": 47000
  },
  {
      "id": 183,
      "name": "Lasinja",
      "county": "Karlovačka",
      "postCode": 47000
  },
  {
      "id": 184,
      "name": "Krnjak",
      "county": "Karlovačka",
      "postCode": 47220
  },
  {
      "id": 185,
      "name": "Kaštela",
      "county": "Splitsko-dalmatinska",
      "postCode": 21214
  },
  {
      "id": 186,
      "name": "Primorski Dolac",
      "county": "Splitsko-dalmatinska",
      "postCode": 21220
  },
  {
      "id": 187,
      "name": "Prgomet",
      "county": "Splitsko-dalmatinska",
      "postCode": 21220
  },
  {
      "id": 188,
      "name": "Lećevica",
      "county": "Splitsko-dalmatinska",
      "postCode": 21204
  },
  {
      "id": 189,
      "name": "Klanjec",
      "county": "Krapinsko-zagorska",
      "postCode": 49290
  },
  {
      "id": 190,
      "name": "Tuhelj",
      "county": "Krapinsko-zagorska",
      "postCode": 49290
  },
  {
      "id": 191,
      "name": "Kumrovec",
      "county": "Krapinsko-zagorska",
      "postCode": 49290
  },
  {
      "id": 192,
      "name": "Zagorska Sela",
      "county": "Krapinsko-zagorska",
      "postCode": 49290
  },
  {
      "id": 193,
      "name": "Kraljevec na Sutli",
      "county": "Krapinsko-zagorska",
      "postCode": 49290
  },
  {
      "id": 194,
      "name": "Knin",
      "county": "Šibensko-kninska",
      "postCode": 22300
  },
  {
      "id": 195,
      "name": "Biskupija",
      "county": "Šibensko-kninska",
      "postCode": 22300
  },
  {
      "id": 196,
      "name": "Civljane",
      "county": "Šibensko-kninska",
      "postCode": 22300
  },
  {
      "id": 197,
      "name": "Ervenik",
      "county": "Šibensko-kninska",
      "postCode": 22300
  },
  {
      "id": 198,
      "name": "Kijevo",
      "county": "Šibensko-kninska",
      "postCode": 22300
  },
  {
      "id": 199,
      "name": "Kistanje",
      "county": "Šibensko-kninska",
      "postCode": 22300
  },
  {
      "id": 200,
      "name": "Koprivnica",
      "county": "Koprivničko-križevačka",
      "postCode": 48000
  },
  {
      "id": 201,
      "name": "Drnje",
      "county": "Koprivničko-križevačka",
      "postCode": 48316
  },
  {
      "id": 202,
      "name": "Đelekovec",
      "county": "Koprivničko-križevačka",
      "postCode": 48316
  },
  {
      "id": 203,
      "name": "Gola",
      "county": "Koprivničko-križevačka",
      "postCode": 48331
  },
  {
      "id": 204,
      "name": "Hlebine",
      "county": "Koprivničko-križevačka",
      "postCode": 48316
  },
  {
      "id": 205,
      "name": "Koprivnički Bregi",
      "county": "Koprivničko-križevačka",
      "postCode": 48000
  },
  {
      "id": 206,
      "name": "Koprivnički Ivanec",
      "county": "Koprivničko-križevačka",
      "postCode": 48000
  },
  {
      "id": 207,
      "name": "Legrad",
      "county": "Koprivničko-križevačka",
      "postCode": 48316
  },
  {
      "id": 208,
      "name": "Novigrad Podravski",
      "county": "Koprivničko-križevačka",
      "postCode": 48350
  },
  {
      "id": 209,
      "name": "Peteranec",
      "county": "Koprivničko-križevačka",
      "postCode": 48316
  },
  {
      "id": 210,
      "name": "Rasinja",
      "county": "Koprivničko-križevačka",
      "postCode": 48000
  },
  {
      "id": 211,
      "name": "Sokolovac",
      "county": "Koprivničko-križevačka",
      "postCode": 31300
  },
  {
      "id": 212,
      "name": "Korčula",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20260
  },
  {
      "id": 213,
      "name": "Orebić",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20250
  },
  {
      "id": 214,
      "name": "Lumbarda",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20260
  },
  {
      "id": 215,
      "name": "Smokvica",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20271
  },
  {
      "id": 216,
      "name": "Blato",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20225
  },
  {
      "id": 217,
      "name": "Vela Luka",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20270
  },
  {
      "id": 218,
      "name": "Krapina",
      "county": "Krapinsko-zagorska",
      "postCode": 49000
  },
  {
      "id": 219,
      "name": "Đurmanec",
      "county": "Krapinsko-zagorska",
      "postCode": 49225
  },
  {
      "id": 220,
      "name": "Jesenje",
      "county": "Krapinsko-zagorska",
      "postCode": 49233
  },
  {
      "id": 221,
      "name": "Petrovsko",
      "county": "Krapinsko-zagorska",
      "postCode": 49000
  },
  {
      "id": 222,
      "name": "Radoboj",
      "county": "Krapinsko-zagorska",
      "postCode": 49000
  },
  {
      "id": 223,
      "name": "Križevci",
      "county": "Koprivničko-križevačka",
      "postCode": 48260
  },
  {
      "id": 224,
      "name": "Kalnik",
      "county": "Koprivničko-križevačka",
      "postCode": 48260
  },
  {
      "id": 225,
      "name": "Gornja Rijeka",
      "county": "Koprivničko-križevačka",
      "postCode": 48260
  },
  {
      "id": 226,
      "name": "Sv. Petar Orehovec",
      "county": "Koprivničko-križevačka",
      "postCode": 48260
  },
  {
      "id": 227,
      "name": "Sv. Ivan Žabno",
      "county": "Koprivničko-križevačka",
      "postCode": 48214
  },
  {
      "id": 228,
      "name": "Krk",
      "county": "Primorsko-goranska",
      "postCode": 51500
  },
  {
      "id": 229,
      "name": "Omišalj",
      "county": "Primorsko-goranska",
      "postCode": 51511
  },
  {
      "id": 230,
      "name": "Malinska",
      "county": "Primorsko-goranska",
      "postCode": 51511
  },
  {
      "id": 231,
      "name": "Punat",
      "county": "Primorsko-goranska",
      "postCode": 51500
  },
  {
      "id": 232,
      "name": "Baška",
      "county": "Primorsko-goranska",
      "postCode": 51523
  },
  {
      "id": 233,
      "name": "Vrbnik",
      "county": "Primorsko-goranska",
      "postCode": 22300
  },
  {
      "id": 234,
      "name": "Dobrinj",
      "county": "Primorsko-goranska",
      "postCode": 51511
  },
  {
      "id": 235,
      "name": "Kutina",
      "county": "Sisačko-moslavačka",
      "postCode": 44320
  },
  {
      "id": 236,
      "name": "Popovača",
      "county": "Sisačko-moslavačka",
      "postCode": 44317
  },
  {
      "id": 237,
      "name": "Velika Ludina",
      "county": "Sisačko-moslavačka",
      "postCode": 44317
  },
  {
      "id": 238,
      "name": "Labin",
      "county": "Istarska",
      "postCode": 21220
  },
  {
      "id": 239,
      "name": "Kršan",
      "county": "Istarska",
      "postCode": 52333
  },
  {
      "id": 240,
      "name": "Pićan",
      "county": "Istarska",
      "postCode": 52000
  },
  {
      "id": 241,
      "name": "Raša",
      "county": "Istarska",
      "postCode": 52220
  },
  {
      "id": 242,
      "name": "Sv. Nedjelja",
      "county": "Istarska",
      "postCode": 52231
  },
  {
      "id": 243,
      "name": "Ludbreg",
      "county": "Varaždinska",
      "postCode": 42230
  },
  {
      "id": 244,
      "name": "Sveti Đurđ",
      "county": "Varaždinska",
      "postCode": 42230
  },
  {
      "id": 245,
      "name": "Martijanec",
      "county": "Varaždinska",
      "postCode": 42230
  },
  {
      "id": 246,
      "name": "Veliki Bukovec",
      "county": "Varaždinska",
      "postCode": 42230
  },
  {
      "id": 247,
      "name": "Mali Bukovec",
      "county": "Varaždinska",
      "postCode": 42230
  },
  {
      "id": 248,
      "name": "Makarska",
      "county": "Splitsko-dalmatinska",
      "postCode": 21300
  },
  {
      "id": 249,
      "name": "Brela",
      "county": "Splitsko-dalmatinska",
      "postCode": 21320
  },
  {
      "id": 250,
      "name": "Baška Voda",
      "county": "Splitsko-dalmatinska",
      "postCode": 21320
  },
  {
      "id": 251,
      "name": "Tučepi",
      "county": "Splitsko-dalmatinska",
      "postCode": 21300
  },
  {
      "id": 252,
      "name": "Podgora",
      "county": "Splitsko-dalmatinska",
      "postCode": 20232
  },
  {
      "id": 253,
      "name": "Gradac",
      "county": "Splitsko-dalmatinska",
      "postCode": 21330
  },
  {
      "id": 254,
      "name": "Mali Lošinj",
      "county": "Primorsko-goranska",
      "postCode": 51550
  },
  {
      "id": 255,
      "name": "Cres",
      "county": "Primorsko-goranska",
      "postCode": 51557
  },
  {
      "id": 256,
      "name": "Metković",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20350
  },
  {
      "id": 257,
      "name": "Opuzen",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20355
  },
  {
      "id": 258,
      "name": "Kula Norinska",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20350
  },
  {
      "id": 259,
      "name": "Slivno",
      "county": "Dubrovačko-neretvanska",
      "postCode": 21270
  },
  {
      "id": 260,
      "name": "Zažablje",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20353
  },
  {
      "id": 261,
      "name": "Pojezerje",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20342
  },
  {
      "id": 262,
      "name": "Našice",
      "county": "Osječko-baranjska",
      "postCode": 31500
  },
  {
      "id": 263,
      "name": "Donja Motičina",
      "county": "Osječko-baranjska",
      "postCode": 31500
  },
  {
      "id": 264,
      "name": "Đurđenovac",
      "county": "Osječko-baranjska",
      "postCode": 31500
  },
  {
      "id": 265,
      "name": "Feričanci",
      "county": "Osječko-baranjska",
      "postCode": 31500
  },
  {
      "id": 266,
      "name": "Koška",
      "county": "Osječko-baranjska",
      "postCode": 31500
  },
  {
      "id": 267,
      "name": "Podgorač",
      "county": "Osječko-baranjska",
      "postCode": 31500
  },
  {
      "id": 268,
      "name": "Nova Gradiška",
      "county": "Brodsko-posavska",
      "postCode": 35400
  },
  {
      "id": 269,
      "name": "Okučani",
      "county": "Brodsko-posavska",
      "postCode": 35430
  },
  {
      "id": 270,
      "name": "Stara Gradiška",
      "county": "Brodsko-posavska",
      "postCode": 35430
  },
  {
      "id": 271,
      "name": "Gornji Bogićevci",
      "county": "Brodsko-posavska",
      "postCode": 35430
  },
  {
      "id": 272,
      "name": "Dragalić",
      "county": "Brodsko-posavska",
      "postCode": 35400
  },
  {
      "id": 273,
      "name": "Cernik",
      "county": "Brodsko-posavska",
      "postCode": 10454
  },
  {
      "id": 274,
      "name": "Rešetari",
      "county": "Brodsko-posavska",
      "postCode": 35400
  },
  {
      "id": 275,
      "name": "Vrbje",
      "county": "Brodsko-posavska",
      "postCode": 35400
  },
  {
      "id": 276,
      "name": "Staro Petrovo Selo",
      "county": "Brodsko-posavska",
      "postCode": 35420
  },
  {
      "id": 277,
      "name": "Davor",
      "county": "Brodsko-posavska",
      "postCode": 35400
  },
  {
      "id": 278,
      "name": "Nova Kapela",
      "county": "Brodsko-posavska",
      "postCode": 10342
  },
  {
      "id": 279,
      "name": "Novi Marof",
      "county": "Varaždinska",
      "postCode": 42220
  },
  {
      "id": 280,
      "name": "Varaždinske Toplice",
      "county": "Varaždinska",
      "postCode": 42223
  },
  {
      "id": 281,
      "name": "Ljubešćica",
      "county": "Varaždinska",
      "postCode": 42220
  },
  {
      "id": 282,
      "name": "Breznički Hum",
      "county": "Varaždinska",
      "postCode": 42220
  },
  {
      "id": 283,
      "name": "Breznica",
      "county": "Varaždinska",
      "postCode": 42220
  },
  {
      "id": 284,
      "name": "Viskovo",
      "county": "Varaždinska",
      "postCode": 42220
  },
  {
      "id": 285,
      "name": "Novi Vinodolski",
      "county": "Primorsko-goranska",
      "postCode": 51250
  },
  {
      "id": 286,
      "name": "Vinodolska Općina",
      "county": "Primorsko-goranska",
      "postCode": 51253
  },
  {
      "id": 287,
      "name": "Novska",
      "county": "Sisačko-moslavačka",
      "postCode": 44330
  },
  {
      "id": 288,
      "name": "Jasenovac",
      "county": "Sisačko-moslavačka",
      "postCode": 31300
  },
  {
      "id": 289,
      "name": "Lipovljani",
      "county": "Sisačko-moslavačka",
      "postCode": 44330
  },
  {
      "id": 290,
      "name": "Obrovac",
      "county": "Zadarska",
      "postCode": 23450
  },
  {
      "id": 291,
      "name": "Ogulin",
      "county": "Karlovačka",
      "postCode": 47300
  },
  {
      "id": 292,
      "name": "Josipdol",
      "county": "Karlovačka",
      "postCode": 47300
  },
  {
      "id": 293,
      "name": "Plaški",
      "county": "Karlovačka",
      "postCode": 47300
  },
  {
      "id": 294,
      "name": "Saborsko",
      "county": "Karlovačka",
      "postCode": 47300
  },
  {
      "id": 295,
      "name": "Tounj",
      "county": "Karlovačka",
      "postCode": 47300
  },
  {
      "id": 296,
      "name": "Omiš",
      "county": "Splitsko-dalmatinska",
      "postCode": 21310
  },
  {
      "id": 297,
      "name": "Dugi Rat",
      "county": "Splitsko-dalmatinska",
      "postCode": 21315
  },
  {
      "id": 298,
      "name": "Šestanovac",
      "county": "Splitsko-dalmatinska",
      "postCode": 21250
  },
  {
      "id": 299,
      "name": "Zadvarje",
      "county": "Splitsko-dalmatinska",
      "postCode": 21250
  },
  {
      "id": 300,
      "name": "Opatija",
      "county": "Primorsko-goranska",
      "postCode": 51410
  },
  {
      "id": 301,
      "name": "Lovran",
      "county": "Primorsko-goranska",
      "postCode": 51415
  },
  {
      "id": 302,
      "name": "Mošćenička Draga",
      "county": "Primorsko-goranska",
      "postCode": 51417
  },
  {
      "id": 303,
      "name": "Matulji",
      "county": "Primorsko-goranska",
      "postCode": 51211
  },
  {
      "id": 304,
      "name": "Orahovica",
      "county": "Virovitičko-podravska",
      "postCode": 33515
  },
  {
      "id": 305,
      "name": "Crnac",
      "county": "Virovitičko-podravska",
      "postCode": 33515
  },
  {
      "id": 306,
      "name": "Čačinci",
      "county": "Virovitičko-podravska",
      "postCode": 33515
  },
  {
      "id": 307,
      "name": "Zdenci",
      "county": "Virovitičko-podravska",
      "postCode": 33515
  },
  {
      "id": 308,
      "name": "Osijek",
      "county": "Osječko-baranjska",
      "postCode": 31000
  },
  {
      "id": 309,
      "name": "Antunovac",
      "county": "Osječko-baranjska",
      "postCode": 31200
  },
  {
      "id": 310,
      "name": "Čepin",
      "county": "Osječko-baranjska",
      "postCode": 31431
  },
  {
      "id": 311,
      "name": "Erdut",
      "county": "Osječko-baranjska",
      "postCode": 31226
  },
  {
      "id": 312,
      "name": "Ernestinovo",
      "county": "Osječko-baranjska",
      "postCode": 31200
  },
  {
      "id": 313,
      "name": "Šodolovci",
      "county": "Osječko-baranjska",
      "postCode": 31200
  },
  {
      "id": 314,
      "name": "Vladislavci",
      "county": "Osječko-baranjska",
      "postCode": 31431
  },
  {
      "id": 315,
      "name": "Vuka",
      "county": "Osječko-baranjska",
      "postCode": 31431
  },
  {
      "id": 316,
      "name": "Otočac",
      "county": "Ličko-senjska",
      "postCode": 53220
  },
  {
      "id": 317,
      "name": "Brinje",
      "county": "Ličko-senjska",
      "postCode": 53260
  },
  {
      "id": 318,
      "name": "Vrhovine",
      "county": "Ličko-senjska",
      "postCode": 53220
  },
  {
      "id": 319,
      "name": "Ozalj",
      "county": "Karlovačka",
      "postCode": 47280
  },
  {
      "id": 320,
      "name": "Kamanje",
      "county": "Karlovačka",
      "postCode": 47280
  },
  {
      "id": 321,
      "name": "Ribnik",
      "county": "Karlovačka",
      "postCode": 47000
  },
  {
      "id": 322,
      "name": "Žakanje",
      "county": "Karlovačka",
      "postCode": 47000
  },
  {
      "id": 323,
      "name": "Pag",
      "county": "Zadarska",
      "postCode": 23250
  },
  {
      "id": 324,
      "name": "Novalja",
      "county": "Zadarska",
      "postCode": 53291
  },
  {
      "id": 325,
      "name": "Kolan",
      "county": "Zadarska",
      "postCode": 23250
  },
  {
      "id": 326,
      "name": "Povljana",
      "county": "Zadarska",
      "postCode": 23250
  },
  {
      "id": 327,
      "name": "Pakrac",
      "county": "Požeško-slavonska",
      "postCode": 34550
  },
  {
      "id": 328,
      "name": "Lipik",
      "county": "Požeško-slavonska",
      "postCode": 34550
  },
  {
      "id": 329,
      "name": "Pazin",
      "county": "Istarska",
      "postCode": 52000
  },
  {
      "id": 330,
      "name": "Cerovlje",
      "county": "Istarska",
      "postCode": 52000
  },
  {
      "id": 331,
      "name": "Gračišće",
      "county": "Istarska",
      "postCode": 52000
  },
  {
      "id": 332,
      "name": "Karojba",
      "county": "Istarska",
      "postCode": 52424
  },
  {
      "id": 333,
      "name": "Lupoglav",
      "county": "Istarska",
      "postCode": 10370
  },
  {
      "id": 334,
      "name": "Motovun",
      "county": "Istarska",
      "postCode": 52424
  },
  {
      "id": 335,
      "name": "Sveti Petar u Šumi",
      "county": "Istarska",
      "postCode": 52341
  },
  {
      "id": 336,
      "name": "Tinjan",
      "county": "Istarska",
      "postCode": 52000
  },
  {
      "id": 337,
      "name": "Petrinja",
      "county": "Sisačko-moslavačka",
      "postCode": 44250
  },
  {
      "id": 338,
      "name": "Plitvička jezera",
      "county": "Ličko-senjska",
      "postCode": 53230
  },
  {
      "id": 339,
      "name": "Udbina",
      "county": "Ličko-senjska",
      "postCode": 53234
  },
  {
      "id": 340,
      "name": "Ploče",
      "county": "Dubrovačko-neretvanska",
      "postCode": 20340
  },
  {
      "id": 341,
      "name": "Poreč",
      "county": "Istarska",
      "postCode": 34340
  },
  {
      "id": 342,
      "name": "Vrsar",
      "county": "Istarska",
      "postCode": 52450
  },
  {
      "id": 343,
      "name": "Funtana",
      "county": "Istarska",
      "postCode": 52440
  },
  {
      "id": 344,
      "name": "Sv. Lovreč",
      "county": "Istarska",
      "postCode": 52440
  },
  {
      "id": 345,
      "name": "Višnjan",
      "county": "Istarska",
      "postCode": 52440
  },
  {
      "id": 346,
      "name": "Vižinada",
      "county": "Istarska",
      "postCode": 52440
  },
  {
      "id": 347,
      "name": "Kaštelir-Labinci",
      "county": "Istarska",
      "postCode": 52464
  },
  {
      "id": 348,
      "name": "Tar-Vabriga",
      "county": "Istarska",
      "postCode": 52465
  },
  {
      "id": 349,
      "name": "Požega",
      "county": "Požeško-slavonska",
      "postCode": 34000
  },
  {
      "id": 350,
      "name": "Pleternica",
      "county": "Požeško-slavonska",
      "postCode": 34310
  },
  {
      "id": 351,
      "name": "Kutjevo",
      "county": "Požeško-slavonska",
      "postCode": 34340
  },
  {
      "id": 352,
      "name": "Brestovac",
      "county": "Požeško-slavonska",
      "postCode": 34000
  },
  {
      "id": 353,
      "name": "Čaglin",
      "county": "Požeško-slavonska",
      "postCode": 34340
  },
  {
      "id": 354,
      "name": "Kaptol",
      "county": "Požeško-slavonska",
      "postCode": 34000
  },
  {
      "id": 355,
      "name": "Jakšić",
      "county": "Požeško-slavonska",
      "postCode": 34000
  },
  {
      "id": 356,
      "name": "Velika",
      "county": "Požeško-slavonska",
      "postCode": 34000
  },
  {
      "id": 357,
      "name": "Pregrada",
      "county": "Krapinsko-zagorska",
      "postCode": 49218
  },
  {
      "id": 358,
      "name": "Desinić",
      "county": "Krapinsko-zagorska",
      "postCode": 49216
  },
  {
      "id": 359,
      "name": "Hum na Sutli",
      "county": "Krapinsko-zagorska",
      "postCode": 49231
  },
  {
      "id": 360,
      "name": "Pula",
      "county": "Istarska",
      "postCode": 52100
  },
  {
      "id": 361,
      "name": "Vodnjan",
      "county": "Istarska",
      "postCode": 52100
  },
  {
      "id": 362,
      "name": "Medulin",
      "county": "Istarska",
      "postCode": 52100
  },
  {
      "id": 363,
      "name": "Ližnjan",
      "county": "Istarska",
      "postCode": 52100
  },
  {
      "id": 364,
      "name": "Fažana",
      "county": "Istarska",
      "postCode": 52100
  },
  {
      "id": 365,
      "name": "Svetvinčenat",
      "county": "Istarska",
      "postCode": 52341
  },
  {
      "id": 366,
      "name": "Marčana",
      "county": "Istarska",
      "postCode": 52207
  },
  {
      "id": 367,
      "name": "Barban",
      "county": "Istarska",
      "postCode": 52207
  },
  {
      "id": 368,
      "name": "Rab",
      "county": "Primorsko-goranska",
      "postCode": 51280
  },
  {
      "id": 369,
      "name": "Lopar",
      "county": "Primorsko-goranska",
      "postCode": 51280
  },
  {
      "id": 370,
      "name": "Rijeka",
      "county": "Primorsko-goranska",
      "postCode": 51000
  },
  {
      "id": 371,
      "name": "Bakar",
      "county": "Primorsko-goranska",
      "postCode": 51262
  },
  {
      "id": 372,
      "name": "Kastav",
      "county": "Primorsko-goranska",
      "postCode": 51215
  },
  {
      "id": 373,
      "name": "Kraljevica",
      "county": "Primorsko-goranska",
      "postCode": 51262
  },
  {
      "id": 374,
      "name": "Čavle",
      "county": "Primorsko-goranska",
      "postCode": 51218
  },
  {
      "id": 375,
      "name": "Jelenje",
      "county": "Primorsko-goranska",
      "postCode": 51218
  },
  {
      "id": 376,
      "name": "Klana",
      "county": "Primorsko-goranska",
      "postCode": 51217
  },
  {
      "id": 377,
      "name": "Kostrena",
      "county": "Primorsko-goranska",
      "postCode": 51000
  },
  {
      "id": 378,
      "name": "Viškovo",
      "county": "Primorsko-goranska",
      "postCode": 51216
  },
  {
      "id": 379,
      "name": "Rovinj",
      "county": "Istarska",
      "postCode": 52210
  },
  {
      "id": 380,
      "name": "Žminj",
      "county": "Istarska",
      "postCode": 52341
  },
  {
      "id": 381,
      "name": "Kanfanar",
      "county": "Istarska",
      "postCode": 52341
  },
  {
      "id": 382,
      "name": "Bale",
      "county": "Istarska",
      "postCode": 52210
  },
  {
      "id": 383,
      "name": "Samobor",
      "county": "Zagrebačka",
      "postCode": 10430
  },
  {
      "id": 384,
      "name": "Sveta Nedjelja",
      "county": "Zagrebačka",
      "postCode": 21465
  },
  {
      "id": 385,
      "name": "Stupnik",
      "county": "Zagrebačka",
      "postCode": 10255
  },
  {
      "id": 386,
      "name": "Senj",
      "county": "Ličko-senjska",
      "postCode": 52420
  },
  {
      "id": 387,
      "name": "Sinj",
      "county": "Splitsko-dalmatinska",
      "postCode": 21230
  },
  {
      "id": 388,
      "name": "Trilj",
      "county": "Splitsko-dalmatinska",
      "postCode": 21240
  },
  {
      "id": 389,
      "name": "Hrvace",
      "county": "Splitsko-dalmatinska",
      "postCode": 21233
  },
  {
      "id": 390,
      "name": "Otok",
      "county": "Splitsko-dalmatinska",
      "postCode": 20355
  },
  {
      "id": 391,
      "name": "Dicmo",
      "county": "Splitsko-dalmatinska",
      "postCode": 21232
  },
  {
      "id": 392,
      "name": "Sisak",
      "county": "Sisačko-moslavačka",
      "postCode": 44000
  },
  {
      "id": 393,
      "name": "Sunja",
      "county": "Sisačko-moslavačka",
      "postCode": 44210
  },
  {
      "id": 394,
      "name": "Martinska Ves",
      "county": "Sisačko-moslavačka",
      "postCode": 10340
  },
  {
      "id": 395,
      "name": "Lekenik",
      "county": "Sisačko-moslavačka",
      "postCode": 44250
  },
  {
      "id": 396,
      "name": "Slatina",
      "county": "Virovitičko-podravska",
      "postCode": 10340
  },
  {
      "id": 397,
      "name": "Mikleuš",
      "county": "Virovitičko-podravska",
      "postCode": 33515
  },
  {
      "id": 398,
      "name": "Voćin",
      "county": "Virovitičko-podravska",
      "postCode": 33520
  },
  {
      "id": 399,
      "name": "N. Bukovica",
      "county": "Virovitičko-podravska",
      "postCode": 33520
  },
  {
      "id": 400,
      "name": "Čađavica",
      "county": "Virovitičko-podravska",
      "postCode": 33520
  },
  {
      "id": 401,
      "name": "Sopje",
      "county": "Virovitičko-podravska",
      "postCode": 33520
  },
  {
      "id": 402,
      "name": "Slavonski Brod",
      "county": "Brodsko-posavska",
      "postCode": 35000
  },
  {
      "id": 403,
      "name": "Bukovlje",
      "county": "Brodsko-posavska",
      "postCode": 35000
  },
  {
      "id": 404,
      "name": "Brodski Stupnik",
      "county": "Brodsko-posavska",
      "postCode": 35252
  },
  {
      "id": 405,
      "name": "Bebrina",
      "county": "Brodsko-posavska",
      "postCode": 35000
  },
  {
      "id": 406,
      "name": "Donji Andrijevci",
      "county": "Brodsko-posavska",
      "postCode": 35214
  },
  {
      "id": 407,
      "name": "Garčin",
      "county": "Brodsko-posavska",
      "postCode": 35212
  },
  {
      "id": 408,
      "name": "Gornja Vrba",
      "county": "Brodsko-posavska",
      "postCode": 35000
  },
  {
      "id": 409,
      "name": "Gundinci",
      "county": "Brodsko-posavska",
      "postCode": 35222
  },
  {
      "id": 410,
      "name": "Klakar",
      "county": "Brodsko-posavska",
      "postCode": 35000
  },
  {
      "id": 411,
      "name": "Oprisavci",
      "county": "Brodsko-posavska",
      "postCode": 35212
  },
  {
      "id": 412,
      "name": "Oriovac",
      "county": "Brodsko-posavska",
      "postCode": 35250
  },
  {
      "id": 516,
      "name": "Zadar",
      "county": "Zadarska",
      "postCode": 23000
  },
  {
      "id": 413,
      "name": "Podcrkavlje",
      "county": "Brodsko-posavska",
      "postCode": 35000
  },
  {
      "id": 414,
      "name": "Sibinj",
      "county": "Brodsko-posavska",
      "postCode": 35252
  },
  {
      "id": 415,
      "name": "Sikirevci",
      "county": "Brodsko-posavska",
      "postCode": 35222
  },
  {
      "id": 416,
      "name": "Slavonski Šamac",
      "county": "Brodsko-posavska",
      "postCode": 35220
  },
  {
      "id": 417,
      "name": "Velika Kopanica",
      "county": "Brodsko-posavska",
      "postCode": 35214
  },
  {
      "id": 418,
      "name": "Vrpolje",
      "county": "Brodsko-posavska",
      "postCode": 21240
  },
  {
      "id": 419,
      "name": "Slunj",
      "county": "Karlovačka",
      "postCode": 47240
  },
  {
      "id": 420,
      "name": "Cetingrad",
      "county": "Karlovačka",
      "postCode": 47240
  },
  {
      "id": 421,
      "name": "Rakovica",
      "county": "Karlovačka",
      "postCode": 47240
  },
  {
      "id": 422,
      "name": "Solin",
      "county": "Splitsko-dalmatinska",
      "postCode": 21210
  },
  {
      "id": 423,
      "name": "Klis",
      "county": "Splitsko-dalmatinska",
      "postCode": 21204
  },
  {
      "id": 424,
      "name": "Dugopolje",
      "county": "Splitsko-dalmatinska",
      "postCode": 21204
  },
  {
      "id": 425,
      "name": "Muć",
      "county": "Splitsko-dalmatinska",
      "postCode": 21247
  },
  {
      "id": 426,
      "name": "Split",
      "county": "Splitsko-dalmatinska",
      "postCode": 21000
  },
  {
      "id": 427,
      "name": "Šolta",
      "county": "Splitsko-dalmatinska",
      "postCode": 21430
  },
  {
      "id": 428,
      "name": "Podstrana",
      "county": "Splitsko-dalmatinska",
      "postCode": 21312
  },
  {
      "id": 429,
      "name": "Supetar",
      "county": "Splitsko-dalmatinska",
      "postCode": 21400
  },
  {
      "id": 430,
      "name": "Bol",
      "county": "Splitsko-dalmatinska",
      "postCode": 21420
  },
  {
      "id": 431,
      "name": "Nerežišća",
      "county": "Splitsko-dalmatinska",
      "postCode": 21400
  },
  {
      "id": 432,
      "name": "Milna",
      "county": "Splitsko-dalmatinska",
      "postCode": 21405
  },
  {
      "id": 433,
      "name": "Sutivan",
      "county": "Splitsko-dalmatinska",
      "postCode": 21400
  },
  {
      "id": 434,
      "name": "Postira",
      "county": "Splitsko-dalmatinska",
      "postCode": 21400
  },
  {
      "id": 435,
      "name": "Pućišća",
      "county": "Splitsko-dalmatinska",
      "postCode": 21412
  },
  {
      "id": 436,
      "name": "Selca",
      "county": "Splitsko-dalmatinska",
      "postCode": 21425
  },
  {
      "id": 437,
      "name": "Sv. Ivan Zelina",
      "county": "Zagrebačka",
      "postCode": 10380
  },
  {
      "id": 438,
      "name": "Bedenica",
      "county": "Zagrebačka",
      "postCode": 10380
  },
  {
      "id": 439,
      "name": "Šibenik",
      "county": "Šibensko-kninska",
      "postCode": 22000
  },
  {
      "id": 440,
      "name": "Skradin",
      "county": "Šibensko-kninska",
      "postCode": 22222
  },
  {
      "id": 441,
      "name": "Primošten",
      "county": "Šibensko-kninska",
      "postCode": 22202
  },
  {
      "id": 442,
      "name": "Rogoznica",
      "county": "Šibensko-kninska",
      "postCode": 22202
  },
  {
      "id": 443,
      "name": "Tribunj",
      "county": "Šibensko-kninska",
      "postCode": 22211
  },
  {
      "id": 444,
      "name": "Pirovac",
      "county": "Šibensko-kninska",
      "postCode": 22213
  },
  {
      "id": 445,
      "name": "Murter-Kornati",
      "county": "Šibensko-kninska",
      "postCode": 22244
  },
  {
      "id": 446,
      "name": "Tisno",
      "county": "Šibensko-kninska",
      "postCode": 22240
  },
  {
      "id": 447,
      "name": "Tribunj",
      "county": "Šibensko-kninska",
      "postCode": 22211
  },
  {
      "id": 448,
      "name": "Topusko",
      "county": "Sisačko-moslavačka",
      "postCode": 44400
  },
  {
      "id": 449,
      "name": "Trogir",
      "county": "Splitsko-dalmatinska",
      "postCode": 21220
  },
  {
      "id": 450,
      "name": "Okrug",
      "county": "Splitsko-dalmatinska",
      "postCode": 21223
  },
  {
      "id": 451,
      "name": "Seget",
      "county": "Splitsko-dalmatinska",
      "postCode": 21220
  },
  {
      "id": 452,
      "name": "Marina",
      "county": "Splitsko-dalmatinska",
      "postCode": 21222
  },
  {
      "id": 453,
      "name": "Valpovo",
      "county": "Osječko-baranjska",
      "postCode": 31550
  },
  {
      "id": 454,
      "name": "Belišće",
      "county": "Osječko-baranjska",
      "postCode": 31551
  },
  {
      "id": 455,
      "name": "Bizovac",
      "county": "Osječko-baranjska",
      "postCode": 31550
  },
  {
      "id": 456,
      "name": "Petrijevci",
      "county": "Osječko-baranjska",
      "postCode": 31550
  },
  {
      "id": 457,
      "name": "Varaždin",
      "county": "Varaždinska",
      "postCode": 42000
  },
  {
      "id": 458,
      "name": "Cestica",
      "county": "Varaždinska",
      "postCode": 42208
  },
  {
      "id": 459,
      "name": "Sračinec",
      "county": "Varaždinska",
      "postCode": 42000
  },
  {
      "id": 460,
      "name": "Petrijanec",
      "county": "Varaždinska",
      "postCode": 42208
  },
  {
      "id": 461,
      "name": "Vidovec",
      "county": "Varaždinska",
      "postCode": 42000
  },
  {
      "id": 462,
      "name": "G. Kneginec",
      "county": "Varaždinska",
      "postCode": 42204
  },
  {
      "id": 463,
      "name": "Beretinec",
      "county": "Varaždinska",
      "postCode": 42204
  },
  {
      "id": 464,
      "name": "Sv. Ilija",
      "county": "Varaždinska",
      "postCode": 42204
  },
  {
      "id": 465,
      "name": "Trnovec",
      "county": "Varaždinska",
      "postCode": 40000
  },
  {
      "id": 466,
      "name": "Jalžabet",
      "county": "Varaždinska",
      "postCode": 42202
  },
  {
      "id": 467,
      "name": "Vinica",
      "county": "Varaždinska",
      "postCode": 42243
  },
  {
      "id": 468,
      "name": "Velika Gorica",
      "county": "Zagrebačka",
      "postCode": 10410
  },
  {
      "id": 469,
      "name": "Pokupsko",
      "county": "Zagrebačka",
      "postCode": 10414
  },
  {
      "id": 470,
      "name": "Kravarsko",
      "county": "Zagrebačka",
      "postCode": 10413
  },
  {
      "id": 471,
      "name": "Orle",
      "county": "Zagrebačka",
      "postCode": 10410
  },
  {
      "id": 472,
      "name": "Vinkovci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32100
  },
  {
      "id": 473,
      "name": "Otok",
      "county": "Vukovarsko-srijemska",
      "postCode": 20355
  },
  {
      "id": 474,
      "name": "Andrijaševci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32100
  },
  {
      "id": 475,
      "name": "Ivankovo",
      "county": "Vukovarsko-srijemska",
      "postCode": 32100
  },
  {
      "id": 476,
      "name": "Jarmina",
      "county": "Vukovarsko-srijemska",
      "postCode": 32100
  },
  {
      "id": 477,
      "name": "Markušica",
      "county": "Vukovarsko-srijemska",
      "postCode": 32100
  },
  {
      "id": 478,
      "name": "Nijemci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32252
  },
  {
      "id": 479,
      "name": "Nuštar",
      "county": "Vukovarsko-srijemska",
      "postCode": 32100
  },
  {
      "id": 480,
      "name": "Privlaka",
      "county": "Vukovarsko-srijemska",
      "postCode": 23233
  },
  {
      "id": 481,
      "name": "Stari Jankovci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32242
  },
  {
      "id": 482,
      "name": "Stari Mikanovci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32284
  },
  {
      "id": 483,
      "name": "Tordinci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32100
  },
  {
      "id": 484,
      "name": "Vođinci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32284
  },
  {
      "id": 485,
      "name": "Virovitica",
      "county": "Virovitičko-podravska",
      "postCode": 33000
  },
  {
      "id": 486,
      "name": "Pitomača",
      "county": "Virovitičko-podravska",
      "postCode": 33405
  },
  {
      "id": 487,
      "name": "Lukač",
      "county": "Virovitičko-podravska",
      "postCode": 33000
  },
  {
      "id": 488,
      "name": "Suhopolje",
      "county": "Virovitičko-podravska",
      "postCode": 33410
  },
  {
      "id": 489,
      "name": "Špišić Bukovica",
      "county": "Virovitičko-podravska",
      "postCode": 33000
  },
  {
      "id": 490,
      "name": "Gradina",
      "county": "Virovitičko-podravska",
      "postCode": 22222
  },
  {
      "id": 491,
      "name": "Vis",
      "county": "Splitsko-dalmatinska",
      "postCode": 21480
  },
  {
      "id": 492,
      "name": "Vodice",
      "county": "Šibensko-kninska",
      "postCode": 22211
  },
  {
      "id": 493,
      "name": "Vojnić",
      "county": "Karlovačka",
      "postCode": 47220
  },
  {
      "id": 494,
      "name": "Vrbovec",
      "county": "Zagrebačka",
      "postCode": 10340
  },
  {
      "id": 495,
      "name": "Dubrava",
      "county": "Zagrebačka",
      "postCode": 10342
  },
  {
      "id": 496,
      "name": "Gradec",
      "county": "Zagrebačka",
      "postCode": 10340
  },
  {
      "id": 497,
      "name": "Farkaševac",
      "county": "Zagrebačka",
      "postCode": 10342
  },
  {
      "id": 498,
      "name": "Rakovec",
      "county": "Zagrebačka",
      "postCode": 10340
  },
  {
      "id": 499,
      "name": "Preseka",
      "county": "Zagrebačka",
      "postCode": 10340
  },
  {
      "id": 500,
      "name": "Vrbovsko",
      "county": "Primorsko-goranska",
      "postCode": 51326
  },
  {
      "id": 501,
      "name": "Vrgorac",
      "county": "Splitsko-dalmatinska",
      "postCode": 21276
  },
  {
      "id": 502,
      "name": "Vrlika",
      "county": "Splitsko-dalmatinska",
      "postCode": 21236
  },
  {
      "id": 503,
      "name": "Vukovar",
      "county": "Vukovarsko-srijemska",
      "postCode": 32000
  },
  {
      "id": 504,
      "name": "Bogdanovci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32000
  },
  {
      "id": 505,
      "name": "Borovo",
      "county": "Vukovarsko-srijemska",
      "postCode": 32000
  },
  {
      "id": 506,
      "name": "Lovas",
      "county": "Vukovarsko-srijemska",
      "postCode": 32236
  },
  {
      "id": 507,
      "name": "Negoslavci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32000
  },
  {
      "id": 508,
      "name": "Tompojevci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32242
  },
  {
      "id": 509,
      "name": "Tovarnik",
      "county": "Vukovarsko-srijemska",
      "postCode": 32249
  },
  {
      "id": 510,
      "name": "Trpinja",
      "county": "Vukovarsko-srijemska",
      "postCode": 32000
  },
  {
      "id": 511,
      "name": "Zabok",
      "county": "Krapinsko-zagorska",
      "postCode": 49210
  },
  {
      "id": 512,
      "name": "Bedekovčina",
      "county": "Krapinsko-zagorska",
      "postCode": 49221
  },
  {
      "id": 513,
      "name": "Krapinske Toplice",
      "county": "Krapinsko-zagorska",
      "postCode": 49217
  },
  {
      "id": 514,
      "name": "Sv. Križ Začretje",
      "county": "Krapinsko-zagorska",
      "postCode": 49223
  },
  {
      "id": 515,
      "name": "Veliko Trgovišće",
      "county": "Krapinsko-zagorska",
      "postCode": 49210
  },
  {
      "id": 517,
      "name": "Nin",
      "county": "Zadarska",
      "postCode": 23232
  },
  {
      "id": 518,
      "name": "Starigrad",
      "county": "Zadarska",
      "postCode": 23244
  },
  {
      "id": 519,
      "name": "Posedarje",
      "county": "Zadarska",
      "postCode": 23242
  },
  {
      "id": 520,
      "name": "Novigrad",
      "county": "Zadarska",
      "postCode": 23312
  },
  {
      "id": 521,
      "name": "Poličnik",
      "county": "Zadarska",
      "postCode": 23241
  },
  {
      "id": 522,
      "name": "Škabrnja",
      "county": "Zadarska",
      "postCode": 23223
  },
  {
      "id": 523,
      "name": "Zemunik",
      "county": "Zadarska",
      "postCode": 23222
  },
  {
      "id": 524,
      "name": "Galovac",
      "county": "Zadarska",
      "postCode": 23222
  },
  {
      "id": 525,
      "name": "Sukošan",
      "county": "Zadarska",
      "postCode": 23206
  },
  {
      "id": 526,
      "name": "Bibinje",
      "county": "Zadarska",
      "postCode": 23205
  },
  {
      "id": 527,
      "name": "Kukljica",
      "county": "Zadarska",
      "postCode": 23271
  },
  {
      "id": 528,
      "name": "Preko",
      "county": "Zadarska",
      "postCode": 23273
  },
  {
      "id": 529,
      "name": "Sali",
      "county": "Zadarska",
      "postCode": 23281
  },
  {
      "id": 530,
      "name": "Kali",
      "county": "Zadarska",
      "postCode": 23273
  },
  {
      "id": 531,
      "name": "Ražanac",
      "county": "Zadarska",
      "postCode": 23248
  },
  {
      "id": 532,
      "name": "Privlaka",
      "county": "Zadarska",
      "postCode": 23233
  },
  {
      "id": 533,
      "name": "Vir",
      "county": "Zadarska",
      "postCode": 23234
  },
  {
      "id": 534,
      "name": "Vrsi",
      "county": "Zadarska",
      "postCode": 23235
  },
  {
      "id": 535,
      "name": "Zaprešić",
      "county": "Zagrebačka",
      "postCode": 10290
  },
  {
      "id": 536,
      "name": "Bistra",
      "county": "Zagrebačka",
      "postCode": 10298
  },
  {
      "id": 537,
      "name": "Brdovec",
      "county": "Zagrebačka",
      "postCode": 10291
  },
  {
      "id": 538,
      "name": "Dubravica",
      "county": "Zagrebačka",
      "postCode": 10292
  },
  {
      "id": 539,
      "name": "Jakovlje",
      "county": "Zagrebačka",
      "postCode": 10297
  },
  {
      "id": 540,
      "name": "Luka",
      "county": "Zagrebačka",
      "postCode": 10297
  },
  {
      "id": 541,
      "name": "Marija Gorica",
      "county": "Zagrebačka",
      "postCode": 10291
  },
  {
      "id": 542,
      "name": "Pušća",
      "county": "Zagrebačka",
      "postCode": 49290
  },
  {
      "id": 543,
      "name": "Zlatar",
      "county": "Krapinsko-zagorska",
      "postCode": 49250
  },
  {
      "id": 544,
      "name": "Budinščina",
      "county": "Krapinsko-zagorska",
      "postCode": 49284
  },
  {
      "id": 545,
      "name": "Hraščina",
      "county": "Krapinsko-zagorska",
      "postCode": 49283
  },
  {
      "id": 546,
      "name": "Konjščina",
      "county": "Krapinsko-zagorska",
      "postCode": 49282
  },
  {
      "id": 547,
      "name": "Lobor",
      "county": "Krapinsko-zagorska",
      "postCode": 49250
  },
  {
      "id": 548,
      "name": "Mače",
      "county": "Krapinsko-zagorska",
      "postCode": 49250
  },
  {
      "id": 549,
      "name": "Mihovljan",
      "county": "Krapinsko-zagorska",
      "postCode": 40000
  },
  {
      "id": 550,
      "name": "Novi Golubovec",
      "county": "Krapinsko-zagorska",
      "postCode": 49252
  },
  {
      "id": 551,
      "name": "Zlatar Bistrica",
      "county": "Krapinsko-zagorska",
      "postCode": 49247
  },
  {
      "id": 552,
      "name": "Županja",
      "county": "Vukovarsko-srijemska",
      "postCode": 32270
  },
  {
      "id": 553,
      "name": "Babina Greda",
      "county": "Vukovarsko-srijemska",
      "postCode": 32270
  },
  {
      "id": 554,
      "name": "Bošnjaci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32270
  },
  {
      "id": 555,
      "name": "Cerna",
      "county": "Vukovarsko-srijemska",
      "postCode": 32272
  },
  {
      "id": 556,
      "name": "Drenovci",
      "county": "Vukovarsko-srijemska",
      "postCode": 32257
  },
  {
      "id": 557,
      "name": "Gradište",
      "county": "Vukovarsko-srijemska",
      "postCode": 32272
  },
  {
      "id": 558,
      "name": "Gunja",
      "county": "Vukovarsko-srijemska",
      "postCode": 32257
  },
  {
      "id": 559,
      "name": "Štitar",
      "county": "Vukovarsko-srijemska",
      "postCode": 32270
  },
  {
      "id": 560,
      "name": "Vrbanja",
      "county": "Vukovarsko-srijemska",
      "postCode": 32257
  },
  {
      "id": 561,
      "name": "Zagrebačka županija",
      "county": "Zagrebačka-županija",
      "postCode": 10000
  }
];
