import { Link, Outlet } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import '../styles/screens/Base.css';

export function Base() {
  return (
    <main id="base-screen">
      <header className="wrapper">
        <h1>Clincker</h1>

        <nav>
          <Link to="/">
            <FeatherIcon icon="activity"/>
            <span>Dashboard</span>
          </Link>
          <Link to="/links">
            <FeatherIcon icon="link"/>
            <span>URLs</span>
          </Link>
          <Link to="/profile">
            <FeatherIcon icon="user"/>
            <span>Perfil</span>
          </Link>
        </nav>
      </header>

      <article className="wrapper">
        <Outlet/>
      </article>
    </main>
  );
}
