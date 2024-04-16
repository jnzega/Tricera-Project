/*
    Dalam pembuatan function di javascript, kita juga dapat membuat
    sebuah function menggunakan arrow function.
*/

// contoh 1
const sayHelloName = (name) => {
    console.info(`Hello ${name}`)
}

sayHelloName("Joshua") // output: Hello Joshua

// contoh 2
const sayHello = (name) => console.info(`Hello ${name}`)

sayHello("Chrisly") // output: Hello Chrisly