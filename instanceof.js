class Hewan{
    suara(){
        console.log('menegeluarkan suara ');
    } 
}

class Anjing extends Hewan{
    suara(){
        console.log('guk guk');
    }
}
class Kucing extends Hewan{
    suara(){
        console.log('meong');
    }
}

let anjing = new Anjing;
let kucing = new Kucing;

