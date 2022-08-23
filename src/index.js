import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginForm } from 'components/LoginForm/LoginForm';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <LoginForm onSubmit={values => console.log(values)} />
  </React.StrictMode>
);
