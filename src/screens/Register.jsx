import { useState } from 'react';
import { toast } from 'react-toastify';

import { Http } from '../api/http.js';
import { ActionButton } from '../components/ActionButton.jsx';
import { Brand } from '../components/Brand.jsx';
import { FormInput } from '../components/FormInput.jsx';

import '../styles/screens/Register.css';
import '../styles/shared/LoginRegister.css';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordToConfirm, setPasswordToConfirm] = useState('');
  const [isLoading, setLoading] = useState(false);

  const http = new Http();

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangePasswordToConfirm(event) {
    setPasswordToConfirm(event.target.value);
  }

  async function onSubmitRegister(event) {
    event.preventDefault();

    let response;

    try {
      if (!isFilled()) {
        throw 'O preenchimento dos campos é obrigatório.';
      }

      if (!isSamePassword()) {
        throw 'As senhas inseridas são diferentes.';
      }

      startRegisterLoading('Realizando cadastro...');

      response = await http.to('/user').post({
        name,
        email,
        password
      });

      if (!response.isOk()) {
        throw response.getMessage();
      }

      finishLoading();
      startRegisterLoading('Cadastro realizado com sucesso! Redirecionando...');

      response = await http.to('/user/login').post({
        email,
        password
      });

      finishLoading();

      if (!response.isOk()) {
        throw response.getMessage();
      }

      const loginData = response.getItem('login');

      if (loginData === null) {
        throw `Não foi possível concluir o redirecionamento,
          por favor atualize a página e tente novamente.
          Detalhes: ${response.getMessage()} `;
      }


    } catch (exception) {
      finishLoading();
      toast.error(exception);
    }
  }

  function startRegisterLoading(message) {
    toast.loading(message);
    setLoading(true);
  }

  function finishLoading() {
    toast.dismiss();
    setLoading(false);
  }

  function isFilled() {
    const emptyFields = [
      name, email, password, passwordToConfirm
    ].filter(field => field.trim() == '');

    return emptyFields.length === 0;
  }

  function isSamePassword() {
    return password === passwordToConfirm;
  }

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
          <FormInput
            type="text"
            label="Nome completo"
            value={name}
            onChange={onChangeName}
            disabled={isLoading}/>
          <FormInput
            type="email"
            label="E-mail"
            placeholder="exemplo@contato.com.br"
            value={email}
            onChange={onChangeEmail}
            disabled={isLoading}/>
          <FormInput
            type="password"
            label="Senha"
            value={password}
            onChange={onChangePassword}
            disabled={isLoading}/>
          <FormInput
            type="password"
            label="Confirme sua senha"
            value={passwordToConfirm}
            onChange={onChangePasswordToConfirm}
            disabled={isLoading}/>
        </section>

        <footer className="wrapper">
          <ActionButton
            type="submit"
            onClick={onSubmitRegister}
            disabled={isLoading}>
            Criar Conta
          </ActionButton>
        </footer>
      </form>
    </main>
  );
}