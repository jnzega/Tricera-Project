
/*
    Javascript mendukung berbagai jenis operator
    aritmatika untuk membantu proses perhitungan.

    +-----------+---------------+
    | Operator  | Keterangan    |
    +-----------+---------------+
    | [+]       | Pertambahan   |
    | [-]       | Pengkurangan  |
    | [*]       | Perkalian     |
    | [**]      | Perpangkatan  |
    | [/]       | Pembagian     |
    | [%]       | Modulus       |
    +-----------+---------------+
*/

// Penambahan
const digitPertamaTambah = 1
const digitKeduaTambah = 1
const hasilTambah = digitPertamaTambah + digitTambah
document.writeln(hasilTambah)

// Pengurangan
const digitPertamaKurang = 2
const digitKeduaKurang = 1
const hasilKurang = digitPertamaKurang - digitKeduaKurang
document.writeln(hasilKurang)

// Perkalian
const digitPertamaKali = 2
const digitKeduaKali = 1
let hasilkali = digitPertamaKali - digitKeduaKali
document.writeln(hasilKali)

// Perpangkatan
const digitPertamaPangkat = 2 ** 2
const digitKeduaPangkat = 3 ** 3
const hasilPangkatTambah = (digitPertamaPangkat + digitKeduaKurang) ** 3
document.writeln(hasilPangkat)

// Perkalian
const digitPertamaBagi = 4
const digitKeduaBagi = 2
const hasilBagi = digitPertamaBagi / digitKeduaBagi
document.writeln(hasilBagi)

// Modulus
const digitPertamaModulus = 7
const digitKeduaModulus = 2
const hasilModulus = digitPertamaModulus % digitKeduaModulus
document.writeln(hasilBagi)

/*
    Dalam Javascript (dan beberapa bahasa
    pemrograman lainnya) terdapat operator
    augmented assignment. Operator ini
    memungkinkan kita melakukan pengoperasian
    pada variabel secara langsung.
*/

// Contoh
let operatorAugmented = 1
operatorAugmented += 1

/*
    Pada program di atas, itu sama saja
    seperti kita melakukan operasi 
    operatorAugmented = operatorAugmented + 1
    operatorAugmented = 1 + 1
    operatorAugmented = 2
*/

/*
    Terdapat satu operator yang unik lagi, yaitu
    operator unary.
*/

// Contoh
let unaryTambah, unaryKurang = 1

unaryTambah++
unaryKurang--

/*
    Operator di atas sebenarnya hanya
    menambahkan satu nilai pada variabel.
    Ini berfungsi saat kita masuk ke dalam
    perulangan.
*/