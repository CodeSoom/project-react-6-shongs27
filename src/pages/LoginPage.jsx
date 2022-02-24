export default function LoginPage() {
  function handleChange(e) {
    const {
      target: { name, value },
    } = e;
  }

  return (
    <div>
      <h1>로그인</h1>
      <div>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          name="email"
          //   value={email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="text"
          id="login-password"
          name="password"
          //   value={password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
