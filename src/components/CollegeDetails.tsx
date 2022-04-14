import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CollegeDetail } from "../types/college.types";
import { Link } from "react-router-dom";
import "./collegeDetails.css";

const fetchCollegeByDetail = async (id: string | undefined) => {
  // e.preventDefault();
  const clgDetail = await axios.get(
    `http://localhost:5666/college/get-one/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "secret-key": "f9bf78b9a18ce6d46a0cd2b0b86df9da",
      },
    }
  );
  return clgDetail;
};

const CollegeDetails = () => {
  const { id } = useParams();
  const [clgDetail, setClgDetail] = useState<CollegeDetail>();
  const { data, isLoading } = useQuery<AxiosResponse>("collegeDetails", () =>
    fetchCollegeByDetail(id)
  );

  useEffect(() => {
    setClgDetail(data?.data.result);
  }, [data]);
  console.log(clgDetail);
  return (
    <>
      <Link to="/">
        <Button className="back-btn">Back</Button>
      </Link>
      <Container className="clg-container">
        <img
          src={`http://localhost:5666/${clgDetail?.image}`}
          alt={clgDetail?.title}
          className="clg-image"
        />
        <h2 className="clg-title">{clgDetail?.title}</h2>
        <p className="clg-short-desc">{clgDetail?.short_description}</p>
        <h5 className="clg-desc">{clgDetail?.description}</h5>
      </Container>
    </>
  );
};

export default CollegeDetails;
