import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import SearchBox from "./Components/SearchBox";

function App() {
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
      />
      <MovieList moviesArr={moviesArr} nominationsArr={nominationsArr}/>
    </div>
  );
}

export default App;
