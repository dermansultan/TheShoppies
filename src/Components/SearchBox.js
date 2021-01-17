import React, { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../Hooks/debounce";

function SearchBox({ setIsLoading, setMoviesArr, setFailure, apiKey }) {
  // State for Input
  const [userInput, setUserInput] = useState("");
  const deBouncedUserInput = useDebounce(userInput, 500);

  useEffect(() => {
    if (deBouncedUserInput) {
      setFailure(null);
      setIsLoading(true);
      // use user input to queue server request
      // axios request : get - set isloading true
      axios
        .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${userInput}&type=movie`)
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deBouncedUserInput]);

  return (
    <div className="searchBoxWrapper">
      <form className="searchForm">
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
