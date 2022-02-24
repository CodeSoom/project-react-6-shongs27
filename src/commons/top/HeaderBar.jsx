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

const List = styled.ul({
  display: 'flex',
  height: '5vh',
  backgroundColor: 'black',
  color: 'gray',
  listStyle: 'none',

  margin: 0,
  padding: 0,
});

const Item = styled.li({
  marginRight: '1em',
  fontWeight: 'bold',
});

const ListRight = styled.ul({
  display: 'flex',
  height: '5vh',
  backgroundColor: 'black',
  color: 'gray',
  listStyle: 'none',

  margin: 0,
  padding: 0,

  position: 'fixed',
  top: 0,
  right: 0,

  borderRadius: '20px',

  '& span': {
    lineHeight: '2em',
    paddingLeft: '.8em',
    paddingRight: '.8em',
  },
});

export default function HeaderBar() {
  return (
    <>
      <List>
        <Item>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </Item>

        <Item>
          <FontAwesomeIcon icon={faFile} />
          <span> 소개</span>
        </Item>

        <Item>
          <FontAwesomeIcon icon={faGamepad} />
          <span> 게임</span>
        </Item>

        <Item>
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <span> 방명록</span>
        </Item>
      </List>

      <ListRight>
        <span> Hong WonBae </span>
        <img src="img/hongs.jpg" alt="홍원배" width="35" height="35" />

        <span>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </span>
      </ListRight>
    </>
  );
}
