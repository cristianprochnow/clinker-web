import { useCallback, useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { toast } from 'react-toastify';

import { Http } from '../api/http.js';
import { useAuth } from '../contexts/auth.jsx';
import { NO_PASS_VALUE } from '../utils/constants.js';
import { PageTitle } from '../components/PageTitle.jsx';
import { ActionButton } from '../components/ActionButton.jsx';
import { FormInput } from '../components/FormInput.jsx';

import '../styles/screens/Profile.css';

export function Profile() {
  const auth = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [nameUpdate, setNameUpdate] = useState();
  const [passwordUpdate, setPasswordUpdate] = useState();
  const [passwordConfUpdate, setPasswordConfUpdate] = useState();

  const http = new Http();

  const loadProfile = useCallback(async () => {
    try {
      startProfileLoading();

      const result = await http
        .with(auth.headers)
        .to(`/user/${auth.user.id}`)
        .get();

      finishProfileLoading();

      if (!result.isOk()) {
        throw result.getMessage();
      }

      const profileInfo = result.getItem('user');

      if (profileInfo) {
        setName(profileInfo.name);
        setEmail(profileInfo.email);
        setCreatedAt(formatDate(profileInfo.created_at));
        setNameUpdate(profileInfo.name);
      }

      setPasswordUpdate(NO_PASS_VALUE);
      setPasswordConfUpdate(NO_PASS_VALUE);
    } catch (exception) {
      finishProfileLoading()
      toast.error(exception);
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, []);

  function formatDate(date) {
    const formatDate = new Date(date);

    const day = formatDate.getDate().toString().padStart(2, '0');
    const month = (formatDate.getMonth() + 1).toString().padStart(2, '0');
    const year = formatDate.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function onEditDataHandler() {
    setEditing(!isEditing);
  }

  function onChangeNameUpdate(event) {
    setNameUpdate(event.target.value);
  }

  function onChangePassUpdate(event) {
    setPasswordUpdate(event.target.value);
  }

  function onChangePassConfUpdate(event) {
    setPasswordConfUpdate(event.target.value);
  }

  async function onSaveDataHandler() {
    try {
      if (
        passwordUpdate !== NO_PASS_VALUE &&
        passwordUpdate !== passwordConfUpdate
      ) {
        throw 'As senhas inseridas para atualização não conferem.';
      }

      setEditing(false);
      startProfileUpdateLoading();

      const result = await http
        .with(auth.headers)
        .to(`/user/${auth.user.id}`)
        .put({
          name: nameUpdate,
          email: email,
          password: passwordUpdate,
        });

      finishProfileLoading();

      if (!result.isOk()) {
        throw result.getMessage();
      }

      toast.success('Cadastro de usuário atualizado com sucesso!');
      await loadProfile();
    } catch (exception) {
      finishProfileLoading()
      toast.error(exception);
    }
  }

  function startProfileLoading() {
    toast.loading('Buscando mais detalhes...');
    setLoading(true);
  }

  function startProfileUpdateLoading() {
    toast.loading('Atualizando dados...');
    setLoading(true);
  }

  function finishProfileLoading() {
    toast.dismiss();
    setLoading(false);
  }

  return (
    <div id="profile-screen">
      <PageTitle>Perfil</PageTitle>

      <header>
        <section>
          <img src="/profile-thumb.jpg" alt="Connected World Wide Web" />

          <span>
            <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/photos/aerial-photography-of-city-during-night-time-1lfI7wkGWZ4">
              <FeatherIcon icon="external-link"/>
            </a>
          </span>

          <div>
            <span>
              <FeatherIcon icon="user" size={48}/>
            </span>
          </div>
        </section>

        <footer>
          <span>{email}</span>
          <span>{name}</span>
          <span></span>
          <span>
            <FeatherIcon icon="calendar" size={16}/>
            Entrou em {createdAt}
          </span>
        </footer>
      </header>

      <footer>
        <ActionButton onClick={onEditDataHandler}>Editar Dados</ActionButton>

        <div>
          <div>
            <FormInput
              label="Nome"
              value={nameUpdate}
              onChange={onChangeNameUpdate}
              disabled={!isEditing || isLoading}/>
            <FormInput
              type="password"
              label="Senha"
              value={passwordUpdate}
              onChange={onChangePassUpdate}
              disabled={!isEditing || isLoading}/>
            <FormInput
              type="password"
              label="Confirmar Senha"
              value={passwordConfUpdate}
              onChange={onChangePassConfUpdate}
              disabled={!isEditing || isLoading}/>
          </div>

          <ActionButton
            onClick={onSaveDataHandler}
            disabled={!isEditing || isLoading}>
            Salvar</ActionButton>
        </div>
      </footer>
    </div>
  );
}