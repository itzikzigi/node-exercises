"use strict";
const sumOfEvenNumbs = (arr) => {
    let sum = 0;
    arr.forEach((num) => {
        if (num % 2 === 0)
            sum += num;
    });
    return sum;
};
const arrOfNumbs = [1, 5, 8, 2, 3, 7, 1, 6, 2, 23, 6];
const sumOfArr = sumOfEvenNumbs(arrOfNumbs);
console.log("Sum of even numbs = " + sumOfArr);
// 2.
// כתוב פונקציה שמקבלת אובייקט עם שני שדות: רוחב וגובה ומחזירה שטח של מלבן עם מידות אלו.
const areaOfRectangle = (height, width) => {
    return height * width;
};
const area = areaOfRectangle(3, 4);
console.log("Area = " + area);
// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321
const checkIsPalindrome = (word) => {
    // do this with revers method
    let end = word.length;
    let res = false;
    for (let i = 0; i < word.length / 2; i++) {
        end--;
        word[i] === word[end] ? (res = true) : (res = false);
    }
    return res;
};
const word = "1235321";
const check = checkIsPalindrome(word);
console.log("The sentence is palindrome = " + check);
const firstToUpper = (words) => {
    let newArr = words.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    return newArr;
};
const wordsArr = ["apPle", "banAna", "chocolatE"];
const convert = firstToUpper(wordsArr);
console.log("normalize arr = " + convert);
// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
const uniqNumbs = (arr) => {
    let uniqArr = [];
    arr.forEach((num) => {
        if (!uniqArr.includes(num))
            uniqArr.push(num);
    });
    return uniqArr;
};
const uniq = uniqNumbs(arrOfNumbs);
console.log(uniq);
const initialName = (fullName) => {
    let FN = {
        firstInitial: fullName.first.charAt(0),
        lastInitial: fullName.last.charAt(0),
    };
    return FN;
};
const fullName = { first: "Avi", last: "Golan" };
const initialized = initialName(fullName);
console.log(initialized);
const avgAge = (arr) => {
    let sum = 0;
    arr.forEach((man) => (sum += man.age));
    return sum / arr.length;
};
const pplArr = [
    { name: "eli", age: 30 },
    { name: "edi", age: 94 },
    { name: "kobi", age: 25 },
];
const avg = avgAge(pplArr);
console.log(avg);
const calcMInMax = (arr) => {
    const obj = {
        max: Math.min.apply(Math, arr),
        min: Math.max.apply(Math, arr),
    };
    return obj;
};
const calc = calcMInMax(arrOfNumbs);
console.log(calc);
const reversing = (arr) => {
    console.log("reversed " + arr.reverse());
};
reversing(arrOfNumbs);
