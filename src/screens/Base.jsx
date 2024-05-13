import { Link, Outlet } from 'react-router-dom';

import '../styles/screens/Base.css';
import FeatherIcon from 'feather-icons-react';

export function Base() {
  return (
    <main id="base-screen">
      <aside>
        <h1>Clincker</h1>

        <nav>
          <Link to="/">
            <FeatherIcon icon="activity"/> Dashboard
          </Link>
          <Link to="/links">
            <FeatherIcon icon="link"/> URLs
          </Link>
          <Link to="/profile">
            <FeatherIcon icon="user"/> Perfil
          </Link>
        </nav>
      </aside>

      <article>
        <Outlet/>
      </article>
    </main>
  );
}
