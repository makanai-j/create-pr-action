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
