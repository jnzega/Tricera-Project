/* 
    Optional chaining adalah sebuah cara untuk mengecek apakah properti
    di dalam sebuah tipe data objek bernilai nullish atau tidak. 
    Terasa sepele, namun ketika kita mengakses sebuah objek yang
    propertinya nullish, itu dapat menyebabkan error. Biasanya
    orang akan menggunakan if statement untuk mengecek terlebih
    dahulu apakah properti dari objek tersebut bernilai nullish atau
    tidak. Namun akan sangat panjang, maka dari itu terdapat cara
    yang lebih sederhana, yaitu menggunakan Optional Chaining.
*/

// contoh
const person = {
    address: {
        city: "Tangerang",
        province: "Banten",
        country: "Indonesia"
    },
    firstName: "Joshua",
    lastName: "Zega"
}

const country = person.address.country

// pada sintaks di atas, program akan berjalan dengan baik karena
// setiap properti di dalam objek sudah terdefinisi. Namun jika kondisi
// seperti ini...

const orang = {}
// bisa di lihat bahwa objek 'orang' tidak memiliki properti apa-apa
// jika kita memaksa menggunakan hal yang sama

/* const negara = orang.alamat.negara */

// maka program akan dipastikan rusak atau error.

// di momen seperti inilah kita dapat menggunakan optional chaining

// contoh
const negara = orang?.alamat?.negara
// baris program di atas seperti memeriksa terlebih dahulu.
// jika sebuah properti dalam sebuah objek ternyata tidak ada, maka variabel
// negara akan diisi dengan 'undefined', sehingga tidak akan menyebabkan 
// error

document.writeln(`<p>${country}</p>`)
document.writeln(`<p>${negara}</p>`)