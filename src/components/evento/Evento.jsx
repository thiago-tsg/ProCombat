import { useState } from 'react';

import '../../styles/evento/Eventos.scss';

import eventos from './eventos';

import EventoCard from './EventoCard';
import EventoAbas from './EventoAbas';

const Eventos = () => {

    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    const abrirEvento = (evento) => {
        setEventoSelecionado(evento);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const voltarEventos = () => {
        setEventoSelecionado(null);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (eventoSelecionado) {
        return (
            <section className="eventos">

                <div className="eventos-container">

                    <button
                        type="button"
                        className="eventos-voltar"
                        onClick={voltarEventos}
                    >
                        ← Voltar para eventos
                    </button>

                    <div className="evento-aberto">

                        <EventoCard
                            evento={eventoSelecionado}
                        />

                        <EventoAbas
                            evento={eventoSelecionado}
                        />

                    </div>

                </div>

            </section>
        );
    }

    return (
        <section className="eventos">

            <div className="eventos-container">

                <header className="eventos-header">

                    <span>
                        Pro Combat
                    </span>

                    <h1>
                        Eventos
                    </h1>

                    <p>
                        Confira os próximos eventos,
                        categorias, inscrições e informações
                        da competição.
                    </p>

                </header>

                <div className="eventos-list">

                    {eventos.map((evento) => (
                        <EventoCard
                            key={evento.id}
                            evento={evento}
                            onClick={() => abrirEvento(evento)}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Eventos;