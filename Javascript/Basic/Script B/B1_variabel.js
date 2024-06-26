
/*
    Variabel adalah sebuah alat yang digunakan
    untuk menyimpan sebuah nilai. Dalam
    Javascript, untuk membuat variabel, kita
    tidak perlu menentukan tipe datanya 
    terlebih dahulu. Saat pembuatan variabel,
    kita bisa langsung memasukkan nilai 
    variabel tersebut dengan tipe data
    apa saja.
*/

// Ada berbagai macam cara membuat variabel.

//Deklarasi variabel, lalu masukan nilai:
var fullName
fullName = "Joshua Zega"

//Langsung memasukkan nilai:
var firstName = "Joshua"
var usia = 16

//Membuat variabel lebih dari 1:
var alamat, sekolah

/*
    Sejak versi ECMAScript 2015, cara
    pembuatan variabel kini tidak lagi 
    menggunakan perintah var. Untuk
    membuat variabel, kita dapat menggunakan
    let dan const.
*/

//Deklarasi menggunakan let.

//Deklarasi variabel, lalu masukan nilai:
let namaPanjang
namaPanjang = "Joshua Zega"

//Langsung memasukkan nilai:
let namaDepan = "Joshua"
let usia = 16

//Membuat variabel lebih dari 1:
let alamatRumah, alamatSekolah

//Deklarasi menggunakan const.

//Deklarasi variabel, lalu masukan nilai:
const kelamin = "Laki-laki"

/*
    Saat membuat variabel menggunakan perintah
    const, kita tidak bisa merubah kembali
    isi dari suatu variabel. Jadi dapat
    dibilang, const adalah perintah untuk
    membuat sebuah variabel dengan nilai yang
    bersifat permanen.
*/

document.writeln(namaPanjang + usia)
