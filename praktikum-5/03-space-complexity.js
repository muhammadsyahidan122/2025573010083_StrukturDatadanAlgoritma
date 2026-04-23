// 04-space-compexity.js

//O(i) space: hanya pakai variabel tambahan konstan
function jumlahArray(arr) {
    let total = 0;
    for (const x of arr) total += x;
    return total;
}

//O(n) Space: membuat struktur baru sebesar input
function duplikasiArray(arr) {
    const baru = [];
    for (const x of arr) baru.push(x * 2);
    return baru;
}

//O(n) Space: Rekursi (Call Stack)
function faktorialRekursi(n) {
    if (n <= 1) return 1;
    return n * faktorialRekursi(n - 1);
}

//O(1) Space: faktorial iteratif
function faktorialIterasi(n) {
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i;
    return hasil;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Jumlah array   :', jumlahArray(arr));
console.log('Duplikasi array:', duplikasiArray(arr));
console.log('Faktorial 10 rekursif :', faktorialRekursi(10));
console.log('Faktorial 10 iteratif :', faktorialIterasi(10));

//visuallisasi hitung elemen unik (O(n) space)
function hitungUnik(arr) {
    const seen = new Set();
    for (const x of arr) seen.add(x);
    return seen.size;
}

const dataAcak = [1,2,3,2,1,4,5,3,6,4,7];
console.log('Elemen unik:', hitungUnik(dataAcak));


// LATIHAN 3: Cari pasangan jumlah = target


//  Versi lambat (nested loop)
// Time: O(n²)
// Space: O(1)
function cariPasanganLambat(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

//  Versi cepat (pakai Set)
// Time: O(n)
// Space: O(n)
function cariPasanganCepat(arr, target) {
    const seen = new Set();

    for (const x of arr) {
        const pasangan = target - x;
        if (seen.has(pasangan)) {
            return [pasangan, x];
        }
        seen.add(x);
    }

    return null;
}



// UJI DATA KECIL

const arrKecil = [2, 7, 11, 15];
const targetKecil = 9;

console.log("=== Uji Data Kecil ===");
console.log("Lambat:", cariPasanganLambat(arrKecil, targetKecil)); // [2,7]
console.log("Cepat :", cariPasanganCepat(arrKecil, targetKecil));  // [2,7]



// BENCHMARK DATA BESAR

function ukurWaktu(label, fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(label, ":", end - start, "ms");
}

// buat array besar (50.000 data)
const dataBesar = Array.from({ length: 50000 }, () =>
    Math.floor(Math.random() * 100000)
);

// target yang tidak ada
const targetBesar = -1;

console.log("\n=== Benchmark ===");

//  O(n²) sangat berat → bisa lama
ukurWaktu("Lambat O(n²)", () =>
    cariPasanganLambat(dataBesar, targetBesar)
);

ukurWaktu("Cepat  O(n)", () =>
    cariPasanganCepat(dataBesar, targetBesar)
);



// DISKUSI / ANALISIS

/*
Hasil:

1. Fungsi Lambat (O(n²)):
   - Sangat lambat untuk data besar
   - Tidak scalable (n besar → waktu meledak)

2. Fungsi Cepat (O(n)):
   - Jauh lebih cepat
   - Cocok untuk data besar

Trade-off:
- O(n²):
  + Hemat memori (O(1))
  - Sangat lambat

- O(n):
  + Cepat
  - Butuh memori tambahan (Set → O(n))

Kesimpulan:
Gunakan versi cepat (Set) untuk aplikasi nyata.
Versi lambat hanya cocok untuk pembelajaran atau data kecil.
*/