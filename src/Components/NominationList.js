import MovieCard from "./MovieCard";
import styled from "styled-components";

const NominationWrapper = styled.ul`
  align-self: flex-start;
  background-color: #232733;
  border-radius: 30px;
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  @media (max-width: 768px) {
    align-self: center;
    margin-left: 0;
    margin-top: 10px;
    width: 70%;
  }
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
