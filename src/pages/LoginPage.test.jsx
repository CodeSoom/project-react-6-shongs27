import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
jest.mock('react-redux');

describe('LoginPage', () => {
  it('render Basic Login input form', () => {
    const { container, getByLabelText } = render(<LoginPage />);

    expect(container).toHaveTextContent('로그인');
    expect(getByLabelText('loginFiled')).not.toBeNull();
  });
});
