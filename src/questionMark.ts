// ? : ternary operator : decision making
// ?? : nullish coalescing operator
// ?. : optional chaining

// ? : ternary operator : decision making

const ageVerification = (age: number) => {
  // if-else

  // if (age>=18){
  //     console.log(`you're adult!`);
  // }
  // else{
  //     console.log(`you're not adult!`);
  // }

  // ternary operator

  const result = age >= 18 ? `you're adult!` : `you're not adult!`;
  console.log(result);
};

ageVerification(17);

// ?? : nullish coalescing operator (for null or undefined value)

const userTheme = null;
// const userTheme = undefined;
// const userTheme = 'Dark Theme';

const selectedTheme = userTheme ?? "Light Theme";

// when userTheme value wil be null or undefined
// then theme will be Light Theme
// otherwise other theme

console.log(selectedTheme);

// optional chaining

type Data = {
  address: {
    city: string;
    town: string;
    postcode?: number; // optional
  };
};
const userData: Data = {
  address: {
    city: "Gazipur",
    town: "Gazipur",
  },
};
