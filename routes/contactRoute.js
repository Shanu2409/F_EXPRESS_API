const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Fetch all the contacts" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Fetch data for id : ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create new contacts" });
});

router.route("/:id").put((req, res) => {
  res
    .status(200)
    .json({ message: `Update contacts for id : ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res
    .status(200)
    .json({ message: `Delete contacts for id : ${req.params.id}` });
});

module.exports = router;
