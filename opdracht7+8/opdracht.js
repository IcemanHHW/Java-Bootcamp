var variable1 = 15,
    variable2 = "dog",
    variable3 = 24,
    variable4 = "this is a sentence",
    variable5 = "why are you reading this?",
    variable6 = 2141424,
    variable7 = "this is number 7",
    variable8 = 1234,
    variable9 = "sentence",
    variable10 = 5325,
    variable11 = "words",
    variable12 = "something",
    variable13 = 567132,
    variable14 = "some words",
    variable15 = 121314,
    variable16 = "last variable";

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);
console.log(typeof variable6);
console.log(typeof variable7);
console.log(typeof variable8);
console.log(typeof variable9);
console.log(typeof variable10);
console.log(typeof variable11);
console.log(typeof variable12);
console.log(typeof variable13);
console.log(typeof variable14);
console.log(typeof variable15);
console.log(typeof variable16);
var som="";
for(var i=1;i<=16;i++) {
 som+=(window["variable" + i]);
}
console.log(typeof som);
