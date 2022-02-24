import { fireEvent, render } from '@testing-library/react';

import LoginPage from './LoginPage';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { changeLoginField } from '../actions';
jest.mock('react-redux');

describe('LoginPage', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        login: {
          loginField: {
            email: '',
            password: '',
          },
        },
      })
    );
  });

  it('render Basic Login input form', () => {
    const { container, getByLabelText } = render(<LoginPage />);

    expect(container).toHaveTextContent('로그인');
    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('render change LoginField', () => {
    const { getByLabelText } = render(<LoginPage />);

    [
      { text: 'Email', value: 'dkxm@naver.com', name: 'email' },
      { text: 'Password', value: '1234', name: 'password' },
    ].forEach(({ text, value, name }) => {
      fireEvent.change(getByLabelText(text), {
        target: { value },
      });

      expect(dispatch).toBeCalledWith(changeLoginField(name, value));
    });
  });
});
