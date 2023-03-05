//type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type UserId = stringOrNumber;
//Literal types

let myName: "NhutMinh";

let usrName: "NhutMinh" | "MinhTri" | "QuangHung";
usrName = "MinhTri"; //=> true

//FUNCTIONS
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};
//Examples
logMsg("Hello !!");
logMsg(add(4, 5));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 3));

//optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 4): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));

logMsg(addAll(2, 3));

logMsg(sumAll(3, 3));

//REST PARAMETERS

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(3, 4, 5));

const createError = (err: string) => {
  throw new Error(err);
};

const infinte = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
//cusstome type guard
const isNumber = (value: any): boolean => {
  {
    return typeof value === "number" ? true : false;
  }
};
//use off the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen !!");
};
