function init() {
  //let nama = "Sandhika"; // local variabel
  function tampilNama(nama) {
    console.log(nama);
  }
  return tampilNama;
}
let panggilNama = init();
panggilNama('Udin');
console.log('==============================');
function ucapSalam(waktu){
    return function(nama){
        console.log(`Halo  ${nama},Selamat${waktu},semoga harimu menyenangkan`);
    }
}
let selamatPagi = ucapSalam('Pagi');
let selamatSiang = ucapSalam('Siang');
let selamatMalam = ucapSalam('Malam');

selamatPagi('Hika');
selamatMalam('Kari');
console.log('====================');


let add = function (){
    let counter =0;
    return function (){
        return ++counter;
    };
}

let a = add();

console.log(a());
console.log(a());
console.log(a());

console.log('=================');

function inite(){
    const name ='obi wan';//variabel lokal di dalam scope init

    function salam(){ //inner function
        console.log(`halo, ${name}`);//memanggil variabel yang di deklarasikan
    }
    return salam;
}

const panggil = inite();
panggil();