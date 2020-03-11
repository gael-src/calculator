var stdin = process.openStdin();

let state = 0;
let firstOperand = 1;
let operator = "";
let secondOperand = 1;

console.log("Willkommen im Taschenrechner");

stdin.addListener("data", function (d) {
  let textString = d.toString().trim();

  if (state === 0) {
    console.log("State 0");
    firstOperand = textString
    textString = null
    state = 1;
    return;
  }
  if (state === 1) {
    console.log("State 1");
    operator = textString
    textString = null
    state = 2;
    return;
  }
  if (state === 2) {
    console.log("State 3");
    secondOperand = textString
    textString = null
    state = 0;

    if (operator === '+') {
      console.log(` result : ${parseInt(firstOperand) + parseInt(secondOperand)}  `)
    }
    if (operator === '-') {
      console.log(` result :  ${parseInt(firstOperand) - parseInt(secondOperand)}  `)
    }
    if (operator === '*') {
      console.log(` result : ${parseInt(firstOperand) * parseInt(secondOperand)}  `)
    }
    if (operator === '/') {
      console.log(` result :  ${parseInt(firstOperand) / parseInt(secondOperand)}  `)
    }
    console.log('Bitte geben sie eine erste Zahl ein.')
    state = 0;
    return;

  }
});