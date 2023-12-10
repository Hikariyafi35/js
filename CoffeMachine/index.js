// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

const {coffeStock,isCoffeMachineReady} = require('./state');// ketika menggunakan destructuring object pastikan penamaan variabel lokal sesuai dengan properti objeknya.

const makeCoffe = (type,miligram) =>{
    if (coffeStock[type] >= miligram) {
        console.log("kopi berhasil dibuat");
    }else{
        console.log("biji kopi habis");
    }
}
console.log(isCoffeMachineReady);
console.log(coffeStock);
makeCoffe("robusta",80);

