import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormInput } from '../components/FormInput.jsx';
import { ActionButton } from '../components/ActionButton.jsx';
import { Brand } from '../components/Brand.jsx';

import '../styles/screens/Login.css';
import '../styles/shared/LoginRegister.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSendHandler() {
    toast.success('Clincker login successfully');
  }

  function onChangeEmail(changeEvent) {
    setEmail(changeEvent.target.value ?? '');
  }

  function onChangePassword(changeEvent) {
    setPassword(changeEvent.target.value ?? '');
  }

  return (
    <main id="login-screen" className="login-register-shared">
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
          <FormInput
            type="email"
            value={email}
            label="E-mail"
            placeholder="exemplo@contato.com.br"
            onChange={onChangeEmail}/>
          <FormInput
            type="password"
            label="Senha"
            value={password}
            onChange={onChangePassword}/>
        </section>

        <footer className="wrapper">
          <ActionButton onClick={onSendHandler} type="button">Entrar</ActionButton>
        </footer>
      </form>
    </main>
  );
}
