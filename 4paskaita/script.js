console.log("ketvirta paskaita, for ciklai");
// i++
// i= i+1;

// i-- atima 1
// i=i-1;

// +=  x+=y x = x + y
//  -= x -= y  x = x - y

//
// kintamieji turi buti i, j, k
// inicializavimas; [salyga]; [israiska]

/*
for (let i = 0; i < 10; i++) {
    console.log(Jonas);
}
*/

// i = 0; 0< 10; 0 = 0 + 2
//  i = 2; 2 < 10; 2 = 2 + 2
// i = 4; 4 < 10; 4 = 4 + 2
/*
console.log(" ");
for (let i = 0; i < 10; i += 3) {
    console.log(i);
}

const dogName = "Rikis";
const repeat = 3;
let result = "";

for (let i = 0; i < repeat; i++) {
    result += dogName;
    if (i === repeat - 1) {
        // paskutinis ciklas
        result += `${dogName}.`;
} else {
result += `${dogName}, `;
}
}
*/

// a = a + b
// "" = "" + "Rikis"
// "Rikis" = "Rikis" + "Rikis"
// "RikisRikis" = "RikisRikis" + "Rikis"
// "RikisRikisRikis" = "RikisRikisRikis" + "Rikis"
// "RikisRikisRikisRikis" = "RikisRikisRikisRikis" + "Rikis"

/*
const start = 1;
const count = 9;
let result = 0;

for (let i = start; i < count + 1; i++) {
    result += i;
}

console.log(result);
*/

// inicializavimas
let i = 0;
// salyga
while (i < 10) {
  //  shows 0, then 1 , then 2
  // console.log(i)
  // israiska
  i++;
}

// do...while ciklas pirmiausia įvykdys kūną, tada patikrins būklę ir, kol tai tiesa, vėl ir vėl ją vykdys.

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

/*

function getLaugh(num) {
    let message = '';
    for(let i = 0; i < num; i++) message += 'ha';
  return message;
}
console.log(getLaugh(4));
*/

/*
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;  
    return num; 
    }

const floor = Math.floor(5);
const randomNum = Math.random()
console.log(randomNum);

*/
function getLaugh(num) {
  let message = "";
  for (let i = 0; i < num; i++) message += "ha";
  return message + "!";
}
console.log(getLaugh(4));
