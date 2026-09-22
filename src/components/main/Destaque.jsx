import '../../styles/main/Destaque.scss';

const Destaques = () => {
  const destaques = [
    {
      titulo: 'Eventos Organizados',
      texto: 'Campeonatos com regras claras e estrutura profissional.',
      icone: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="7" y="9" width="34" height="33" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M14 5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M34 5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 18H41" stroke="currentColor" strokeWidth="2" />
          <path d="M15 24H15.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 24H24.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M33 24H33.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M15 32H15.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 32H24.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M33 32H33.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      titulo: 'Lutas Casadas e em Grupos',
      texto: 'Formatos flexíveis para todos os níveis e categorias.',
      icone: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="13" r="6" stroke="currentColor" strokeWidth="2" />
          <path
            d="M14 34C14 27.9 18.5 24 24 24C29.5 24 34 27.9 34 34"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle cx="9" cy="19" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M3 35C3.5 30.8 5.5 28 9 28C11.5 28 13.3 29.2 14.5 31"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle cx="39" cy="19" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M33.5 31C34.7 29.2 36.5 28 39 28C42.5 28 44.5 30.8 45 35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      titulo: 'Ranking e Histórico',
      texto: 'Acompanhe sua evolução dentro do Pro Combat.',
      icone: (
        <svg viewBox="0 0 48 48" fill="none">
          <path
            d="M7 41V28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 41V20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M29 41V13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M40 41V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 41H43"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      titulo: 'Fotos e Vídeos',
      texto: 'Reviva os melhores momentos dos campeonatos.',
      icone: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect
            x="5"
            y="14"
            width="29"
            height="24"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M34 22L43 17V35L34 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle
            cx="19.5"
            cy="26"
            r="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 14L15 9H23L26 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      titulo: 'Transmissão ao Vivo',
      texto: 'Acompanhe os principais eventos em tempo real.',
      icone: (
        <svg viewBox="0 0 48 48" fill="none">
          <path
            d="M24 5L40 11V22C40 32 33.5 39.5 24 43C14.5 39.5 8 32 8 22V11L24 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M19 24L22 27L29 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="destaques container">
      <div className="destaques-container grid">
        {destaques.map((destaque, index) => (
          <div className="destaque flex-colum flex-center gap-p" key={index}>
            <div className="destaque-icone flex-center">
              {destaque.icone}
            </div>

            <h3 className='center'>{destaque.titulo}</h3>

            <p className='center'>{destaque.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destaques;