import FeatherIcon from 'feather-icons-react';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/auth.jsx';

import '../styles/screens/Base.css';

export function Base() {
  const { isLoggedIn, logOut } = useAuth();
  const navigate = useNavigate();

  function onLogOutHandler() {
    if (confirm('Confirma fazer logout do Clincker?')) {
      logOut();
      navigate('/login', {
        replace: true
      });
    }
  }

  return !isLoggedIn ? <Navigate to="/login"/> : (
    <main id="base-screen">
      <header className="wrapper">
        <h1>Clincker</h1>

        <nav>
          <Link to="/links">
            <FeatherIcon icon="link"/>
            <span>URLs</span>
          </Link>
          <Link to="/profile">
            <FeatherIcon icon="user"/>
            <span>Perfil</span>
          </Link>
          <button type="button" onClick={onLogOutHandler}>
            <FeatherIcon icon="log-out"/>
            <span>Sair</span>
          </button>
        </nav>
      </header>

      <article className="wrapper">
        <Outlet/>
      </article>
    </main>
  );
}