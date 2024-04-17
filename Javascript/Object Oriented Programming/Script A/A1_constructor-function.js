/**
 * Sebelum versi EcmaScript 6, untuk membuat sebuah objek
 * dalam bahasa pemrograman javascript, kita menggunakan
 * sebuah constructor method.
 */

//contoh
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.sayHello = function () {
        document.writeln(`<p>Hello ${this.firstName + " "  + this.lastName}</p>`)
    }
}

const joshua = new Person("Joshua", "Zega")

const chrisly = new Person("Chrisly", "Paa")

console.log(chrisly)
joshua.sayHello()


/**
 * Program di bawah adalah cara membuat constructor inheritance.
 * Artinya kita dapat memanggil dan mewarisi seluruh properti
 * yang ada di dalam constructor lain ke dalam constructor
 * yang baru.
 */

// contoh
function Company(firstName, lastName, name, address){
    Person.call(this, firstName, lastName)
    this.companyName = name
    this.companyAddress = address
    this.declare = function () {
        document.writeln(`<p>${this.companyName} dimiliki oleh ${this.firstName + " " + this.lastName}</p>`)
    }
}

const jojo = new Company("Joshua", "Zega", "PT. Jagat Nirwana Zega", "Tangerang Selatan")

jojo.declare()
console.info(jojo)
