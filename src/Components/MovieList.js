import MovieCard from "./MovieCard";

function MovieList({ moviesArr, nominationsArr }) {
  function isNominated(id) {
    const found = nominationsArr.find((nomination) => nomination.imdbID === id);
    return found ? true : false;
  }

  return (
    <ul className="movieResults">
      {moviesArr.map((movie) => (
        <MovieCard
          title={movie.Title}
          year={movie.Year}
          key={movie.imdbID}
          isNominationCard={false}
          isNominated={() => isNominated(movie.imdbID)}
        />
      ))}
    </ul>
  );
}

export default MovieList;
