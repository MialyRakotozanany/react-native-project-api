const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./database/bases.db");

db.run(
  "CREATE TABLE IF NOT EXISTS user ( user_id INTEGER PRIMARY KEY AUTOINCREMENT, name text,address text, phone INTEGER, email text NOT NULL, username text NOT NULL, password text NOT NULL);"
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("App is working"));

app.use("/api", routes);

app.listen(3000, () => console.log("Server start on port 3000!"));

module.exports = {
  app,
};
