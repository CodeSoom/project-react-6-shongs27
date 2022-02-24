import { useSelector, useDispatch } from 'react-redux';
import { changeLoginField } from '../actions';

export default function LoginPage() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login.loginField);

  function handleChange(e) {
    const {
      target: { name, value },
    } = e;

    dispatch(changeLoginField(name, value));
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
          value={email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <button type="button">인증</button>
    </div>
  );
}
