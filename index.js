const experss = require("express");
const dotenv = require("dotenv").config();

const app = experss();

const PORT = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoute"));

app.listen(PORT, () => {
  console.log(`Express.js is running on https://localhost:${PORT}`);
});
