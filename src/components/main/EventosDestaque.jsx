import { Link } from 'react-router-dom';

import '../../styles/main/EventosDestaque.scss';

import eventos from '../evento/eventos';

const EventosDestaque = () => {
  const eventosDestaque = eventos.slice(0, 3);

  return (
    <section className="eventos-destaque container">
      <div className="eventos-destaque-container flex-colum gap-md">

        <div className="eventos-destaque-header space-between">
          <div className="eventos-destaque-texto flex-colum gap-p">
            <span>PRÓXIMOS EVENTOS</span>

            <h2>EVENTOS EM DESTAQUE</h2>

            <p>
              Confira os próximos campeonatos do Pro Combat e faça
              sua inscrição. Garanta sua vaga!
            </p>
          </div>

          <Link
            to="/eventos"
            className="eventos-destaque-link space-between gap-p"
          >
            <span>Ver todos os eventos</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="eventos-destaque-grid grid3col gap-xl">

          {eventosDestaque.map((evento) => (

            <article
              className="evento-destaque-card"
              key={evento.id}
            >

              <div className="evento-destaque-imagem">

                <img
                  src={evento.imagem}
                  alt={evento.nome}
                />

                <span className="evento-destaque-tipo">
                  {evento.tipo}
                </span>

              </div>

              <div className="evento-destaque-conteudo flex-colum gap-md">

                <div className="evento-destaque-info flex-colum gap-md">

                  <div className="evento-destaque-data flex gap-p">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="17"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M16 2V6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <path
                        d="M8 2V6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <path
                        d="M3 9H21"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>

                    <span>{evento.data}</span>

                  </div>

                  <div className="evento-destaque-local flex gap-p">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 10C20 15 12 22 12 22C12 22 4 15 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />

                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>

                    <span>{evento.local}</span>

                  </div>

                </div>

                <Link
                  to={`/eventos/${evento.id}`}
                  className="evento-destaque-botao space-between"
                >
                  <span>Saiba mais</span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />

                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default EventosDestaque;