import { Outlet } from 'react-router-dom';

import '../styles/screens/Base.css';

export function Base() {
  return (
    <main>
      <span>Conteúdo base da tela </span>
      <Outlet />
    </main>
  );
}
