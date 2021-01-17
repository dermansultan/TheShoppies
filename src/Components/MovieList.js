import MovieCard from "./MovieCard";
import styled from "styled-components";

const ResultsWrapper = styled.ul`
  background-color: #232733;
  border-radius: 30px;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

function MovieList({
  moviesArr,
  nominationsArr,
  setNominationsArr,
  handleModal,
}) {
  function isNominated(id) {
    const found = nominationsArr.find((nomination) => nomination.imdbID === id);
    return found ? true : false;
  }

  return (
    <ResultsWrapper>
      {moviesArr.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.imdbID}
          isNominationCard={false}
          isNominated={isNominated(movie.imdbID)}
          setNominationsArr={setNominationsArr}
          nominationsArr={nominationsArr}
          handleModal={handleModal}
        />
      ))}
    </ResultsWrapper>
  );
}

export default MovieList;
