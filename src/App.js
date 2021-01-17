import axios from "axios";
import React, { useState } from "react";
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

const apiKey = "55c7d734";

function App() {
  // Modal
  const [displayModal, setDisplayModal] = useState(false);
  // Fetched Movie Object for Modal
  const [modalContent, setModalContent] = useState("");

  function handleModal(id) {
    setDisplayModal(true);
    axios
      .get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
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
