// 2. Function rekursif pangkat(basis, eksponen)
function pangkat(basis, eksponen) {
    // base case
    if (eksponen === 0) {
        return 1;
    }
    
    // recursive case
    return basis * pangkat(basis, eksponen - 1);
}

// Uji pangkat
console.log("=== UJI PANGKAT ===");
console.log(`2^3 = ${pangkat(2,3)}`);
console.log(`5^2 = ${pangkat(5,2)}`);
console.log(`3^4 = ${pangkat(3,4)}`);
console.log(`7^0 = ${pangkat(7,0)}`);


// 3. Function rekursif balikString
function balikString(str) {
    // base case
    if (str.length <= 1) {
        return str;
    }

    // recursive case
    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// Uji balik string
console.log("\n=== UJI BALIK STRING ===");
console.log(`halo -> ${balikString("halo")}`);
console.log(`dunia -> ${balikString("dunia")}`);
console.log(`javascript -> ${balikString("javascript")}`);


// 4. Function cekPalindrom
function cekPalindrom(str) {
    const hasilBalik = balikString(str);
    return str === hasilBalik;
}

// Uji palindrom
console.log("\n=== UJI PALINDROM ===");
const kata = ["katak", "civic", "level", "halo"];

kata.forEach(k => {
    console.log(`${k} -> ${cekPalindrom(k) ? "Palindrom" : "Bukan Palindrom"}`);
});