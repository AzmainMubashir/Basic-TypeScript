// spread and rest operator

// spread operator for array and object

const friends = ["Ashraful", "Ezaz", "Biplob", "Samiul"];

const schoolFriends = ["Nabil", "Tuhin", "Sohag", "Yousuf"];

const allFriend = [];

allFriend.push(...friends);
allFriend.push(...schoolFriends);

console.log(allFriend);

const userInfo = {
  name: "Azmain",
  age: 21,
  profession: "Student",
};

const userContact = {
  Phone: 16310,
  email: "azmain@gmail.com",
};

const userData = { ...userInfo, ...userContact };

console.log(userData);

// rest operator

// '...' for direct string input
// without '...' for array input

const sentInvite = (friends: string[]) => {
//const sentInvite = (...friends: string[]) => {
friends.forEach((friend: string) => {
    console.log(`Invitation sent to ${friend}`);
  });
};

//sentInvite("Ashraful","Ezaz","Biplob","Samiul","Nabil","Tuhin","Sohag","Yousuf",);

sentInvite(allFriend)
