type User = {
  name: string;
  age: number;
};

// interface : object type: array, object , function

interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "ABC",
  age: 22,
  role: "admin",
};

const user2: IUser = {
  name: "XYZ",
  age: 20,
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = false;

// function

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];

interface IFriends {
  [index: number]: string;
}

const freinds: IFriends = ["A", "B", "C"];
