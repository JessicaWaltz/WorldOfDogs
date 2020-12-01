import Dog from './models/Dog';
var dogCounter = 1;
const allDogs = new Map();

export function addDog(dog){
    dog.id = dogCounter++;
    allDogs.set(dog.id,dog);
}
