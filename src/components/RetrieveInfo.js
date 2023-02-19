import React, { useState } from "react";
import { getPrevData } from "./AddNewPerson";
const RetrieveInfo = () => {
  // eslint-disable-next-line
  const [data, setData] = useState(getPrevData());
  const [filtered, setFiltered] = useState([]);
  const [input, setInput] = useState("");
  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  const searchData = () => {
    let output = data.filter((item) => {
      console.log(item);
      return parseInt(item.aadhar) === parseInt(input);
    });
    setFiltered(output);
    console.log(filtered);
  };
  return (
    <div className="addNew">
      <span className="newPerson">Retrieve Information</span>
      <div className="searchDiv">
        <input
          type="text"
          className="search-inp"
          onChange={handleChangeInput}
        />
        <button className="btn" onClick={searchData}>
          Find
        </button>
      </div>
      {filtered.length < 1 && <h1 className="no-data">No data</h1>}
      {filtered.length > 0 && (
        <div className="details">
          <div className="left">
            <p>NAME: </p>
            <p>DOB: </p>
            <p>AADHAR: </p>
            <p>MOBILE NO: </p>
            <p>AGE: </p>
          </div>
          <div className="right">
            <p>{filtered[0].name}</p>
            <p>{filtered[0].dob}</p>
            <p>{filtered[0].aadhar}</p>
            <p>{filtered[0].mobile}</p>
            <p>{filtered[0].age}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetrieveInfo;
