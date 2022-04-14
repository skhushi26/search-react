import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CollegeDetail } from "../types/college.types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./college.css";
import { Link } from "react-router-dom";

type Props = {
  clgData: CollegeDetail;
};

const College: React.FC<Props> = ({ clgData }) => {
  return (
    <Container className="college-container mb-3 p-2">
      <Row>
        <Col md={3}>
          <img
            className="image"
            src={`http://localhost:5666/${clgData.image}`}
            alt="College-thumbnail"
          />
        </Col>
        <Col md={9}>
          <Link to={`/college-detail/${clgData._id}`} className="link-title">
            <h5>{clgData.title}</h5>
          </Link>
          <span className="short-description">{clgData.short_description}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default College;
