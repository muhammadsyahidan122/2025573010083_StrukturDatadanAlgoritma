// tugas/tugas-2.js

const beratBadan = 68;   // kg
const tinggiBadan = 1.72; // meter

// hitung BMI
const bmi = beratBadan / (tinggiBadan * tinggiBadan);

// kategori BMI
let kategori;

if (bmi < 18.5) {
  kategori = "Kurus (Underweight)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  kategori = "Normal (Ideal)";
} else if (bmi >= 25.0 && bmi <= 29.9) {
  kategori = "Kelebihan Berat Badan (Overweight)";
} else {
  kategori = "Obesitas (Obese)";
}

// tampilkan hasil
console.log(
  `Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} m | BMI: ${bmi.toFixed(2)} | Kategori: ${kategori}`
);