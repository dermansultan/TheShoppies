import MovieCard from "./MovieCard";

function NominationList({ nominationsArr, setNominationsArr }) {
  return (
    <ul className="nominationList">
      <h1>SHOPIFY</h1>
      {nominationsArr.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.imdbID}
          isNominationCard={true}
          nominationsArr={nominationsArr}
          setNominationsArr={setNominationsArr}
        />
      ))}
    </ul>
  );
}

export default NominationList;
