var object = "Haloo";

console.log(object);
console.log("Hello, World");

// Ini adalah declaration variable dengan var dan init dengan value "John"
// halo
/*
  Halo this is a comment multiline
  ini adalah komentar dengan banyak baris
*/
var name = "John";
console.log(name);

name = "Akbar"
console.log(name);

let data = "this is a simple string";
console.log(data);

data = "Akbar"
console.log(data);

let empty
console.log(empty);

const pi = 3.14 // =>  Variable dengan tipe data float (decimal)
const area = 10 // => Variable dengan tipe data integer (bilangan bulat)
const description = "Ini adalah deskripsi" // => Variable dengan tipe data string (Text)

console.log(typeof area); // => typeof untuk memastikan tipe apakah dari variable area
console.log(typeof description);

const sudahIstirahat = true; // => Variable dengan tipe data boolean (true/false)
console.log(typeof sudahIstirahat);

const profile = {
  name: "Akbar", // => Tipe data dari property name adalah string
  age: 23, // => Tipe data dari age adalah number
  address: "Bandung", // => Tipe data dari address adalah string
  isMariied: false, // => Tipe data dari isMarried adalah false,
  school: { // => Property dengan tipe data Object atau nested object
    name: 'UIN',
    year: 2024
  }
};

profile.address = "Lampung";

console.log(profile);
console.log(profile.name); // => Akses property name di dalam object profile
console.log(profile.school.name); // => Akses property name didalam property school
console.log(typeof profile);

// Array
const sampleArray = [
  50, // => Data pertama di dalam array, dan selanjutnya adalah data urutran setelahnya
  "A",
  true,
  { name: "Akbar" } // => Array of Object
]

console.log(typeof sampleArray);

// => 70 itu merupakan element dari array yang berlokasi di index ke 0
const scores = [70, 80, 90, 95];

/**
 * Setiap data di dalam array memiliki index sebagai urutan atau lokasi data tersebut berada
 *
 * Dan array itu selalu dimulai dengan index 0 yang artinya data pertama dalam array,
 *
 * dalam contoh di atas index ke 0 adalah 70
 */
console.log(scores[0]); // => Akses array menggunakan index

scores[0] = 50; // => merubah isi element dari array index ke 0

console.log(scores[0]); // output: 50

const fruits = ["apple", "banana", "kiwi"];

console.log(fruits); // => output apple, banana, kiwi

fruits.push("orange"); // => menambahkan element di akhir array

console.log(fruits); // => output apple, banana, kiwi, orange

fruits.unshift("mango"); // => menambahkan element di awal array

console.log(fruits); // => output mango, apple, banana, kiwi, orange

fruits.pop(); // => menghapus element di akhir array

console.log(fruits); // => output mango, apple, banana, kiwi

fruits.shift(); // => menghapus element di awal array

console.log(fruits); // => output apple, banana, kiwi

console.log(fruits.length); // => memastikan panjang dari array

const moreFruits = ["orange", "grape"];

const allFruits = fruits.concat(moreFruits); // => menggabungkan 2 array menjadi satu

console.log(allFruits); // => output apple, banana, kiwi, orange, grape

for (let i = 0; i < 5; i++) {
  let str = "* "
  console.log(str.repeat(i));
}

let n = 5
for (let i = 0; i < n; i++) {
  let str = "* "
  let space = " "

  console.log(space.repeat((n - i)) + str.repeat(i));
}

/**
 *
 * let i = 0 adalah definisi dari index array yang mau kita mulai perulanganya. jika i ini isinya 0,
 * maka array akan di akses dari index ke 0.
 *
 * i < foods.length adalah condition, yang berarti variable i itu tidak boleh kurang dari,
 * foods.length atau dalam kasus ini index itu tidak boleh melebihi panjang array
 *
 * i++ adalah post statement yang berarti, ketika condition i < foods.length itu terpenuhi,
 * maka nilai i akan ditambah 1.
 *
 * ++ merupakan increment (atau menambah 1)
 * -- merupakan decrement (atau mengurangi 1)
 *
 */

const foods = ["noodle", "egg", "rice"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

console.log("Perulangan berhasil");

// 2 dimensi array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]); // => output 5

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}


// multi dimensi array
const matrixs = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12]
  ],
];

console.log(matrixs[0][1][2]); // => output 6



// segitiga kanan
for (let i = 0; i < 5; i++) {
  let str = "* "

  console.log(str.repeat(i));
}

// segitiga kiri
let x = 5
for (let i = 0; i < x; i++) {
  let str = "* "
  let space = "  "
  console.log(space.repeat((x - i)) + str.repeat(i));
}


const isLoggedin = true;

/**
 * ketika variable dalam kondisi if () bernilai boolean cukup gunakan nama variable jika ingin,
 * memperiksa bahwa itu benar atau true. Jika ingin memperiksa jika itu salah cukup gunakan !namaVariable
 * yang artinya ! melambangkan negativ value dalam kasus boolean negativ adalah false
 */
if (!isLoggedin) { // => untuk tipe data boolean kita hanya cukup masukan kondisi true atau false
  console.log("Halo Admin");
} else {
  console.log("Harap Login");
}

const baju = "Putih";

if (baju === "Putih") { // => kalao tipe datanya bukan boolean kita harus pakai operasi === atau !==
  console.log("Baju bersih");
} else if (baju === "Merah") {
  console.log("Baju warna merah");
} else {
  console.log("Baju Kotor");
}

/**
 *
 * ini merupakan declaration dari sebuah function sederhana,
 * declaration function di tulis dengan keywords function namaFunction()
 * Jika function tidak memiliki keywords returns dia merupakan void function
 * yang berarti function tersebut tidak mengembalikan nilai apapaun ketika digunakan
 * age = 23 itu merupakan initialization parameter dengan nilai awal atau default value,
 * Ketika kita melakukan pemanggilan function tanpa mengirim parameter age, maka secara default
 * age itu bernilai 23 dan jika kita memasukan nilai parameter ke 2 nilai age akan sesuai berdasarkan
 * parameter kedua yang dikirim dari pemanggilan function
 *
 *
 * @returns string
 */
function greet(name, age = 23) {
  // Penggungaan string literal atau ` ketika ingin menggunakan variable/paramter harus dengan ${}
  return `Hello, ${name}. My Age is ${age} yo`;
}

const greeting = greet("Akbar", 24); // => Jika function memiliki keywords return didalamnya bisa menggunakan variable

console.log(greeting);

console.log(greet("Akbar")); // => Function bisa digunakan langsung tanpa variable seperti contoh berikut

/**
 *
 * * Perkalian
 * / Pembagian
 * + Penjumlahan
 * - Pengurangan
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // => Output selalu a + b dalam kasus ini argument nya bernilai 5 dan 3 hasilnya 8


function fizzBuzz(number) {
  if (number % 2 === 0) {
    return "Fizz";
  }

  if (number % 3 === 0) {
    return "Buzz";
  }

  if (number % 5 === 0) {
    return "FizzBuzz";
  }

  return "Failed";
}

console.log(fizzBuzz(2)); // => Output Fizz
console.log(fizzBuzz(3)); // => Output Buzz
console.log(fizzBuzz(5)); // => Output FizzBuzz
console.log(fizzBuzz(7)); // => Output Failed

// Anonymous Function
const greetAnon = function (name) {
  return `Hello, ${name} from anonymous function`;
}

console.log(greetAnon("Akbar"));

// Arrow Function
const greetArrow = (name) => `Hello, ${name} from Arrow Function`;

console.log(greetArrow("Akbar"));

/**
 * class itu di definisikan dengan keywords class
 * class juga memiliki constructor, dimana constructor akan selalu di akses di awal ketika
 * kita melakukan pembuatan object baru dari class dengan keywords new Car("Toyota", "Camry", 2020)
 * pada dalam constructor kita menggunakan keywords this. untuk mendefinisikan sebuah property,
 * didalam object. Mirip dengan tipe data object lainya class juga punya property
 */
class Car {
  constructor(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
  }

  information() {
    return `${this.name} have brand from ${this.brand} and build in ${this.year}`;
  }
}

const car = new Car("Toyota", "Camry", 2020);
console.log(car.information());
car.name = "Daihatsu";
console.log(car.information());














