import React from "react";
import { Route, Routes } from "react-router-dom";
import CollegeDetails from "../components/CollegeDetails";
import Search from "../components/Search";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/college-detail/:id" element={<CollegeDetails />} />
    </Routes>
  );
};

export default Routing;
