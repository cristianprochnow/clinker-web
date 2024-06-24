import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { toast } from 'react-toastify';

import { Http } from '../api/http.js';
import { formatDate } from '../utils/date.js';
import { PageTitle } from '../components/PageTitle.jsx';
import { useAuth } from '../contexts/auth.jsx';
import { ActionButton } from '../components/ActionButton.jsx';

import '../styles/screens/Links.css';
import { NO_PASS_VALUE } from '../utils/constants.js';

export function Links() {
  const [links, setLinks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const http = new Http();

  const loadLinks = useCallback(async () => {
    try {
      startLinksLoading();

      const result = await http
      .with(auth.headers)
      .to(`/link/user/${auth.user.id}`)
      .get();

      finishLinksLoading();

      if (!result.isOk()) {
        throw result.getMessage();
      }

      const linksList = result.getItem('links') ?? [];

      setLinks(linksList);
    } catch (exception) {
      finishLinksLoading()
      toast.error(exception);
    }
  }, []);

  useEffect(() => {
    loadLinks()
  }, []);

  function startLinksLoading() {
    toast.loading('Buscando seus links...');
    setLoading(true);
  }

  function startRemovingLoading() {
    toast.loading('Removendo link...');
    setLoading(true);
  }

  function finishLinksLoading() {
    toast.dismiss();
    setLoading(false);
  }

  function onCreateHandler() {
    navigate('/links/add');
  }

  async function onDeleteHandler(linkId) {
    if (!confirm('Tem certeza que deseja excluir esse link?')) {
      return;
    }

    try {
      startRemovingLoading();

      const result = await http
        .with(auth.headers)
        .to(`/link/${linkId}`)
        .delete();

      finishLinksLoading();

      if (!result.isOk()) {
        throw result.getMessage();
      }

      toast.success('Link removido com sucesso!');
      await loadLinks();
    } catch (exception) {
      finishLinksLoading()
      toast.error(exception);
    }
  }

  return (
    <div id="links-screen">
      <header>
        <PageTitle>Links</PageTitle>
        <ActionButton onClick={onCreateHandler} disabled={isLoading}>
          <FeatherIcon icon="plus"/>
        </ActionButton>
      </header>

      <section>
        {
          links.length > 0
            ? links.map((link, linkIndex) => (
              <div className="link-item" key={linkIndex}>
                <div>
                  <header>
                    <span>
                      https://<span>clincker</span>.com/{link.hash}
                    </span>

                    <aside>
                      <button
                        type="button"
                        onClick={() => onDeleteHandler(link.id)}>
                        Remover
                      </button>
                    </aside>
                  </header>

                  <span>
                   {link.original_url}
                  </span>
                </div>

                <footer>
                  <FeatherIcon icon="clock"/>
                  <span>
                    Cadastrado em {formatDate(link.created_at)}
                  </span>
                </footer>
              </div>
            ))
            : (
              <div className="empty-item">
                <div>
                  <img src="/empty.svg" />
                </div>

                <p>
                  Nenhum link encontrado. Encurte alguma URL para começar.
                </p>
              </div>
            )
        }
      </section>
    </div>
  );
}