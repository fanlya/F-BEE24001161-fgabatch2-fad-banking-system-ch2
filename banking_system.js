// modular OOP
// Async saat transaksi

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Information Error is';
    }
}

class Customers{
    constructor(nama,age,country){
        this.nama = nama;
        this.age = age;
        this.country = country;
    }

    getProfile(){
        return `Nama ${this.nama}, Umur ${this.age} tahun, Kota ${this.country}`;
    }
    getName(){
        return this.nama;
    }
}

class BankAccount extends Customers{
    constructor(nama,age,country){
        super(nama,age,country);
        this.balance = 50000;
    }

    checkBalance(){
        return `Saldo anda saat ini adalah ${this.balance}`;
    }

    #countDeposit(amount){
        this.balance = this.balance + amount;
        return this.balance;
    }

    #countWithDraw(amount){
        this.balance = this.balance - amount;
        return this.balance;
    }

    doDeposit(amount){
        console.log('sedang melakukan proses transaksi deposit mohon ditunggu');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let theAmount = Number(amount);
                if(isNaN(theAmount)){
                    reject(new CustomError('input tidak valid'));
                } 
                if((theAmount < 0)) {
                    reject(new CustomError('Angka dalam Inputan dibawah 0'));
                }
                const deposit = this.#countDeposit(theAmount);
                resolve(deposit);
            },3000);
        }) 
    }

    doWithdraw(amount){
        console.log('sedang melakukan proses transaksi withdraw mohon ditunggu');
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                let theAmount = Number(amount);
                if(isNaN(theAmount)){
                    reject(new CustomError('input tidak valid'));
                } 
                if((theAmount < 0)) {
                    reject(new CustomError('Angka dalam Inputan dibawah 0'));
                }
                const withdraw = this.#countWithDraw(theAmount);
                if(withdraw < 0){
                    reject(new CustomError('Saldo Tidak Mencukupi'));
                }
                resolve(withdraw);
            },3000);
        });
    }
}

function main(){
    let choice = 0;
    const bankAcc1 = new BankAccount('Budi','24','Jakarta');
    const tambahWord = `Inputkan Saldo yang ingin anda tambahkan`
    const kurangWord = `Inputkan Pengurangan Saldo yang anda inginkan`
    while (choice != 4) {
        choice = window.prompt(`
        Selamat Datang Bapak/Ibu ${bankAcc1.getName()} di Bank Account
        Silahkan pilih menu yang kamu inginkan
        pilih 1, Tambah Saldo 
        pilih 2, Kurang Saldo
        pilih 3, Cek Saldo
        pilih 4, Logout Account
    `);
        if (choice == 1) {
            let amount = window.prompt(tambahWord);
            alert('sedang melakukan proses transaksi deposit mohon ditunggu');
            bankAcc1.doDeposit(amount)
            .then(resolve => {
                alert('Transaksi Berhasil');
            })
            .catch(reject => {
                alert('Transaksi Gagal');
                alert(reject);
            });
        }
        else if (choice == 2) {
            let amount = window.prompt(kurangWord);
            alert('sedang melakukan proses transaksi withdraw mohon ditunggu');
            bankAcc1.doWithdraw(amount)
            .then(resolve => {
                alert('Transaksi Berhasil');
            })
            .catch(reject => {
                alert('Transaksi Gagal');
                alert(reject);
            });
        }
        else if (choice == 3){
            alert(bankAcc1.checkBalance());
        }
        else if (choice == 4) {
            alert("Account berhasil diLogout");
        }
        else {
            alert("input yang anda masukkan tidak valid! ");
        }
    }
}

main();