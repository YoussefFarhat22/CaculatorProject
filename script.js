const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const digitButton = document.querySelectorAll(".digit");
const result = document.getElementById('result');
const deleteBtn = document.querySelector('.delete');



let firstNumber;
let secondNumber;
let operator;

const add = (a,b) => {
  return a + b;
}

const subtract = (a,b) => {
  return a - b;
}

const multiply = (a , b) => {
 return a * b
}

const divide = (a,b) => {
 return a / b
}

function operate(num1,operator,num2) {
  switch(operator) {
   case '+':
     return add(num1,num2);
    break;
   case '-':
     return subtract(num1,num2);
    break;
   case '*':
      return multiply(num1,num2)
    break;
    case '/':
    if(num2 === 0){ 
      alert('You cant divide by 0')
      return '';
     }
    else{
      return divide(num1,num2)};
    break;
  }
}

function displayNumbers() {
digitButton.forEach((btn) => {
  btn.addEventListener('click',(e)=>{
   if(e.target.dataset.index === '.' && result.value.includes('.')){
    return;
   }
   result.value += `${e.target.dataset.index}`;
   })
})
}

displayNumbers();

document.querySelectorAll('.operator').forEach((op) => {
 op.addEventListener('click', (e) => {
    operator = e.target.dataset.index
    firstNumber = parseFloat(result.value);
    result.value = ''
})
})

function calculateResult(){
   secondNumber = parseFloat(result.value)
   result.value = operate(firstNumber,operator,secondNumber)
}

document.querySelector('.equal').addEventListener('click',calculateResult);


clearBtn.addEventListener('click',clearInput)

function clearInput(){
 result.value = ''
}

function deleteNumber(){
 result.value = result.value.substring(0, result.value.length - 1);
}

deleteBtn.addEventListener('click',deleteNumber)