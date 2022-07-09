// !!! Patikrinti rašybos klaidas
// 1. Patikrinti ar failas yra įkeltas į atitinkamą folderį
// 2. Patikrinti ar esu tinkamam folderyje - komanda ls (:C/Users/Rokas/JS-VIGI26/2_paskaita)
// 3. Patikrinti ar išsaugojau failą(-us) - baltas taškas prie failo pavadinimo
// 4. Patikrinti ar įrašiau console.log()
// 5. Patikrinti ar tinkamai paleidau failą "node script.js"
// 6. Patikrinti terminalo išmetamą žinutę

// "cd 1_paskaita" - eina į folderį
// "cd .." - grįžta atgal per vieną folderį
// "ls" - išveda visus folderio failus

console.log("if, else");
const a = 9; //pakeitus vertes suzinosim ar true/false
const b = 8;

if (a > b) {
  console.log("a > b");
} else {
  console.log("a < b");
}

// su else if

let weather = "rain";

if (weather === "snow") {
  console.log("bring a coat.");
} else if (weather === "rain") {
  console.log("bring a jacket.");
} else {
  console.log("wear what you have on.");
}
//uzduotis

let money = 105.5;
let price = 110.5;
const currency = "$";

if (money > price) {
  const change = money - price;
  console.log("You paid extra, here's your change." + currency + change);
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  const startLabel = "That's not enough, you still owe me money";
  const missingMoney = price - money;
  console.log(startLabel + currency + missingMoney);
}

// 2.uzduotis
/*
const runner = "Kendyll";
const position = 4;
let medal = "pat on the back";


if (position === 1) {
    medal = "gold";
    } else if (position === 2) {
    medal = "silver";
    } else if (position === 3) {
    medal = "bronze";
    }
    else {
        medal = "pat on the back";
    }
    console.log(runner + " received a " + medal + " medal.");
*/

//kitaip  be else
const runner = "Kendyll";
const position = 4;
let medal = "pat on the back";

if (position === 1) {
  medal = "gold";
} else if (position === 2) {
  medal = "silver";
} else if (position === 3) {
  medal = "bronze";
}
console.log(runner + " received a " + medal + " medal.");

// 3.uzduotis

/* const number = 1;
     // % modulis, tikrina ar yra liekana
if (number % 2 == 0) {
    // even - lyginis
    console.log(number + " skaicius yra lyginis"); 
    } else {
    // odd - nelyginis 
    console.log(number + " skaicius yra nelyginis")
    } 
    */

// 4.uzduotis

/*
   let people = 4;
let groupName = "Didele grupe"

if (people === 0) {
    groupName = "Ne grupe";
}

else if (people === 1) {
    groupName = "Solo";
}

else if ( people === 2) {
    groupName = "Duetas";
}

else if ( people === 3) {
    groupName = "Trio";
}

else if ( people === 4) {
    groupName = "Kvartetas";
}
console.log( groupName);
*/

/*
const isBand = 1;
let typeBand;

if (isBand<= 0) {
    typeBand = "Nera grupes";   
}

else if (isBand === 1) {
    typeBand = "Solo";
}
else if (isBand === 2) {
    typeBand = "Duetas";
}
else if (isBand === 3) {
    typeBand = "Trio";
}
else if (isBand === 4) {
    typeBand = "Kvartetas";
}
else {
    typeBand = "Didele grupe";
}

console.log(typeBand)
*/
