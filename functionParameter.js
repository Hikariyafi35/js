const user ={
    id:123,
    displayname:'Kren',
    fullName:'Kylo Ren'
}

function introduce({displayname, fullName}){
    console.log(`${displayname} is ${fullName}`);
}

introduce(user);

const char ={
    name:'Adolf Hitler',
    ign:'Adler',
    role:'Captain',
    Komunism:true
}
//Parameter

function ktp ({name,ign,role = 'Farmer',Komunism}){
    console.log(`${name} is ${ign} have role ${role} and komunism is ${Komunism}`);
}
//argumen
ktp(char);

//default parameter
function exponentsFormula(baseNumber, exponent = 2/** nilai default */) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
  
  exponentsFormula(2);

//rest parameter
function sum(...numbers) {
    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result;
}

console.log(sum(1,2,3,4,5));

//arrow function
const sayHello = (name) => console.log(`nama saya ${name}`);

sayHello('Udin');

const pokemon = (name,tipe) => console.log(`pokemon data show ${name} with tipe ${tipe}`);
pokemon('Psyduck','Water');

const multi = (a,b) => a*b;
console.log(multi(3,4));