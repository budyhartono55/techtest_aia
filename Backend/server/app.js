const dotenv = require("dotenv");
const dotenvConfig = dotenv.config();
const express = require("express");

// logger
const cors = require("cors");

// point
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send({
    status_code: 200,
    status_message: "OK",
    message: "Welcome to API-AIA_tech",
  });
});

app.all("*", (req, res) => {
  res.status(404).json({
    status_message: "Not Found",
    message: "Route doesn't exist",
  });
});

app.listen(process.env.PORT || 0501, () => {
  console.log(`Server is running on PORT : ${process.env.PORT}`);
});
