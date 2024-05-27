import { Link } from 'react-router-dom';

import '../styles/screens/NotFound.css';

export function NotFound() {
  return (
    <main id="not-found-screen">
      <header className="wrapper">
        <h1>Oops... Parece que essa página não existe!</h1>
        <p>
          Mas calma, não há problemas. Que tal recomeçarmos
          indo para a <Link to="/">página inicial</Link>?
        </p>
      </header>

      <div className="wrapper">
        <img src="/not-found.svg"/>
      </div>
    </main>
  );
}
