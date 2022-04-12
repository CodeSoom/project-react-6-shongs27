import styled from '@emotion/styled';

const Container = styled.div({
  width: '20vw',
  height: '8vh',
  lineHeight: '8vh',
  textAlign: 'center',

  backgroundColor: '#0fbcf9',

  borderRadius: '30px',
  border: '3px solid #eee',
  outline: '1px solid #aaa',

  '& span': {
    fontSize: '1em',
  },
});

export default function ClipboardGuide() {
  return (
    <Container>
      <span>이메일이 클립보드에 복사 되었습니다</span>
    </Container>
  );
}
