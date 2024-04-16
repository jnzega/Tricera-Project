/*
    Function generator adalah sebuah function yang digunakan
    untuk membuat data generator. Kita perlu menggunakan 
    tanda '*' setelah keyword function. Untuk mengembalikan
    data pada tiap iterasi, kita dapat menggunakan keyword
    yield diikuti datanya.
*/

// contoh
function * buatNama(){
    yield "Joshua"
    yield "Nathanael"
    yield "Zega"
}
// Data yang dikembalikan oleh function generator sifatnya
// iterable, namun bukan berarti dia berbentuk array

const nama = buatNama()
for (const iterator of nama) {
    console.info(iterator)
}

// contoh penyelasaian masalah angka ganjil
function * cariGanjil(value) {
    for (let index = 1 ; index <= value; index++) {
        if (index % 2 === 1) {
            yield index
        }
    }
}

angkaGanjil = cariGanjil(5)
for (const angka of angkaGanjil) {
    console.log(angka)
}