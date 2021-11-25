import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const CardDepartment = ({ departmentName, departmentId, departmentColor }) => {
  const deleteFunction = departmentId => {
    fetch(`http://3.133.98.24:8000/department/${departmentId}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <>
      <div
        className="card-container"
        style={{ backgroundColor: departmentColor }}
      >
        <h3 className="department-title">{departmentName}</h3>
        <p className="department-id">#{departmentId}</p>
        <DeleteIcon
          onClick={() => {
            deleteFunction(departmentId);
          }}
          className="delete-button"
        />
      </div>
    </>
  );
};

export default CardDepartment;
