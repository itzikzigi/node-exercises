const js = require("jsonfile");
const fs = require("fs");
const bcrypt = require("bcrypt");
const usersFile = "./db/users.json";

const createUsers = (file) => {
  let user = [
    {
      name: "itzik",
      id: "1",
      email: "itzik@gamil.com",
      password: "Aa123456",
      isAdmin: true,
    },
  ];
  let pass = user[0].password;
  user[0].password = bcrypt.hashSync(pass, 10);
  js.writeFileSync(file, user);
};
const checkDB = () => {
  let file = fs.readFileSync(usersFile, "utf-8");
  if (file.length === 0) {
    createUsers(usersFile);
    return console.log("Users DB created successfully");
  }
};
module.exports = checkDB;
