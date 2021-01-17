import axios from "axios";
import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import NominationList from "./Components/NominationList";
import SearchBox from "./Components/SearchBox";

const apiKey = "55c7d734";

function App() {
  // Modal
  const [displayModal, setDisplayModal] = useState(false);

  function handleModal(id) {
    setDisplayModal(true);
    axios
      .get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then((res) => {
        console.log(res);
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
      <SearchBox
        setFailure={setFailure}
        setIsLoading={setIsLoading}
        setMoviesArr={setMoviesArr}
        apiKey={apiKey}
      />
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
    </div>
  );
}

export default App;
