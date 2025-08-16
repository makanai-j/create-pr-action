import { UserRepository } from "./UserRepository";
import { User, UserName, UserId, UserService } from "./User";

describe("UserRepository", () => {
  let userRepository: UserRepository;
  let userService: UserService;

  beforeEach(() => {
    // 各テスト前にusers配列をクリア
    userRepository = new UserRepository();
    userService = new UserService(userRepository);
  });

  describe("true", () => {
    test("ユーザーを正常に保存できる", () => {
      const userId = new UserId("123");
      const userName = new UserName("テスト太郎");
      const user = new User(userId, userName);

      userRepository.Save(user);

      expect(userService.exists(user)).toEqual(true);
    });

    test("複数のユーザーを保存できる", () => {
      const user1 = new User(new UserId("001"), new UserName("ユーザー1"));
      const user2 = new User(new UserId("002"), new UserName("ユーザー2"));

      userRepository.Save(user1);
      userRepository.Save(user2);

      // expect(users).toHaveLength(2);
      expect(userService.exists(user1)).toEqual(true);
      expect(userService.exists(user2)).toEqual(true);
    });
  });

  describe("false", () => {
    test("存在しないユーザー名で検索するとnullが返される", () => {
      const user = new User(
        new UserId("001"),
        new UserName("存在しないユーザー")
      );
      expect(userService.exists(user)).toEqual(false);
    });
  });

  describe("throw", () => {
    test("ユーザー名3文字以下でエラーを吐く", () => {
      expect(() => new UserName("00")).toThrow();
    });
  });
});
