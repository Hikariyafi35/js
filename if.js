const rain = true;

if (rain){
    console.log("Disini Hujan");
    console.log("tidak berangkat karena hujan");
}
else{
    console.log("berangkat");
}

let a = 20;
if (a>10){
    console.log("Lebih besar");
}else{
    console.log("Lebih kecil");
}

let asal = "italia";
let makanan  = null;

if(asal === "Inggris"){
    makanan = "Roti";
}else if(asal === "jepang"){
    makanan = "Sushi";
}else if(asal === "italia"){
    makanan = "Pizza";
}

console.log(makanan);
/**
 Selain if statement di atas, JavaScript juga mendukung ternary operator 
 atau conditional expressions. Dengan ini, kita bisa menuliskan if-else
  statement hanya dalam satu baris.
 */
const jumlah = 20;

const jenis = jumlah>=10 ?"Cukup":"Kurang";

console.log(`${jumlah} termasuk dalam jumlah ${jenis}`);

let nama = "Shazam";

if(nama){
    console.log(`Perkenalakn nama saya ${nama}`);
}else{
    console.log("nama belum di isi");
}