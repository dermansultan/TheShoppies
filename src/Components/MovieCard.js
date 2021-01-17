import styled from "styled-components";
import { PlusCircle, XCircle } from "react-feather";

const MovieCardWrapper = styled.li`
  display: flex;
  background-color: #1c1e24;
  border-radius: 4px;
  width: 90%;
  height: 80px;
  align-items center;
  padding-left: 3px;
  margin: 14px 0 14px 15px;
  justify-content: space-between;
  @media (max-width: 768px){
    height: 50px;
  }
`;

const MovieCardHeader = styled.h2`
  color: ${(props) => (props.primary ? "white" : "#6F6C7C")};
  font-size: clamp(14px, 2.5vw, 18px);
`;

const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieCardBtn = styled.button`
  background-color: ${(props) => (props.remove ? "#FD3124" : "#246BFD")};
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 10px;
  margin-right: 5px;
  @media (max-width: 768px) {
    width: 30px;
    height: 100%;
    border-radius: 0;
  }
`;

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
        <MovieDetailsWrapper>
          <MovieCardHeader primary>{movie.Title}</MovieCardHeader>
          <MovieCardHeader>{movie.Year}</MovieCardHeader>
        </MovieDetailsWrapper>
        {/* <button className="btn Add" onClick={() => nominateMovie()}>
          +
        </button> */}
        <MovieCardBtn onClick={() => nominateMovie()}>
          <PlusCircle color={"white"} size={16}></PlusCircle>
        </MovieCardBtn>
      </MovieCardWrapper>
    );
  }
  if (!isNominationCard && isNominated) {
    // console.log("its not a nomination card but it nominated already");
    return (
      <MovieCardWrapper>
        <MovieDetailsWrapper>
          <MovieCardHeader>{movie.Title}</MovieCardHeader>
          <MovieCardHeader>{movie.Year}</MovieCardHeader>
        </MovieDetailsWrapper>
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
        <MovieDetailsWrapper>
          <MovieCardHeader primary>{movie.Title}</MovieCardHeader>
          <MovieCardHeader>{movie.Year}</MovieCardHeader>
        </MovieDetailsWrapper>
        <MovieCardBtn remove onClick={() => cancelNomination()}>
          <XCircle color={"white"} size={16}></XCircle>
        </MovieCardBtn>
      </MovieCardWrapper>
    );
  }
}

export default MovieCard;
