// const add = (a, b) => a + b;
// const subs = (a, b) => a - b;

// //Pure Functions

// console.log(add(4, 8));
// console.log(subs(10, 5));

// // Impure Functions

// let total = 0;

// const addtoTOtal = (amount) => (total = total + amount);

// // console.log(addtoTOtal(5));

// const updatedate = () => {
//   new Date();
// };

// const randomNumber = () => {
//   return amount + Math.random();
// };

// console.log(randomNumber(2));
// console.log(randomNumber(2));
// console.log(randomNumber(2));

const employees = {
  name: "Arno",
  roll: 101,
  salary: 50000,
  address: {
    country: "Bangladesh",
    city: "Dhaka",
  },
};

const employees2 = {
  ...employees,
  name: "Samiun",
  roll: 102,
  salary: 100000,
  address: { ...employees.address, city: "Sylhet" },
};
console.log("Employee 2");
console.log(employees2);
console.log("Employee 1");
console.log(employees);

console.log("Employees are not same different So ,", employees === employees2);

// console.log(employees2);
// console.log(employees);

