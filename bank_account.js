
function tambahSaldo(saldo, ubahSaldo) {
    saldo = saldo + ubahSaldo;
    return saldo;
}

function kurangSaldo(saldo, ubahSaldo) {
    saldo = saldo - ubahSaldo;
    return saldo;
}

function mainFunction() {
    let choice = 0;
    let saldo = 0;
    let ubahSaldo = 0;
    const tambahWord = `Inputkan Saldo yang ingin anda tambahkan`
    const kurangWord = `Inputkan Pengurangan Saldo yang anda inginkan`
    while (choice != 3) {
        choice = window.prompt(`
        Selamat Datang di Bank Account
        Saldo Anda Saat ini = ${saldo}
        Silahkan pilih menu yang kamu inginkan
        pilih 1, Tambah Saldo 
        pilih 2, Kurang Saldo
        pilih 3, Logout Account
    `);
        if (choice == 1) {
            ubahSaldo = parseInt(window.prompt(tambahWord));
            if (isNaN(ubahSaldo) || ubahSaldo < 0) {
                alert("input yang anda masukkan tidak valid! ");
            } else {
                saldo = tambahSaldo(saldo, ubahSaldo);
            }
        }
        else if (choice == 2) {
            ubahSaldo = parseInt(window.prompt(kurangWord));
            if (isNaN(ubahSaldo) || ubahSaldo < 0) {
                alert("input yang anda masukkan tidak valid! ");
            }
            else if (saldo < ubahSaldo) {
                alert("saldo yang anda tidak mencukupi! ");
            } else {
                saldo = kurangSaldo(saldo, ubahSaldo);
            }
        }
        else if (choice == 3) {
            alert("Account berhasil diLogout");
        }
        else {
            alert("input yang anda masukkan tidak valid! ");
        }
    }
}
mainFunction()

