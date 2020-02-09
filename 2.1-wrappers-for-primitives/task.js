
"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = new Date(window.date.value);

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;

    let now = new Date();
    let months = Math.round(date.getMonth() - now.getMonth());
    console.log(months);
    console.log(percent);
    console.log(contribution);
    console.log(amount);
    
};

function calculateTotalMortgage(percent, contribution, amount, months) {
    
   let check = {
       percent: parseInt(percent),
       contribution: parseInt(contribution),
       amount: parseInt(amount)};

   for (let key in check) {
       if (!Number(check[key])) {
           alert `Параметр ${key} содержит неправильное значение ${check[key]}`
       }
   };

    check.p = check.percent / 0.8;
    let monthsAmont = (check.amount - check.contribution) * (check.p + check.p / ((Math.pow((1 + check.p), months) - 1)));
    let totalAmount = (monthsAmont * months - check.contribution).toFixed(1);
    return totalAmount;
};


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === "") {
        name = "Аноним"
    }
    return `Привет, мир! Меня зовут ${name}`;
};
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}
