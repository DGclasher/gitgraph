const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    let username = req.query.username;
    if (!username) {
      username = "DGclasher";
    }
    res.render("index", { username: username });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
