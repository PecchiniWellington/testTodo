const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const connectDB = require("./config/db");

const sessionSecret = require("config").get("sessionSecret");
const app = express();
connectDB();

const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");

app.use(cors());
app.use(
  session({ secret: sessionSecret, resave: false, saveUninitialized: false })
);
app.use(bodyParser.json());

app.use("/api", taskRouter);
app.use("/api", userRouter);

const PORT_URL = 3500 || process.env.PORT;
app.listen(PORT_URL, () => {
  console.log("port: " + PORT_URL);
});
