import FeatherIcon from 'feather-icons-react';

import { PageTitle } from '../components/PageTitle.jsx';

import '../styles/screens/Profile.css';
import { ActionButton } from '../components/ActionButton.jsx';
import { FormInput } from '../components/FormInput.jsx';
import { useState } from 'react';

export function Profile() {
  const [isEditing, setEditing] = useState(false);

  function onEditDataHandler() {
    setEditing(!isEditing);
  }

  function onSaveDataHandler() {
    setEditing(false);
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
          <span>contato@contato.com.br</span>
          <span>Usuário da Aplicação</span>
          <span></span>
          <span>
            <FeatherIcon icon="calendar" size={16}/>
            Entrou em 23/05/2023
          </span>
        </footer>
      </header>

      <footer>
        <ActionButton onClick={onEditDataHandler}>Editar Dados</ActionButton>

        <div>
          <div>
            <FormInput label="Nome" value="Usuário da Aplicação" disabled={!isEditing}/>
            <FormInput type="password" label="Senha" value="NOT_PASSWORD" disabled={!isEditing}/>
            <FormInput type="password" label="Confirmar Senha" value="NOT_PASSWORD" disabled={!isEditing}/>
          </div>

          <ActionButton onClick={onSaveDataHandler} disabled={!isEditing}>Salvar</ActionButton>
        </div>
      </footer>
    </div>
  );
}
