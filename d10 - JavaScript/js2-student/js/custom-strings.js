/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/

// let vardas = "Petras"
// let pavarde = "Petraitis"

// console.log(`${vardas} ${pavarde}`)

/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/

// let vardas = "Kazys";
// let pavarde = "Kazaitis";

// console.log(`${vardas.toUpperCase()} ${pavarde.toLowerCase()}`)

/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

// let vardas = "Ponas";
// let pavarde = "Ponaitis";
// let inicialai = vardas.charAt(0) + pavarde.charAt(0); 

// console.log(inicialai);


/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

// let vardas = "Karolis"
// let pavarde = "Karolaitis"
// let result = vardas.slice(-3) + pavarde.slice(-3);

// console.log(result);


/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/

// let string = "An American in Paris"

// console.log(string.replace(/a/gi, "*"))
// gi - global, case insensitive


/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/

// let string1 = "An American in Paris";
// let string2 = "Breakfast at Tiffany's";
// let string3 = "2001: A Space Odyssey";
// let string4 = "It's a Wonderful Life";

// console.log(string1.replace(/[aeiou]/gi, ""))
// console.log(string2.replace(/[aeiou]/gi, ""))
// console.log(string3.replace(/[aeiou]/gi, ""))
// console.log(string4.replace(/[aeiou]/gi, ""))

/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/

// let string = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";
// let number = /\d+/;
// let episode = string.match(number);

// console.log(string);
// console.log(episode);

/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/

// let string1 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood"
// let words1 = string1.split(" ");
// let count1 = 0;
// for (let i = 0; i < words1.length; i++) {
//     if (words1[i].length <= 5) {
//         count1++;
//     }
// }
// console.log(`trumpesnių arba lygiai 5 raidės: ${count1}.`)

// let string2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale"
// let words2 = string2.split(" ");
// let count2 = 0;
// for (let i = 0; i < words2.length; i++) {
//     if (words2[i].length <=5) {
//         count2++;
//     }
// }
// console.log(`trumpesniu arba lygiai 5 raides: ${count2}.`)



/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.*/


/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/