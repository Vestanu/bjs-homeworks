function initCheckBirthday() {
    const birthday = new Date(document.getElementById('birthday').value);

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
    let dayOfB = now.getMonth() - birthday.getMonth() >= 0 && now.getDate() - birthday.getDate() >= 0;
    let diff = now.getFullYear() - birthday.getFullYear();
    let fullYears = diff - 1 + (dayOfB ? 1 : 0);
    if (fullYears >= 18) {
        return true
    } else {
        return false
    };
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal == undefined) {
        return null;
    }
    getAnimalSound.prototype = initPrintAnimalSound;
    const sound = animal.sound;
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        
        const marks = document.getElementById('learner-' + idx).value.split(',');
        
        

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
        console.log(marks)
        
    }
}

function getAverageMark(marks) {
    console.log(marks.length)
    let roundedAverage;
    let sum = 0;
    let averMark;
    for (let i = 0; i < marks.length; i++) {
        
        sum += parseInt(marks[i]);
    }
    console.log(sum);
    averMark = sum / marks.length;
    roundedAverage = Math.round(averMark);
    
    return roundedAverage;
}