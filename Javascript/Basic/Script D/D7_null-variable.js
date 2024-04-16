
/*
* Null hampir mirip dengan undefined, namun tetap
* berbeda. Kalau undefined itu berarti sebuah
* data benar-benar kosong, atau tanpa nilai,
* namun kalau null itu berarti data sudah memiliki
* nilai, namun nilainya adalah null
* */

let userInput = prompt("Masukan nama Anda")

if (userInput == null) {
    alert("Nama kamu siapa?")
    userInput = prompt("Masukan nama Anda")
}
if (userInput != null) {
    alert(`Hallo ${userInput}`)
}
