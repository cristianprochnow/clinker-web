import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Http } from '../api/http.js';
import { useAuth } from '../contexts/auth.jsx';
import { FormInput } from '../components/FormInput.jsx';
import { PageTitle } from '../components/PageTitle.jsx';
import { ActionButton } from '../components/ActionButton.jsx';

import '../styles/screens/LinkCreation.css';

export function LinkCreation() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [url, setUrl] = useState('');
  const [protocol, setProtocol] = useState('');
  const [domain, setDomain] = useState('');
  const [resources, setResources] = useState('');
  const [isLoading, setLoading] = useState(false);

  const http = new Http();

  function onBackHandler() {
    navigate('/links');
  }

  function onUrlChange(event) {
    try {
      const rawUrl = event.target.value;

      setUrl(rawUrl);

      const urlObj = new URL(rawUrl);

      setProtocol(urlObj.protocol
        .replaceAll(':', ''));
      setDomain(urlObj.host);
      setResources(urlObj.pathname);
    } catch (exception) {
      if (protocol) {
        setProtocol('');
      }
      if (domain) {
        setDomain('');
      }
      if (resources) {
        setResources('');
      }
    }
  }

  async function onSendHandler() {
    try {
      if (!protocol || !domain || !resources) {
        throw 'Insira uma URL válida para encurtar.';
      }

      startShortingLoading();

      const result = await http
        .with(auth.headers)
        .to('/link/')
        .post({
          original_url: url,
          domain,
          resources,
          protocol,
          user: parseInt(auth.user.id)
        });

      finishShortingLoading();

      if (!result.isOk()) {
        throw result.getMessage();
      }

      toast.success('Cadastro de URL concluído com sucesso.');
      navigate('/links');
    } catch (exception) {
      finishShortingLoading();
      toast.error(exception);
    }
  }

  function startShortingLoading() {
    toast.loading('Encurtando URL inserida...');
    setLoading(true);
  }

  function finishShortingLoading() {
    toast.dismiss();
    setLoading(false);
  }

  return (
    <div id="link-creation-screen">
      <header>
        <ActionButton onClick={onBackHandler}>
          <FeatherIcon icon="arrow-left"/>
        </ActionButton>
        <PageTitle>Encurtar Link</PageTitle>
      </header>

      <form>
        <FormInput
          label="Link para Encurtar"
          value={url}
          onChange={onUrlChange}
          disabled={isLoading}/>
        <FormInput
          label="Protocolo"
          value={protocol}
          disabled={true}/>
        <FormInput
          label="Domínio"
          disabled={true}
          value={domain}/>
        <FormInput
          label="Recursos"
          disabled={true}
          value={resources}/>

        <ActionButton
          type="button"
          onClick={onSendHandler}
          disabled={isLoading}>
          Encurtar
        </ActionButton>
      </form>
    </div>
  );
}