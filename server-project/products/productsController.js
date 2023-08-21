const { handleError } = require("../handle-errors/handleError");
const service = require("./productsService");

const getAllProducts = async (req, res) => {
  try {
    let file = await service.getAll();
    return res.send(file);
  } catch (error) {
    handleError(error, res);
  }
};

const getProductByID = async (req, res) => {
  try {
    let id = req.params.id;
    let file = await service.getByID(id);
    return res.send(file);
  } catch (error) {
    handleError(error, res);
  }
};

const addProduct = async (req, res) => {
  try {
    let details = req.body;
    let add = await service.addNew(details);
    if (add instanceof Error) return res.status(400).send(add.message);
    res.send(add);
  } catch (err) {
    handleError(err, res);
  }
};

const updateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let updateBody = req.body;
    let updateAction = await service.update(id, updateBody);
    res.send(updateAction);
  } catch (error) {
    handleError(error, res);
  }
};

const deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteAction = await service.delete(id);
    res.send(deleteAction);
  } catch (err) {
    handleError(err, res);
  }
};

const updateQuantity = async (req, res) => {
  try {
    let id = req.params.id;
    let action = req.params.action;
    let change = await service.updateQuantity(id, action);
    res.send("quantity updated. the new quantity is " + change);
  } catch (error) {
    handleError(res, error);
  }
};
module.exports = {
  readAll: getAllProducts,
  getByID: getProductByID,
  addNew: addProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  updateQuantity: updateQuantity,
};
