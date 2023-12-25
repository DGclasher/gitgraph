const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

const getGraph = require("./routes/get_graph");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", getGraph);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
