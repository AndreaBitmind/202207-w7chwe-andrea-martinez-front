import "./register.css";

export const Register = () => {
  return (
    <div className="main-component">
      <h2>Create your user</h2>
      <form>
        <label htmlFor="userName">Enter your User Name</label>
        <input
          type="text"
          name="userName"
          placeholder="User name"
          required
          autoComplete="off"
        />

        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          autoComplete="off"
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
