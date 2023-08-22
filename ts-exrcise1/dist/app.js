"use strict";
//1
const returnBigNum = (arg1, arg2) => {
    if (arg1 > arg2)
        return arg1;
    return arg2;
};
const bigger = returnBigNum(6, 10);
console.log(bigger);
//2
const logBigger = (arg1, arg2) => {
    if (arg1 > arg2)
        console.log(arg1);
    else
        console.log(arg2);
};
logBigger(20, 12);
//3
const oddNum = (arg) => {
    if (arg % 2 === 0)
        return "even num";
    return "odd num";
};
const odd = oddNum(3);
console.log(odd);
//4
const strLen = (arg) => {
    return arg.length;
};
const len = strLen("hello");
console.log(len);
//5
const range = (n) => {
    let arr = [];
    for (let i = 1; i < n; i++) {
        arr.push(i);
    }
    return arr;
};
const createArrByN = range(28);
console.log(createArrByN);
//6
const maxNum = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(arr[i]);
    }
    return max;
};
const mx = maxNum(createArrByN);
console.log(mx);
//8
const person = {
    name: "avi",
    age: 30,
    isStudent: true,
};
const printPerson = (person) => {
    const { name, age, isStudent } = person;
    console.log(`name: ${name} age: ${age} isStudent: ${isStudent}`);
};
const printer = printPerson(person);
//9
const isMinor = (person) => {
    if (person.age > 18)
        return false;
    return true;
};
const minor = isMinor(person);
console.log(minor);
const abc = { Author: "me", Title: "abc", Year: 1965 };
const harryPotter = {
    Author: "unknown",
    Title: "harry and the diamond",
    Year: 2002,
};
const Reader1 = {
    age: 100,
    favoriteBook: abc,
    isStudent: false,
    name: "eli",
};
const Reader2 = {
    age: 50,
    favoriteBook: harryPotter,
    isStudent: true,
    name: "adi",
};
//12
const Readers = [Reader1, Reader2];
const oldestReader = (arr) => {
    let max = arr.find((reader) => Math.max(reader.age));
    return max;
};
let oldestMan = oldestReader(Readers);
console.log(oldestMan);
//13
const oldestBook = (arr) => {
    let min = arr.find((reader) => Math.min(reader.favoriteBook.Year));
    return min?.favoriteBook;
};
const oldBook = oldestBook(Readers);
console.log(oldBook);
