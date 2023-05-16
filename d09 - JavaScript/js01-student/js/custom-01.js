/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

// let vardas = "Vardas";
// let pavarde = "Pavarde";
// let amzius = 1993
// let metaiDabar = new Date().getFullYear();
// console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${metaiDabar - amzius} metai(-ų)`);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

// let x = Math.round(Math.random() * 4);
// let y = Math.round(Math.random() * 4);
// let result = Math.max(x,y) / Math.min(x,y)
// console.log(result.toFixed(2));

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

// let x = Math.round(Math.random() * 25);
// let y = Math.round(Math.random() * 25);
// let z = Math.round(Math.random() * 25);

// let middle;
// if ((x <= y && y <= z) || (z <= y && y <= x)) {
//     middle = y;
// } else if ((y <= x && x <= z) || (z <= x && x <= y)) {
//     middle = x;
//   } else {
//     middle = z;
//   }

//   console.log(middle.toFixed(0))

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

// let kr1 = Math.round(Math.random() * 10) + 1;
// let kr2 = Math.round(Math.random() * 10) + 1;
// let kr3 = Math.round(Math.random() * 10) + 1;

// let triangle;
// if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr3 + kr2 > kr1) {
//     triangle = true;
// } else {
//     triangle = false;
// }

// console.log(triangle);

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

// let x = Math.round(Math.random() * 2);
// let y = Math.round(Math.random() * 2);
// let z = Math.round(Math.random() * 2);
// let c = Math.round(Math.random() * 2);

// let nuliai = 0;
// let vienetai = 0;
// let dvejetai = 0;

// if (x === 0) {
//     nuliai++;
// } else if (x === 1) {
//     vienetai++;
// } else {
//     dvejetai++;
// }

// if (y === 0) {
//     nuliai++;
// } else if (y === 1) {
//     vienetai++;
// } else {
//     dvejetai++;
// }

// if (z === 0) {
//     nuliai++;
// } else if (z === 1) {
//     vienetai++;
// } else {
//     dvejetai++;
// }

// if (c === 0) {
//     nuliai++;
// } else if (c === 1) {
//     vienetai++;
// } else {
//     dvejetai++;
// }

// console.log(x,y,z,c)
// console.log(`Nulių yra ${nuliai}, vienetų yra ${vienetai}, dvejetų yra ${dvejetai}.`)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

// let x = Math.round(Math.random() * (10 - -10 + 1) + -10);
// let y = Math.round(Math.random() * (10 - -10 + 1) + -10);
// let z = Math.round(Math.random() * (10 - -10 + 1) + -10);

// if (x < 0) {
//     console.log(`[${x}]`);
// } else if (x == 0) {
//     console.log(`(${x})`);
// } else {
//     console.log(`{${x}}`);
// }

// if (y < 0) {
//     console.log(`[${y}]`);
// } else if (y == 0) {
//     console.log(`(${y})`);
// } else {
//     console.log(`{${y}}`);
// }

// if (z < 0) {
//     console.log(`[${z}]`);
// } else if (z == 0) {
//     console.log(`(${z})`);
// } else {
//     console.log(`{${z}}`);
// }

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

// let x = Math.round(Math.random() * (3000 - 5 + 1) + 5);
// let akcija3 = 0.03;
// let akcija4 = 0.04;

// if (x < 1000) {
//     console.log(x);
// } else if (x => 1000 && x < 2000) {
//     console.log(x - (x * akcija3));    
// } else if (x => 2000) {
//     console.log(x - (x * akcija4));
// }

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

// let hr = Math.round(Math.random() * 23);
// let min = Math.round(Math.random() * 60);
// let sec = Math.round(Math.random() * 60);
// let time = hr + ':' + min + ':' + sec;
// let msec = Math.round(Math.random() * 300);
// console.log(time);
// console.log(time + ':' + msec);


/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

// let a = Math.round(Math.random() * (9999 - 1000 + 1) + 1000);
// let b = Math.round(Math.random() * (9999 - 1000 + 1) + 1000);
// let c = Math.round(Math.random() * (9999 - 1000 + 1) + 1000);
// let d = Math.round(Math.random() * (9999 - 1000 + 1) + 1000);
// let e = Math.round(Math.random() * (9999 - 1000 + 1) + 1000);
// let f = Math.round(Math.random() * (9999 - 1000 + 1) + 1000);

// console.log(a,b,c,d,e,f);
