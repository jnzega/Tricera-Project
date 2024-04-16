/*
    Sama seperti bahasa pemrograman lainnya, javascript memiliki
    sintaks untuk loop. Cara kerjanya tidak jauh berbeda
    dengan loop bahasa pemrograman lain.

    contoh sintaks perulangan untuk for-loop:

    for(initial statement; condition; post statement){
        program yang diulang
    }

    Initial statement dan post statement tidak harus selalu diisi.
*/

// contoh
for (let i = 0; i <= 10; i++) {
    document.writeln(`<p>Perulangan ke-${i}</p>`)
}
// output:
// Perulangan ke-0
// Perulangan ke-1
// Perulangan ke-2
// Perulangan ke-3
// Perulangan ke-4
// Perulangan ke-5
// Perulangan ke-6
// Perulangan ke-7
// Perulangan ke-8
// Perulangan ke-9
// Perulangan ke-10

document.writeln(`<br/>`)

/*
    contoh sintaks perulangan untuk while-loop:
    
    let j = 0 // harus ada initial statement terlebih dahulu
    while (condition) {
        program yang akan diulang
        {post statement}
    }
*/

// contoh
let j = 0
while (j <= 10) {
    document.writeln(`<p>Perulangan ke-${j}</p>`)
    j++
}

// output:
// Perulangan ke-0
// Perulangan ke-1
// Perulangan ke-2
// Perulangan ke-3
// Perulangan ke-4
// Perulangan ke-5
// Perulangan ke-6
// Perulangan ke-7
// Perulangan ke-8
// Perulangan ke-9
// Perulangan ke-10

document.writeln(`<br/>`)

/*
    contoh sintaks perulangan untuk do while loop:

    let k = 0 // harus ada initial statement terlebih dahulu
    do {
        program yang akan diulang
        {post statement}
    } while (condition)

    Perbedaan dengan while-loop adalah, do while loop setidaknya
    akan menjalankan perulangan satu kali sebelum mengecek kondisi.
*/

// contoh
let k = 0
do {
    document.writeln(`<p>Perulangan ke-${k}</p>`)
    k++
} while (k <= 10)
// output:
// Perulangan ke-0
// Perulangan ke-1
// Perulangan ke-2
// Perulangan ke-3
// Perulangan ke-4
// Perulangan ke-5
// Perulangan ke-6
// Perulangan ke-7
// Perulangan ke-8
// Perulangan ke-9
// Perulangan ke-10

/*
    contoh sintaks perulangan untuk for in:

    const orang = {
        namaDepan: "Joshua",
        namaTengah: "Nathanael",
        namaBelakang: "Zega"
    } // harus ada initial statement terlebih dahulu
    
    for (const property in orang) {
        // perintah yang ingin diulang
    }

    For in digunakan untuk mengakses setiap properti di dalam variabel
    berbentuk array ataupun objek
*/

// contoh:
const orang = {
    namaDepan: "Joshua",
    namaTengah: "Nathanael",
    namaBelakang: "Zega"
}

for (const property in orang) {
    document.writeln(`<p>${property}: ${orang[property]}`)
}
// output:
// namaDepan: Joshua
// namaTengah: Nathanael
// namaBelakang: Zega

/*
    contoh sintaks perulangan untuk for of:

    const anggota = [
        "Joko", "Andi", "Budi"
    ] // harus ada initial statement terlebih dahulu
    
    for (const nama of anggota) {
        // perintah yang ingin diulang
    }

    For in digunakan untuk mengakses setiap nilai dari properti di dalam variabel
    berbentuk array saja.
*/

// contoh
const anggota = [
    "Joko", "Andi", "Budi"
]

for (const nama of anggota) {
    document.writeln(`<p>${nama}</p>`)
}
// Output:
// Joko
// Andi
// Budi

const namaPengguna = "Joshua"

for (const nama of namaPengguna) {
    document.writeln(`<p>${nama}</p>`)
}
// output:
// J
// o
// s
// h
// u
// a