import "./register.css";

export const Register = () => {
  return (
    <>
      <h2>Create your user</h2>
      <form>
        <div>
          <label htmlFor="userName">userName</label>
          <input
            type="text"
            name="userName"
            placeholder="User name"
            required
            autoComplete="off"
          />

          <label htmlFor="password">passWord</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            autoComplete="off"
          />

          <label htmlFor="imageInput">image</label>
          <input type="file" name="imageInput" placeholder="image" />

          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};
