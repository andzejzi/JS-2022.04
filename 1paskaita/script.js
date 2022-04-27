//  One line komentaras

/*
Sveiki čia yra 
Multi line komentaras
 */

// Sukuriam kintamuosius
let myNameSurname;
let age;
let mySurname;
let fullName;
let result;
let average; //vidurkis
let percent;

console.log(myName); //undefind -yra vienas is tipu, naudojant kai kintamas yra sukurtas,bet neturi priskirtos reiksmes

// Priskiriam kintamiejam reikšmes
// string - reksme apsirasanti tarp kabučiu "" arba ''
myName = "Andžej"; 
age = 40; // number -reikšme apsirasanti iš skaičiu. sveikas skaičius pvz 10 arba su kablelių 3.14
mySurname = "žilinskij";
fullName = myName + " " + mySurname;  // sudetis -tarp dvieju  tokiu paciu tipu "andzej" + "zilinskij" + "Frontend" = "andzejzilinskijFrontend"
result = age = age + age + age - 9;
result = result + result;
average = 8 + 8 + 8 + 10 / 5;
// is viso 60e, as 20e 
percent = (100 * 20) / 60;
// console.log(age);
// console.log(fullName);

// console.log(result);
// console.log(average);
percentOutput = percent + "%"
console.log(percent + "%"); //33.33% number +string = string

// console.log(9 + 9); // 18
// console.log("9" + "9"); //"99"
// console.log("760" + 40); //"76040"

//sukuriam kintamuosius su const 

const myDogName = "cipas";
const myDogAge = 7;
const doubleDogName = myDogName + myDogName;
const greetings = "sveikas" + " " + myDogName + "!";


console.log(myDogName); //type error 
// 1.kada naudoti let ir kada const?
// naudoti let tik tada, kai reiksme yra kintama,kitais atvejais naudoti const
console.log(question);
question = "kaip sekasi";


//2.sukurus kintamaja -visada priskiriam pradine reiksme 
//3. visada naudoti triguba lygybe (tikrina reiksmes ir tipa)

//string, number, boolean (bool)

const yes = true; // teigiama reiksme
const no = false; //neigiama reiksme
let isAdult =true;

console.log(10 == 10);
console.log("Andzej == andzej"); //false
console.log(10 != 10);//10 yra nelygu 10 = falsec
console.log(5 !=4); //5yra nelygu 4 true
console.log("5" == 5); //dvyguba lygybe tikrina ar reiksme yra lygi
console.log("5" === 5); //tryguba lygybe tikrina ar reiksme yra lygi ir tipas yra toks pat

console.log("4" != 4);
console.log("4" !== 4);





console.log(yes);
console.log(no);
 
// visos neigiamos reiksmes yra - underfine, null, 0, "", false