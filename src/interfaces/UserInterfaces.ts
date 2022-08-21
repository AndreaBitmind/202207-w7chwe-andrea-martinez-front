export interface ProtoUser {
  userName: string;
  password: string;
  image?: string;
}

export interface User extends ProtoUser {
  id: string;
  token: string;
}
