
/*
* Operator in berguna untuk mengecek sebuah
* properti ada atau tidak. Operator in tidak
* mengecek isi dari properti itu, hanya
* mengecek apakah peroperti itu exist
* atau tidak
* */

const userData = {
    firstName: "Jojo",
    lastName: "Zega"
}

const userName = [
    "Joshua", "Zega"
]

if ("firstName" in userData) {
    alert("Ada")
} else {
    alert("Tidak ada")
}

if (0 in userName) {
    document.writeln("Ada")
}
