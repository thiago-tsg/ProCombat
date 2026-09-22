import { useEffect, useState } from 'react';

import AdminEventoForm from './AdminEventoForm';

import '../../../styles/admin/eventos/AdminEventos.scss';


const CHAVE_LOCAL_STORAGE = 'procombat_eventos';


const AdminEventos = () => {

    const [criandoEvento, setCriandoEvento] = useState(false);

    const [eventos, setEventos] = useState(() => {

        try {

            const eventosSalvos = localStorage.getItem(
                CHAVE_LOCAL_STORAGE
            );

            if (!eventosSalvos) {
                return [];
            }

            const eventosConvertidos = JSON.parse(eventosSalvos);

            if (!Array.isArray(eventosConvertidos)) {
                return [];
            }

            return eventosConvertidos;

        } catch (erro) {

            console.error(
                'Erro ao carregar eventos do localStorage:',
                erro
            );

            return [];
        }
    });

    const [eventoEditando, setEventoEditando] = useState(null);


    // ==================================================
    // SALVAR EVENTOS NO LOCALSTORAGE
    // ==================================================

    useEffect(() => {

        try {

            localStorage.setItem(
                CHAVE_LOCAL_STORAGE,
                JSON.stringify(eventos)
            );

        } catch (erro) {

            console.error(
                'Erro ao salvar eventos no localStorage:',
                erro
            );
        }

    }, [eventos]);


    // ==================================================
    // ADICIONAR EVENTO
    // ==================================================

    const adicionarEvento = (novoEvento) => {

        const eventoComStatus = {
            ...novoEvento,
            status: 'rascunho'
        };

        setEventos((eventosAtuais) => [
            ...eventosAtuais,
            eventoComStatus
        ]);

        setCriandoEvento(false);
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

    const atualizarEvento = (eventoAtualizado) => {

        setEventos((eventosAtuais) =>
            eventosAtuais.map((evento) =>
                evento.id === eventoAtualizado.id
                    ? eventoAtualizado
                    : evento
            )
        );

        setEventoEditando(null);
    };


    // ==================================================
    // PUBLICAR EVENTO
    // ==================================================

    const publicarEvento = (id) => {

        const confirmar = window.confirm(
            'Tem certeza que deseja publicar este evento? Ele ficará visível no site público.'
        );

        if (!confirmar) {
            return;
        }

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
    };


    // ==================================================
    // EXCLUIR EVENTO
    // ==================================================

    const excluirEvento = (id) => {

        const confirmar = window.confirm(
            'Tem certeza que deseja excluir este evento?'
        );

        if (!confirmar) {
            return;
        }

        setEventos((eventosAtuais) =>
            eventosAtuais.filter(
                (evento) => evento.id !== id
            )
        );

        if (eventoEditando?.id === id) {
            setEventoEditando(null);
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
                            onClick={() => setCriandoEvento(true)}
                        >
                            + Criar evento
                        </button>

                    )}

                </header>


                {criandoEvento && (

                    <AdminEventoForm
                        onCancelar={cancelarFormulario}
                        onSalvar={adicionarEvento}
                    />

                )}


                {eventoEditando && (

                    <AdminEventoForm
                        eventoInicial={eventoEditando}
                        onCancelar={cancelarFormulario}
                        onSalvar={atualizarEvento}
                    />

                )}


                {!criandoEvento && !eventoEditando && (

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

                                const status = obterStatus(evento);

                                return (
                                    <article
                                        className="admin-evento-card"
                                        key={evento.id}
                                    >

                                        <div className="admin-evento-card-imagem">

                                            {evento.imagem ? (

                                                <img
                                                    src={evento.imagem}
                                                    alt={evento.nome}
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
                                                    {nomeStatus(status)}
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


                                            <div className="admin-evento-card-acoes">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        iniciarEdicao(evento)
                                                    }
                                                >
                                                    Editar
                                                </button>


                                                {status === 'rascunho' && (

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            publicarEvento(evento.id)
                                                        }
                                                    >
                                                        Publicar
                                                    </button>

                                                )}


                                                <button
                                                    type="button"
                                                    className="admin-evento-card-excluir"
                                                    onClick={() =>
                                                        excluirEvento(evento.id)
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