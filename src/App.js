import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieList from "./Components/MovieList";
import MovieModal from "./Components/MovieModal";
import NominationList from "./Components/NominationList";
import SearchBox from "./Components/SearchBox";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  padding-top: 10vh;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5vh;
  }
`;

const StatusHeader = styled.h1`
padding-top: 10px;
  color: white;
  font-weight: 600;
  font-size: clamp(14px, 2.5vw, 25px);
  min-height: 10px;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`;

const apiKey = "55c7d734";

function App() {
  // Modal
  const [displayModal, setDisplayModal] = useState(false);
  // Fetched Movie Object for Modal
  const [modalContent, setModalContent] = useState("");
  // Banner
  const [displayBanner, setDisplayBanner] = useState("");

  function handleModal(id) {
    setDisplayModal(true);
    axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then((res) => {
        console.log(res);
        if (res.data) {
          setModalContent(res.data);
        } else {
          setDisplayModal(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // List of Searched Movies
  const [moviesArr, setMoviesArr] = useState([]);
  // Loading Status
  const [isLoading, setIsLoading] = useState(false);
  // Failure Message
  const [failure, setFailure] = useState(null);
  // Nominated Movies
  const [nominationsArr, setNominationsArr] = useState([]);

  useEffect(() => {
    if (failure) {
      setDisplayBanner(failure);
    } else if (nominationsArr.length === 5) {
      setDisplayBanner(
        "Congratulations on nominating 5 movies!"
      );
    } else {
      setDisplayBanner("");
    }
  }, [nominationsArr, failure]);

  return (
    <div className="App">
      <MovieModal
        handleModal={handleModal}
        displayModal={displayModal}
        modalContent={modalContent}
        setModalContent={setModalContent}
        setDisplayModal={setDisplayModal}
      />
      <SearchBox
        setFailure={setFailure}
        setIsLoading={setIsLoading}
        setMoviesArr={setMoviesArr}
        apiKey={apiKey}
      />
      {displayBanner.length > 0 ? (
        <StatusHeader failure={failure}>{displayBanner}</StatusHeader>
      ) : (
        <StatusHeader hidden></StatusHeader>
      )}
      <ContentWrapper>
        <MovieList
          moviesArr={moviesArr}
          nominationsArr={nominationsArr}
          setNominationsArr={setNominationsArr}
          handleModal={handleModal}
        />
        <NominationList
          nominationsArr={nominationsArr}
          setNominationsArr={setNominationsArr}
          handleModal={handleModal}
        />
      </ContentWrapper>
    </div>
  );
}

export default App;
