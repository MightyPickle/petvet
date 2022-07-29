import React from 'react';
import { Link } from 'react-router-dom';

function ButtonPhoneTo({ tel, label }) {
  const phoneToHandler = (e) => {
    window.location.href = tel;
    e.preventDefault();
  };
  return (
    <Link
      to="#"
      onClick={(e) => phoneToHandler(e)}
    >
      {label}
    </Link>
  );
}

export default ButtonPhoneTo;
