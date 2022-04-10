import styled from '@emotion/styled';

const Container = styled.div({
  backgroundColor: 'skyblue',
});

export default function ResumeMenu() {
  return (
    <Container>
      <span>이메일로 연락하기</span>
      <span>방명록에 연락해두기</span>
      <span>url 복사하기</span>
      <span>선두로 가기</span>
    </Container>
  );
}
