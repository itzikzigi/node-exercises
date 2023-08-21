const { readAllUsers, writeToUSer } = require("./dal.js");
const joi = require("joi");
const bcrypt = require("bcrypt");
const schema = joi.object({
  name: joi.string().alphanum().min(1).required(),
  email: joi.string().email(),
  password: joi.string().min(8).pattern(new RegExp("[^[a-zA-Z0-9]{3,30}$]")),
});

const addUser = async (data) => {
  try {
    schema.validate(data);
    let allUsers = await readAllUsers();
    let check = allUsers.find((user) => {
      return user.email === data.email;
    });
    if (check !== undefined) throw new Error("email already exist");
    let crypt = await bcrypt.hash(data.password, 10);
    data.password = crypt;
    allUsers.push(data);
    await writeToUSer(allUsers);
    return Promise.resolve(allUsers[allUsers.length - 1]);
  } catch (err) {
    return Promise.reject(err);
  }
};

const logIn = async (data) => {
  try {
    let users = await readAllUsers();
    let user = users.find(
      (obj) => obj.email === data.email && obj.password === data.password
    );
    if (user === undefined) throw new Error("incorrect email or password");
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = { addUser, logIn };
