
/*
    Dalam javascript juga ada yang namanya
    operator perbandingan. Operator 
    perbandingan memiliki tujuan, ya, untuk
    membandingkan. Saat melakukan perbandingan,
    luaran yang kita dapatkan berupa boolean.
*/

const lebihBesar = 500
const lebihKecil = 200
const lebihBesarTeks = "500"
const lebihKecilTeks = "200"

// Lebih dari
const lebihDari = lebihBesar > lebihKecil
// Output: True

// Kurang dari
const kurangDari = lebihKecil < lebihBesar
// Output: True

// Lebih Dari atau Sama Dengan
const lebihDariSama = lebihBesar >= 500
// Output: True

// Kurang Dari atau Sama Dengan
const kurangDariSama = lebihKecil <= 200
// Output: True

// Sama Dengan
const samaDengan = lebihBesar == lebihBesarTeks
// Output: True

// Sama Dengan dan Sama Tipe Data
const samaDenganTipe = lebihKecil === lebihKecilTeks
// Output: False

// Tidak Sama Dengan
const tidakSamaDengan = lebihBesar != lebihBesarTeks
// Output: False

// Tidak Sama Dengan dan Tidak Sama Tipe Data
const tidakSamaDenganTipe = lebihKecil !== lebihKecilTeks
// Output: True