import { ToastContainer } from 'react-toastify';

import { Router } from './Router.jsx';
import { AuthProvider } from './contexts/auth.jsx';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <ToastContainer/>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </>
  );
}