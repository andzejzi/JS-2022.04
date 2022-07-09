console.log("2paskaita");

const clientAge = 25;
const legalAge = 20;
if (clientAge >= legalAge) {
  console.log(`Pasiekęs ${legalAge}`);
} else {
  console.log(`Nepasiekęs ${legalAge}`);
}

const myName = "JohnJonas";
console.log(myName.length);
if (myName.length > 6) {
  console.log("Ilgas vardas");
}

// || -or (arba)
// && - and (ir)
//3.Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis
// nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".

const age = 20;

// if (age > 100 || age < 0) {
//   console.log('Invalid age');
// } else if (age < 18) {
//   console.log('Child');
// } else {
//   console.log('Adult')
// }

// kitas budas sprendimo
if (17 >= age >= 1) {
  console.log("Child");
} else if (age >= 100 || age < 1) {
  console.log("invalide age");
} else {
  console.log("Adult");
}
//4uzduotis codeAcadamy.Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui.
//  Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce.

const car = "Scoda";
if (
  car === "VW" ||
  car === "Audi" ||
  car === "Bentley" ||
  car === "Bugatti" ||
  car === "Lamborghini" ||
  car === "Porsche"
) {
  console.log("VW Group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
  console.log("BMW Group");
} else {
  console.log("Nei vienam");
}

if (car === "Seat" && car.length > 3) {
  console.log("Tai yra Seatas ir pavadinimas ilgesnis uz 3");
}
