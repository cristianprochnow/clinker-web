import { Brand } from '../components/Brand.jsx';
import { FormInput } from '../components/FormInput.jsx';
import { ActionButton } from '../components/ActionButton.jsx';

import '../styles/screens/Register.css';
import '../styles/shared/LoginRegister.css';

export function Register() {
  return (
    <main id="register-screen" className="login-register-shared">
      <Brand/>

      <form>
        <header className="wrapper">
          <h1>Clincker</h1>
          <h2>
            Sinta-se à vontade!
          </h2>
          <p>
            Insira abaixo os dados necessários para criação
            de sua conta e comece já a facilitar seu uso
            de URLs.
          </p>
        </header>

        <section className="wrapper">
          <FormInput type="text" label="Nome completo"/>
          <FormInput type="email" label="E-mail"
                     placeholder="exemplo@contato.com.br"/>
          <FormInput type="password" label="Senha"/>
          <FormInput type="password" label="Confirme sua senha"/>
        </section>

        <footer className="wrapper">
          <ActionButton type="submit">Criar Conta</ActionButton>
        </footer>
      </form>
    </main>
  );
}
