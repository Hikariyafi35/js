class Car{
    constructor(brand,color,maxSpeed,chassisNumber){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        //set random chassis number
        this._chassisNumber = this._generatechassisNumber();
    }
    drive(){
        console.log(`${this.brand} driving with maximumSpeed ${this.maxSpeed}`);
    }
    turn(){
        console.log(`${this.brand} turning with maximumSpeed ${this.maxSpeed}`);
    }
    brake(){
        console.log(`${this.brand} brake with maximumSpeed ${this.maxSpeed}`);
    }

    get chassisNumber(){
        return this._chassisNumber;
    }
    set chassisNumber(chassisNumber){
        console.log('you are not allowed to change the chassis number');
    }
    _generatechassisNumber(){
        return `${this.brand}-${Math.floor(Math.random()*1000)}`;
    }
}

const car1 = new Car('BMW','Red',1200);
car1.chassisNumber = 'A-02'
console.log(car1);

car1.drive();
car1.turn();
car1.brake();

//getter dan setter

class User{
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

//class mail

console.log('==========================');
class Mail{
    constructor(sender,receiver,subject,body){
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }
    
    send(){
        console.log(`sending mail from ${this.sender} to ${this.receiver}`);
    }
    sendLater(delay) {
        console.log(`Sending after ${delay} ms`);
     
        setTimeout(() => {
          this.send();
        }, delay);
      }
     
      saveAsDraft() {
        console.log('Saving mail as draft');
      }
}

const mail1 = new Mail('udin','samsul','salam','py kabare cok');
console.log(mail1);
mail1.send();
mail1.sendLater();
mail1.saveAsDraft();