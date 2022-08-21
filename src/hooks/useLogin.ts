import { ProtoUser } from "../interfaces/UserInterfaces";

export const useLogin = () => {
  const register = async (userData: ProtoUser, url: string) => {
    const response = await fetch(url + "users/register", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userData),
    });
    const registerResponse = await response.json();

    return registerResponse;
  };

  return { register };
};
