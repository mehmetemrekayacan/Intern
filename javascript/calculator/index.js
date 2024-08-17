let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let operateEl=document.getElementById("operate-el")

function add(){
    let result=num1+num2
    operateEl.textContent="sum: "+result
}
function subtract(){
    let result=num1-num2
    operateEl.textContent="subtract: "+result
}
function divide(){
    let result=num1/num2
    operateEl.textContent="divide: "+result
}
function multiply(){
    let result=num1*num2
    operateEl.textContent="multiply: "+result
}
