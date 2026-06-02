// Inheritance: 1st pillar of OOP

class Person {
  name: string; // common
  age: number; // common
  address: string; // common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // common
  getSleep(numOFhours: number) {
    console.log(`${this.name} ${numOFhours} ghonta ghumai`);
  }
}

class Student extends Person {
 
  rollNo: number;

  constructor(name: string,age: number,address: string, rollNo: number){
  
    super(name, age, address)
    this.rollNo = rollNo

  }

}

const student1 = new Student(`Mr. Fakibaaz`, 18, "Bangladesh", 1381);



class Teacher extends Person {
  designation: string; //own  property

  constructor(name: string,age: number, address: string,designation: string) {

     super(name, age, address)

    this.designation = designation;
   
  }

  // own method
  takeClass(numOfclass: number) {
    console.log(`${this.name} ${numOfclass} ghonta class nei`);
  }
}

const teacher1 = new Teacher(
  "Mr. Teacher",
  25,
  "Bangladesh",
  "Senior teacher"
);

teacher1.takeClass(4)