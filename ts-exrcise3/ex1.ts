export enum ItemType {
  Book = "book",
  DVD = "dvd",
}
interface Book {
  type: string;
  title: string;
  author: string;
}

interface DVD {
  type: string;
  title: string;
  duration: number;
}

type filterType = (item: Book | DVD) => boolean;

const libraryItems: (Book | DVD)[] = [
  {
    type: ItemType.Book,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  { type: ItemType.DVD, title: "Inception", duration: 148 },
  { type: ItemType.Book, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { type: ItemType.DVD, title: "Avatar", duration: 162 },
  { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];
// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(items: (DVD | Book)[], filterFn: filterType) {
  return items.filter(filterFn);
}

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items: any[]) {
  items.forEach((item) => console.log(item));
}

// Step 5:  הדפיסו את כל המידע הנתון
// console.log(libraryItems);

// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
const filterLongMovies = (item: DVD | Book) => {
  return item.type === ItemType.DVD && (item as DVD).duration > 120;
};

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
const filterHarperBooks = (item: DVD | Book) => {
  return item.type === ItemType.Book && (item as Book).author === "Harper Lee";
};
// printItemsData(libraryItems);
let filteredMovies = filterItems(libraryItems, filterLongMovies);
let filteredBooks = filterItems(libraryItems, filterHarperBooks);
console.log(filteredMovies);
console.log(filteredBooks);
