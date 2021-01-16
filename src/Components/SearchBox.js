import React, { useState } from "react";
import axios from "axios";

const key = "55c7d734";

function SearchBox({ setIsLoading, setMoviesArr, setFailure }) {
  // State for Input
  const [userInput, setUserInput] = useState("");

  function handleSubmit(e) {
    setFailure(null);
    e.preventDefault();
    setIsLoading(true);
    // use user input to queue server request
    // axios request : get - set isloading true
    axios
      .get(`http://www.omdbapi.com/?apikey=${key}&s=${userInput}&type=movie`)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        if (res.data && res.data.Search) {
          setMoviesArr(res.data.Search);
        }
        if (res.data && res.data.Error) {
          setFailure(res.data.Error);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
        setFailure(err.response.data.Error);
      });
    //   then,
    //   res = data => formatting moviesArr state,
    //   catch = error taking the error message as failure div if (failure) show html error msg
  }

  return (
    <div className="searchBoxWrapper">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchedMovie"
          name="searchedMovie"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Search for a movie to nominate!"
        ></input>
        <button type="submit">Submoot</button>
      </form>
    </div>
  );
}

export default SearchBox;
