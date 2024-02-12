import React from 'react';
import "../style/home.css";

export default function Footer() {
  return (
    <footer className=" mt-auto py-3" style={{ backgroundColor: "#9EC8B9"}}>
      <div className="container">
        <span className="text-muted footerData">Library Management System &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
