// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "AltJawga",
  [password]: "123456",
  age: 20
};

console.log(user.username);
console.log(user.password);