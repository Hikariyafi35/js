function getUsers(isOffline,callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
        if (isOffline){
            callback(new Error('cannpt retrieve users due to offline'),null);
            return;
        }
    
        callback(null,users);
        },3000);
    }

function userCallback(error,users){
    if(error){
        console.log('process failed :',error.message);
        return;
    }
    console.log('process succed:',users);
}
getUsers(false,userCallback);
getUsers(true,userCallback);

//callbackhell
