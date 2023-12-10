const fruit = ['apel','pisang', 'jeruk'];
const lastFruit = fruit.pop();

console.log(lastFruit);

const numberSet = new Set([1,4,4,3,6,6,7]);
numberSet.add(10);
numberSet.delete(4);
console.log(numberSet);// total set 5 karena 4 dan 6 duplikat