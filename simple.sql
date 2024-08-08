# Ini Untuk membuat Database
CREATE DATABASE sample_database;
# Ini untuk menghapus Database
DROP DATABASE sample_database;
USE sample_database;
# PRIMARY KEY membuat identitas atau nilai dari column yang di atur menjadi unique
# AUTO_INCREMENT membuat id ketika ada data baru dia akan bertambah 1 karna dia integer
# contoh:
# data pertama dengan id 1. Lalu kita membuat Record (Data) baru maka data baru akan,
# memiliki id 2 karna menggunakan KEYWORDS AUTO_INCREMENT
#
# varchar merupakan tipe data string saat kita menggunakan varchar kita harus,
# mendefinisikan berapa panjang dari varchar tersebut.
# sebagai contoh jika kita membuat varchar dengan panjang 3 maka kita tidak boleh,
# memasukan huruf atau karakter lebih dari 3 dan di definisikan varchar(3)
# dan keywords not null merupakan flagging atau tanda bahwa column tersebut tidak boleh kosong.
#
# Naming Convension table biasanya menggunakan plural atau jamak sebagai contoh students bukan student
# Naming Convension column harus snake_case sebagai contoh student_name
CREATE TABLE students (
  id bigint PRIMARY KEY AUTO_INCREMENT,
  name varchar(191) not null,
  grade varchar(191) not null
);
# Kalau Values itu kalian bisa melakukan penambahan banyak sekaligus
# kalau value kalian hanya bisa menambahkan 1 record saja
INSERT INTO students (name, grade)
VALUES ('Mochamad Akbar', 'B'),
  ('Rocky', 'C');
# * Artinya kita memilih semua column untuk ditampilkan
SELECT *
FROM students;
# WHERE Keyword digunakan untuk sebagai filter
# dalam kasus ini kita ingin mencari students dengan grade C
SELECT *
FROM students
WHERE grade = 'C';
# * kita ganti menjadi nama column/field yang artinya kita hanya ingin menampilkan
# nama dari students
SELECT name
FROM students;
# kalau kita tidak memasukan keywords where maka kita akan melakukan update seluruh data
# jika kita menggunakan where atau kondisi kita akan merubah data yang ingin kita pilih saja
UPDATE students
SET grade = 'D'
WHERE grade = 'C';
# Sama dengan update jika kita tidak menggunakan kondisi atau where maka kita akan menghapus
# semua data
# jika kita ingin menghapus data yang kita pilih maka gunakan where
DELETE FROM students
where id = 1;
CREATE TABLE teachers (
  id bigint PRIMARY KEY AUTO_INCREMENT,
  name varchar(191) not null
);
# column teacher_id pada table classes merupakan foreign key atau penghubung antara table,
# teachers dan classes dimana 1 kelas itu dimiliki oleh 1 guru (One to One) atau
# 1 guru bisa punya banyak kelas (One to Many)
# Cara mendefinisikan foreign key cukup dengan
# CONSTRAINT FOREIGN KEY (column) REFERENCES <table> (column) (option)
CREATE TABLE classes (
  id bigint PRIMARY KEY AUTO_INCREMENT,
  teacher_id bigint not null,
  name varchar(191) not null,
  CONSTRAINT FOREIGN KEY (teacher_id) REFERENCES teachers (id) ON DELETE CASCADE
);
INSERT INTO teachers (name) VALUE ('Roy');
# Ketika kita mau menambahkan data relational kita perlu tahu dulu id dari parent table
# dalam kasus ini parent table adalah teacher, dimana kita mau menambahkan kelas
# terhadap teacher dengan nama Roy dimana roy memiliki 2 kelas yaitu Sistem Informasi dan
# Teknik Informasi
INSERT INTO classes (teacher_id, name)
VALUES (1, 'Sistem Informasi'),
  (1, 'Teknik Informasi');
# dalam proses pengambilan data dari 2 atau lebih table kita perlu melakukan pemanggilan
# column dengan nama <table>.<column>. Jika data yang ingin kita tampilkan kita ganti nama,
# column gunakan AS sebagai alias atau pengganti sementara dari nama column
# Dalam kasus ini kita mencoba mengambil data dari table classes dan ingin mengambil data
# Guru berdasarkan column teacher_id yang ada di table classes dengan menggunakan inner join
# dimana inner join membutuhkan foreign key sebagai kunci asing atau sebagai izin untuk
# mengakses table yang kita mau dalam hal ini table teachers yang akan kita ambil datanya
SELECT classes.name as nama_kelas,
  teachers.name as nama_guru
FROM classes
  INNER JOIN teachers on classes.teacher_id = teachers.id