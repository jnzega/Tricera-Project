/*
    Dalam javascript ketika membuat sebuah array dan objek
    kita dapat me-destructuringnya ke dalam sebuah variabel.
    Destructuring tidak memaksa kita untuk mengakses satu
    per satu index atau properti, artinya kita bisa
    langsung menyimpan value dari index atau peroperti
    ke dalam variabel
*/

// contoh destructuring array
const nama = ["Joshua", "Chrisly", "Zega", 1, 2, 3]

const [namaAyah, namaIbu, namaKeluarga, ...angka] = nama

console.info(namaAyah)
console.info(namaIbu)
console.info(namaKeluarga)
console.info(angka)

// contoh destructuring objek
const anak = {
    namaDepan: "Michael",
    namaTengah: "Joshua",
    namaBelakang: "Zega",
    alamat: {
        kota: "Tangerang Selatan",
        provinsi: "Banten",
        negara: "Indonesia"
    }
}

const {
    namaDepan, 
    namaTengah, 
    namaBelakang, 
    alamat:{ 
        kota, provinsi, negara 
    }
} = anak

// desctructuring nama variabel lain di objek
const namaOrang = {
    firstDepan: "Joko",
    lastAkhir: "Anjay"
}

const {
    firstDepan: firstName,
    lastAkhir: lastName
} = namaOrang

console.info(firstName)
console.info(lastName)