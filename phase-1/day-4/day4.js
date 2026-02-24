const user = {
  name: "Sajjad",
  age: 22,
  skills: [],

  addSkill(skill) {
    if (!this.skills.includes(skill)) {
      this.skills.push(skill);
    }
  },

  removeSkill(skill) {
    this.skills = this.skills.filter(s => s !== skill);
  },

  updateAge(newAge) {
    if (newAge > 0) {
      this.age = newAge;
    }
  }
};

// Usage
user.addSkill("JavaScript");
user.addSkill("Node.js");
user.updateAge(24);

const { name, age, skills } = user;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Skills: ${skills.join(", ")}`);