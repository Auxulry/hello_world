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


















