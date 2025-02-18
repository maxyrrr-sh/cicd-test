const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "API працює!" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Іван" },
    { id: 2, name: "Марія" },
  ]);
});

app.listen(PORT, () => console.log(`Сервер запущено на порту ${PORT}`));
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "API працює!" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Іван" },
    { id: 2, name: "Марія" },
  ]);
});

app.listen(PORT, () => console.log(`Сервер запущено на порту ${PORT}`));
