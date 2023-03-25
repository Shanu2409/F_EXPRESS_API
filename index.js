const express = require("express");

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.json({ message: "This is Home page" });
});

app.get("/users", (req, res) => {
  res.json({ message: "Get all the users" });
});

app.get("/users/:id", (req, res) => {
  res.json({ message: `Get is a user with id : ${req.params.id}` });
});

app.post("/users", (req, res) => {
  res.json({ message: "Create a new user" });
});

app.put("/users/:id", (req, res) => {
  res.json({ message: `Update a user with id : ${req.params.id}` });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: `Delete a user  wih id : ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
