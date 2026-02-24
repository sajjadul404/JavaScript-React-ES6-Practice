const user = {
  name: "Sajjad",
  age: 22,
  skills: [],

  addSkill(skill) {
    if (!this.skills.includes(skill)) {
      this.skills.push(skill);
      console.log(`${skill} added.`);
    } else {
      console.log(`${skill} already exists.`);
    }
  },

  removeSkill(skill) {
    this.skills = this.skills.filter(s => s !== skill);
    console.log(`${skill} removed.`);
  },

  updateAge(newAge) {
    if (newAge > 0) {
      this.age = newAge;
      console.log(`Age updated to ${newAge}`);
    } else {
      console.log("Invalid age");
    }
  }
};