function getUserWeather(userId){
    try{
        const userCallback = getUsers(userId);
        const weather = getWeather(user.location);
        return{ ...user, ...weather};
    }catch(Error){
        console.log(error.message);
        return null;
    }
}
const userWeather = getUserWeather(1);
console.log(userWeather);