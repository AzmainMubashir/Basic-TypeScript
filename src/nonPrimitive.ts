// array, object

let bazarList = ["salt", "sugar", "rice", "eggs"];

bazarList.push(); // error, we can't assign number to a string array.

// TS - tuple

let mixedArr = ["milk", 500, "sugar", 150, "eggs", 150];
// its type is (string | number)

let destination: [string, string, number] = ["Dhaka", "Sylhet", 3];

let coordinates: [number, number] = [12, 23];

let nameAndReg: [string, number] = ["Azmain", 811];
let nameAndRoll: [string, number] = ["Azmain", 811];

// reference type: Object

// since some have & some don't have middle name, so we have to make it optional type define
// access / literal type is used so that user can't change it's value

const user: {
  firstName: string;
  middleName?: string; // optional type define by '?'
  lastName: string;
  isMarried: boolean;
  readonly nationality: string; //access modifier (to keep data fixed/unchangeable)
  status: 'registered'; // literal type (custom type/fixed type)
} = {
  firstName: "Azmain",
  lastName: "Mubashir",
  isMarried: false,
  nationality: 'Bangladeshi',
  status: 'registered',
};

