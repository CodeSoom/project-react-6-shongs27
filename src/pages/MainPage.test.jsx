import { render } from '@testing-library/react';

import MainPage from './MainPage';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
jest.mock('react-redux');

/*
1. 처음에 로드되면 데이터를 잘 받아오는가
*/
describe('MainPage', () => {
  const dispatch = jest.fn();
  useSelector.mockImplementation((selector) =>
    selector({
      pages: {
        main: [
          {
            id: 1,
            title: 'props에 대하여',
            content: '컴포넌트는 props를 통해 데이터를 전달한다',
          },
        ],
      },
    })
  );
  useDispatch.mockImplementation(() => dispatch);

  it('페이지가 렌더링 되면 메인페이지 데이터를 받아온다', () => {
    const { getByText } = render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    expect(dispatch).toBeCalled();
    expect(getByText(/props를 통해/)).not.toBeNull();
  });
});
