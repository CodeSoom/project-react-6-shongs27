import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardUser,
  faCircleArrowUp,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',

  width: '200px',
  padding: '.1em',
  backgroundColor: '#d2dae2',

  borderRadius: '30px',
  border: '1px solid #eee',
  outline: '1px solid #aaa',
});

const Item = styled.button(({ className }) => ({
  backgroundColor: '#d2dae2',
  padding: '.3em',
  fontSize: '2em',

  border: 'none',
  borderRight: className ? '' : '2px solid #eee',
}));

export default function ResumeMenu() {
  return (
    <Container>
      <Item>
        <FontAwesomeIcon icon={faEnvelope} title="주인장 이메일 복사" />
      </Item>
      <Item>
        <FontAwesomeIcon icon={faChalkboardUser} title="주인장 이메일 복사" />
      </Item>
      <Item className="resume-menu__item--end">
        <FontAwesomeIcon icon={faCircleArrowUp} title="주인장 이메일 복사" />
      </Item>
    </Container>
  );
}
