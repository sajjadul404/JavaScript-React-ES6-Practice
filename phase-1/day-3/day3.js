//Expense Array
const expenses = [
  { title: "Groceries", amount: 1200 },
  { title: "Electric Bill", amount: 800 },
  { title: "Internet", amount: 1500 },
  { title: "Transport", amount: 600 },
  { title: "Shopping", amount: 2000 }
];

console.log("===== EXPENSE SUMMARY =====");

//Calculate Total using reduce()
const totalExpense = expenses.reduce((total, expense) => {
  return total + expense.amount;
}, 0);

console.log("Total Expense:", totalExpense);

//Filter expenses > 1000
const highExpenses = expenses.filter(expense => expense.amount > 1000);

console.log("\nExpenses greater than 1000:");
highExpenses.forEach(expense => {
  console.log(`${expense.title}: ${expense.amount}`);
});

