import styled from '@emotion/styled';

const TD = styled.td({
  //   textAlign: 'center',
  height: '100px',
  verticalAlign: 'middle',
});

export default function GuestBoard({ data }) {
  //   const { num, title, writer, createdDay } = data;

  return (
    <>
      <h2
        style={{
          padding: '1em 0',
          borderBottom: '1px solid rgb(230, 230, 230)',
        }}
      >
        방명록
      </h2>
      <div style={{ padding: '20px' }}>
        <table style={{ width: '100%' }}>
          <colgroup>
            <col style={{ width: '15%' }} />
            <col style={{ width: '40%' }} />
            <col style={{ width: '15%' }} />
            <col span={{ width: '15%' }} />
          </colgroup>

          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">글쓴이 </th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TD>1</TD>
              <TD>이거보세요</TD>
              <TD>카페미인</TD>
              <TD>2020/1/1</TD>
            </tr>
            <tr>
              <TD>1</TD>
              <TD>이거보세요</TD>
              <TD>카페미인</TD>
              <TD>2020/1/1</TD>
            </tr>
            <tr>
              <TD>1</TD>
              <TD>이거보세요</TD>
              <TD>카페미인</TD>
              <TD>2020/1/1</TD>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
