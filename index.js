const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const getGraph = require("./routes/get_graph");

dotenv.config();
app.use(cors())

app.use("/api", getGraph)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
