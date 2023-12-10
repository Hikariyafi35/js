class Mailservice{
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message,receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class WhatsAppService extends Mailservice {
    constructor(sender, isBussines){
        super(sender);

        this.isBussines = isBussines;
    }
    //overiding method
    sendMessage(message,receiver){
        //memanggil method superclass
        super.sendMessage(message,receiver);
        console.log(`message sent via whatsapp`);
    }
}

const mailService = new Mailservice('udin');
const whatsappService = new WhatsAppService('+62845589448', true);

mailService.sendMessage('Hai, apa kabar?', 'udin');
whatsappService.sendMessage('Hai, apa kabar?', '++62845589448');