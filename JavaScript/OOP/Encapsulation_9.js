class BankAccount {
    customerName;
    accountNumber;
    // balance = 0;
    // _balance = 0;
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance
    }

    // setBalance(amount) {
    //     if (isNaN(amount)) {
    //         throw new Error("Amount is not a valid input")
    //     }
    //     this.#balance = amount
    // }
    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error("Amount is not a valid input")
        }
        this.#balance = amount
    }

    // getBalance() {
    //     return this.#balance;
    // }

    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

    calculateInterest(amount) {
        console.log("Calculating interest")
    }

    takeBusinessLoan(amount) {
        this.calculateInterest(amount);
        console.log("Taking business loan: " + amount);
    }
}

const georgiAccount = new CurrentAccount("Georgi", 2000);
// georgiAccount.balance = 5000;
// georgiAccount.#balance = 5000;
// georgiAccount.setBalance(5000);
// console.log(georgiAccount);
// console.log(georgiAccount.#balance);
// console.log(georgiAccount.getBalance());
// georgiAccount.balance = 5000;
// console.log(georgiAccount.balance)
// georgiAccount.takeBusinessLoan(40000)
georgiAccount.calculateInterest(4000)
console.log(georgiAccount)