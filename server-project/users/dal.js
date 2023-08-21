const usersDB = "db/users.json";
const js = require("jsonfile");

const readAllUsers = async () => {
  try {
    let data = await js.readFile(usersDB);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const writeToUSer = async (data) => {
  try {
    await js.writeFile(usersDB, data);
    return Promise.resolve("writing to usersDb success");
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = { readAllUsers, writeToUSer };
