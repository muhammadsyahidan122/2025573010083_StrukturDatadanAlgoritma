// --- 1. Function tanpa parameter dan tanpa return ---
function sapa() {
    console.log('Halo! Selamat datang di praktikum JavaScript.');
}
sapa(); // memanggil function
sapa(); // bisa dipanggil berkali-kali

// --- 2. Function dengan parameter ---
function sapaNama(nama) {
console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama('Budi');
sapaNama('Siti');

// --- 3. Function dengan beberapa parameter dan return value ---
function tambah(angka1, angka2) {
const hasil = angka1 + angka2;
return hasil; // mengembalikan nilai
}
const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7, 13)); // bisa langsung dipakai

// --- 4. Function dengan default parameter ---
// Jika argumen tidak diberikan, gunakan nilai default
function hitung(nilai, pengali = 2) {
return nilai * pengali;
}
console.log(hitung(5)); // 10 (pengali pakai default: 2)
console.log(hitung(5, 3)); // 15 (pengali diisi: 3)
// --- 5. Scope variabel ---
const pesanGlobal = 'Saya ada di mana saja'; // global scope

function cekScope() {
const pesanLokal = 'Saya hanya ada di dalam function ini'; // local scope
console.log(pesanGlobal); // bisa akses global
console.log(pesanLokal); // bisa akses lokal
}
cekScope();
console.log(pesanGlobal);

//latihan 1
//6.function kurang ---
function kurang(a, b) {
    return a- b;
}

//7.function kali ---
function kali(a, b) {
    return a * b;
}

//8.function bagi ---
function bagi(a, b) {
    if (b === 0) {
        console.log('ERROR: tidak bisa membagi dengan nol');
        return null;
    }
    return a/b;
}

//9.function kalkulator ---
function kalkulator(a, operator, b) {
    if (operator === '+') {
        return tambah(a, b);
    } else if (operator === '-') {
        return kurang(a, b);
    } else if (operator === '*') {
        return kali(a, b);
    } else if (operator === '/') {
        return bagi(a, b);
    } else {
        console.log('Operator tidak dikenal');
        return null;
    }
}

//10.pengujian kalkulator
console.log('7 + 8 =', kalkulator(7, '+', 8));
console.log('5 - 7 =', kalkulator(5, '-', 7));
console.log('8 * 9 =', kalkulator(8, '*', 9));
console.log('7 / 8 =', kalkulator(7, '/', 8));
console.log('20 / 0 =', kalkulator(20, '/', 0));
