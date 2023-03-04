"use strict";
let stringArr = ["one", "hey", "NhutMinh"];
let guitars = ["start", "let Paul", 6789];
let mixedData = ["NhutMinh", 2001, true];
stringArr[0] = "NhutMinh";
stringArr.push("FPT University");
guitars[0] = 2001;
guitars.unshift("NhutMinh Nè");
guitars = stringArr;
mixedData = guitars;
mixedData = stringArr;
let test = [];
let bands = [];
bands.push("Push Test");
//Tuple
let myTuple = ["NhutMinh", 2001, true];
let mixed = ["NhutMinh", 5, false];
mixed = myTuple;
//myTuple = mixed; //false
//Object
let myObject;
myObject = [];
console.log(typeof myObject);
// so sánh
myObject = bands;
myObject = {};
const exampleObj = {
    prop1: "NhutMinh",
    prop2: true,
};
//exampleObj.prop2 = 345; //False
exampleObj.prop2 = true;
let evh = {
    name: "NhutMinh",
    active: true,
    albums: [2001, 2023, "FPT University"],
};
let jp = {
    // name: "MinhTri",
    active: true,
    albums: ["I", 2023, "FPT University"],
};
evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLocaleUpperCase()}!`;
    }
    return "Hello !!!!!";
};
console.log(greetGuitarist(jp));
//Enums
// "Unlike most TypeScript features,
//  Enums are not a type-level additon to JS but
//   something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["M"] = 100] = "M";
    Grade[Grade["I"] = 101] = "I";
    Grade[Grade["N"] = 102] = "N";
    Grade[Grade["H"] = 103] = "H";
})(Grade || (Grade = {}));
console.log(Grade.M);
