//superclass
class Mailservice{
    constructor(sender){
        this.sender = sender;
    }
    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

//subclass

class WhatsAppService extends Mailservice{
sendBroadCastMessage(message , receivers){
    for(const receiver of receivers){
        this.sendMessage(message,receiver);
    }
}
}

//subclass

class EmaiService extends Mailservice{
    sendDelayedMessage(message, receiver,delay){
        setTimeout(() => {
            this.sendMessage(message,receiver);
        },delay);
    }
}

const whatsaap = new WhatsAppService('+6289570435852');
const email = new EmaiService('udin@gmail.com');

whatsaap.sendMessage('Hello','+62878997444');
whatsaap.sendBroadCastMessage('Hello', ['+6254897599','+62547898441']);
//whatsaap.sendDelayedMessage();

email.sendMessage('hello', ' john@gmail.com');
email.sendDelayedMessage('WOI','sugeng@gmail.com',3000);

console.log(whatsaap instanceof WhatsAppService);
console.log(whatsaap instanceof EmaiService);