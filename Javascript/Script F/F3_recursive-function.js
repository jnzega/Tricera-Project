/*
    seperti pada bahasa pemrograman yang lainnya juga. Javascript
    mendukung sistem recursive function, di mana function yang 
    sama dapat dipanggil di dalam function yang dibuat.
*/

// contoh pemecahan masalah tanpa recursive function
function oldFactorial(value) {
    let hasil = 1
    for (let i = value; i >= 1; i--){
        hasil = hasil * i
    }
    return hasil
}

console.log(oldFactorial(4)) // ouput: 24

// contoh pemecahan masalah menggunakan recursive function
function newFactorial(value) {
    hasil = value === 1 ? 1 : value * newFactorial(value - 1)
    return hasil
}

console.log(newFactorial(4)) // output: 24

// contoh perulangan menggunakan recursive function
function recursiveLoop(value){
    if(value === 1){
        document.writeln(`<p>perulangan ke-${value}</p>`)
    } else {
        recursiveLoop(value - 1)
        document.writeln(`<p>perulangan ke-${value}</p>`)
    }
}

recursiveLoop(10) 
// output:
/*
    perulangan ke-1
    perulangan ke-2
    perulangan ke-3
    perulangan ke-4
    perulangan ke-5
    perulangan ke-6
    perulangan ke-7
    perulangan ke-8
    perulangan ke-9
    perulangan ke-10
*/