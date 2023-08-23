"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = void 0;
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (exports.ItemType = ItemType = {}));
const libraryItems = [
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
function filterItems(items, filterFn) {
    return items.filter(filterFn);
}
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items) {
    items.forEach((item) => console.log(item));
}
// Step 5:  הדפיסו את כל המידע הנתון
// console.log(libraryItems);
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
const filterLongMovies = (item) => {
    return item.type === ItemType.DVD && item.duration > 120;
};
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
const filterHarperBooks = (item) => {
    return item.type === ItemType.Book && item.author === "Harper Lee";
};
// printItemsData(libraryItems);
let filteredMovies = filterItems(libraryItems, filterLongMovies);
let filteredBooks = filterItems(libraryItems, filterHarperBooks);
console.log(filteredMovies);
console.log(filteredBooks);
