// getter - setter
 
class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number; // '_' indicates its a private property or value.

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }


  // By using setter: 'set'
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }


  // By using getter: 'get'
  get getBalance() {
    return this.userBalance;
  }
}

const myAccount = new BankAccount(111, "Abc", 20);

myAccount.addBalance = 100;
myAccount.addBalance = 60;

console.log(myAccount.getBalance);
console.log(myAccount);