function MovieCard({
  movie,
  isNominationCard,
  isNominated,
  setNominationsArr,
  nominationsArr,
}) {
  console.log(movie);

  const nominateMovie = () => {
    if (nominationsArr.length < 5) {
      setNominationsArr([...nominationsArr, movie]);
    }
  };

  const cancelNomination = () => {
    console.log(nominationsArr)
    let newArr = nominationsArr.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNominationsArr(newArr);
  };

  if (!isNominationCard && !isNominated) {
    // console.log("its not a nomination card and it is not nominated yet.");
    return (
      <li className="movieCard">
        <h1 className="title">{movie.Title}</h1>
        <h2 className="year">{movie.Year}</h2>
        <button className="btn Add" onClick={() => nominateMovie()}>
          +
        </button>
      </li>
    );
  }
  if (!isNominationCard && isNominated) {
    // console.log("its not a nomination card but it nominated already");
    return (
      <li className="movieCard">
        <h1 className="title" style={{ color: "red" }}>
          {movie.Title}
        </h1>
        <h2 className="year">{movie.Year}</h2>
        {/* No button greyed out */}
        {/* <button className="btn Add">+</button> */}
      </li>
    );
  }
  if (isNominationCard) {
    // console.log(
    //   "The movie has been nominated and this element has a remove button."
    // );
    return (
      <li className="movieCard">
        <h1 className="title">{movie.Title}</h1>
        <h2 className="year">{movie.Year}</h2>
        <button className="btn remove" onClick={() => cancelNomination()}>-</button>
      </li>
    );
  }
}

export default MovieCard;
