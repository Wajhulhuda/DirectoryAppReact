import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" header">
        <p className=" head">Wajhul Huda Directory App</p>
      </div>
      <div className="body">
        <Link to="/">
          <button className="btn">Add New Person</button>
        </Link>
        <Link to="/retriev">
          <button className="btn">Retrieve Information</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
