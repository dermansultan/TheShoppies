import MovieCard from "./MovieCard";

function NominationList({ nominationsArr, setNominationsArr, handleModal }) {
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
          handleModal={handleModal}
        />
      ))}
    </ul>
  );
}

export default NominationList;
