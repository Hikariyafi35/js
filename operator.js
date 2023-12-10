const character = {
    name:"Naruto",
    clan:"Uzumaki",
    Age:"20",
    "Role":"Shinobi",
    HaveChakra: true,
    Village:"Konoha"
}

console.log(character);
console.log(`Hello my name is ${character.clan} ${character.name}`);
console.log(`my age is ${character.Age} and my role is ${character.Role} i have chakra ${character.HaveChakra}`);
console.log(`im from ${character["Village"]}`);

character["Village"] = "Kumogakure";

console.log(character);

const vehicle = {
    Merk:"BMW",
    Speed: 1200,
    color: "light red"
};

vehicle.color = "black";
vehicle["Speed"] = 1300;//bisa diubah karena berupa value bukan properti
//contoh salah
//vehicle = {color: "black nigga"};
console.log(vehicle);
delete vehicle.color;
console.log(vehicle);
