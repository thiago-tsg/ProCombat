import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../../styles/evento/Eventos.scss';

import EventoCard from './EventoCard';
import EventoAbas from './EventoAbas';

import InscricaoEvento from '../inscricao/InscricaoEvento';

import {
    buscarEventos,
    buscarEvento
} from '../../services/eventosService';


const Eventos = () => {

    const { id } = useParams();


    const [eventos, setEventos] = useState([]);

    const [carregando, setCarregando] = useState(true);

    const [inscricaoAberta, setInscricaoAberta] =
        useState(false);


    // ==================================================
    // CARREGAR EVENTOS DO FIREBASE
    // ==================================================

    useEffect(() => {

        const carregarEventos = async () => {

            try {

                setCarregando(true);


                const eventosFirebase =
                    await buscarEventos();


                const eventosPublicados =
                    eventosFirebase.filter(
                        (evento) =>
                            evento.status === 'publicado'
                    );


                setEventos(eventosPublicados);

            } catch (erro) {

                console.error(
                    'Erro ao carregar eventos públicos:',
                    erro
                );

                setEventos([]);

            } finally {

                setCarregando(false);

            }

        };


        carregarEventos();

    }, []);


    // ==================================================
    // ROLAR PARA O TOPO AO ABRIR EVENTO
    // ==================================================

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [id]);


    // ==================================================
    // FECHAR INSCRIÇÃO AO TROCAR DE EVENTO
    // ==================================================

    useEffect(() => {

        setInscricaoAberta(false);

    }, [id]);


    // ==================================================
    // EVENTO SELECIONADO
    // ==================================================

    const [eventoSelecionado, setEventoSelecionado] =
        useState(null);


    // ==================================================
    // CARREGAR EVENTO ESPECÍFICO
    // ==================================================

    useEffect(() => {

        const carregarEvento = async () => {

            if (!id) {

                setEventoSelecionado(null);

                return;

            }


            try {

                setCarregando(true);


                const eventoFirebase =
                    await buscarEvento(id);


                if (
                    !eventoFirebase ||
                    eventoFirebase.status !== 'publicado'
                ) {

                    setEventoSelecionado(null);

                    return;

                }


                setEventoSelecionado(
                    eventoFirebase
                );

            } catch (erro) {

                console.error(
                    'Erro ao carregar evento:',
                    erro
                );

                setEventoSelecionado(null);

            } finally {

                setCarregando(false);

            }

        };


        carregarEvento();

    }, [id]);


    // ==================================================
    // ABRIR INSCRIÇÃO
    // ==================================================

    const abrirInscricao = () => {

        setInscricaoAberta(true);

    };


    // ==================================================
    // FECHAR INSCRIÇÃO
    // ==================================================

    const fecharInscricao = () => {

        setInscricaoAberta(false);

    };


    // ==================================================
    // CARREGANDO
    // ==================================================

    if (carregando) {

        return (
            <section className="eventos">

                <div className="eventos-container">

                    <div className="eventos-vazio">

                        <span>
                            Carregando eventos...
                        </span>

                    </div>

                </div>

            </section>
        );
    }


    // ==================================================
    // EVENTO NÃO ENCONTRADO
    // ==================================================

    if (id && !eventoSelecionado) {

        return (
            <section className="eventos">

                <div className="eventos-container">

                    <div className="eventos-vazio">

                        <span>
                            Evento não encontrado
                        </span>


                        <p>
                            Este evento não existe ou ainda não foi publicado.
                        </p>


                        <Link
                            to="/eventos"
                            className="eventos-voltar"
                        >
                            ← Voltar para eventos
                        </Link>

                    </div>

                </div>
            </section>
        );
    }


    // ==================================================
    // EVENTO ABERTO
    // ==================================================

    if (eventoSelecionado) {
        return (
            <section className="eventos">

                <div className="eventos-container">

                    <Link
                        to="/eventos"
                        className="eventos-voltar"
                    >
                        ← Voltar para eventos
                    </Link>


                    <div className="evento-aberto">

                        <EventoCard
                            evento={eventoSelecionado}
                            eventoAberto={true}
                            onInscrever={abrirInscricao}
                        />


                        <EventoAbas
                            evento={eventoSelecionado}
                        />

                    </div>

                </div>


                {/* ==========================================
                    POPUP DE INSCRIÇÃO
                ========================================== */}

                {inscricaoAberta && (

                    <InscricaoEvento
                        evento={eventoSelecionado}
                        onFechar={fecharInscricao}
                    />

                )}

            </section>
        );
    }


    // ==================================================
    // LISTA DE EVENTOS
    // ==================================================

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

                    {eventos.length === 0 ? (

                        <div className="eventos-vazio">

                            <span>
                                Nenhum evento disponível
                            </span>


                            <p>
                                Novos eventos serão publicados em breve.
                            </p>

                        </div>

                    ) : (

                        eventos.map((evento) => (

                            <EventoCard
                                key={evento.id}
                                evento={evento}
                            />

                        ))

                    )}

                </div>

            </div>

        </section>
    );
};


export default Eventos;