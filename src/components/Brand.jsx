import '../styles/shared/LoginRegister.css';
import '../styles/components/Brand.css';

export function Brand() {
  return (
    <aside className="brand">
      <header className="wrapper">
        <h1>Clincker</h1>
        <p>
          A maneira mais curta de encurtar qualquer URL.
        </p>
      </header>

      <img className="wrapper" src="/network.svg"
           alt="Connected World Wide Web Network"/>
    </aside>
  );
}
