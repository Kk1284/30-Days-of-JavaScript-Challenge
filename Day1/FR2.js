let letvariable = 10;
console.log("Initial value",letvariable);

letvariable = 20; // Reassigning the value
console.log("Final value",letvariable);

const variableConst = 30;
console.log("Initial value of variableConst:", variableConst);

try {
  variableConst = 40; // Attempting to reassign the value
} catch (error) {
  console.log("Error when trying to reassign variableConst:", error.message);
}


// var: Variables declared with var can be reassigned and redeclared within the same scope
// var a = 10;
// a = 20; // Reassigns a
// var a = 30; // Redeclares and reassigns a
// console.log(a); //


// let b = 10;
// b = 20; // Reassigns b
// // let b = 30; // SyntaxError: Identifier 'b' has already been declared
// console.log(b); // 20


// const c = 10;
// // c = 20; // TypeError: Assignment to constant variable.
// // const c = 30; // SyntaxError: Identifier 'c' has already been declared
// console.log(c); // 10