// access >> modify

class BankAccount {
  public readonly userId: number; // 'readonly' can't edit or modify
  public userName: string;
  private userBalance: number; // 'private' can't accessible to child class
  protected userLoan: number; // 'protected' accessible to child class

  constructor(
    userId: number,
    userName: string,
    userBalance: number,
    userLoan: number,
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
    this.userLoan = userLoan;
  }

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
    console.log(`Balance added: ${this.userBalance} BDT`)
  }

  payLoan(loan: number) {
    if (this.userLoan > 0 && loan < this.userLoan) {
      this.userLoan = this.userLoan - loan;
      console.log(
        `Loan paid: ${loan} BDT, Remaining Loan: ${this.userLoan} BDT`,
      );
    } else if(loan>this.userLoan){
        const credit = loan - this.userLoan;
        const paid = loan - credit;
        this.userBalance = this.userBalance+credit;
        console.log(`Loan paid: ${paid} BDT & Balance credited: ${credit} BDT. Current Balance: ${this.userBalance} BDT`)
    }
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance; // not accessible bcz its private in parent class
    this.userLoan; // accessible bcz its protected in parent class
  }
}

const myAccount = new BankAccount(1234, "XYZ", 20, 15);


myAccount.addBalance(50);
myAccount.payLoan(5);

console.log(myAccount);
