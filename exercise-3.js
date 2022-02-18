let numberStore = [0, 1, 2];
let newNumber = 3;

function addNumber() {
    return numberStore = [... numberStore, newNumber];
}

addNumber();
console.log(numberStore)