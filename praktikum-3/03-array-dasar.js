// 1.membuat array
const mahasiswa = ['Budi', 'Siti', 'Ahmad', 'Rina'];
const nilai     = [85, 92, 78, 95, 88];

console.log('=== Array Awal ===');
console.log('Mahasiswa:', mahasiswa);
console.log('Nilai     :', nilai);
console.log('Jumlah mahasiswa:', mahasiswa.length);

//2.mengakses elemen
console.log('\n=== Akses Elemen ===');
console.log('Elemen pertama :', mahasiswa[0]);   //indeks 0
console.log('Elemen ketiga  :', mahasiswa[2]);   //indeks 2
console.log('Elemen terakhir:', mahasiswa[mahasiswa.length - 1]);

//3.mengunduh elemen
mahasiswa[1] = 'Siti rahayu';  //ubah elemen indeks 1
console.log('\nSetelah diubah:', mahasiswa);

//4.menambah dan menghapus elemen
console.log('\n===manipulasi Array ===');
mahasiswa.push('Doni');     //tambah di akhir
console.log('Setelah push   :', mahasiswa);

mahasiswa.unshift('Zahra');
console.log('setelah unshift    :', mahasiswa);

const dihapusAkhir = mahasiswa.pop();
console.log('Dihapus (shift)    :', dihapusAkhir);
console.log('Setelah pop    :', mahasiswa);

const dihapusAwal = mahasiswa.shift();
console.log('Dihapus (shift) :', dihapusAwal);
console.log('Setelah shift  :', mahasiswa);

//5.mencari elemen
console.log('\n===Pencarian ===');
console.log('indeks Ahmad :', mahasiswa.indexOf('Ahmad'));
console.log('Ada Rina :', mahasiswa.includes('Rina'));
console.log('Ada Budi :', mahasiswa.includes('Budi'));

//6.mengiris array dengan slice
const sebagian = nilai.slice(1, 4);
console.log('\nNilai asli :', nilai);
console.log('Slice [1,4] :', sebagian);

//latihan 3

// 7. Daftar Belanja
const daftarBelanja = ['Beras', 'Gula', 'Minyak', 'Telur', 'Kopi'];

console.log('\n=== Daftar Belanja Awal ===');
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

// 8. Tambah 2 item baru 
daftarBelanja.push('Susu');
daftarBelanja.push('Roti');

console.log('\nSetelah tambah item:');
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

// 9. Hapus item pertama 
const itemDihapus = daftarBelanja.shift();
console.log('\nItem yang dihapus:', itemDihapus);

// 10. Cek apakah "Susu" ada 
const adaSusu = daftarBelanja.includes('Susu');
console.log('Apakah "Susu" ada di daftar?', adaSusu);

// 11. Jumlah item akhir 
console.log('Jumlah item akhir:', daftarBelanja.length);