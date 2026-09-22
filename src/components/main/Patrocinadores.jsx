//Styles
import '../../styles/main/Patrocinadores.scss';

//Imagens
import badboy from '../../assets/patrocinadores/badboy.png';
import jugui from '../../assets/patrocinadores/jugui.webp';
import venum from '../../assets/patrocinadores/venum.png';

const Patrocinadores = () => {
  const patrocinadores = [
    {
      id: 1,
      nome: 'Tatame',
      imagem: venum,
    },
    {
      id: 2,
      nome: 'KNGZ',
      imagem: jugui,
    },
    {
      id: 3,
      nome: 'Braus',
      imagem: badboy,
    },
    {
      id: 4,
      nome: 'Storm',
      imagem: venum,
    },
    {
      id: 5,
      nome: 'Venum',
      imagem: badboy,
    },
    {
      id: 6,
      nome: 'Fighters Choice',
      imagem: jugui,
    },
    // Adicione quantos patrocinadores quiser aqui
  ];
  const patrocinadoresLoop = [
    ...patrocinadores,
    ...patrocinadores,
  ];

  return (
    <section className="patrocinadores container">

      <div className="patrocinadores-container grid gap-md">

        <div className="patrocinadores-header">

          <span>NOSSOS PARCEIROS</span>

          <h2>JUNTOS PELO JIU-JITSU</h2>

        </div>

        <div className="patrocinadores-slider">

          <div className="patrocinadores-fade patrocinadores-fade-left" />

          <div className="patrocinadores-track flex-center gap-xl">

            {patrocinadoresLoop.map((patrocinador, index) => (
              <div
                className="patrocinador flex-center"
                key={`${patrocinador.id}-${index}`}
              >
                <img
                  src={patrocinador.imagem}
                  alt={patrocinador.nome}
                />
              </div>
            ))}

          </div>

          <div className="patrocinadores-fade patrocinadores-fade-right" />

        </div>

      </div>

    </section>
  );
};

export default Patrocinadores;