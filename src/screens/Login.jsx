import { Link } from 'react-router-dom';

import { FormInput } from '../components/FormInput.jsx';
import { ActionButton } from '../components/ActionButton.jsx';
import { Brand } from '../components/Brand.jsx';

import '../styles/screens/Login.css';
import '../styles/shared/LoginRegister.css';

export function Login() {
  return (
    <main id="login-screen">
      <Brand/>

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
          <ActionButton type="submit">Entrar</ActionButton>
        </footer>
      </form>
    </main>
  );
}
