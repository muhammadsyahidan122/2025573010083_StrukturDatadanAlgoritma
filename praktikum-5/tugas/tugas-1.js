// Tugas 1: Analisis dan Refactor

// FUNGSI A: INTERSECTION ARRAY


// Versi lambat
// Time: O(n²)
// Space: O(1)
function intersectionLambat(a, b) {
    const hasil = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j] && !hasil.includes(a[i])) {
                hasil.push(a[i]);
            }
        }
    }
    return hasil;
}

// Versi cepat
// Time: O(n)
// Space: O(n)
function intersectionCepat(a, b) {
    const setB = new Set(b);
    const hasil = [];

    for (const x of a) {
        if (setB.has(x)) hasil.push(x);
    }

    return [...new Set(hasil)];
}



// FUNGSI B: KELOMPOK ANAGRAM


// Time: O(n * k log k)
// Space: O(n)
function kelompokAnagram(arr) {
    const map = {};

    for (const kata of arr) {
        const key = kata.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(kata);
    }

    return Object.values(map);
}



// FUNGSI C: a + b = c²


//  Versi lambat
// Time: O(n³)
// Space: O(1)
function cekTripleLambat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i] + arr[j] === arr[k] * arr[k]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//  Versi lebih cepat (refactor)
// Time: O(n log n) + O(n²) ≈ O(n²)
// Space: O(n)
function cekTripleCepat(arr) {
    arr.sort((a, b) => a - b);
    const set = new Set(arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const jumlah = arr[i] + arr[j];
            const akar = Math.sqrt(jumlah);

            if (Number.isInteger(akar) && set.has(akar)) {
                return true;
            }
        }
    }
    return false;
}



// BENCHMARK


function ukur(label, fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(label, ':', end - start, 'ms');
}

// DATA BESAR
const arr1 = Array.from({ length: 20000 }, () => Math.floor(Math.random()*10000));
const arr2 = Array.from({ length: 20000 }, () => Math.floor(Math.random()*10000));

console.log("=== Intersection ===");
ukur("Lambat O(n²)", () => intersectionLambat(arr1, arr2));
ukur("Cepat  O(n) ", () => intersectionCepat(arr1, arr2));

// Anagram test
console.log("\n=== Anagram ===");
const kata = ['eat','tea','tan','ate','nat','bat'];
console.log(kelompokAnagram(kata));

// Triple test
console.log("\n=== Triple Check ===");
const arr3 = Array.from({ length: 3000 }, () => Math.floor(Math.random()*1000));

// versi lambat dibatasi biar tidak hang
ukur("Lambat O(n³)", () => cekTripleLambat(arr3.slice(0, 200)));
ukur("Cepat  O(n²)", () => cekTripleCepat(arr3));


// ─────────────────────────────────────────────
// ANALISIS / KESIMPULAN
// ─────────────────────────────────────────────
/*
1. Intersection:
   - O(n²) sangat lambat untuk data besar
   - O(n) jauh lebih cepat karena menggunakan Set

2. Anagram:
   - Bergantung pada sorting → O(n * k log k)
   - Cukup efisien untuk kasus string

3. Triple Check:
   - O(n³) tidak praktis (cepat meledak)
   - Versi refactor jauh lebih cepat (≈ O(n²))

KESIMPULAN:
- Refactoring dengan struktur data (Set, Object) sangat penting
- Trade-off:
  Lebih cepat → butuh memori tambahan
  Lebih hemat memori → biasanya lebih lambat
*/