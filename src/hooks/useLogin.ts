import { ProtoUser } from "../interfaces/UserInterfaces";

export const useLogin = () => {
  const url = process.env.REACT_APP_API_URL as string;

  const register = async (userData: ProtoUser) => {
    const response = await fetch(`${url}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    await response.json();
  };

  return { register };
};
