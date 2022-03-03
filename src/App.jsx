import PagesContainer from './PagesContainer';

import { useDispatch } from 'react-redux';
import { setAccessToken } from './actions';

import { getItem } from './services/storage';

export default function App() {
  fetch("http://localhost:3000/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "hong", address: 32 }),
  });

  const dispatch = useDispatch();
  const token = getItem('blogToken');
  if (token) {
    dispatch(setAccessToken(token));
  }

  return <PagesContainer />;
}
