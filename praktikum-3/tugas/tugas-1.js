// 1 & 2. Array dataMahasiswa
const dataMahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 70 },
    { nama: "Citra", nilai: 92 },
    { nama: "Dewi", nilai: 60 },
    { nama: "Eka", nilai: 78 },
    { nama: "Fajar", nilai: 88 }
];

// 3. Function hitungStatistik (reduce)
function hitungStatistik(arrMahasiswa) {
    const hasil = arrMahasiswa.reduce((acc, mhs, index) => {
        acc.total++;
        acc.jumlahNilai += mhs.nilai;

        if (mhs.nilai > acc.tertinggi) acc.tertinggi = mhs.nilai;
        if (mhs.nilai < acc.terendah) acc.terendah = mhs.nilai;

        return acc;
    }, {
        total: 0,
        jumlahNilai: 0,
        tertinggi: -Infinity,
        terendah: Infinity
    });

    hasil.rataRata = hasil.jumlahNilai / hasil.total;
    delete hasil.jumlahNilai;

    return hasil;
}

// 4. Function filterLulus
function filterLulus(arrMahasiswa, batasLulus) {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

// 5. Function tambahGrade (map)
function tambahGrade(arrMahasiswa) {
    return arrMahasiswa.map(mhs => {
        let grade;

        if (mhs.nilai >= 85) grade = "A";
        else if (mhs.nilai >= 75) grade = "B";
        else if (mhs.nilai >= 65) grade = "C";
        else if (mhs.nilai >= 50) grade = "D";
        else grade = "E";

        return {
            ...mhs,
            grade: grade
        };
    });
}

// 6. Panggil semua function
const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 75);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

// Output Statistik
console.log("=== STATISTIK NILAI ===");
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata       : ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

console.log("\n=== MAHASISWA LULUS ===");
mahasiswaLulus.forEach(mhs => {
    console.log(`Nama: ${mhs.nama} | Nilai: ${mhs.nilai}`);
});

console.log("\n=== DATA DENGAN GRADE ===");
mahasiswaDenganGrade.forEach(mhs => {
    console.log(`Nama: ${mhs.nama} | Nilai: ${mhs.nilai} | Grade: ${mhs.grade}`);
});