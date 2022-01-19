let a = 20.5
let b = 30
let harga = 1500000
let total = 0
let ppn = 0

let ukuran =  a * b
total = ukuran * harga

ppn = total * 15/100
total += ppn
console.log(`Total Bayar = ${total}`);