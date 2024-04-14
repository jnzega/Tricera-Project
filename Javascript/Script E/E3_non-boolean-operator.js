/* 
    Javascript mengenal sifat Truthy dan Falsey. Maksudnya dalam program
    sebuah tipe data non-boolean juga memiliki nilai boolean sehingga
    dapat digunakan sebagai perbandingan. 
*/

// Contoh non-boolean yang bersifat falsey:
/* 
    +---------------+
    | Nilai         |
    +---------------+
    | false         |
    | 0, -0         |
    | "", '', ``    |
    | null          |
    | undefined     |
    | NaN           |
*/
// Untuk contoh non-boolean yang bersifat truthy hanya perlu
// diimplementasikan sebaliknya.

/*
    Operator logika OR pada tipe data non-boolean juga dapat digunakan
    cara kerjanya adalah dibaca dari kiri ke kanan. Nilai true yang
    pertama kali ditemukan akan dieksekusi. Jika dari kiri
    hingga kanan tidak ditemukan nilai true, maka nilai paling
    kananlahh yang akan dijalankan.
*/

// contoh
console.log("hello" || '') // output: hello
console.log("" || []) // output: [] /* karena array kosong termasuk truthy */
console.log("0" || "NOL") // output: 0
console.log(0 || "NOL") // output: NOL
console.log(null || "NULL") // output: NULL
console.log(undefined || "UNDEFINED") // output: UNDEFINED

/*
    Operator logika AND pada tipe data non-boolean juga dapat digunakan
    cara kerjanya adalah dibaca dari kiri ke kanan. Nilai false yang
    pertama kali ditemukan akan dieksekusi. Jika dari kiri
    hingga kanan tidak ditemukan nilai false, maka nilai paling
    kananlahh yang akan dijalankan.
*/

// contoh
console.log("hello" && '') // output: ''
console.log("" && []) // output: "" /* karena array kosong termasuk truthy */
console.log("0" && "NOL") // output: NOL
console.log(0 && "NOL") // output: 0
console.log(null && "NULL") // output: null
console.log(undefined && "UNDEFINED") // output: undefined