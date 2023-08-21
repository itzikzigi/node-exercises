const axios = require("axios").default;
const js = require("jsonfile");
const products = axios.get("https://fakestoreapi.com/products");
const fs = require("fs");
const productsFile = "./db/products.json";

const createProducts = async (file) => {
  products.then((res) => {
    res.data.forEach((item) => {
      item.quantity = Math.round(Math.random() * 100);
    });
    js.writeFile(file, res.data);
  });
};

const checkDB = () => {
  let file = fs.readFileSync(productsFile, "utf-8");
  if (file.length === 0) {
    createProducts(productsFile);
    return console.log("products DB created successfully");
  }
};
module.exports = checkDB;
