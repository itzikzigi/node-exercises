//1.
type SumType = (arr: number[]) => number;

const sumOfEvenNumbs: SumType = (arr) => {
  let sum: number = 0;
  arr.forEach((num) => {
    if (num % 2 === 0) sum += num;
  });
  return sum;
};

const arrOfNumbs = [1, 5, 8, 2, 3, 7, 1, 6, 2, 23, 6];
const sumOfArr = sumOfEvenNumbs(arrOfNumbs);
console.log("Sum of even numbs = " + sumOfArr);

// 2.
// כתוב פונקציה שמקבלת אובייקט עם שני שדות: רוחב וגובה ומחזירה שטח של מלבן עם מידות אלו.
const areaOfRectangle = (height: number, width: number) => {
  return height * width;
};

const area = areaOfRectangle(3, 4);
console.log("Area = " + area);

// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321
const checkIsPalindrome = (word: string) => {
  // do this with revers method
  let end = word.length;
  let res: boolean = false;
  for (let i = 0; i < word.length / 2; i++) {
    end--;
    word[i] === word[end] ? (res = true) : (res = false);
  }
  return res;
};

const word: string = "1235321";
const check = checkIsPalindrome(word);
console.log("The sentence is palindrome = " + check);

//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper
type words = string[];
const firstToUpper = (words: string[]) => {
  let newArr = words.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
  return newArr;
};

const wordsArr: words = ["apPle", "banAna", "chocolatE"];
const convert = firstToUpper(wordsArr);
console.log("normalize arr = " + convert);

// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
const uniqNumbs = (arr: number[]) => {
  let uniqArr: number[] = [];
  arr.forEach((num) => {
    if (!uniqArr.includes(num)) uniqArr.push(num);
  });
  return uniqArr;
};
const uniq = uniqNumbs(arrOfNumbs);
console.log(uniq);

// 6.
// כתוב פונקציה שמקבלת אובייקט עם שדות עבור שם פרטי ושם משפחה
// הפונקציה מחזירה אובייקט המכיל את שתי שדות המתארות את ראשי התיבות של האובייקט
// דוגמה
// Input: { firstName: "John", lastName: "Doe" }
// Output: { firstInitial: "J", lastInitial: "D" }
// השתמשו בממשקים מתאימים עבור הקלט והםלט של הפונקציה
interface NameInterface {
  first: string;
  last: string;
}
interface InitializedInterface {
  firstInitial: string;
  lastInitial: string;
}
const initialName = (fullName: NameInterface): InitializedInterface => {
  let FN: InitializedInterface = {
    firstInitial: fullName.first.charAt(0),
    lastInitial: fullName.last.charAt(0),
  };
  return FN;
};
const fullName = { first: "Avi", last: "Golan" };
const initialized = initialName(fullName);
console.log(initialized);

// 7.
// כתוב פונקציה שמקבלת מערך של אובייקטים עם שדות שם וגיל, ומחזירה את הגיל הממוצע של כל האובייקטים במערך.

//  עבור המערך
// [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 40 },
// ]
// Output: 31.666666666666668
interface ManInterface {
  name: string;
  age: number;
}
type arrOfPpl = ManInterface[];

const avgAge = (arr: arrOfPpl): number => {
  let sum = 0;
  arr.forEach((man) => (sum += man.age));
  return sum / arr.length;
};

const pplArr: arrOfPpl = [
  { name: "eli", age: 30 },
  { name: "edi", age: 94 },
  { name: "kobi", age: 25 },
];
const avg = avgAge(pplArr);
console.log(avg);

// 8.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את ערכי המקסימום והמינימום במערך כאובייקט בעל שדות מתאימים.
interface minMaxInterface {
  min: number;
  max: number;
}
const calcMInMax = (arr: number[]): minMaxInterface => {
  const obj: minMaxInterface = {
    max: Math.min.apply(Math, arr),
    min: Math.max.apply(Math, arr),
  };
  return obj;
};
const calc = calcMInMax(arrOfNumbs);
console.log(calc);

// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
type normal = any[];
const reversing = (arr: normal): void => {
  console.log("reversed " + arr.reverse());
};
reversing(arrOfNumbs);
