// Задача №1

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability =  durability;
        this.range = range;
        
    }

    takeDamage(damage) {
        this.durability -=  damage;
        
        if (this.durability <= 0) {
            this.durability = 0;      
        };
            
        return this.durability;  
    }

    getDamage(durability) {
        if (this.durability >= 0.3 * durability) {
            return this.attack;
        } else if (this.durability == 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }

    isBroken(durability){
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

const arm = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const sword = new Weapon("Мечь", 25, 500, 1);
const knife = new Weapon("Ножь", 5, 300, 1);
const crook = new Weapon("Посох", 8, 300, 2);

// sword.takeDamage(9);
// console.log(sword.durability);
// sword.takeDamage(100);
// console.log(sword);
// console.log(sword.durability); 
// arm.takeDamage(100)
// console.log(arm.durability);
// console.log(bow.getDamage()); 
bow.takeDamage(190);
console.log(bow.durability); 
console.log(bow.getDamage()); 
console.log(bow.isBroken());

// Задача №2

class Bow extends Weapon {
    
};

class Sword extends Weapon {

};
class Crook extends Weapon {

};

const longBow = new Bow("Длинный лук", 10, 400, 4);
console.log(longBow.takeDamage(80));
const axe = new Sword("Секира", 27, 800, 1);
console.log(axe.isBroken());
const stormCrook = new Crook("Посох Бури", 10, 300, 3);
console.log(stormCrook.takeDamage(55));
console.log(stormCrook.getDamage());

// Задача №3

class StudentLog {
    constructor (name) {
        this.name = name;
    }

    getName(name) {
        return this.name;
    }

    addGrade(grade, subject) {
        
     
        if (grade > 5 || !Number (grade)) {
            return `Вы пытались поставить оценку ${this.grade} по предмету "${this.subject}". Допускаются только числа от 1 до 5.`
        }

    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) ;
// console.log(log.addGrade('отлично!', 'math'));
console.log(log.addGrade(4, 'algebra'));