import React from 'react';
import { Link } from 'react-router-dom';

function ButtonMailTo({ mailto, label }) {
  const mailToHandler = (e) => {
    window.location.href = mailto;
    e.preventDefault();
  };
  return (
    <Link
      to="#"
      onClick={(e) => mailToHandler(e)}
    >
      {label}
    </Link>
  );
}

export default ButtonMailTo;
