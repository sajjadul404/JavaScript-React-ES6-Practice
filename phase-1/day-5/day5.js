function createUser(name, age = 18, ...skills) {
  const user = {
    name,
    age,
    skills,
    bio: `${name} is ${age} years old and knows ${skills.join(", ")}`
  };

  return { ...user };
}

// Example Usage
const user1 = createUser("X", 22, "React", "JavaScript");

console.log(user1);