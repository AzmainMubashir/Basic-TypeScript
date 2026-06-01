// function

// normal function

function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// arrow function

const addNum = (num1: number, num2: number): number => {
  return num1 + num2;
};


// obj function method

const user = {
    name:'Azmain',
    balance:0,
    addBalance(value:number):number {
        this.balance = this.balance + value;  // setting the input value in balance
        return this.balance;
    }
}
user.addBalance(500)
console.log(user)

const arr:number[] = [1,2,3,4];

const sqArray = arr.map((e:number):number => e*e)
console.log(sqArray)
