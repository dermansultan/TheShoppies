import MovieCard from "./MovieCard";

function NominationList({ nominationsArr }) {
  return (
    <ul className="nominationList">
    <h1>SHOPIFY</h1>
      {nominationsArr.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} isNominationCard={true} />
      ))}
    </ul>
  );
}

export default NominationList;
