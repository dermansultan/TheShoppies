import styled from "styled-components";
import { PlusCircle, XCircle } from "react-feather";

const MovieCardWrapper = styled.li`
  display: flex;
  flex-direction: row-reverse;
  background-color: #1c1e24;
  border-radius: 4px;
  width: 90%;
  height: 80px;
  align-items center;
  padding-left: 3px;
  margin: 5px 0 8px 14px;
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
  width: 100%;
`;

const MovieCardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
  const nominateMovie = () => {
    if (nominationsArr.length < 5) {
      setNominationsArr([...nominationsArr, movie]);
    }
  };

  const cancelNomination = () => {
    let newArr = nominationsArr.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNominationsArr(newArr);
  };

  if (!isNominationCard && !isNominated) {
    return (
      <MovieCardWrapper className="movieCard" style={{ cursor: "pointer" }}>
        <MovieDetailsWrapper onClick={() => handleModal(movie.imdbID)}>
          <MovieCardHeader primary>{movie.Title}</MovieCardHeader>
          <MovieCardHeader>{movie.Year}</MovieCardHeader>
        </MovieDetailsWrapper>
        <MovieCardBtn onClick={() => nominateMovie()}>
          <PlusCircle
            color={"white"}
            style={{ alignSelf: "center" }}
            size={16}
          ></PlusCircle>
        </MovieCardBtn>
      </MovieCardWrapper>
    );
  }
  if (!isNominationCard && isNominated) {
    return (
      <MovieCardWrapper>
        <MovieDetailsWrapper onClick={() => handleModal(movie.imdbID)}>
          <MovieCardHeader>{movie.Title}</MovieCardHeader>
          <MovieCardHeader>{movie.Year}</MovieCardHeader>
        </MovieDetailsWrapper>
      </MovieCardWrapper>
    );
  }
  if (isNominationCard) {
    return (
      <MovieCardWrapper>
        <MovieDetailsWrapper onClick={() => handleModal(movie.imdbID)}>
          <MovieCardHeader primary>{movie.Title}</MovieCardHeader>
          <MovieCardHeader>{movie.Year}</MovieCardHeader>
        </MovieDetailsWrapper>
        <MovieCardBtn remove onClick={() => cancelNomination()}>
          <XCircle
            color={"white"}
            style={{ alignSelf: "center" }}
            size={16}
          ></XCircle>
        </MovieCardBtn>
      </MovieCardWrapper>
    );
  }
}

export default MovieCard;
