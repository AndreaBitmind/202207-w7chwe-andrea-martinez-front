import { ProtoUser } from "../interfaces/UserInterfaces";

export const useLogin = () => {
  const url = process.env.REACT_APP_API_BASE_URL!;

  const register = async (userData: ProtoUser) => {
    const response = await fetch(`${url}users/register`, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userData),
    });
    const userRegisterresponse: ProtoUser = await response.json();

    return userRegisterresponse;
  };

  return { register };
};
