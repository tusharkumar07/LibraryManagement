import React from 'react';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <span className="text-muted">Library Management System &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
