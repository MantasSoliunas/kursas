// let vardas = 'Mantas'
// let pavarde = 'Soliunas'
// let asmuo = vardas + ' ' + pavarde
// console.log(asmuo)
// console.log('Mano vardas yra ' + vardas + ', o pavarde yra ' + pavarde)
// console.log(`Mano vardas yra ${vardas}, o pavarde yra ${pavarde}`)

// let tekstas = 'Pirmas'
// console.log(tekstas.length)
// console.log(tekstas.toUpperCase())
// console.log(tekstas.toLowerCase())
// console.log(tekstas.charAt(5))
// console.log(tekstas.indexOf('s'))

// tekstas = 'Cia gali buti Jusu reklama!'
// console.log(tekstas.replace('gali buti', 'yra'))
// console.log(tekstas.substring(4, 14))
// console.log(tekstas.substring(14))
// console.log(tekstas.substr(4,9))

// let x = 6.99
// console.log(Math.round(x))
// console.log(Math.ceil(x))
// console.log(Math.floor(x))

// let y = 5.8
// let z = '5.8' 
// console.log(Math.max(x,y,z))
// console.log(Math.min(x,y,z))

// let i = Math.random() * 50
// console.log(i)
// console.log(Math.round(i))

// let a = Math.floor(Math.random() * (26 - 16 + 1) + 16) // skaicius nuo 16 iki 26
// console.log(a)
// // * (max - min + 1) + min

// if (y === z) {
//     console.log('lygus skaiciai')
// } else {
//     console.log('Nelygus skaiciai')
// }

// T && T = T
// T && F = F
// F && T = F
// F && F = F

// T || T = T
// T || F = T
// F || T = T
// F || F = F

// let num1 = 1
// while(num1 <= 10) {
//     console.log(num1)
//     num1++
// }

// for(let c = 1; c <= 10; c++) {
//     console.log(c)
// }
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
// let suma = 0
// for(let b = 1; b <= 10; b++) {
//     suma += b
// }
// console.log(suma)

let s = 0
let skaiciai = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for(let i = 0; i < skaiciai.length; i++) {
    s += skaiciai[i]
}
console.log(s)

// alert("hi")