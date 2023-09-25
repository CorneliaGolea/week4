// class Person {
//   constructor(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
//   talks() {
//     console.log(
//       `Hi, my name is ${this.name}, I am ${this.age}, and I work as a ${this.job}`
//     );
//   }
//   work() {
//     console.log(`I am going to my work as a ${this.job}`);
//   }
// }

// const dave = new Person("DAVE", 41, "Builder");

// dave.talks();

// const karen = new Person("Karen", 25, "Hairdresser");

// karen.work();

// --2--
// class Dog {
//   constructor(name, age, breed) {
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//   }

//   walks() {
//     console.log(`Taking ${this.name} for a walk`);
//     return this;
//   }

//   eats() {
//     console.log(`${this.name} has had some lovely food`);
//     return this;
//   }
// }

// const stanley = new Dog("Stanley", 4, "Bulldog");

// stanley.walks();
// stanley.eats();

// const ethel = new Dog("Ethel", 15, "Pug");
// ethel.walks();

// const toby = new Dog("Toby", 4, "Keeshond");
// toby.walks().eats();
// const toby = new Dog("Toby", "waggy tail");

//  --3--
// class Animal {
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     this.hunger = 100;
//   }

//   drinks() {
//     this.health += 5;
//     return this;
//   }

//   eats() {
//     this.helth += 5;
//     this.hunger += 10;
//     console.log(`${this.name}'s health is ${this.health}`);
//     return this;
//   }
//   stats() {
//     return console.table({
//       name: this.name,
//       health: this.health,
//     });
//   }
// }

// const patches = new Animal("Patches");

// patches.stats();

// class Dog extends Animal {
//   constructor(name, happy) {
//     super(name, happy);
//     this.happy = happy;
//   }
//   playBall() {
//     this.health += 10;
//     this.hunger -= 10;
//     console.log(`${this.name} is happy`);
//     return this;
//   }
//   walks() {
//     console.log(
//       `We have taken ${this.name} for a walk, they are ${this.happy}`
//     );
//     this.health += 10;
//     return this;
//   }
// }

// const binks = new Dog("Binks", "waggy tail");

// binks.stats();
// binks.walks();

// class Cat extends Animal {
//   constructor(name, content) {
//     super(name, content);
//     this.content = content;
//   }

//   playWool() {
//     this.health += 10;
//     this.hunger -= 10;
//     console.log(`${this.name} is happy`);
//   }
// }

// --Coffee shop till--

import inquirer from "inquirer";

let menu = {
  coffee: 3,
  tea: 2.5,
  latte: 2,
  coke: 1.5,
};

let menuChoices = Object.keys(menu);
menuChoices.push("---Go To Checkout---");

console.log(menuChoices);

class CoffeeShop {
  constructor(customerName) {
    this.shopName = "Koffee";
    this.total = 0;
    this.order = [];
    this.name = customerName;
  }

  calculateTotal() {
    console.log(`Thanks, ${this.name}`);

    for (let orderedDrink of this.order) {
      console.log(
        `${orderedDrink}...................£${menu[orderedDrink].toFixed(2)}`
      );
      this.total += menu[orderedDrink];
    }

    console.log(`Your total is £${this.total.toFixed(2)}`);
  }

  set updateOrder(newItem) {
    this.order.push(newItem);
  }
}

const question = [
  {
    type: "input",
    message: "What is your name?",
    name: "getName",
  },
];

const nameResponse = await inquirer.prompt(question);

const customer = new CoffeeShop(nameResponse.getName);

// const takeOrder = await inquirer.prompt([
//   {
//     type: "list",
//     message: "What do you want to order?",
//     name: "getOrder",
//     choices: menuChoices,
//   },
// ]);

const askForOrder = async () => {
  const takeOrder = await inquirer.prompt([
    {
      type: "list",
      message: "What do you want to order?",
      name: "getOrder",
      choices: menuChoices,
    },
  ]);

  if (takeOrder.getOrder === "---Go To Checkout---") {
    customer.calculateTotal();
    return;
  } else {
    customer.updateOrder = takeOrder.getOrder;
  }
  askForOrder();
};

askForOrder();
// customer.updateOrder = "coke";

// customer.calculateTotal();

class Customer extends CoffeeShop {
  constructor(name, order) {
    super(name, order);
    this.order = order;
  }

  cash() {
    this.money += 30;
    this.order -= 20;
    console.log(`${this.name} has £ 30.00`);
    return this;
  }

  order() {
    console.log(`${this.name} order is £ 18.00`);
  }

  constalex = newCustomer("Alex", "the new customer");
}
let newCustomerOrder = 18;
if (newCustomerOrder > 30) {
  console.log("You don't have enough money");
} else {
  console.log("You have enough money");
}
