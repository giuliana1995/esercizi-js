// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000


/* function calculateSalary(role) {

  if (role === 'ceo') {
    console.log('2200');
  } else if (role === 'manager') {
    console.log('1800');
  } else if (role === 'cto') {
    console.log('1800');
  } else if (role === 'developer') {
    console.log('1500');
  } else {
    console.log('1000');
  }
  return role;
}

console.log(calculateSalary('other')) */


function calculateSalary(role) {
  let revenue = 0;
  if (role === 'ceo') {
    revenue = 2200;
  } else if (role === 'manager') {
    revenue = 1800;
  } else if (role === 'cto') {
    revenue = 1800;
  } else if (role === 'developer') {
    revenue = 1500;
  } else {
    revenue = 1000;
  }
  return revenue;
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);