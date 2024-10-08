import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || error.message}</p>
      <p>
        <a href="/">Go back to Home</a>
      </p>
    </div>
  );
};

export default ErrorPage;
