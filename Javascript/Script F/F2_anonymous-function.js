/*
    Pada file sebelumnya sudah dipelajari bagaimana cara membuat
    sebuah function. Di javascript kita dapat membuat function
    tanpa menggunakan atau mendeklarasikan function tersebut 
    di awal. Ini disebut anonymous function
*/

// contoh anonymous function yang disimpan pada sebuah variabel 
let sambut = function (name) {
    console.info(`Hello ${name}`)
}

sambut("Hehe") // output: Hello Joshua

// anonymous function juga dapat diletakan dalam sebuah
// parameter

// contoh 
// *note: ini adalah penggunaan sebuah function sebagai value parameter
function giveMeName(fungsi) {
    fungsi("Joshua")
}

giveMeName(function (name) {
    console.log(`anjay ${name}`)
})

// output: anjay Joshua