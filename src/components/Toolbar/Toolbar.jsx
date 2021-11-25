import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useRouter } from "next/router";

const Toolbar = ({ page }) => {
  const router = useRouter();

  const [showSearchBar, setShowSearchBar] = useState(false);
  console.log(page);
  return (
    <div className="toolbar-container">
      <div className="button-toolbar-container">
        {page === "add" ? (
          <button onClick={() => router.push("/")} className="btn btn-back">
            Go back
          </button>
        ) : (
          <>
            {/* <button
              onClick={() => setShowSearchBar(!showSearchBar)}
              className="btn btn-search"
            >
              Search department
            </button> */}
            <Link href="/add-department">
              <a className="btn btn-add">Add new department</a>
            </Link>
          </>
        )}
      </div>
      {/* {showSearchBar ? (
        <label class="toolbar-input">
          <input type="text" placeholder="Search department..." />
        </label>
      ) : null} */}
    </div>
  );
};

export default Toolbar;
