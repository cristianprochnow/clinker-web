import { useAuth } from '../contexts/auth.jsx';
import { Navigate } from 'react-router-dom';

export function ToLogin({ children }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login"/>;
}

export function ToHome({ children }) {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? children : <Navigate to="/"/>;
}