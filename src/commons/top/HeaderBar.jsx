import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faHome,
  faFile,
  faGamepad,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { useState } from 'react';

import SearchInput from '../aside/sections/SearchInput';
import { keyframes } from '@emotion/react';

import { changeSearchField, getSearchField } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

const slideIn = keyframes`
  from { 
    opacity: 0;
    marginLeft: 1000;
  }

  to {
    opacity: 1;
    marginRight: 0;
  }
`;

const TopSearchInput = styled(SearchInput)({
  margin: '0 auto',
  animation: `${slideIn} 1s cubic-bezier(0.25, 0.1, 0.25, 1)`,

  fontSize: '20px',

  '& input': {
    width: '400px',
    height: '1.8rem',
    padding: 0,
    marginTop: '.2rem',
  },

  '& a': {
    marginLeft: '10px',
    verticalAlign: 'middle',
    color: 'white',
    '&:active': {
      color: 'black',
    },
  },
});

const ListLeft = styled.ul({
  display: 'flex',
  height: '2.4rem',
  backgroundColor: 'black',
  color: 'gray',
  listStyle: 'none',

  margin: 0,
  padding: '0 1em 0',

  '& li': {
    fontWeight: 'bold',
    margin: '.4em 1em 0 0',

    '& span': {
      marginLeft: '.5em',
    },
  },
});

const ListRight = styled.ul({
  display: 'flex',
  height: '2.4em',
  backgroundColor: 'black',
  color: 'gray',
  listStyle: 'none',

  margin: 0,
  padding: 0,

  position: 'fixed',
  top: 0,
  right: 0,

  borderRadius: '30px',
  zIndex: 1,

  '& span': {
    lineHeight: '2em',
    paddingLeft: '.8em',
    paddingRight: '.8em',

    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
});

export default function HeaderBar() {
  const [searchSelected, setSearchSelected] = useState(false);

  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.search.searchField);

  function handleClick() {
    setSearchSelected((prev) => !prev);
  }

  function handleChange(searchField) {
    dispatch(changeSearchField(searchField));
  }
  function handleSubmit() {
    dispatch(getSearchField());
  }

  if (searchSelected) {
    return (
      <ListLeft>
        <TopSearchInput
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchField={searchField}
        />
        <img
          src="img/circle-xmark-regular.svg"
          alt="검색나가기"
          color="white"
        />
      </ListLeft>
    );
  }

  return (
    <>
      <ListLeft>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faFile} size="lg" />
          <span>소개</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faGamepad} size="lg" />
          <span>게임</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" />
          <span>방명록</span>
        </li>
      </ListLeft>

      <ListRight>
        <span>
          <Link to="/login"> Hong WonBae </Link>
        </span>

        <img src="img/hongs.jpg" alt="홍원배" width="35" height="35" />

        <span>
          <FontAwesomeIcon icon={faSearch} size="lg" onClick={handleClick} />
        </span>
      </ListRight>
    </>
  );
}
