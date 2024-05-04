import { Outlet } from 'react-router-dom';

export function Base() {
  return (
    <main>
      <span>Conteúdo base da tela </span>
      <Outlet />
    </main>
  );
}
