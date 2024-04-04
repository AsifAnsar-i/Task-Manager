const cors = require("cors");
const express = require("express");
require("../database/db");
const authRoutes = require("./routes/authRoutes");
const taskRouter = require("./routes/taskRoutes");
const morgan = require("morgan");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/task", taskRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`server is running on port`, port);
});
