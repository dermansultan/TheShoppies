import MovieCard from "./MovieCard";

function MovieList({ moviesArr, nominationsArr, setNominationsArr, handleModal}) {
  function isNominated(id) {
    const found = nominationsArr.find((nomination) => nomination.imdbID === id);
    return found ? true : false;
  }

  return (
    <ul className="movieResults">
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
    </ul>
  );
}

export default MovieList;
