import React, { useState, useEffect } from "react";
import { CirclePicker } from "react-color";
import { useRouter } from "next/router";

const DepartmentForm = () => {
  const router = useRouter();

  const [json, setJson] = useState({
    DepartmentName: "",
    DepartmentColor: "",
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(json),
  };

  const postData = () => {
    fetch("http://3.133.98.24:8000/department", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .then(() => router.push("/"));
  };

  return (
    <>
      <form className="form-department">
        <label className="toolbar-input">
          <input
            type="text"
            placeholder="Name of new department..."
            onChange={e =>
              setJson({
                ...json,
                DepartmentName: e.target.value,
              })
            }
          />
        </label>
        <div className="toolbar-input">
          <p>Pick color for new department...</p>
          <CirclePicker
            onChange={e =>
              setJson({
                ...json,
                DepartmentColor: e.hex,
              })
            }
          />
        </div>
      </form>
      <button
        placeholder="Add Department"
        className="btn btn-addDept"
        onClick={() => postData()}
      >
        Add department
      </button>
    </>
  );
};

export default DepartmentForm;
