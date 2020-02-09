
//Задание №1

let algebra = 4;
let geography = 3;
let physics = 5;
let numderOfSubjects = 3;

let avMark = (algebra + geography + physics) / numderOfSubjects;
console.log(avMark);

//Задание №2

let myName = "Таня";
let message = `Привет, мир! Меня зовут ${myName}`;
console.log(message);

//Задание №3

let x = 2;
let y = 22;
let z = 0;

let result = x * y + 5 * z + x - 1;
console.log(result);
function calculateTask1(){
    let algebra = Number.parseInt(document.getElementById("algebra").value);
    let geography = Number.parseInt(document.getElementById("geography").value);
    let physics = Number.parseInt(document.getElementById("physics").value);
    if(!algebra || !geography || !physics){
        alert("Введите валидные значения");
        return;
    }

    let taskResult = averageMark(algebra, geography, physics);
    document.getElementById("task1Result").innerText = `Средняя оценка равна: ${taskResult}`;
}

function calculateTask2(){
    let userName = document.getElementById("username").value;
    if(!userName){
        alert("Введите имя пользователя");
        return;
    }
    
    let taskResult = sayHello(userName);
    document.getElementById("task2Result").innerText = taskResult;
}

function calculateTask3(){
    let taskResult = calculateFormula();
    document.getElementById("task3Result").innerText = taskResult;
}

