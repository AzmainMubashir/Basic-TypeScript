// static

class Counter {
  static count: number = 0; 
  /* 
  'static' makes the counter a single memory type.
  without 'static' different instance start from beginning
  
  */

  static increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

// const instance1 = new Counter(); // memory 1
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 2, ...


// const instance2 = new Counter(); // different memory
// console.log(instance2.increment()); // 1
// console.log(instance2.increment()); // 2, ...


console.log(Counter.increment());
console.log(Counter.increment());
