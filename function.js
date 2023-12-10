function perkalian(a, b) {
  return a * b;
}

const hasil = perkalian(10, 10);
console.log(hasil);

function salam() {
  console.log("Selamat pagi");
}

salam();

function greeting(name, language) {
  if (language === "English") {
    console.log(`Hello ${name}`);
  } else if (language === "Jawa") {
    console.log(`Woi Cok ${name}`);
  } else {
    console.log(`Hai ${name}`);
  }
}

greeting("Udin", "Jawa");

function makanan(asal, nama) {
  if (nama === "Sushi") {
    return `${asal} mempunyai ${nama} `;
  } else if (nama === "Ladu") {
    return `${asal} mempunyai ${nama} `;
  } else {
    return `${asal} mempunyai ${nama} `;
  }
}

makanan("India", "Ladu");

function multiply(a, b) {
  return a * b;
}

let result = multiply(20, 10);
console.log(result);
