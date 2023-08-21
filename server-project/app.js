const express = require("express");
const app = express();
const morgan = require("./logger/morgan");
const router = require("./routes/router");
const initialProducts = require("./initialData/createDB");
const initialUsers = require("./initialData/createUserDB");
const { serverErrorsHandler } = require("./handle-errors/handleError");

app.use(morgan);
app.use(express.json());
app.use(router);
app.use(serverErrorsHandler);

const PORT = 8000;
app.listen(PORT, (err) => {
  if (err) return console.log(err.message);
  console.log(`Server run on port ${PORT}`);
  initialProducts();
  initialUsers();
});
