class Car{
    constructor(brand,color,maxSpeed,chassisNumber){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = `${Math.floor(Math.random()*1001)+1000}`;
        //set random chassis number
        this._chassisNumber = `${brand}-${Math.floor(Math.random()*1000)+1}`;
    }

    get chassisNumber(){
        return this._chassisNumber;
    }
    set chassisNumber(chassisNumber){
        console.log('you are not allowed to change the chassis number');
    }
}

class Mail{
    constructor(sender,receiver,subject,body){
        this.sender = sender;
        this.number =`${Math.floor(Math.random()*51)+50}`;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }

    
}
const Car1 = new Car('BMW','Red');
console.log(Car1.chassisNumber);
Car1.chassisNumber='BMW-1';
console.log(Car1.chassisNumber);
const Mail1 = new Mail('Udin','Sugeng','Hai Sayang','Ily so much');
console.log(Mail1);


//getter dan setter

class User {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName,lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName);
 
user.fullName = 'Fulan Fulanah';
console.log(user);
console.log(user.fullName);

console.log('==============================');

class Character{
    constructor(name,clan){
        this.name = name;
        this.clan = clan;
        
    }
    get namaLengkap(){
        return `${this.name} ${this.clan}`;
    }

    set namaLengkap(namaLengkap){
        const [name,clan] =namaLengkap.split(' ');
        this.name = name;
        this.clan = clan;
    }
}

const char = new Character('Gojo' , 'Satoru');
console.log(char);
console.log(char.namaLengkap);

char.namaLengkap = 'Geto Suguru';
console.log(char);
console.log(char.namaLengkap);