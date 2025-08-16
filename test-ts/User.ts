import { IUserRepository } from "./UserRepository";

class User {
  public readonly id: UserId;
  public name: UserName;

  constructor(id: UserId, name: UserName) {
    this.id = id;
    this.name = name;
  }

  public changeUserName(name: UserName): void {
    if (name === null) throw new Error("name is null");
    this.name = name;
  }
}

class UserName {
  public value: string;

  constructor(value: string) {
    if (value.length < 3) throw new Error("ユーザー名は3文字以上です");
    this.value = value;
  }
}

class UserId {
  public value: string;

  constructor(value: string) {
    this.value = value;
  }
}

class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public exists(user: User): boolean {
    const found = this.userRepository.Find(user.name);
    return found != null;
  }
}

export { User, UserName, UserId, UserService };
