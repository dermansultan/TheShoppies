import MovieCard from "./MovieCard";
import styled from "styled-components";

const NominationWrapper = styled.ul`
  align-self: flex-end;
  background-color: #232733;
  border-radius: 30px;
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const NominationTitle = styled.h1`
  color: white;
`;

function NominationList({ nominationsArr, setNominationsArr, handleModal }) {
  return (
    <NominationWrapper>
      <NominationTitle>Nominations</NominationTitle>
      {nominationsArr.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.imdbID}
          isNominationCard={true}
          nominationsArr={nominationsArr}
          setNominationsArr={setNominationsArr}
          handleModal={handleModal}
        />
      ))}
    </NominationWrapper>
  );
}

export default NominationList;
