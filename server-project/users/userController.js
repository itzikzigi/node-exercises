const { handleError } = require("../handle-errors/handleError");
const { addUser, logIn } = require("./userService");

const addNewUser = async (req, res) => {
  try {
    let body = req.body;
    let action = await addUser(body);
    res.send(action);
  } catch (error) {
    handleError(error, res);
  }
};

const loginRes = async (req, res) => {
  try {
    let data = req.body;
    let logInAction = await logIn(data);
    res.send(logInAction);
  } catch (error) {
    handleError(error, res);
  }
};

module.exports = { addNewUser, loginRes };
