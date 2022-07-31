import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedDocRoute({ isDoc, children }) {
  if (!isDoc) {
    return <Navigate to="/" replace />;
  }
  return children;
}
