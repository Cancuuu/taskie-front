import React, { useState, useEffect } from "react";
import { CirclePicker } from "react-color";

const DepartmentForm = () => {
  const [json, setJson] = useState({
    DepartmentName: "",
    DepartmentColor: "",
  });

  useEffect(() => {
    console.log(json);
  }, [json]);

  return (
    <>
      <form className="form-department">
        <label class="toolbar-input">
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
        <div class="toolbar-input">
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
        <button placeholder="Add Department" className="btn btn-addDept">
          Add department
        </button>
      </form>
    </>
  );
};

export default DepartmentForm;
