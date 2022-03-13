import PagesContainer from './PagesContainer';

import { useDispatch } from 'react-redux';
import { getGoogleAnalytics, setAccessToken } from './actions';

import { getItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();
  const token = getItem('accessToken');
  const userId = getItem('userId');

  if (token) {
    dispatch(setAccessToken(token, userId));
  }

  dispatch(getGoogleAnalytics());

  return <PagesContainer />;
}
