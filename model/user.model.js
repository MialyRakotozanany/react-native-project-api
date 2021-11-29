const { sha256 } = require("js-sha256");

function User() {}

function User(email, username, password) {
  this.setEmail(email);
  this.setUsername(username);
  this.setPassword(password);
}

function User(id) {
  this.setID(id);
}

User.prototype.getID = function () {
  return this.id;
};

User.prototype.setID = function (id) {
  if (!id) throw new Error("Id can't be null");
  this.id = id.trim();
};

User.prototype.getName = function () {
  return this.name;
};

User.prototype.setName = function (name) {
  if (!name) throw new Error("Name can't be null");
  this.name = name.trim();
};

User.prototype.getAddress = function () {
  return this.address;
};

User.prototype.setAddress = function (address) {
  if (!address) throw new Error("Address can't be null");
  this.address = address.trim();
};

User.prototype.getPhone = function () {
  return this.phone;
};

User.prototype.setPhone = function (phone) {
  if (!phone) throw new Error("Phone can't be null");
  this.phone = phone.trim();
};

User.prototype.getEmail = function () {
  return this.email;
};
User.prototype.setEmail = function (email) {
  if (!email) throw new Error("Email can't be null");
  this.email = email.trim();
};
User.prototype.getUsername = function () {
  return this.username;
};
User.prototype.setUsername = function (username) {
  if (!username) throw new Error("Username can't be null");
  this.username = username.trim();
};
User.prototype.getPassword = function () {
  return this.password;
};
User.prototype.setPassword = function (password) {
  if (!password) throw new Error("Password can't be null");
  this.password = sha256(password.trim());
};

module.exports = User;
