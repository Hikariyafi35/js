function Mailservice(sender){
    this.sender = sender;
}

Mailservice.prototype.sendMessage = function (message,receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
}

function WhatsAppService(sender){
    Mailservice.call(this, sender);
}

//prototype inhritance

WhatsAppService.prototype = Object.create(Mailservice.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;

WhatsAppService.prototype.sendBroadCastMessage = function (message,receivers){
    for (const receiver of receivers){
        this.sendMessage(message,receiver);
    }
}

function EmaiService(sender){
    Mailservice.call(this, sender);
}

//prototype inheritance
EmaiService.prototype = Object.create(Mailservice.prototype);
EmaiService.prototype.constructor = EmaiService;

EmaiService.prototype.sendDelayedMessage = function (message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmaiService('dimas@dicoding.com');
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadCastMessage('Hello', ['+6289876543210', '+6282234567890']);
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);