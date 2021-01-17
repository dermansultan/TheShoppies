import styled from "styled-components";

const MovieCardWrapper = styled.li`
  display: flex;
  background-color: #1c1e24;
  border-radius: 4px;
  width: 70%;
  margin: 20px 0 20px 15px;
`;

const MovieCardHeader = styled.h2`
  color: ${(props) => (props.primary ? "white" : "#6F6C7C")};
`;

const MovieCardBtn = styled.button``;

function MovieCard({
  movie,
  isNominationCard,
  isNominated,
  setNominationsArr,
  nominationsArr,
  handleModal,
}) {
  console.log(movie);

  const nominateMovie = () => {
    if (nominationsArr.length < 5) {
      setNominationsArr([...nominationsArr, movie]);
    }
  };

  const cancelNomination = () => {
    console.log(nominationsArr);
    let newArr = nominationsArr.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNominationsArr(newArr);
  };

  if (!isNominationCard && !isNominated) {
    // console.log("its not a nomination card and it is not nominated yet.");
    return (
      <MovieCardWrapper
        className="movieCard"
        style={{ cursor: "pointer" }}
        onClick={() => handleModal(movie.imdbID)}
      >
        <MovieCardHeader primary>{movie.Title}</MovieCardHeader>
        <MovieCardHeader>{movie.Year}</MovieCardHeader>
        <button className="btn Add" onClick={() => nominateMovie()}>
          +
        </button>
      </MovieCardWrapper>
    );
  }
  if (!isNominationCard && isNominated) {
    // console.log("its not a nomination card but it nominated already");
    return (
      <MovieCardWrapper>
        <MovieCardHeader>{movie.Title}</MovieCardHeader>
        <MovieCardHeader>{movie.Year}</MovieCardHeader>
        {/* No button greyed out */}
        {/* <button className="btn Add">+</button> */}
      </MovieCardWrapper>
    );
  }
  if (isNominationCard) {
    // console.log(
    //   "The movie has been nominated and this element has a remove button."
    // );
    return (
      <MovieCardWrapper>
        <MovieCardHeader primary>{movie.Title}</MovieCardHeader>
        <MovieCardHeader>{movie.Year}</MovieCardHeader>
        <button className="btn remove" onClick={() => cancelNomination()}>
          -
        </button>
      </MovieCardWrapper>
    );
  }
}

export default MovieCard;
