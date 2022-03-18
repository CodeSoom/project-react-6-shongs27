import styled from '@emotion/styled';
import AnalysticSection from './AnalysticSection';
import SearchInput from './SearchInput';

const Container = styled.div({
  float: 'left',
  width: '33.3%',
  minHeight: '300px',
  paddingLeft: '36px',
  boxSizing: 'border-box',
});

const Search = styled.div({
  marginBottom: '57px',
  '& a': {
    marginLeft: '5px',
    '&:active': {
      color: 'black',
    },
  },
});

export default function ExtraSection({
  handleChange,
  handleSubmit,
  searchField,
  dailyActiveUsers,
}) {
  return (
    <Container>
      <Search>
        <h3>검색</h3>
        <SearchInput
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchField={searchField}
        />
      </Search>

      <AnalysticSection dailyActiveUsers={dailyActiveUsers} />
    </Container>
  );
}
