const add = (a, b) => a + b;
const subs = (a, b) => a - b;

//Pure Functions

console.log(add(4, 8));
console.log(subs(10, 5));

// Impure Functions

import { produce } from "immer";

const employees = {
  name: "Arno",
  roll: 101,
  salary: 50000,
  address: {
    country: "Bangladesh",
    city: "Dhaka",
  },
};

// const employees2 = {
//   ...employees,
//   name: "Samiun",
//   roll: 102,
//   salary: 100000,
//   address: { ...employees.address, city: "Sylhet" },
// };
// Immer npm install immer
// import { produce } from "immer";
const employees2 = produce(employees, (a) => {
  a.name = "Mahmud";
  a.roll = 102;
  a.salary = 10000;
  a.address.city = "New york";
});
console.log("Employee 2");
console.log(employees2);
console.log("Employee 1");
console.log(employees);

console.log("Employees are not same different So ,", employees === employees2);

// console.log(employees2);
// console.log(employees);

//Carried FUnction

// const add2 = (a) => (b) => a + b;

// console.log(add2(5)(10));

// const totalprice = (ammount, discount) => ammount - ammount * discount;

// console.log(totalprice(100, 0.3));

const newtot = (ammount) => (discount) => ammount - ammount * discount;

// console.log(newtot(120)(0.3));

const llb = newtot(0.3);

console.log(llb(200));

function adds(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
