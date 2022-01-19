let totalBelanja = 0
let Beras = 0
let Gula = 0
let Telur = 0
let Minyak = 0
let barang = [
    { nama: "Beras", harga: 10000, jumlah:5},
    { nama: "Gula", harga: 14000, jumlah: 5},
    { nama: "Telur", harga: 20000, jumlah: 2},
    { nama: "Minyak", harga: 9000, jumlah: 10}
]

for (let i= 0; i < barang.length; i++) {
    totalBelanja += barang[i].jumlah * barang[i].harga
    
}

for (let i= 0; i < barang.length; i++) {
    Beras = barang[0].jumlah * barang[0].harga
    
}

for (let i= 0; i < barang.length; i++) {
    Gula = barang[1].jumlah * barang[1].harga
    
}

for (let i= 0; i < barang.length; i++) {
    Telur = barang[2].jumlah * barang[2].harga
    
}

for (let i= 0; i < barang.length; i++) {
    Minyak = barang[3].jumlah * barang[3].harga
    
}

console.log(`Total Beras= ${Beras}`);
console.log(`Total Gula= ${Gula}`);
console.log(`Total Telur= ${Telur}`);
console.log(`Total Minyak= ${Minyak}`);
console.log(`Total Belanja= ${totalBelanja}`);
