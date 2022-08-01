import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ condition, conditionRoute, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition) {
      navigate(conditionRoute);
    }
  }, []);
  return children;
}

export default PrivateRoute;
