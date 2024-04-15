/*
    Sama seperti bahasa pemrograman lain, javascript juga memperbolehkan
    kita untuk membuat sebuah function. Function adalah sebuah mini program
    yang dapat dipanggil berkali-kali
*/

// contoh
function sayHelloWorld() {
    document.writeln(`<p>Hello World</p>`)
}

// pemanggilan function:
sayHelloWorld() // output: Hello World

/*
    Kita dapat mengirim sebuah nilai yang nantinya akan dijalankan oleh
    sebuah function. Data tersebut dipanggil sebagai parameter. Parameter
    diletakkan di dalam tanda kurung pada saat mendeklarasikan function.
    Parameter lebih dari satu, namun harus dipisahkan dengan tanda ','
*/

// contoh
function sayHelloUser(namaDepan, namaBelakang){
    document.writeln(`<p>Halo, ${namaDepan+ " " + namaBelakang}</p>`)
}

// pemanggilan function
sayHelloUser("Joshua", "Zega") // output: Halo, Joshua Zega

/*
    Secara default, sebuah function tidak mengembalikan sebuah nilai
    apapun itu. Namun, kita dapat membuat sebuah function mengembalikan
    sebuah nilai dengan keyword return.
*/

// contoh 1
function pemangkatan(angka, eksponen){
    const hasil = typeof angka === 'number' && typeof eksponen === 'number' ? angka**eksponen : "Masukan Angka!"
    return hasil
}

const pangkat = pemangkatan(3, 2)
document.writeln(`<p>${pangkat}</p>`) // output: 9

// contoh 2
function apakahAda(array, nilaiDicari) {
    for (const element of array) {
        if (element === nilaiDicari) {
            return (
                `Ya, ${nilaiDicari} ada dalam array.`
            )
        }
    }
    return (
        `Tidak, ${nilaiDicari} tidak ada dalam array.`
    )
}

const daftarHadir = [
    "Budi", "Andi", "Joko"
]

document.writeln(`<p>${apakahAda(daftarHadir, "Budi")}</p>`)

/*
    Di javascript, parameter bersifat optional, artinya jika kita tidak
    memiliki atau mengisi parameter, program dalam fungsi akan tetap
    dijalankan. Parameter yang tidak terisi secara default akan menjadi
    undefined. Adapun cara untuk mengatasi masalah di atas, yaitu dengan
    menggunakan default parameter.
*/

// contoh
function defaultParam(nama, umur, jabatan = "Tidak Diketahui") {
    return `
        nama    : ${nama}
        umur    : ${umur}
        jabatan : ${jabatan}
    `
}

console.info(defaultParam("Joshua", 12, "CEO"))
console.info(defaultParam("Chrisly", 20))

/*
    Ada juga yang disebut sebagai rest parameter. Rest parameter dalah
    parameter yang secara otomatis akan dikonversi menjadi array.
    Aturan penggunaan rest parameter hanya boleh digunakan satu parameter,
    atau setidaknya berada pada parameter terakhir.
*/

// contoh 1
function sum(...angka) {
    let totalSum = 0
    for (const nilai of angka) {
        totalSum = totalSum + nilai 
    }
    return totalSum
}

console.info(sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19)) // output: 190

// contoh 2\
function totalkanBuah (namaBuah, ...angka) {
    let totalBuah = 0
    for (const nilai of angka) {
        totalBuah =  totalBuah + nilai
    }
    return totalBuah
}

console.info(totalkanBuah("Mangga", 300, 200)) // output: 500 

/*
    Lalu bagaimana jika kita ingin memasukkan parameter yang di awal
    sudah terdefinisi sebagai array? Caranya mudah, kita dapat menggunakan
    spread syntax dengan menambahkan '...' di depan array tersebut
*/

// contoh
const banyakBuah = [10,13,14]

console.info(totalkanBuah("Mangga", ...banyakBuah)) // output: 37