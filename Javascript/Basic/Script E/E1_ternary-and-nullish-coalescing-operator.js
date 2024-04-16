/* 
    Ternary operator adalah bentuk sederhana dari
    if statement. Ternary operator terdiri dari kondisi
    yang akan dievaluasi, jika menghasilkan luaran "TRUE"
    maka nilai yang pertama akan dijalankan, jika "FALSE"
    maka nilai kedua yang akan dijalankan.
*/

// Contoh
const nilai = 80
let ucapan

if (nilai >= 75) {
    ucapan = "Selamat anda lulus"
} else {
    ucapan = "Sayangnya anda gagal"
}

document.writeln(`<p>${ucapan}</p>`)

// Pada program di atas, kita dapat menyederhanakan bentuk
// if statement menjadi seperti di bawah:

const ipkMahasiswa = 60
const kesimpulan = nilai >= 75 ? "Selamat Anda lulus" : "Sayangnya Anda gagal"

document.writeln(`<p>${kesimpulan}</p>`)

/* Pada program di atas dapat di diliah jika ternary operator sangatlah
membantu dalam proses penyederhanaan if statement */

/* 
    Selain Ternary operator ada juga operator bernama Nullish Coalescing.
    Fungsinya sama seperti ternary yang membantu menyederhanakan proses
    if statement, namun operator nullish coalescing digunakan untuk
    mengecek apakah kondisi sebuah variabel bernilai "null" atau
    "undefined".   
*/

// Contoh
let parameter

const data = parameter ?? "Nilai default"

document.writeln(`<p>{$data}</p>`)
// Program di atas akan memberi luaran memasukan value "Nilai default"
// ke dalam variabel data, karena pada deklarasi variabel parameter
// di atas, dapat dilihat jika value dari parameter belum ditentukan

