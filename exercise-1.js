const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'simon'

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);