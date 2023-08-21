const express = require("express");
const router = express.Router();
const productsRouter = require("../products/routes/productsRoutes");
const usersRouter = require("../users/routes/usersRoutes");

router.use("/api/products", productsRouter);
router.use("/api/users", usersRouter);
router.use(express.static("public"));
router.use("*", (req, res) => res.status(404).send("page not found!"));

module.exports = router;
