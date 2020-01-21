
"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c) {
    let d = b * b - 4 * a * c;
    console.log(d);
    if (d < 0) {
    return [];
    } else if (d == 0) {
    return [(b) /( 2 * a)];
    } else {
    return [(b + Math.sqrt(d) / (2 * a)), (b - Math.sqrt(d)) / (2 * a)];
    }
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){

    if (marks.length > 5) {
       console.log("Слишком много предметов! Средняя оценка будет считаться по 5 первым предметам");
        marks.splice(5, marks.length - 5);
    }   
    let result;
    let sum = 0;
    for (let i = 0; i < marks.length; i++){
        sum = sum + parseInt(marks[i]);
    }
        result = sum / marks.length;
        return result;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
   
}


function askDrink(name,dateOfBirthday){
    let now = new Date();
    let dayOfB = now.getMonth() - dateOfBirthday.getMonth() >= 0 && now.getDate() - dateOfBirthday.getDate() >= 0;
    let diff = now.getFullYear() - dateOfBirthday.getFullYear();
    let fullYears = diff - 1 + (dayOfB ? 1 : 0);
    if (fullYears >= 18) {
        return(`Не желаете ли олд-фэнш, ${name}?`)
    } else {
        return(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
    };
}
