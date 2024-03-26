#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "firstnumber" },
  { message: "Enter Your Second Number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the opreators to perform action",
    type: "list",
    name: "opreator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement

if (answer.opreator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.opreator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.opreator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.opreator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("Please Select Valid Opreators");
}

console.log("The End");