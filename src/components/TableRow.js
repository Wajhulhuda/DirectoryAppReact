import React from "react";

const TableRow = ({ item, id, data, setPersonData }) => {
  const handleChange = () => {};
  const handleDelete = (id) => {
    let filtered = data.filter((item) => {
      return item.aadhar !== id;
    });
    setPersonData(filtered);
  };
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={item.name}
        />
      </td>
      <td>
        <input
          type="date"
          name="dob"
          onChange={handleChange}
          value={item.dob}
        />
      </td>
      <td>
        <input
          type="number"
          name="aadhar"
          onChange={handleChange}
          value={item.aadhar}
        />
      </td>
      <td>
        <input
          type="number"
          name="mobile"
          onChange={handleChange}
          value={item.mobile}
        />
      </td>
      <td>
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={item.age}
        />
      </td>
      <td>
        <input type="submit" value="Save" className="table-btn" />
        <button className="table-btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
