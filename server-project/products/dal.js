const js = require("jsonfile");
const file = "db/products.json";

const readAllProducts = async () => {
  try {
    let data = await js.readFile(file);
    if (data.length === 0) throw new Error("DB is empty");
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
const writeToProduct = async (data) => {
  try {
    await js.writeFile(file, data);
    return Promise.resolve("data added");
  } catch (error) {
    return Promise.reject(error);
  }
};
module.exports = {
  read: readAllProducts,
  write: writeToProduct,
};
