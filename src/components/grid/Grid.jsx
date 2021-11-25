import React, { useEffect, useState } from "react";
import CardDepartment from "../Cards/CardDepartment";

const Grid = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://3.133.98.24:8000/department", {
  //     method: "GET",
  //   })
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  return (
    <div className="grid-container">
      {data.map(item => (
        <CardDepartment
          key={item.index}
          departmentName={item.DepartmentName}
          departmentId={item.DepartmentId}
        />
      ))}
    </div>
  );
};

export default Grid;
