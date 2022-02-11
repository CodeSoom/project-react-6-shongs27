import PagesContainer from './PagesContainer';
import HeaderBar from './commons/top/HeaderBar';

import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <HeaderBar />
      <PagesContainer />
    </Provider>
  );
}
