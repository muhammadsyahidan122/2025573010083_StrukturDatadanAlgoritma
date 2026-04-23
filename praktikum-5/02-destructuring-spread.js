// 02-kelas-big-o.js
// Contoh konkret setiap kelas kompleksitas Big O

// ─── O(1) — Konstan ───────────────────────────────────
function ambilPertama(arr) { return arr[0]; } // O(1)
function tambahkanItem(arr, item) { arr.push(item); } // O(1)
function isGenap(n) { return n % 2 === 0; } // O(1)

// ─── O(log n) — Logaritmik ────────────────────────────
function binarySearch(arr, target) {
let kiri = 0, kanan = arr.length - 1;
let langkah = 0;
while (kiri <= kanan) {
langkah++;
const tengah = Math.floor((kiri + kanan) / 2);
if (arr[tengah] === target) {
    console.log(` Ditemukan di indeks ${tengah} setelah ${langkah} langkah`);
return tengah;
}
if (arr[tengah] < target) kiri = tengah + 1;
else kanan = tengah - 1;
}
return -1;
}
// ─── O(n) — Linear ───────────────────────────────────
function cariMax(arr) {
let maks = arr[0];
for (const x of arr) if (x > maks) maks = x;
return maks;
}
// ─── O(n2) — Kuadratik ───────────────────────────────
function bubbleSortNaif(arr) {
const a = [...arr];
for (let i = 0; i < a.length; i++)
for (let j = 0; j < a.length - i - 1; j++)
if (a[j] > a[j+1]) [a[j], a[j+1]] = [a[j+1], a[j]];
return a;
}
// ─── O(2n) — Eksponensial ────────────────────────────
function fibRekursif(n) {
if (n <= 1) return n;
return fibRekursif(n-1) + fibRekursif(n-2); // dua panggilan rekursif!
}
// ── Demonstrasi ──────────────────────────────────────
console.log('=== O(1) — selalu cepat ===');
console.log(ambilPertama([10,20,30,40,50])); // 10
console.log(isGenap(42)); // true
console.log('\n=== O(log n) — Binary Search ===');
const sorted = Array.from({length:1_000_000},(_,i)=>i);
binarySearch(sorted, 731_452); // cari di 1 juta data
console.log('\n=== O(n) — Linear Search ===');
console.log('Max dari 1000 elemen:',
cariMax(Array.from({length:1000},()=>Math.random()*1000|0)));
console.log('\n=== O(n2) — Bubble Sort (kecil saja) ===');
console.log(bubbleSortNaif([64, 34, 25, 12, 22, 11, 90]));
console.log('\n=== O(2n) — Fibonacci Rekursif (n kecil!) ===');
for (let i = 0; i <= 10; i++) process.stdout.write(fibRekursif(i) + ' ');
console.log('');
// Demonstrasi betapa lambatnya O(2n)
console.log('\nWaktu fib(35) O(2n):');
let t = Date.now(); fibRekursif(35); console.log(Date.now()-t, 'ms');
console.log('Waktu fib(35) O(n) memoization:');
const memo = {};
function fibMemo(n) {
if (n <= 1) return n;
if (memo[n]) return memo[n];
return memo[n] = fibMemo(n-1) + fibMemo(n-2);
}
t = Date.now(); fibMemo(35); console.log(Date.now()-t, 'ms');


//latihan 1
// fungsi ukur waktu
function hitungKompleksitas(n, fn, label) {
    const start = Date.now();
    fn(n);
    const end = Date.now();
    console.log(label, ':', end - start, 'ms');
}

// Fungsi A → O(1)
function fungsiA(n) {
    return n * 2;
}

// Fungsi B → O(n²)
function fungsiB(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // dikosongkan biar tidak terlalu berat
        }
    }
}

// Fungsi C → O(log n)
function fungsiC(n) {
    for (let i = 1; i < n; i *= 2) {
        // kosong
    }
}

// Fungsi D → O(n³)
function fungsiD(n) {
    const arr = Array.from({ length: n }, (_, i) => i);
    arr.forEach(x =>
        arr.forEach(y =>
            arr.forEach(z => {
                // kosong
            })
        )
    );
}

// Jalankan
const n = 1000;

console.log("=== Pengukuran Waktu ===");

hitungKompleksitas(n, fungsiA, "Fungsi A O(1)");
hitungKompleksitas(n, fungsiB, "Fungsi B O(n²)");
hitungKompleksitas(n, fungsiC, "Fungsi C O(log n)");

// hati-hati: O(n³) sangat berat!
hitungKompleksitas(100, fungsiD, "Fungsi D O(n³)");














