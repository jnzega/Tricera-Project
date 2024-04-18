/**
 * Setelah mengetahui cara implementasi OOP di javascript
 * sebelum ecmascript 6, sekarang saatnya mengimplementasi
 * OOP di javascript dengan cara baru, menggunakan kata kunci
 * class.
 */

// contoh 
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    sayHello(name = "kamu yang di sana") {
        document.writeln(
            `<p>Hi, ${name}. Nama saya ${
                this.firstName + " " + this.lastName
            }. Senang bertemu dengan Anda</p>`
        )
    }
    
}

const joshua = new Person("Joshua", "Zega");
console.log(joshua)
joshua.sayHello("Chrisly") // output: Hi, Chrisly. Nama saya Joshua Zega. Senang bertemu dengan Anda

/**
 * Class dalam javascript memiliki fitur pewarisan atau
 * inheritance. Namun, sebuah class hanya boleh memiliki
 * 1 parent yang diwariskan saja.
 */

// contoh
class Employee {
    constructor(firstName) {
        this.firstName = firstName
    }
    sayHello(name) {
        console.info(`Hello, ${name}, I'm ${this.name}`)
    }
}

class Manager extends Employee {

    constructor(firstName, lastName) {
        super(firstName)
        this.lastName = lastName
    }

    sayHello(name) {
        console.info(`Hello, ${name}, I'm Manager ${this.firstNameame + " " + this.lastName}`)
    }
}

const budi = new Employee("Budi")
budi.sayHello("Bos")

const andri = new Manager("Andri", "Zega")
andri.sayHello("Bawahan")