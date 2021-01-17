import React, { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../Hooks/debounce";
import styled from "styled-components";
import { Search } from "react-feather";

const SearchWrapper = styled.div`
  display: flex;
  margin-top: 10vh;
  width: 90%;
  background: #232733;
  justify-content: space-between;
  height: 50px;
  border-radius: 30px;
`;

const SearchForm = styled.form`
  width: 100%;
`;

const SearchInput = styled.input` 
  align-self: center;
  width: 100%;
  color: #6f6c7c;
  height: 100%;
  background: #232733;
  border: none;
  padding-left: 15px;
  font-size: clamp(14px, 2.5vw, 22px);
`;

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
        .get(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${userInput}&type=movie`
        )
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
    <SearchWrapper>
      <Search
        color={"#6f6c7c"}
        size={28}
        style={{ alignSelf: "center", marginLeft: "10px" }}
      ></Search>
      {/* <form className="searchForm"> */}
      <SearchForm>
        <SearchInput
          autoComplete={'off'}
          className="searchedMovie"
          name="searchedMovie"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Search for a movie to nominate!"
        ></SearchInput>
      </SearchForm>
    </SearchWrapper>
  );
}

export default SearchBox;
