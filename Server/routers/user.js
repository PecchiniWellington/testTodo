const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {
  createUser,
  editUser,
  getAllUsers,
  login,
  me,
  removeUser,
  logout,
} = require("../controllers/user.js");

router.get("/users", getAllUsers);
router.post("/create", createUser);
router.get("/logout", auth, logout);
router.get("/me", auth, me);
router.post("/login", login);
router.delete("/user/:id", auth, removeUser);
router.patch("/user/:id", auth, editUser);

module.exports = router;
