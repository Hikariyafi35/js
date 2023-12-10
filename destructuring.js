const profile = {
  firstName: "Hikari",
  lastName: "Yafi",
  Age: 20,
};

/*const firstName = profile.firstName;
const lastName = profile.lastName;
const Age = profile.Age;*/
// atau
//const {firstName,lastName,Age,role = 'jobless'} = profile;
//console.log(firstName,lastName,Age,role);
const { firstName: namaDepan, lastName: namaBelakang, Age: Umur } = profile;
console.log(namaDepan);
console.log(namaBelakang);
console.log(Umur);

//destructing array

const favorit = ['Bakso','Mixue','Salad','Bread'];

let myfood = 'Mixue';
let herFood = 'Salad';

[myfood,herFood] = favorit;

console.log(myfood);
console.log(herFood);
//const [, ,thirdFood,fourthFood] = favorit;
//console.log(thirdFood);

let a = 1;
let b = 2;

let temp;

console.log('sebelum swap');
console.log('nilai a: '+a);
console.log('nilai b: '+b);

temp = a;
a = b;
b = temp;
console.log('setelah swap');
console.log('nilai a: '+a);
console.log('nilai b: '+b);

let c = 1;
let d = 2;

console.log('sebelum swap');
console.log('nilai c: '+c);
console.log('nilai d: '+d);

[c,d] = [d,c] //menetapkan  nilai c dengan d dan nilai d dengan nilai c

console.log('setelah swap');
console.log('nilai c: '+c);
console.log('nilai d: '+d);

//default values destructuring array

const makanan = ['Soto'];//karena indeks array cuma satu maka untuk makan doi diganti dengan nilai default seblak
const [makananku, makakanDoi = 'Seblak'] = makanan;

console.log(makananku);
console.log(makakanDoi);