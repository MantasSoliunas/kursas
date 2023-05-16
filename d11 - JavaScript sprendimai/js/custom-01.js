/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

// let vardas = "Mantas"
// let pavarde = "Soliunas"
// let metai = 1993
// let metaiDabar = new Date().getFullYear();

// console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${metaiDabar-metai} metai(-ų)`)

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let x = Math.round(Math.random() * 4);
let y = Math.round(Math.random() * 4);

console.log(`Skaiciai: ${x}, ${y}`)
if (x == 0 || y == 0) {
    console.log("Klaida")
}   else if (x > y) {
    console.log((x/y).toFixed(2))
} else {
    console.log((y/x).toFixed(2))
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let num1 = Math.round(Math.random() * 25);
let num2 = Math.round(Math.random() * 25);
let num3 = Math.round(Math.random() * 25);

console.log(`Skaiciai: ${num1},${num2},${num3}`)

  let largest = Math.max(num1,num2,num3)
  let smallest = Math.min(num1,num2,num3)
  let middleNum
  if (num1 != largest && num1 != smallest) {
    middleNum = num1
  } else if (num2 != largest && num2 != smallest) {
    middleNum = num2 
  } else if (num3 != largest && num3 != smallest) {
    middleNum = num3
  } else {
    middleNum = "neaisku, nes du ar daugiau yra lygus"
  }

  console.log(`The middle number is ${middleNum}`)

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

let kr1 = Math.ceil(Math.random() * 10) + 1;
let kr2 = Math.ceil(Math.random() * 10) + 1;
let kr3 = Math.ceil(Math.random() * 10) + 1;

console.log(`Krastines: ${kr1},${kr2},${kr3}`)

if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
    console.log(`Taip, trikampis imanomas`)
} else {
    console.log(`Ne, trikampis neimanomas`)
}


/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let sk1 = Math.round(Math.random() * 2);
let sk2 = Math.round(Math.random() * 2);
let sk3 = Math.round(Math.random() * 2);
let sk4 = Math.round(Math.random() * 2);

console.log(`Skaiciai: ${sk1},${sk2},${sk3},${sk4}`)

let nulis = 0
let vienas = 0
let du = 0

if (sk1 == 0) {
    nulis++
}
if (sk1 == 1) {
    vienas++
}
if (sk1 == 2) {
    du++
}

if (sk2 == 0) {
    nulis++
}
if (sk2 == 1) {
    vienas++
}
if (sk2 == 2) {
    du++
}

if (sk3 == 0) {
    nulis++
}
if (sk3 == 1) {
    vienas++
}
if (sk3 == 2) {
    du++
}

if (sk4 == 0) {
    nulis++
}
if (sk4 == 1) {
    vienas++
}
if (sk4 == 2) {
    du++
}

console.log(`Nuliai: ${nulis}, Vienetai: ${vienas}, Dvejetai: ${du}`)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let skl1 = Math.floor(Math.random() * (10 - -10 + 1) + -10);
let skl2 = Math.floor(Math.random() * (10 - -10 + 1) + -10);
let skl3 = Math.floor(Math.random() * (10 - -10 + 1) + -10);

console.log(`Skaiciai: ${skl1},${skl2},${skl3}`)

if (skl1 < 0) {
    console.log(`[${skl1}]`)
} 

if (skl1 == 0) {
    console.log(`(${skl1})`)
}

if (skl1 > 0) {
    console.log(`{${skl1}}`)
}

if (skl2 < 0) {
    console.log(`[${skl2}]`)
} 

if (skl2 == 0) {
    console.log(`(${skl2})`)
}

if (skl2 > 0) {
    console.log(`{${skl2}}`)
}

if (skl3 < 0) {
    console.log(`[${skl3}]`)
} 

if (skl3 == 0) {
    console.log(`(${skl3})`)
}

if (skl3 > 0) {
    console.log(`{${skl3}}`)
}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
let kiekis = Math.floor(Math.random() * (3000 - 5 + 1) + 5)
let kaina = 1

if (kiekis > 2000) {
    kaina = (kaina * kiekis * 0.96).toFixed(2)
} else if (kiekis > 1000) {
    kaina = (kaina * kiekis * 0.97).toFixed(2)
} else {
    kaina = (kaina * kiekis).toFixed(2)
}
console.log(`Kiekis: ${kiekis}. Kaina: ${kaina} EUR.`)

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

let kin1 = Math.floor(Math.random() * 100);
let kin2 = Math.floor(Math.random() * 100);
let kin3 = Math.floor(Math.random() * 100);
let count = 3;

let vidurkis = Math.round((kin1+kin2+kin3) / count)
console.log(`Skaiciai: ${kin1},${kin2},${kin3}`)
console.log(`Vidurkis: ${vidurkis}`)

if (kin1 < 10 || kin1 > 90) {
    count--
    kin1 = 0
}
if (kin2 < 10 || kin2 > 90) {
    count--
    kin2 = 0
}
if (kin3 < 10 || kin3 > 90) {
    count--
    kin3 = 0
}

if (kin1 == 00 && kin2 == 00 && kin3 == 0) {
    console.log(`Visi trys skaičiai yra atmestini, todėl vidurkis neskaičiuojamas`)
} else {
    vidurkis = Math.round((kin1+kin2+kin3) / count)
    console.log(`Atmetus nepriimtinus skaičius, vidurkis: ${vidurkis}`)
}

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

let totalSeconds = Math.round(Math.random() * 86400)
let hours = Math.floor(totalSeconds / 3600)
let mins = Math.floor((totalSeconds - (hours * 3600)) / 60)
let secs = totalSeconds - (hours * 3600) - (mins * 60)

if (hours < 10) {
    hours = hours.toString().padStart(2,'0')
}
if (mins < 10) {
    mins = mins.toString().padStart(2,'0')
}
if (secs < 10) {
    secs = secs.toString().padStart(2,'0')
}

console.log(`Pries: ${hours}:${mins}:${secs}`)

let addSeconds = Math.round(Math.random() * 300)
console.log(`Prideta sekundziu: ${addSeconds}`)

totalSeconds += addSeconds
hours = Math.floor(totalSeconds / 3600)
mins = Math.floor((totalSeconds - (hours * 3600)) / 60)
secs = totalSeconds - (hours * 3600) - (mins * 60)

if (hours < 10) {
    hours = hours.toString().padStart(2,'0')
}
if (mins < 10) {
    mins = mins.toString().padStart(2,'0')
}
if (secs < 10) {
    secs = secs.toString().padStart(2,'0')
}

console.log(`Po: ${hours}:${mins}:${secs}`)

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let kint1 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint2 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint4 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint5 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint6 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

let first = Math.max(kint1,kint2,kint3,kint4,kint5,kint6);
let last = Math.min(kint1,kint2,kint3,kint4,kint5,kint6);

if (first == kint1 || last == kint1) {
    kint1 = 0
}

if (first == kint2 || last == kint2) {
    kint2 = 0
}

if (first == kint3 || last == kint3) {
    kint3 = 0
}

if (first == kint4 || last == kint4) {
    kint4 = 0
}

if (first == kint5 || last == kint5) {
    kint5 = 0
}

if (first == kint6 || last == kint6) {
    kint6 = 0
}

let second = Math.max(kint1,kint2,kint3,kint4,kint5,kint6);

if (second == kint1) {
    kint1 = 0
} else if (second == kint2) {
    kint2 = 0
} else if (second == kint3) {
    kint3 = 0
} else if (second == kint4) {
    kint4 = 0
} else if (second == kint5) {
    kint5 = 0
} else if (second == kint6) {
    kint6 = 0
}

let third = Math.max(kint1,kint2,kint3,kint4,kint5,kint6);

if (third == kint1) {
    kint1 = 0
} else if (third == kint2) {
    kint2 = 0
} else if (third == kint3) {
    kint3 = 0
} else if (third == kint4) {
    kint4 = 0
} else if (third == kint5) {
    kint5 = 0
} else if (third == kint6) {
    kint6 = 0
}

let fourth = Math.max(kint1,kint2,kint3,kint4,kint5,kint6);

if (fourth == kint1) {
    kint1 = 0
} else if (fourth == kint2) {
    kint2 = 0
} else if (fourth == kint3) {
    kint3 = 0
} else if (fourth == kint4) {
    kint4 = 0
} else if (fourth == kint5) {
    kint5 = 0
} else if (fourth == kint6) {
    kint6 = 0
}

let fifth = Math.max(kint1,kint2,kint3,kint4,kint5,kint6);

if (fifth == kint1) {
    kint1 = 0
} else if (fifth == kint2) {
    kint2 = 0
} else if (fifth == kint3) {
    kint3 = 0
} else if (fifth == kint4) {
    kint4 = 0
} else if (fifth == kint5) {
    kint5 = 0
} else if (fifth == kint6) {
    kint6 = 0
}

console.log(`${first} ${second} ${third} ${fourth} ${fifth} ${last}`)