const users = [
  { name: "Ayesha", age: 22, active: true },
  { name: "Rahim", age: 30, active: false },
  { name: "Karim", age: 25, active: true },
  { name: "Fatima", age: 28, active: false },
];

// Sort by age
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Sorted by age:", sortedByAge);

// Filter active users
const activeUsers = users.filter(user => user.active);
console.log("Active users:", activeUsers);

console.log("Total users:", totalUsers);
console.log("Total active users:", totalActiveUsers);