const User = require("../model/user.model");

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./database/bases.db");

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const sql = "SELECT * FROM user";
    await db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

const me = (user) => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "SELECT user_id, name, address, phone, email, username FROM user where user_id=" +
      user.getID();
    await db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

const signIn = (user) => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "SELECT name, address, phone, email, username FROM user where email='" +
      user.getEmail() +
      "' or username='" +
      user.getUsername() +
      "' and password='" +
      user.getPassword() +
      "'";
    await db.all(sql, User, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

const createUser = (user) => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "INSERT INTO user(name, address, phone, email, username, password) VALUES('','','','" +
      user.getEmail() +
      "','" +
      user.getUsername() +
      "','" +
      user.getPassword() +
      "')";
    await db.run(sql, (err) => {
      if (err) {
        reject(err);
      }
      resolve({ response: "User created" });
    });
  });
};

const updateUserValue = (user) => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "UPDATE user set name='" +
      user.name +
      "', address='" +
      user.address +
      "', phone='" +
      user.phone +
      "' where user_id=" +
      user.id;
    console.log(sql);
    await db.run(sql, (err) => {
      if (err) {
        reject(err);
      }
      resolve({ response: "User updated" });
    });
  });
};

module.exports = {
  getUsers,
  me,
  createUser,
  signIn,
  updateUserValue,
};
