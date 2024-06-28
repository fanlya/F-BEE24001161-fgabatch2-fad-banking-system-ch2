// modular OOP
// asyncronous setelah melakukan transaksi.

class CostumError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class BankAccount {
    constructor(name) {
        this.name = name;
        this.balance = '50000';
    }

    getBalance() {
        return `Saldo ${this.nama} Saat ini adalah ${this.balance}`;
    }
}


class BankSystem extends BankAccount {
    constructor(name) {
        super(name, balance);
    }
    #countDeposit = (amount, balance) => {
        balance = balance + amount;
        return balance;
    }

    #countWithdraw = (amount, balance) => {
        console.log(balance);
        balance = balance - amount;
        return balance;
    }

    doDeposit(amount) {
        setTimeout(() => {
            this.balance = this.#countDeposit(amount, this.balance);
        }, 3000);
        console.log(this.balance);
        return;
    }
    doWithdraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const withdraw = this.#countWithdraw(amount, this.balance);
                if (withdraw < 0) {
                    reject(new Error('Saldo Tidak Mencukupi'));
                    return;
                }
                resolve(withdraw);
            }, 3000);
        });
    }

    getBalance() {
        setTimeout(() => {
            console.log(`Jumlah Balance saat ini adalah ${this.balance}`);
        }, 2000);
        return;
    }
}

function main() {
    const Budi = new BankSystem("budi", 1000);
    console.log(Budi.doDeposit(2000));
    console.log(Budi.getBalance());
    //console.log(Budi.getBalance());
}
main();

function mainFunction() {
    let choice = 0;
    let amount = 0;
    let name = "";
    const tambahWord = `Inputkan Saldo yang ingin anda tambahkan`
    const kurangWord = `Inputkan Pengurangan Saldo yang anda inginkan`

    name = window.prompt(`Selamat Datang di Bank Akun KitaBersama silahkan Masukan Input Nasabah`);

    const Costumers = new BankSystem(name);

    while (choice != 3) {
        choice = window.prompt(`
        Silahkan pilih menu yang kamu inginkan
        pilih 1, Deposit
        pilih 2, Withdraw
        pilih 3, GetBalance
        pilih 4, Logout Account
    `);
        if (choice == 1) {
            amount = parseInt(window.prompt(tambahWord));
            // Deposit
            try {
                if (typeof (amount) != Number) {
                    throw new CostumError('input bukan angka');
                }
                if (isNaN(amount)) {
                    throw new CostumError('input tidak valid');
                }
                if (amount < 0) {
                    reject(new Error('jumlah yang diinput dibawah 0'));
                    return;
                }
                // do deposit
                Costumers.doDeposit(amount);
            } catch (error) {
                alert(error.message);
            }
        }
        else if (choice == 2) {
            amount = parseInt(window.prompt(kurangWord));
            // Withdraw
            try {
                if (typeof (amount) != Number) {
                    throw new CostumError('input bukan angka');
                }
                if (isNaN(amount)) {
                    throw new CostumError('input tidak valid');
                }
                if (amount < 0) {
                    throw new CostumError('jumlah yang di-input dibawah 0');
                }
                // do Withdraw
                Costumers.doWithdraw(amount);
            } catch (error) {
                alert(error.message);
            }
        }
        else if (choice == 3) {
            // do getbalance
            Costumers.getBalance();
        }
        else if (choice == 4) {
            alert("Account berhasil diLogout");
        }
        else {
            alert("input yang anda masukkan tidak valid! ");
        }
    }
}
mainFunction();