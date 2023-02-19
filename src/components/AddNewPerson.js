import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
const getPrevData = () => {
  const data = localStorage.getItem("item");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const AddNewPerson = () => {
  const [personData, setPersonData] = useState(getPrevData());
  const [person, setPerson] = useState({
    name: "",
    dob: "",
    aadhar: "",
    mobile: "",
    age: "",
  });
  const [addRow, setAddRow] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, dob, aadhar, mobile, age } = person;
    if (
      name !== "" &&
      dob !== "" &&
      aadhar !== "" &&
      aadhar.length === 12 &&
      mobile !== "" &&
      mobile.length === 10 &&
      age !== ""
    ) {
      setPersonData([...personData, person]);
      setPerson({
        name: "",
        dob: "",
        aadhar: "",
        mobile: "",
        age: "",
      });
      setAddRow("");
      console.log(person);
    } else {
      alert("Check All fields");
    }
  };
  const handleAdd = () => {
    const row = {
      name: "",
      dob: "",
      aadhar: "",
      mobile: "",
      age: "",
    };
    setAddRow([...addRow, row]);
  };
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(personData));
    console.log(personData);
  }, [personData]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPerson((prev) => {
      return { ...person, [name]: value };
    });
  };
  const deleteRow = () => {
    setAddRow("");
  };
  return (
    <div className="addNew">
      <span className="newPerson">Add New Person</span>
      <div className="table">
        <form onSubmit={(e) => handleSubmit(e)}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of birth</th>
                <th>Aadhar Number</th>
                <th>Mobile Number</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {personData.length > 0 &&
                personData.map((item, index) => {
                  return (
                    <TableRow
                      item={item}
                      key={index}
                      id={item.aadhar}
                      data={personData}
                      setPersonData={setPersonData}
                      setAddRow={setAddRow}
                    />
                  );
                })}
              {addRow.length > 0 && (
                <tr>
                  <td>
                    <input type="text" name="name" onChange={handleChange} />
                  </td>
                  <td>
                    <input type="date" name="dob" onChange={handleChange} />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="aadhar"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="mobile"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input type="number" name="age" onChange={handleChange} />
                  </td>
                  <td>
                    <input type="submit" value="Save" className="table-btn" />
                    <button className="table-btn" onClick={deleteRow}>
                      Delete
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </form>
      </div>
      <button className="add" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddNewPerson;
export { getPrevData };
