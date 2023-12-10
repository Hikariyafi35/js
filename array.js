let myArray = ["BMW",1200,20.2,true,"Racing"];
myArray.push("Fast");
myArray.pop();
myArray.shift();
myArray.unshift("Lamborgini");

myArray.splice(2,1, "Light Blue")
console.log(...myArray);

console.log("panjang array adalah "+myArray.length+".");

let urutan = ["buka bungkus","siapkan segelas air putih","telan pil","minum air agar pil tertelan"];
console.log(urutan);
console.log(...urutan);
console.log(urutan[0],urutan[1],urutan[2],urutan[3]);

let favorit = ["Mixue","Mcdonal","Burjo"];
let makanan = ["Bakso","Roti","Maklor"];

allfood = [...favorit,...makanan];
console.log(allfood);

let chara = {name:'Naruto', clan:'Uzumaki',Role:'Ninja'};
let location = {village:'Konoha',favplace:'Ichiraku',food:'Ramen'};

identity = {...chara,...location};
console.log(identity);