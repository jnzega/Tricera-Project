
/*
* Operator typeof digunakan untuk memberi tahu
* tipe data dari sebuah nilai variabel
* */

// Berikut hasil output yang keluar
/*
    +-----------+---------------+
    | Type      | Hasil Operasi |
    +-----------+---------------+
    | Undefined | "undefined"   |
    | Null      | "object"      |
    | Boolean   | "boolean"     |
    | Number    | "number"      |
    | BigInt    | "bigint"      |
    | String    | "string"      |
    | Symbol    | "symbol"      |
    | Function  | "function"    |
    | Lainnya   | "object"      |
    +-----------+---------------+
*/

let data = 200;
const typeData = typeof data
if (typeData === "number") {
    document.writeln(`nilai dari typeData adalah ${typeData}`)
}