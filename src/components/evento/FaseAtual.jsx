import '../../styles/evento/FaseAtual.scss';


import FaseItem from './FaseItem';

const FaseAtual = ({ evento }) => {

    return (
        <section className="fase-atual">

            <div className="fase-atual-list">

                {evento.fases?.map((fase) => (
                    <FaseItem
                        key={fase.id}
                        titulo={fase.titulo}
                        texto={fase.texto}
                    />
                ))}

            </div>

        </section>
    );
};

export default FaseAtual;