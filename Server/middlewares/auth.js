const jwt = require("jsonwebtoken");
const User = require("../models/User");
const jwtSecret = require("config").get("jwtToken");

const auth = async (req, res, next) => {
  const authorization = req.header("Authorization");
  console.log("authorization", authorization);
  try {
    const token = authorization.replace("Bearer ", "");
    const decode = jwt.verify(token, jwtSecret);
    const user = await User.findOne({ _id: decode._id, "tokens.token": token });
    if (!user) {
      throw new Error("Please authenticate");
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

module.exports = auth;
