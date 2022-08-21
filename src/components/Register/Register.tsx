import { SyntheticEvent, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./register.css";

export const Register = () => {
  const { register } = useLogin();

  const initialState = {
    userName: "",
    passWord: "",
    image: "",
  };

  const [registerData, setRegisterData] = useState(initialState);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    register(registerData);
    setRegisterData(initialState);
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [ev.target.name]: ev.target.value });
  };

  return (
    <div className="main-component">
      <h2>Create your user</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Enter your User Name</label>
        <input
          type="text"
          name="userName"
          placeholder="User name"
          required
          autoComplete="off"
          value={registerData.userName}
          onChange={handleChange}
        />

        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          autoComplete="off"
          value={registerData.passWord}
          onChange={handleChange}
        />
        <label htmlFor="userName">Enter your birthdate</label>
        <input type="date" name="birthdate" required autoComplete="off" />
        <label htmlFor="imageInput">Select an image</label>
        <input type="file" name="imageInput" placeholder="image" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
