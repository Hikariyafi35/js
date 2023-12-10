const { promisify } = require('util');

function getUsers(isoffline,callback){
    //simulate network delay
    setTimeout(()=>{
        const users = ['John', 'Jack', 'Abigail'];

        if (isoffline){
            callback(new Error('cannot retrieve users due to offline'),null);
            return;
        }

        callback(null,users);
    },3000);
}

//create a promise version of getusers

const getUsersPromise = promisify(getUsers);
getUsersPromise(false)
  .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
  .catch(err => console.log(err.message));
 
getUsersPromise(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message)); // cannot retrieve users due offline