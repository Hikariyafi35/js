const Country = new Map([
    ["Jakarta","Indonesia"],
    ["London","England"],
    ["Tokyo","Japan"]
])

console.log(Country.size);
console.log(Country.get("Tokyo"));
Country.set("New Delhi","India");
console.log(Country.size);
console.log('====================================');

const Letak = new Map([
    ["Simpang Lima","Semarang"],
    ["Malioboro","Jogja"],
    ["Monas","Jakarta"]
]);

console.log(Letak.size);
console.log(Letak.get("Monas"));
Letak.set("Tsb","Bandung");
console.log(Letak.get("Tsb"));
console.log(Letak.size);
console.log(Letak.has("Monas"));
console.log('===================');
const wrongMap = new Map();
wrongMap["my key"] = "my value";

console.log(wrongMap.has("my key"));
console.log(wrongMap.delete("my key"));