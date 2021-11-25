import React from "react";

const CardDepartment = ({ departmentName, departmentId, departmentColor }) => {
  return (
    <div
      className="card-container"
      style={{ backgroundColor: departmentColor }}
    >
      <h3 className="department-title">{departmentName}</h3>
      <p className="department-id">#{departmentId}</p>
    </div>
  );
};

export default CardDepartment;
