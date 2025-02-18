const express = require("express"); // Імпортуємо Express (тільки один раз)
const app = express(); // Створюємо додаток
const PORT = process.env.PORT || 3000; // Використовуємо змінну середовища або 3000

// Маршрут для головної сторінки
app.get("/", (req, res) => {
  res.json({ message: "API працює!" });
});

// Маршрут для отримання списку користувачів
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Іван" },
    { id: 2, name: "Марія" },
  ]);
});

// Запуск сервера
app.listen(PORT, () => console.log(`✅ Сервер запущено на порту ${PORT}`));
