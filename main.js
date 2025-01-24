const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Alice", age: 25, location: "New York" },
  { id: 2, name: "Bob", age: 30, location: "San Francisco" },
  { id: 3, name: "Charlie", age: 25, location: "Los Angeles" },
];

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/productsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.get("/users", (req, res) => {
  const { age, location } = req.query;
  let filteredUsers = users;

  if (age)
    filteredUsers = filteredUsers.filter((user) => user.age === parseInt(age));
  if (location)
    filteredUsers = filteredUsers.filter((user) => user.location === location);

  res.json(filteredUsers);
});
