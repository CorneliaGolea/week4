class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const names = name.split(` `);
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const katy = new Person("Katy", "Long");

console.log(katy.fullName);

katy.fullName = "Katherine Jones";
console.log(katy.fullName);

console.log(katy.firstName);
