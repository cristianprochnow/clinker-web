import { Link } from 'react-router-dom';

import '../styles/screens/Login.css';
import { FormInput } from '../components/FormInput.jsx';

export function Login() {
  return (
    <main id="login-screen">
      <aside>
        <header className="wrapper">
          <h1>Clincker</h1>
          <p>
            A maneira mais curta de encurtar qualquer URL.
          </p>
        </header>

        <img className="wrapper" src="/network.svg" alt="Connected World Wide Web Network"/>
      </aside>

      <form>
        <header className="wrapper">
          <h1>Clincker</h1>
          <h2>
            Seja bem-vindo(a)!
          </h2>
          <p>
            Entre com sua conta, ou então <Link to="/register">crie uma</Link> agora caso ainda não tenha.
          </p>
        </header>

        <section className="wrapper">
          <FormInput type="text" label="E-mail" placeholder="exemplo@contato.com.br" />
          <FormInput type="password" label="Senha"/>
        </section>

        <footer className="wrapper">
          <button type="submit">Entrar</button>
        </footer>
      </form>
    </main>
  );
}
