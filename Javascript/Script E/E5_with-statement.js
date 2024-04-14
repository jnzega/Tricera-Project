/*
    With statement berfungsi untuk mengakses sebuah properti
    pada scope tertentu. Seperti mengecilkan scope pada suatu
    objek, sehingga dapat memudahkan ketika kita ingin mengakses
    sebuah properti dari suatu objek tanpa mengganggu variabel
    di luar yang mungkin saja memiliki penamaan yang sama.
*/

// contoh
const user = {
    id: 1,
    name: "Zega",
    age: 20
}

const name = "Jojo"

with (user) {
    console.log(name) // output: Zega
    console.log(age) // output: 20
}