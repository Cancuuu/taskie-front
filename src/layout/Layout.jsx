import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="title-container">
        <h1 className="title">Taskie App</h1>
      </header>
      <div className="children-container">{children}</div>
      <footer className="footer-container">
        <p>Made for UCEMA Full Stack Python ❤️ by Cancu 👨‍💻</p>
      </footer>
    </div>
  );
};

export default Layout;
