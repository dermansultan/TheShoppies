import React, { useState } from "react";
import SearchBox from "./Components/SearchBox";

function App() {
  // List of Searched Movies
  const [moviesArr, setMoviesArr] = useState([]);
  // Loading Status
  const [isLoading, setIsLoading] = useState(false);
  // Failure Message
  const [failure, setFailure] = useState(null);
  // Nominated Movies
  const [nominations, setNominations] = useState([]);

  return (
    <div className="App">
      <SearchBox
        setFailure={setFailure}
        setIsLoading={setIsLoading}
        setMoviesArr={setMoviesArr}
      ></SearchBox>
    </div>
  );
}

export default App;
