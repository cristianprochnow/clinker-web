import FeatherIcon from 'feather-icons-react';
import '../styles/screens/Links.css';

export function Links() {
  return (
    <div id="links-screen">
      <header>
        <h1><span>L</span>inks</h1>
      </header>

      <section>
        <div>
          <div>
            <header>
              <span>
                https://dribbble.com/shots
              </span>

              <aside>
                <button type="button">
                  <FeatherIcon icon="edit-3" />
                </button>

                <button type="button">
                  <FeatherIcon icon="send" />
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
      </section>
    </div>
  );
}
