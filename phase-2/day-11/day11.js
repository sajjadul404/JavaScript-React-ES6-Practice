const users = [
  { name: "Ayesha", age: 22, active: true },
  { name: "Rahim", age: 30, active: false },
  { name: "Karim", age: 25, active: true },
  { name: "Fatima", age: 28, active: false },
];

const output = document.getElementById("output");
const sortBtn = document.getElementById("sortBtn");
const filterBtn = document.getElementById("filterBtn");
const countBtn = document.getElementById("countBtn");

// Sort by age
sortBtn.addEventListener("click", () => {
  const sorted = [...users].sort((a, b) => a.age - b.age);
  displayUsers("Sorted by Age", sorted);
});

// Filter active users
filterBtn.addEventListener("click", () => {
  const activeUsers = users.filter(user => user.active);
  displayUsers("Active Users", activeUsers);
});

// Count totals using reduce
countBtn.addEventListener("click", () => {
  const totalUsers = users.reduce((total) => total + 1, 0);
  const totalActive = users.reduce(
    (total, user) => user.active ? total + 1 : total,
    0
  );

  output.innerHTML = `
    <h3>Totals</h3>
    <p>👥 Total Users: ${totalUsers}</p>
    <p>✅ Active Users: ${totalActive}</p>
  `;
});

// Helper function
function displayUsers(title, userArray) {
  let html = `<h3>${title}</h3>`;
  userArray.forEach(user => {
    html += `<p>${user.name} - Age: ${user.age} - Active: ${user.active}</p>`;
  });
  output.innerHTML = html;
}