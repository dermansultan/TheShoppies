import MovieCard from "./MovieCard";
import styled from "styled-components";

const ResultsWrapper = styled.ul`
  padding-top: 10px;
  background-color: #232733;
  border-radius: 30px;
  height: 85%;
  width: 70%;
  display: flex;
  overflow-y: auto;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MovieListHeader = styled.h1`
  color: white;
  font-weight: 600;
  font-size: clamp(14px, 2.5vw, 25px);
  align-self: flex-start;
  padding-left: 14px;
  margin: 10px 0 10px 12px
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
    <>
    <ResultsWrapper>
    <MovieListHeader>Search Results</MovieListHeader>
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
    </>
  );
}

export default MovieList;
