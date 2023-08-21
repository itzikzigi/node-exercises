const dal = require("./dal");

const getAllProducts = async () => {
  try {
    let product = await dal.read();
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getProductByID = async (id) => {
  try {
    let files = await dal.read();
    let file = files.find((item) => {
      return item.id == id;
    });
    if (file === undefined) throw new Error("Error!! item does not exist");
    return Promise.resolve(file);
  } catch (err) {
    return Promise.reject(err);
  }
};

const addNewProduct = async (newProduct) => {
  try {
    let item = {};
    let { rating } = newProduct;
    item.id = newProduct.id;
    item.title = newProduct.title;
    item.description = newProduct.description;
    item.category = newProduct.category;
    item.image = newProduct.image;
    item.rating = rating;
    item.quantity = newProduct.quantity;
    if (validator(item.id) !== undefined) throw new Error("id already exist");
    let products = await dal.read();
    products.push(item);
    dal.write(products);
    console.log("new item added");
    return Promise.resolve(item);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateProduct = async (id, body) => {
  try {
    let product = await getProductByID(id);
    if (product === undefined) throw new Error("product does not exist");
    let getAll = await getAllProducts();
    let index = getAll.findIndex((item) => {
      return item.id === product.id;
    });
    const updated = { ...product, ...body };
    getAll[index] = updated;
    dal.write(getAll);
    return Promise.resolve(updated);
  } catch (error) {
    return Promise.reject(error);
  }
};
const deleteProduct = async (id) => {
  try {
    let product = await getProductByID(id);
    let getAll = await getAllProducts();
    let index = getAll.findIndex((item) => {
      return item.id === product.id;
    });
    getAll.splice(index, 1);
    dal.write(getAll);
    return Promise.resolve(getAll);
  } catch (err) {
    return Promise.reject(err);
  }
};

const updateQuantity = async (id, action) => {
  try {
    let product = await getProductByID(id);
    if (action == "+") product.quantity += 1;
    if (action == "-" && product.quantity > 1) product.quantity -= 1;
    let getAll = await getAllProducts();
    let index = getAll.findIndex((item) => {
      return item.id === product.id;
    });
    getAll[index] = product;
    dal.write(getAll);
    return Promise.resolve(product.quantity);
  } catch (err) {
    return Promise.reject(err);
  }
};

const validator = async (val) => {
  try {
    let all = await getAllProducts();
    let check = all.find((user) => (user.id = val));
    return Promise.resolve(check.id);
  } catch (err) {
    return Promise.reject(err);
  }
};
module.exports = {
  getAll: getAllProducts,
  getByID: getProductByID,
  addNew: addNewProduct,
  update: updateProduct,
  delete: deleteProduct,
  updateQuantity: updateQuantity,
};
