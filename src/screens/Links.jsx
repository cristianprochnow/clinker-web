import { useCallback, useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { toast } from 'react-toastify';

import { Http } from '../api/http.js';
import { PageTitle } from '../components/PageTitle.jsx';
import { useAuth } from '../contexts/auth.jsx';

import '../styles/screens/Links.css';
import { ActionButton } from '../components/ActionButton.jsx';

export function Links() {
  const [links, setLinks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const auth = useAuth();

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

  function finishLinksLoading() {
    toast.dismiss();
    setLoading(false);
  }

  return (
    <div id="links-screen">
      <header>
        <PageTitle>Links</PageTitle>
        <ActionButton>
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
                      https://<span>dribbble</span>.com/shots
                    </span>

                    <aside>
                      <button type="button">
                        <FeatherIcon icon="edit-3"/>
                      </button>

                      <button type="button">
                        <FeatherIcon icon="send"/>
                      </button>
                    </aside>
                  </header>

                  <span>
                    https://dribbble.com/shots/20422303-Shortie-URL-Shortener-Hero-Section
                  </span>
                </div>

                <footer>
                  <FeatherIcon icon="clock"/>
                  <span>
                    02 de Dezembro de 2024
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