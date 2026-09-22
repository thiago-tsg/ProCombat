import { useState } from 'react';

import InfoGerais from './InfoGerais';
import TabelaPeso from './TabelaPeso';
import FaseAtual from './FaseAtual';

import '../../styles/evento/EventoAbas.scss';

const EventoAbas = ({ evento }) => {

    const [abaAtiva, setAbaAtiva] = useState('info');

    const abas = [
        {
            id: 'info',
            titulo: 'Info gerais'
        },
        {
            id: 'peso',
            titulo: 'Tabela de peso'
        },
        {
            id: 'fase',
            titulo: 'Fase atual'
        }
    ];

    return (
        <section className="evento-abas">

            <div className="evento-abas-menu">

                {abas.map((aba) => (
                    <button
                        key={aba.id}
                        type="button"
                        className={
                            abaAtiva === aba.id
                                ? 'evento-aba evento-aba-active'
                                : 'evento-aba'
                        }
                        onClick={() => setAbaAtiva(aba.id)}
                    >
                        {aba.titulo}
                    </button>
                ))}

            </div>

            <div className="evento-abas-content">

                {abaAtiva === 'info' && (
                    <InfoGerais evento={evento} />
                )}

                {abaAtiva === 'peso' && (
                    <TabelaPeso evento={evento} />
                )}

                {abaAtiva === 'fase' && (
                    <FaseAtual evento={evento} />
                )}

            </div>

        </section>
    );
};

export default EventoAbas;