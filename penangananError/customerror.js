class ValidationError extends Error {
    constructor(message) {
      super(message);
        this.name = "ValidationError";
    }
  }

const json = '{ "age": 30}';

try {
    let user = JSON.parse(json);

    if(!user.name){
        throw new ValidationError("'name' is required");
    }
    if(!user.age){
        throw new ValidationError("'age' is required");
    }
    console.log(user.name);
    console.log(user.age);
}catch(error){
    if(error instanceof SyntaxError){
        console.log(`JSON Syntax Error : ${error.message}`);
    }else if(error instanceof ValidationError){
        console.log(`invalid data: ${error.message}`);
    }else if(error instanceof ValidationError){
        console.log((error.message));
    }else{
        console.log(error.stack);
    }
    
}
