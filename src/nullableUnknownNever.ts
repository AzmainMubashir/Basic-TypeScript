// nullable

const getUser = (value: string | null) => {
  const result = value ? `Found from DB: ${value}` : "Found from DB: All User";
  console.log(result);
};

getUser("ABC");

// unknown

const disCalc = (price: unknown) => {
  if (typeof price === "number") {
    const disPrice = price * 0.1;
    console.log(disPrice);
  } else if (typeof price === "string") {
    const [disPrice] = price.split(" ");
    console.log(disPrice * 0.1);
  } else {
    console.log("Wrong Input");
  }
};

disCalc(100);
disCalc("100 TK");
disCalc(null);

// void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

// throwError("Error 404");
