// document.write("joji rulez");
// alert("press ok if you think joji rulez");
// console.log("joji even in your console");
// console.log({ name: "joji" });

//MODULUS OPERATOR
//gets the closet whole number
// const slices = 10;
// const children = 3;
// const amount = slices % children;

// console.log(amount);

// const friends = ["john", "peter", "bob", "susy", 45, undefined, null];
// let bestFriend = friends[2];
// friends[4] = "anna";
// console.log(friends);

// // FUNCTION DECLARATION
// function hello() {
//   console.log("hello");
//   console.log("my name be joji");
//   console.log("being bad is fun");
// }
// //FUNCTION INVOKE
// hello();

// function greet(name) {
//   console.log("HELLO MY NAME IS " + name);
// }
// greet("JOJI");

// FUNCTION;
// const wallHeight = 80;

// function calculate(value) {
//   const newValue = value * 2.54;
//   console.log("The value in cm is " + value * 2.54);
//   return newValue;
// }
// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height];
// console.log(dimensions);

// //FUNCTION DEFINITION/DECLARATION
// function addValues(num1, num2) {
//   return num1 + num2;
// }
// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 34);
// //FUNCTION EXPRESSION
// const add = function (num1, num2) {
//   return num1 + num2;
// };
// const thirdValue = add(5, 6);
// const values = [firstValue, secondValue, thirdValue];
// console.log(values);

// //OBJECT-KEY/VALUE PAIRS METHODS
// const person = {
//   name: "OLIVE",
//   lastName: "SCOTT",
//   age: 1,
//   education: true,
//   singleForLife: true,
//   siblings: ["LEO", "WILE", "PUMPKIN"],
//   greeting: function () {
//     console.log("OLIVE IS VERY DOG SOMETIMES");
//   },
// };

// const age = person.age;
// console.log(age);
// console.log(person.name);

//CONDITIONAL STATEMENTS
//CAN RIGHT EXPLICITELY TRUE OR A CONDITON (LIKE (2>1))
// >,<, >=, ==, ===, !=, !==
// const num1 = 6;
// const num2 = 6;
// const value = num1 == num2;
// const value2 = num1 === num2;

// console.log(value);
// console.log(value2);

// const result = num1 >= num2;

// if (num1 > num2) {
//   console.log("JOJI GOOD");
// } else if (result) {
//   console.log("JOJI BAD");
// } else {
//   console.log("SHE BOTH GOOD AND BAD!!!!!");
// }

//! means false or opposite
// if (!value) {
//   console.log("value is true");
// }

//LOGICAL OPERATORS
//(|| - OR), (&& - AND), !
// const name = "dan";
// const age = "31";
// if (name === "dan" && age === 27) {
//   console.log("what up dan");
// } else {
//   console.log("wait who r u");
// }

//SWITCH STATEMENTS
// DICE VALUE: 1-6
// const dice = 0;
// if (dice === 1) {
//   console.log("one");
// }
// if (dice === 2) {
//   console.log("two");
// }
// if (dice < 1 || dice > 6) {
//   console.log("u did not roll");
// }
// const dice = 1;

// switch (dice) {
//   case 1:
//     console.log("once");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   default:
//     console.log("you did not roll");
// }

//LOOPS
//repeatedly run a block of code while condition is true
//WHILE LOOP
// let amount = 10;
// while (amount > 0) {
//   console.log("I have" + amount + "dollars and I'm going to the mall");
//   //escape from the loop
//   amount--;
// }

//DO WHILE LOOPS
//code block first, condition second
//runs atleast onnce
// let money = 0;
// do {
//   console.log("You have " + money + " dollars");
//   money++;
// } while (money < 10);

//FOR LOOPS
// let i;
// for (i = 0; i < 10; i++) {
//   console.log("and the number is : " + i);
// }
// for (let number = 11; number > +0; number--) {
//   console.log("and the number  is " + number);
// }

//STRING PROPERTIES AND METHODS
//wrapper String Object

let text = "JOJI SCOTT";
