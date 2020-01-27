//Задание №1


 function getSolution(a, b, c) {
        let d = b * b - 4 * a * c;
        if (d < 0) {
            return {D: d};
        } else if (d == 0) {
            let x1 = -b / 2 * a;
            return { roots: [x1], D: d };
        } else {
            let x1 = (-b + Math.sqrt(d)) / 2 * a;
            let x2 = (-b - Math.sqrt(d)) / 2 * a;
            return { roots: [x1, x2], D: d };
        }
    };

function showSolutionsMessage (a, b, c) {
    result = getSolution(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }

}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


//Задание №2

let data = {
    "algebra": [2, 4, 5, 3, 4],
    "geometry": [4, 5, 5, 5, 4],
    "russian": [3, 4, 4, 4, 3],
    "psychics": [4, 5, 3, 3, 4],
    "music": [5, 5, 5, 4, 3],
    "english": [4, 4, 5, 4, 3],
    "poetry": [5, 3, 4, 5, 3],
    "chemistry": [4, 5, 2, 3, 3],
    "french": [3, 5, 2, 3, 4]
    };
    
    
    function getAverageScore (data) {
        let vals = [];
        
        let result = [];
        for( let key in data ) {
            if ( data.hasOwnProperty(key) ) {
                vals.push(data[key]);
            }
        }
       
        for (let i = 0; i < vals.length; i++){
          let sum = 0;
          let total;
          for (let j = 0; j < vals[i].length; j++) {
            sum += vals[i][j];
        
          }
          total = sum /  vals[i].length;
          result.push(total);
        }
    
      let average = 0;
      let averTotal = 0;
      for (let i = 0; i < result.length; i++) {
        average += result[i] ;
        averTotal = average / result.length;
      }
      result.push(averTotal);
      
      function getAverageMark() {
       data["average"] = "some number" ;
        let objArray = {};
        let subjArray = [];
        let keys = Object.keys(data);
        for (let i = 0, l = keys.length; i < l; i++) {
         subjArray.push(keys[i])
       }
    
        for(let i = 0; i< result.length; i++) {
          objArray[subjArray[i]] = result[i];
        }
        return objArray;
      }
    
     return getAverageMark();
    }
    
    
    console.log(getAverageScore(data));

//Задание №3

let secretData = {"aaa": 1, "bbb": 0};

function getPersonalData(secretData) {
secretData.firstName = secretData.aaa;
secretData.lastName = secretData.bbb;
delete secretData.aaa;
delete secretData.bbb;

for ( let key in secretData) {
  let x = secretData[key];
  x = numberConvector(x);
  console.log(`${[key]} : ${x} `);
    
}
}

function numberConvector(x) {
  if (x === 1) {
  return "Эмильо"
} else {
  return "Родриго"
};
}
getPersonalData(secretData);
getPersonalData({ "aaa": 1, "bbb": 1 });
getPersonalData({ "aaa": 0, "bbb": 1 });
getPersonalData({ "aaa": 0, "bbb": 0 });
