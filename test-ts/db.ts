type UserInfo = {
  id: number;
  name: string;
};

let users: UserInfo[] = [];

interface User {
  id: number;
  name: string;
}

export type { User };
export { users };
