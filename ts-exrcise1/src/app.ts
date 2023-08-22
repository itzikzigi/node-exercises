//1
const returnBigNum: (arg1: number, arg2: number) => number = (arg1, arg2) => {
  if (arg1 > arg2) return arg1;
  return arg2;
};
const bigger = returnBigNum(6, 10);
console.log(bigger);

//2
const logBigger: (arg1: number, arg2: number) => number | void = (
  arg1,
  arg2
) => {
  if (arg1 > arg2) console.log(arg1);
  else console.log(arg2);
};
logBigger(20, 12);

//3
const oddNum: (arg: number) => string = (arg) => {
  if (arg % 2 === 0) return "even num";
  return "odd num";
};
const odd = oddNum(3);
console.log(odd);

//4
const strLen: (arg: string) => number = (arg) => {
  return arg.length;
};
const len = strLen("hello");
console.log(len);

//5
const range: (n: number) => number[] = (n) => {
  let arr: number[] = [];
  for (let i = 1; i < n; i++) {
    arr.push(i);
  }
  return arr;
};
const createArrByN = range(28);
console.log(createArrByN);

//6
const maxNum: (arr: number[]) => number = (arr) => {
  let max: number = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i]);
  }
  return max;
};
const mx = maxNum(createArrByN);
console.log(mx);

//7
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

//8
const person: Person = {
  name: "avi",
  age: 30,
  isStudent: true,
};
const printPerson: (obj: Person) => void = (person) => {
  const { name, age, isStudent } = person;
  console.log(`name: ${name} age: ${age} isStudent: ${isStudent}`);
};
const printer = printPerson(person);

//9
const isMinor: (obj: Person) => boolean = (person) => {
  if (person.age > 18) return false;
  return true;
};
const minor = isMinor(person);
console.log(minor);

//10
interface Book {
  Title: string;
  Author: string;
  Year: number;
}

const abc: Book = { Author: "me", Title: "abc", Year: 1965 };
const harryPotter: Book = {
  Author: "unknown",
  Title: "harry and the diamond",
  Year: 2002,
};
//11
interface Reader extends Person {
  favoriteBook: Book;
}
const Reader1: Reader = {
  age: 100,
  favoriteBook: abc,
  isStudent: false,
  name: "eli",
};
const Reader2: Reader = {
  age: 50,
  favoriteBook: harryPotter,
  isStudent: true,
  name: "adi",
};
//12
const Readers: Reader[] = [Reader1, Reader2];

const oldestReader: (arr: Reader[]) => Reader | void = (arr) => {
  let max = arr.find((reader) => Math.max(reader.age));
  return max;
};
let oldestMan = oldestReader(Readers);
console.log(oldestMan);

//13
const oldestBook: (arr: Reader[]) => Book | void = (arr) => {
  let min = arr.find((reader) => Math.min(reader.favoriteBook.Year));
  return min?.favoriteBook;
};
const oldBook = oldestBook(Readers);
console.log(oldBook);
