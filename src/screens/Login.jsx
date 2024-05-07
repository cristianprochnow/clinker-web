import { Link } from 'react-router-dom';

import '../styles/screens/Login.css';

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
          <div className="form-input-group">
            <label className="form-input-label">
              E-mail
            </label>
            <input
              type="email"
              placeholder="exemplo@contato.com.br"
              className="form-input"/>
          </div>

          <div className="form-input-group">
            <label className="form-input-label">
              Senha
            </label>
            <input type="password" className="form-input"/>
          </div>
        </section>

        <footer className="wrapper">
          <button type="submit">Entrar</button>
        </footer>
      </form>
    </main>
  );
}
