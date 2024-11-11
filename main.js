// ДЗ
// 1.Рахуємо загальну зп
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (acc, value) => acc + value,
  0
);
console.log(totalSalary);

// 2.Порахувати загальну кількість годин
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const totalTimePlayed = players.reduce(
  (acc, player) => acc + player.timePlayed,
  0
);
console.log(totalTimePlayed);

// 3.Порахувати загальну кількість товарів в кошику
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((acc, item) => acc + item.quantity, 0);
console.log(totalAmount);

// console.log(totalAmount);
// Відсортувати масив об'єктів за алфавітом в полі name:
const arr = [
  { name: "John", age: 32 },
  { name: "Jane", age: 26 },
  { name: "Mike", age: 42 },
  { name: "Emily", age: 29 },
];

const sortedArr = arr.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedArr);

// 4.Отримати загальну суму балансу (поле balance) всіх користувачів.
const users = [
  { name: "John", balance: 3790 },
  { name: "Jane", balance: 40000 },
  { name: "Mike", balance: 12 },
  { name: "Emily", balance: 450 },
];

const calculateTotalBalance = (users) =>
  users.reduce((acc, user) => acc + user.balance, 0);

console.log(calculateTotalBalance(users));
