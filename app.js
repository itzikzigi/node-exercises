const express = require("express");
const app = express();
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const validator = require("express-validator");
const PasswordValidator = require("password-validator");
const jsonFiles = require("jsonfile");
const passCheck = new PasswordValidator();
passCheck.is().min(8).has().uppercase().has().lowercase();

app.use(express.json());
const file = "./users.json";

const readData = async () => {
  let data = await jsonFiles
    .readFile(file)
    .then((obj) => {
      return obj;
    })
    .catch((err) => console.log(err));
  return data;
};

const writeData = async (obj) => {
  let writing = await jsonFiles
    .writeFile(file, obj, { flag: "a" })
    .then(() => console.log("writing succeeded"))
    .catch((err) => console.log(err));
  return writing;
};

//get all users
app.get("/", async (req, res) => {
  let data = await readData();
  res.send(data);
  console.log("get all req complete");
});

//get user by id
app.get("/:id", async (req, res) => {
  let { id } = req.params;
  let data = await readData();
  let user = data.find((item) => {
    return item.id == id;
  });
  if (user !== undefined) res.send(user);
  else res.sendStatus(404);
  console.log("get by id req complete");
});

//create user
app.post("/", async (req, res) => {
  let newUser = req.body;
  newUser.id = uuid.v4();
  if (!validator.check(newUser.email).isEmail()) {
    return res.status(400).send("invalid email");
  }
  if (!passCheck.validate(newUser.password)) {
    return res.status(400).send("invalid password");
  }
  newUser.password = bcrypt.hashSync(newUser.password, 10);
  console.log(newUser);
  res.send(newUser);
  await writeData(newUser);
  console.log("creating user succeeded");
});

//update user
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;
  let user = data.find((item) => {
    return item.id == id;
  });
  if (user === undefined) return res.sendStatus(404);
  if (update.id !== undefined) return res.sendStatus(400);
  let loc = data.indexOf(user);
  const a = { ...user, ...update };
  user = a;
  data[loc] = user;
  console.log("user updated successfully");
  return res.send(user);
});

//delete user
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  let user = data.find((item) => {
    return item.id == id;
  });
  if (user === undefined) res.sendStatus(404);
  let loc = data.indexOf(user);
  data.splice(loc, 1);
  console.log("delete succeeded");
  return res.send(data);
});

//log in
app.post("/log-in", (req, res) => {
  let logger = req.body;
  let correctUser = data.find((user) => {
    return (
      user.email === logger.email &&
      bcrypt.compareSync(logger.password, user.password)
    );
  });
  if (correctUser !== undefined) {
    console.log("user connected");
    return res.send("logged in");
  } else {
    console.log("failed to log in ");
    return res.send("user not found");
  }
});

const PORT = 6565;
app.listen(PORT, () => {
  console.log("in port " + PORT);
});
