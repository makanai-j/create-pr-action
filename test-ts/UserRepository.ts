import { User, UserName, UserId } from "./User";
import { users } from "./db";

interface IUserRepository {
  Save: (user: User) => void;
  Find: (name: UserName) => User | null;
}

class UserRepository implements IUserRepository {
  private users = users;
  Save(user: User): void {
    const dbUser = {
      id: parseInt(user.id.value),
      name: user.name.value,
    };
    this.users.push(dbUser);
  }

  Find(name: UserName): User | null {
    const found = this.users.find((user) => user.name === name.value);
    if (found == undefined) return null;
    const id = new UserId(found.id.toString());
    const userName = new UserName(found.name);
    return new User(id, userName) || null;
  }
}

export type { IUserRepository };
export { UserRepository };
