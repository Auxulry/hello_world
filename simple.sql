# Ini Untuk membuat Database
CREATE DATABASE sample_database;
# Ini untuk menghapus Database
DROP DATABASE sample_database;
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
);