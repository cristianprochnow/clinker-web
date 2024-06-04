import { ToastContainer } from 'react-toastify';

import { Router } from './Router.jsx';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <ToastContainer/>
      <Router/>
    </>
  );
}
