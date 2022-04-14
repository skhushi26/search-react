import React, { useEffect, useState } from "react";
import { CollegeDetail } from "../types/college.types";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import College from "./College";
import { Spinner } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const fetchCollegeByTitle = async (searchText: string) => {
  // e.preventDefault();
  const clgData = await axios.get(
    `http://localhost:5666/college/${searchText}`,
    {
      headers: {
        "Content-Type": "application/json",
        "secret-key": "f9bf78b9a18ce6d46a0cd2b0b86df9da",
      },
    }
  );
  return clgData;
};
const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [collegeData, setCollegeData] = useState<CollegeDetail[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { data, refetch, isLoading, error } = useQuery<AxiosResponse>(
    "colleges",
    () => fetchCollegeByTitle(searchText),
    { enabled: false }
  );

  const handleClick = () => {
    // manually refetch
    refetch();
  };

  useEffect(() => {
    if (data?.data.result.length === 0) {
      setErrorMessage(data.data.message);
    } else {
      setErrorMessage("");
    }
  }, [data]);

  console.log("isLoading", isLoading);
  if (isLoading) {
    console.log("Inside is loading...");
    return (
      <div className="loader">
        {/* <Spinner animation="border" variant="dark" /> */}
        <Skeleton count={6}></Skeleton>
      </div>
    );
  }
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search_input"
          placeholder="Search college by title"
          value={searchText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
        />
        <button onClick={handleClick} className="submit_btn">
          Go
        </button>
      </div>
      {errorMessage ? (
        <span className="not-found-title">{errorMessage}</span>
      ) : (
        data?.data.result.map((clgData: CollegeDetail) => {
          return <College clgData={clgData} />;
        })
      )}
    </>
  );
};

export default Search;
