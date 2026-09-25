import { useEffect, useState } from 'react';

import AdminEventoForm from './AdminEventoForm';
import AdminEventoInscricoes from './form/AdminEventoInscricoes';

import {
    buscarEventos,
    criarEvento,
    atualizarEvento as atualizarEventoFirebase,
    publicarEvento as publicarEventoFirebase,
    excluirEvento as excluirEventoFirebase
} from '../../../services/eventosService';

import '../../../styles/admin/eventos/AdminEventos.scss';
import AdminEventoCasamento from './form/AdminEventoCasamento';


const AdminEventos = () => {

    const [criandoEvento, setCriandoEvento] = useState(false);

    const [eventos, setEventos] = useState([]);

    const [eventoEditando, setEventoEditando] = useState(null);

    const [carregando, setCarregando] = useState(true);

    const [erro, setErro] = useState('');


    // ==================================================
    // CARREGAR EVENTOS DO FIREBASE
    // ==================================================

    useEffect(() => {

        const carregarEventos = async () => {

            try {

                setCarregando(true);
                setErro('');

                const eventosFirebase =
                    await buscarEventos();

                setEventos(eventosFirebase);

            } catch (error) {

                console.error(
                    'Erro ao carregar eventos do Firebase:',
                    error
                );

                setErro(
                    'Não foi possível carregar os eventos.'
                );

            } finally {

                setCarregando(false);

            }

        };


        carregarEventos();

    }, []);


    // ==================================================
    // ADICIONAR EVENTO
    // ==================================================

    const adicionarEvento = async (novoEvento) => {

        try {

            setErro('');

            const eventoComStatus = {
                ...novoEvento,
                status: 'rascunho'
            };

            const eventoCriado =
                await criarEvento(
                    eventoComStatus
                );

            setEventos((eventosAtuais) => [
                ...eventosAtuais,
                eventoCriado
            ]);

            setCriandoEvento(false);

        } catch (error) {

            console.error(
                'Erro ao criar evento:',
                error
            );

            setErro(
                'Não foi possível criar o evento.'
            );

        }

    };


    // ==================================================
    // INICIAR EDIÇÃO
    // ==================================================

    const iniciarEdicao = (evento) => {

        setEventoEditando(evento);

        setCriandoEvento(false);

    };


    // ==================================================
    // ATUALIZAR EVENTO
    // ==================================================

    const atualizarEvento = async (
        eventoAtualizado
    ) => {

        try {

            setErro('');

            const eventoSalvo =
                await atualizarEventoFirebase(
                    eventoAtualizado.id,
                    eventoAtualizado
                );

            setEventos((eventosAtuais) =>
                eventosAtuais.map((evento) =>
                    evento.id === eventoSalvo.id
                        ? eventoSalvo
                        : evento
                )
            );

            setEventoEditando(null);

        } catch (error) {

            console.error(
                'Erro ao atualizar evento:',
                error
            );

            setErro(
                'Não foi possível atualizar o evento.'
            );

        }

    };


    // ==================================================
    // PUBLICAR EVENTO
    // ==================================================

    const publicarEvento = async (id) => {

        const confirmar = window.confirm(
            'Tem certeza que deseja publicar este evento? Ele ficará visível no site público.'
        );

        if (!confirmar) {
            return;
        }


        try {

            setErro('');

            await publicarEventoFirebase(id);

            setEventos((eventosAtuais) =>
                eventosAtuais.map((evento) =>
                    evento.id === id
                        ? {
                            ...evento,
                            status: 'publicado'
                        }
                        : evento
                )
            );

        } catch (error) {

            console.error(
                'Erro ao publicar evento:',
                error
            );

            setErro(
                'Não foi possível publicar o evento.'
            );

        }

    };


    // ==================================================
    // EXCLUIR EVENTO
    // ==================================================

    const excluirEvento = async (id) => {

        const confirmar = window.confirm(
            'Tem certeza que deseja excluir este evento?'
        );

        if (!confirmar) {
            return;
        }


        try {

            setErro('');

            await excluirEventoFirebase(id);

            setEventos((eventosAtuais) =>
                eventosAtuais.filter(
                    (evento) => evento.id !== id
                )
            );

            if (eventoEditando?.id === id) {
                setEventoEditando(null);
            }

        } catch (error) {

            console.error(
                'Erro ao excluir evento:',
                error
            );

            setErro(
                'Não foi possível excluir o evento.'
            );

        }

    };


    // ==================================================
    // CANCELAR FORMULÁRIO
    // ==================================================

    const cancelarFormulario = () => {

        setCriandoEvento(false);

        setEventoEditando(null);

    };


    // ==================================================
    // STATUS
    // ==================================================

    const obterStatus = (evento) => {

        return evento.status || 'rascunho';

    };


    const nomeStatus = (status) => {

        const nomes = {
            rascunho: 'Rascunho',
            publicado: 'Publicado',
            encerrado: 'Encerrado'
        };

        return nomes[status] || 'Rascunho';

    };


    // ==================================================
    // CARREGANDO
    // ==================================================

    if (carregando) {

        return (
            <section className="admin-eventos">

                <div className="admin-eventos-container">

                    <div className="admin-eventos-vazio">

                        <span>
                            Carregando eventos...
                        </span>

                    </div>

                </div>

            </section>
        );

    }


    // ==================================================
    // RENDER
    // ==================================================

    return (
        <section className="admin-eventos">

            <div className="admin-eventos-container">

                <header className="admin-eventos-header">

                    <div>

                        <span>
                            Pro Combat
                        </span>

                        <h1>
                            Eventos
                        </h1>

                        <p>
                            Gerencie os eventos da Pro Combat.
                        </p>

                    </div>


                    {!criandoEvento && !eventoEditando && (

                        <button
                            type="button"
                            onClick={() =>
                                setCriandoEvento(true)
                            }
                        >
                            + Criar evento
                        </button>

                    )}

                </header>


                {erro && (

                    <div className="admin-eventos-erro">
                        {erro}
                    </div>

                )}


                {criandoEvento && (

                    <AdminEventoForm
                        onCancelar={
                            cancelarFormulario
                        }
                        onSalvar={
                            adicionarEvento
                        }
                    />

                )}


                {eventoEditando && (

                    <AdminEventoForm
                        eventoInicial={
                            eventoEditando
                        }
                        onCancelar={
                            cancelarFormulario
                        }
                        onSalvar={
                            atualizarEvento
                        }
                    />

                )}


                {!criandoEvento &&
                    !eventoEditando && (

                        <div className="admin-eventos-lista">

                            {eventos.length === 0 ? (

                                <div className="admin-eventos-vazio">

                                    <span>
                                        Nenhum evento cadastrado
                                    </span>

                                    <p>
                                        Crie o primeiro evento para começar.
                                    </p>

                                </div>

                            ) : (

                                eventos.map((evento) => {

                                    const status =
                                        obterStatus(
                                            evento
                                        );

                                    return (
                                        <article
                                            className="admin-evento-card"
                                            key={evento.id}
                                        >

                                            <div className="admin-evento-card-imagem">

                                                {evento.imagem ? (

                                                    <img
                                                        src={
                                                            evento.imagem
                                                        }
                                                        alt={
                                                            evento.nome
                                                        }
                                                    />

                                                ) : (

                                                    <span>
                                                        Sem imagem
                                                    </span>

                                                )}

                                            </div>


                                            <div className="admin-evento-card-conteudo">

                                                <span className="admin-evento-card-tipo">
                                                    {evento.tipo}
                                                </span>


                                                <h2>
                                                    {evento.nome}
                                                </h2>


                                                {evento.subtitulo && (

                                                    <p>
                                                        {evento.subtitulo}
                                                    </p>

                                                )}


                                                <div className="admin-evento-card-info">

                                                    <div>

                                                        <small>
                                                            Data
                                                        </small>

                                                        <strong>
                                                            {evento.data}
                                                        </strong>

                                                    </div>


                                                    <div>

                                                        <small>
                                                            Local
                                                        </small>

                                                        <strong>
                                                            {evento.local}
                                                        </strong>

                                                    </div>

                                                </div>


                                                <div className="admin-evento-card-status">

                                                    <span
                                                        className={`status-${status}`}
                                                    >
                                                        {
                                                            nomeStatus(
                                                                status
                                                            )
                                                        }
                                                    </span>


                                                    {evento.inscricoes && (

                                                        <span>
                                                            Inscrições
                                                        </span>

                                                    )}


                                                    {evento.checagem && (

                                                        <span>
                                                            Checagem
                                                        </span>

                                                    )}


                                                    {evento.absoluto && (

                                                        <span>
                                                            Absoluto
                                                        </span>

                                                    )}

                                                </div>


                                                {/* ============================== */}
                                                {/* INSCRIÇÕES DO EVENTO */}
                                                {/* ============================== */}

                                                <AdminEventoInscricoes
                                                    evento={evento}
                                                />

                                                {/* ============================== */}
                                                {/* CASAMENTO */}
                                                {/* ============================== */}

                                                <AdminEventoCasamento
                                                    evento={evento}
                                                />


                                                {/* ============================== */}
                                                {/* AÇÕES */}
                                                {/* ============================== */}

                                                <div className="admin-evento-card-acoes">

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            iniciarEdicao(
                                                                evento
                                                            )
                                                        }
                                                    >
                                                        Editar
                                                    </button>


                                                    {status === 'rascunho' && (

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                publicarEvento(
                                                                    evento.id
                                                                )
                                                            }
                                                        >
                                                            Publicar
                                                        </button>

                                                    )}


                                                    <button
                                                        type="button"
                                                        className="admin-evento-card-excluir"
                                                        onClick={() =>
                                                            excluirEvento(
                                                                evento.id
                                                            )
                                                        }
                                                    >
                                                        Excluir
                                                    </button>

                                                </div>

                                            </div>

                                        </article>
                                    );

                                })

                            )}

                        </div>

                    )}

            </div>

        </section>
    );
};


export default AdminEventos;