// modular OOP
// asyncronous setelah melakukan transaksi.


class Costumers {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    static Card = true;

    checkBalance() {
        return `Saldo ${this.name} Saat ini adalah ${this.balance}`;
    }
}

class Card extends Costumers {
    constructor(name, balance) {
        super(name, balance);
    }

    checkBalance() {
        return `Saldo ${this.name} saat ini adalah ${this.balance}`;
    }
}

class thePromptWord {
    constructor() {

    }
    welcomeWord = function () {
        return `selamat datang di bank sistem`
    }
}

class Deposit {
    constructor(amount) {
        this.amount = amount;
    }
    doDeposit() {

    }
}


class Withdraw {
    constructor(amount) {
        this.amount = amount;
    }
    doWithdraw() {

    }
}


function main() {
    const costumer1 = new Costumers("Budi", 1000);
    console.log(costumer1.welcomeWord());
}

main();