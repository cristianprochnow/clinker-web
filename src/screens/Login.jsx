import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '../contexts/auth.jsx';
import { Http } from '../api/http.js';
import { ActionButton } from '../components/ActionButton.jsx';
import { Brand } from '../components/Brand.jsx';
import { FormInput } from '../components/FormInput.jsx';

import '../styles/screens/Login.css';
import '../styles/shared/LoginRegister.css';

export function Login() {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const http = new Http();

  async function onSendHandler() {
    try {
      if (!email || !password) {
        throw 'E-mail e senha são obrigatórios.';
      }

      startRegisterLoading();

      const result = await http.to('/user/login').post({
        email,
        password
      });

      finishLoading();

      if (!result.isOk() || result.getItem('login') === null) {
        throw result.getMessage();
      }

      const loginData = result.getItem('login');

      logIn({
        id: loginData.id,
        token: loginData.token
      });
      navigate('/', {
        replace: true
      });
    } catch (exception) {
      finishLoading();
      toast.error(exception);
    }
  }

  function startRegisterLoading() {
    toast.loading('Realizando login...');
    setLoading(true);
  }

  function finishLoading() {
    toast.dismiss();
    setLoading(false);
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
            onChange={onChangeEmail}
            disabled={isLoading}/>
          <FormInput
            type="password"
            label="Senha"
            value={password}
            onChange={onChangePassword}
            disabled={isLoading}/>
        </section>

        <footer className="wrapper">
          <ActionButton
            onClick={onSendHandler}
            type="button"
            disabled={isLoading}>
            Entrar</ActionButton>
        </footer>
      </form>
    </main>
  );
}