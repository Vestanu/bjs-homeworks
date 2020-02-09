
// Задача №1

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability =  durability;
        this.range = range;
        this.totalDurability = durability;
    }

    takeDamage(damage) {
        this.durability -=  damage;
        
        if (this.durability <= 0) {
            this.durability = 0;      
        };
            
        return this.durability;  
    }

    getDamage(durability) {
        if (this.durability >= 0.3 * this.totalDurability) {
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
  constructor() {
    super();
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
    this.totalDurability = this.durability;
}
    
};

class Sword extends Weapon {
  constructor() {
    super();
    this.name = 'Меч';
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
    this.totalDurability = this.durability;
}
};
class Crook extends Weapon {
  constructor() {
    super();
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
    this.totalDurability = this.durability;
}
};

class Knife extends Weapon {
  constructor() {
    super();
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
    this.totalDurability = this.durability;
}
};

class Arm extends Weapon {
  constructor() {
    super();
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
    this.totalDurability = this.durability;
}
};



class longBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
}
};

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    this.totalDurability = this.durability;
}
};
class StormCrook extends Crook {
  constructor() {
    super();
    this.name = 'Посох бури';
    this.attack = 10;
    this.range = 3;
}
};

const armoredSword = new Sword;
console.log(armoredSword);
const wizardCrook = new Crook;
console.log(wizardCrook);



// Задача №3

class StudentLog {
    constructor (name) {
        this.name = name;
        this.marks = {};
    }

    getName(name) {
        return this.name;
    }

   
    addGrade(grade, subject) {
        if (grade < 6 && grade > 0 && Number.isInteger(grade)) {
          if (this.marks[subject] === undefined) {
            this.marks[subject] = [grade];
          } else {
            this.marks[subject].push(grade);
          }
        } else { 
          console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        }
          
        if (this.marks[subject] === undefined) {
          return 0;
        } else {
          return this.marks[subject].length;
        }
      }
    
      getAverageBySubject(subject) {
        if (this.marks[subject] === undefined) {
          return 0
        } else {
          let sum = 0;
          for (let mark of this.marks[subject]) {
            sum += mark;
          }
          return sum / this.marks[subject].length;
        }
      }
    
      getTotalAverage() {
        if (Object.keys(this.marks).length === 0) {
          return 0;
        } else {
          let sum = 0;
          for (let subject in this.marks) {
            sum += this.getAverageBySubject(subject);
          }
          return sum / Object.keys(this.marks).length;
        }
      }
    
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) ;
console.log(log.addGrade('отлично!', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(6, 'algebra'));
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); 
console.log(log.getAverageBySubject('algebra')); 
console.log(log.getAverageBySubject('math')); 
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); 
