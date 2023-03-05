"use strict";
//Literal types
let myName;
let usrName;
usrName = "MinhTri"; //=> true
//FUNCTIONS
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
//Examples
logMsg("Hello !!");
logMsg(add(4, 5));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 4) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(3, 3));
//REST PARAMETERS
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(3, 4, 5));
const createError = (err) => {
    throw new Error(err);
};
const infinte = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//cusstome type guard
const isNumber = (value) => {
    {
        return typeof value === "number" ? true : false;
    }
};
//use off the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen !!");
};
