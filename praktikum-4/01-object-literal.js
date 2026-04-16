// 1.Membuat object literal
const mahasiswa = {
    nama : 'Budi Santoso',
    umur : 20,
    jurusan : 'Teknik Informatika',
    ipk : 3.75,
    aktif : true,
};

// 2.Mengakses Property
console.log('=== Akses Property ===');
console.log('Nama    :', mahasiswa.nama);
console.log('Jurusan :', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK     :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@email.com';
mahasiswa.umur = 21;

console.log('\nSetelah update:', mahasiswa);


// Object dosen
const dosen = {
    nama : 'Dr. Ahmad Fauzi',
    mataKuliah : 'Struktur Data',
    pengalaman : 10,

    perkenalan() {
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
    },

    statusSenior() {
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') {
        console.log(`${key}: ${dosen[key]}`);
    }
}

console.log('Keys   :', Object.keys(mahasiswa));
console.log('Values :', Object.values(mahasiswa));


// Latihan Buku
const koleksiBuku = [
    {
        judul: "Belajar JavaScript",
        pengarang: "Abdi Setiawan",
        tahunTerbit: 2022,
        harga: 100000,
        tersedia: true,

        info() {
            return `Judul: ${this.judul}
Pengarang: ${this.pengarang}
Tahun: ${this.tahunTerbit}
Harga: Rp${this.harga}
Tersedia: ${this.tersedia ? "Ya" : "Tidak"}`;
        },

        diskon(persen) {
            return this.harga * (1 - persen / 100);
        }
    },

    {
        judul: "Algoritma dan Struktur Data",
        pengarang: "Budi Santoso",
        tahunTerbit: 2021,
        harga: 120000,
        tersedia: true,

        info() {
            return `Judul: ${this.judul}
Pengarang: ${this.pengarang}
Tahun: ${this.tahunTerbit}
Harga: Rp${this.harga}
Tersedia: ${this.tersedia ? "Ya" : "Tidak"}`;
        },

        diskon(persen) {
            return this.harga * (1 - persen / 100);
        }
    },

    {
        judul: "Pemrograman Web",
        pengarang: "Citra Dewi",
        tahunTerbit: 2023,
        harga: 90000,
        tersedia: false,

        info() {
            return `Judul: ${this.judul}
Pengarang: ${this.pengarang}
Tahun: ${this.tahunTerbit}
Harga: Rp${this.harga}
Tersedia: ${this.tersedia ? "Ya" : "Tidak"}`;
        },

        diskon(persen) {
            return this.harga * (1 - persen / 100);
        }
    }
];

console.log("\n=== KOLEKSI BUKU ===");
koleksiBuku.forEach((buku, index) => {
    console.log(`\nBuku ke-${index + 1}`);
    console.log(buku.info());
    console.log(`Harga setelah diskon 10%: Rp${buku.diskon(10)}`);
});