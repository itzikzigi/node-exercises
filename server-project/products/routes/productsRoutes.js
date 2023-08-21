const express = require("express");
const router = express.Router();
const {
  readAll,
  getByID,
  addNew,
  updateProduct,
  deleteProduct,
  updateQuantity,
} = require("../productsController");

router.get("/", readAll);

router.get("/:id", getByID);

router.post("/add", addNew);

router.put("/:id/update", updateProduct);

router.delete("/:id/delete", deleteProduct);

router.put("/:id/:action", updateQuantity);

module.exports = router;
