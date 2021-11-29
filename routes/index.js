const express = require("express");

const {
  users,
  whoiam,
  newUser,
  userSignIn,
  updateUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/users", users);
router.get("/whoiam/:id", whoiam);
router.post("/login", userSignIn);
router.post("/create/user", newUser);
router.post("/update/user/:id", updateUser);

module.exports = router;
