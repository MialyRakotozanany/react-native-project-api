const User = require("../model/user.model");
const {
  getUsers,
  me,
  createUser,
  signIn,
  updateUserValue,
} = require("../services/user.service");

const users = (req, res) => {
  try {
    getUsers().then((response) => {
      res.send(response);
    });
  } catch (err) {
    throw err;
  }
};

const whoiam = (req, res) => {
  try {
    const user = new User(req.params.id);
    me(user).then((response) => {
      res.send(response);
    });
  } catch (err) {
    throw err;
  }
};

const userSignIn = (req, res) => {
  try {
    const user = new User(
      req.body.username,
      req.body.username,
      req.body.password
    );
    signIn(user).then((response) => {
      res.send(response);
    });
  } catch (err) {
    throw err;
  }
};

const newUser = (req, res) => {
  try {
    const user = new User(req.body.email, req.body.username, req.body.password);
    createUser(user).then((response) => {
      res.send(response);
    });
  } catch (err) {
    res.statusCode = 401;
    res.send({ err: err.message });
  }
};

const updateUser = (req, res) => {
  try {
    const user = new User(
      req.params.id,
      req.body.name,
      req.body.address,
      req.body.phone
    );
    updateUserValue({ id: req.params.id, ...req.body }).then((response) => {
      res.send(response);
    });
  } catch (err) {
    res.statusCode = 401;
    res.send({ err: err.message });
  }
};

module.exports = {
  users,
  whoiam,
  newUser,
  userSignIn,
  updateUser,
};
