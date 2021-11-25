import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="title-container">
        <h1 className="title">Taskie App</h1>
        <p className="footer-container">
          <p>Made for UCEMA Full Stack Python ❤️ by Cancu 👨‍💻</p>
        </p>
      </header>
      <div className="children-container">{children}</div>
    </div>
  );
};

export default Layout;
