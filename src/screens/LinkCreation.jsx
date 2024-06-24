import FeatherIcon from 'feather-icons-react';
import { useNavigate } from 'react-router-dom';

import { PageTitle } from '../components/PageTitle.jsx';
import { ActionButton } from '../components/ActionButton.jsx';

import '../styles/screens/LinkCreation.css';

export function LinkCreation() {
  const navigate = useNavigate();

  function onBackHandler() {
    navigate('/links');
  }

  return (
    <div id="link-creation-screen">
      <header>
        <ActionButton onClick={onBackHandler}>
          <FeatherIcon icon="arrow-left"/>
        </ActionButton>
        <PageTitle>Encurtar Link</PageTitle>
      </header>
    </div>
  );
}