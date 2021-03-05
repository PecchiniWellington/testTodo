const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).send(users);
    } else {
      throw new Error({ messageError: "users not found" });
    }
  } catch (error) {
    res.status(400).send({ messageError: error.message });
    console.log(error);
  }
};
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userAlreadyExist = await User.findOne({ email: email });
    if (userAlreadyExist) {
      throw new Error(`User ${userAlreadyExist.email} already exist`);
    }
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    const token = await user.generateJWT();
    res
      .status(201)
      .send({ messageSuccess: "user created successfully", user, token });
  } catch (error) {
    res.status(400).send({ messageError: error.message });
    console.log(error);
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      throw new Error("User doesn't exist");
    }
    const token = await user.generateJWT();
    res.status(200).send({ messageSuccess: "You are Logged in", user, token });
  } catch (error) {
    res.status(401).send({ erroreMessage: error.message });
  }
};
exports.me = async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    res.status(401).send({ messageError: error.message });
    console.log(error);
  }
};
exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res
      .status(200)
      .send({ messageSuccess: "logout successfully", user: req.user });
  } catch (error) {
    res.status(401).send({ messageError: error.message });
    console.log(error);
  }
};
exports.removeUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(401).send({ messageError: error.message });
    console.log(error);
  }
};
exports.editUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(401).send({ messageError: error.message });
    console.log(error);
  }
};
