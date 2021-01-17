import MovieCard from "./MovieCard";
import styled from "styled-components";

const NominationWrapper = styled.ul`
  align-self: flex-start;
  background-color: #232733;
  border-radius: 30px;
  height: 85%;
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  @media (max-width: 768px) {
    align-self: center;
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
  }
`;
const NominationTitle = styled.h1`
  color: white;
  font-size: clamp(18px, 2.5vw, 25px);
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
