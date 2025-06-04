const express = require("express");

const port = 5000;

const app = express();
const cors = require("cors");

global.__basedir = __dirname;

app.use(cors({ origin: "*" }));

// data configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // for making any directory ot asset public

app.get("/health", (req, res) => {
  return res.status(200).json({ message: "API is running fine!!" });
});

app.use("/", require("./src/routes"));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://localhost:${port}`);
});
