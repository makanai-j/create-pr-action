import { users } from "./db";
import { User, UserId, UserName } from "./User";
import { UserRepository } from "./UserRepository";

const userRepository = new UserRepository();
const user1 = new User(new UserId("001"), new UserName("ユーザー1"));
const user2 = new User(new UserId("002"), new UserName("ユーザー2"));

console.log(users);

userRepository.Save(user1);
userRepository.Save(user2);

console.log(users);

users.length = 0;

console.log(users);

const a = (v: number) => {
  if (v > 100) {
    console.log("> 100");
  } else if (v > 90) {
    console.log("> 90");
  } else if (v > 80) {
    console.log("> 80");
  } else if (v > 70) {
    console.log("> 70");
  } else if (v > 60) {
    console.log("> 60");
  } else if (v > 50) {
    console.log("> 50");
  } else if (v > 40) {
    console.log("> 40");
  } else if (v > 30) {
    console.log("> 30");
  } else if (v > 20) {
    console.log("> 20");
  } else if (v > 10) {
    console.log("> 10");
  } else {
    console.log("<= 10");
  }
};
