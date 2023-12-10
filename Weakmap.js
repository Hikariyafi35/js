const visitCountMap = new Map(); // menyimpan daftar user

function countUser(user){
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user,count+1);
}

let jonas = {name:"jonas"};
countUser(jonas); // menambahkan user "jonas"

jonas=null; //data jonas dihapus

setTimeout(function() {
    console.log(visitCountMap);
  }, 10000)