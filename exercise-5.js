class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  add(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }

  get balance() {
    return this.#amount;
  }
}

class BankAccountVip extends BankAccount {
  #amount = 0;
  constructor(initialAmount) {
    super(initialAmount)
  }
  deposit(amount) {
    if (this.balance >= 1000) {
      let sum = (amount + (3 * amount / 100));
      this.add(sum);
    } else {
      this.add(amount);
    }

  }
}

const bankAccountVip = new BankAccountVip(0);
bankAccountVip.deposit(500);
bankAccountVip.deposit(100);
/* bankAccountVip.withdraw(800); */
bankAccountVip.deposit(300);
bankAccountVip.view();