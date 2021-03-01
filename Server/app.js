const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();
connectDB();
app.use(cors());

const taskRouter = require("./routers/task");

app.use(bodyParser.json());
app.use("/api", taskRouter);

const PORT_URL = 3500 || process.env.PORT;
app.listen(PORT_URL, () => {
  console.log("port: " + PORT_URL);
});
