// Tugas 2: Visualisasi Pertumbuhan Big O

// ─────────────────────────────────────────────
// Fungsi-fungsi dengan kompleksitas berbeda
// ─────────────────────────────────────────────

// O(1)
function fn_O1(n) {
    return n + 1;
}

// O(n)
function fn_On(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

// O(n log n)
function fn_OnLogn(n) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        // loop log2(n)
        for (let j = 1; j < n; j *= 2) {
            total += j;
        }
    }

    return total;
}

// O(n²)
function fn_On2(n) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            total += i + j;
        }
    }

    return total;
}

// ─────────────────────────────────────────────
// Fungsi benchmark
// ─────────────────────────────────────────────
function benchmarkSemua(ukuranData) {
    console.log("=== Benchmark Big O ===\n");

    for (const n of ukuranData) {
        console.log(`Ukuran data: ${n}`);

        let start, end;

        // O(1)
        start = Date.now();
        fn_O1(n);
        end = Date.now();
        console.log("O(1)     :", end - start, "ms");

        // O(n)
        start = Date.now();
        fn_On(n);
        end = Date.now();
        console.log("O(n)     :", end - start, "ms");

        // O(n log n)
        start = Date.now();
        fn_OnLogn(n);
        end = Date.now();
        console.log("O(nlogn) :", end - start, "ms");

        // O(n²)
        start = Date.now();
        fn_On2(n);
        end = Date.now();
        console.log("O(n²)    :", end - start, "ms");

        console.log("------------------------");
    }
}

// ─────────────────────────────────────────────
// Jalankan benchmark
// ─────────────────────────────────────────────
benchmarkSemua([100, 500, 1000, 5000, 10000]);

// ─────────────────────────────────────────────
// OBSERVASI (WAJIB DI LAPORAN)
// ─────────────────────────────────────────────
/*
Hasil pengamatan:

1. O(1):
   - Waktu hampir selalu 0 ms atau sangat kecil
   - Tidak berubah meskipun n bertambah
   → Konsisten dengan teori: tidak bergantung pada input

2. O(n):
   - Waktu bertambah secara linear
   - n naik 10x → waktu kira-kira ikut naik

3. O(n log n):
   - Lebih lambat dari O(n), tapi jauh lebih cepat dari O(n²)
   - Pertumbuhan sedang (tidak terlalu curam)

4. O(n²):
   - Sangat cepat membesar
   - n naik sedikit → waktu melonjak drastis
   → Ini menunjukkan kenapa nested loop mahal

Kesimpulan:
Urutan performa sesuai teori:
O(1) < O(log n) < O(n) < O(n log n) < O(n²)

Namun:
- Hasil real bisa dipengaruhi CPU, optimasi JS engine, dan noise timing
- Untuk n kecil, perbedaan mungkin tidak terlalu terlihat
*/