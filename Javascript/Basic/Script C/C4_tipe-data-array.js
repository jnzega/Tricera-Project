
let arrayKosong = []

let arrayName = ["Joshua"]

// Untuk menambahkan data
arrayName.push("Nathanael", "Zega")
// Untuk mengetahui panjang array
let panjangArray = arrayName.length
// Untuk mengakses posisi index
let namaDepan = arrayName[0]

console.table(arrayName)
console.log(panjangArray)
console.log(namaDepan)

// Untuk mengubah data di posisi tertentu
arrayName[0] = "Jojo"
console.log(arrayName[0])

// Menghapus posisi index, namun tidak
// menggeser urutan index
delete arrayName[1]