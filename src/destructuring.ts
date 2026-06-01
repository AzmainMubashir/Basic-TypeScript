// Object destructuring

const user = {
  name: {
    firstName: "Azmain",
    middleName: "",
    lastName: "Mubashir",
  },
  age: 22,
  gender: "male",
  favColor: "white",
  profession: "student",
};

const {
  name: { lastName },
  age,
  gender,
} = user;
console.log(lastName, age, gender);

// Array destructuring

const friends = [
  "Ashraful",
  "Samiul",
  "Biplob",
  "Ezaz",
  "Nabil",
  "Tuhin",
  "Sohag",
];

const [bestFriend, goodFriend, , , oldFriend1, oldFriend2, oldFriend3] =
  friends;

console.log(bestFriend, goodFriend, oldFriend1, oldFriend2, oldFriend3);
