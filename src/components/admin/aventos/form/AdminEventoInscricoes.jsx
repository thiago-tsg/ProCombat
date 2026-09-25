import { useEffect, useState } from 'react';

import {
    buscarInscricoesPorEvento,
    definirPagamentoManual
} from '../../../../services/inscricoesService';

import '../../../../styles/admin/eventos/AdminEventoInscricoes.scss';

const AdminEventoInscricoes = ({ evento }) => {

    const [aberto, setAberto] = useState(false);

    const [inscricoes, setInscricoes] = useState([]);

    const [carregando, setCarregando] = useState(false);

    const [processandoPagamento, setProcessandoPagamento] = useState(null);


    // ==================================================
    // CARREGAR INSCRIÇÕES
    // ==================================================

    const carregarInscricoes = async () => {

        try {

            setCarregando(true);

            const resultado =
                await buscarInscricoesPorEvento(
                    evento.id
                );

            setInscricoes(resultado);

        } catch (error) {

            console.error(
                'Erro ao buscar inscrições:',
                error
            );

            setInscricoes([]);

        } finally {

            setCarregando(false);

        }

    };


    // ==================================================
    // ABRIR / FECHAR
    // ==================================================

    const alternarAberto = () => {

        const novoEstado = !aberto;

        setAberto(novoEstado);

        if (novoEstado) {
            carregarInscricoes();
        }

    };


    // ==================================================
    // MARCAR PAGAMENTO MANUAL
    // ==================================================

    const marcarPagamentoManual = async (inscricao) => {

        const confirmar = window.confirm(
            `Marcar o pagamento de ${inscricao.atleta || 'este atleta'} como pagamento manual?`
        );

        if (!confirmar) {
            return;
        }


        try {

            setProcessandoPagamento(
                inscricao.id
            );


            await definirPagamentoManual(
                inscricao.id
            );


            setInscricoes(
                (inscricoesAtuais) =>
                    inscricoesAtuais.map(
                        (item) =>
                            item.id === inscricao.id
                                ? {
                                    ...item,
                                    statusPagamento:
                                        'pagamento_manual'
                                }
                                : item
                    )
            );


        } catch (error) {

            console.error(
                'Erro ao definir pagamento manual:',
                error
            );

            window.alert(
                'Não foi possível marcar o pagamento manual.'
            );

        } finally {

            setProcessandoPagamento(null);

        }

    };


    // ==================================================
    // STATUS DO PAGAMENTO
    // ==================================================

    const obterStatusPagamento = (status) => {

        if (status === 'pago') {
            return 'Pago';
        }

        if (status === 'pagamento_manual') {
            return 'Pagamento manual';
        }

        if (status === 'aguardando') {
            return 'Aguardando pagamento';
        }

        return status || 'Não informado';

    };


    // ==================================================
    // RENDER
    // ==================================================

    return (
        <section className="admin-evento-inscricoes">


            <button
                type="button"
                className="admin-evento-inscricoes__header"
                onClick={alternarAberto}
            >

                <div>

                    <span className="admin-evento-inscricoes__titulo">
                        Inscrições
                    </span>

                    <span className="admin-evento-inscricoes__contador">
                        {inscricoes.length} inscrição
                        {inscricoes.length !== 1
                            ? 'ões'
                            : ''}
                    </span>

                </div>


                <span
                    className={`admin-evento-inscricoes__seta ${aberto ? 'aberto' : ''
                        }`}
                >
                    ▼
                </span>

            </button>


            {aberto && (

                <div className="admin-evento-inscricoes__conteudo">


                    {carregando && (

                        <p className="admin-evento-inscricoes__mensagem">
                            Carregando inscrições...
                        </p>

                    )}


                    {!carregando &&
                        inscricoes.length === 0 && (

                            <p className="admin-evento-inscricoes__mensagem">
                                Nenhuma inscrição encontrada.
                            </p>

                        )}


                    {!carregando &&
                        inscricoes.length > 0 && (

                            <div className="admin-evento-inscricoes__lista">

                                {inscricoes.map(
                                    (inscricao) => (

                                        <article
                                            key={inscricao.id}
                                            className="admin-inscricao"
                                        >


                                            {/* ============================== */}
                                            {/* ATLETA */}
                                            {/* ============================== */}

                                            <div className="admin-inscricao__principal">

                                                <h4>
                                                    {inscricao.atleta ||
                                                        'Atleta não informado'}
                                                </h4>

                                                <span>
                                                    {inscricao.categoria ||
                                                        'Categoria não informada'}
                                                </span>

                                            </div>


                                            {/* ============================== */}
                                            {/* INFORMAÇÕES */}
                                            {/* ============================== */}

                                            <div className="admin-inscricao__informacoes">


                                                <div>

                                                    <small>
                                                        Sexo
                                                    </small>

                                                    <strong>
                                                        {inscricao.sexo ||
                                                            '—'}
                                                    </strong>

                                                </div>


                                                <div>

                                                    <small>
                                                        Graduação
                                                    </small>

                                                    <strong>
                                                        {inscricao.graduacao ||
                                                            '—'}
                                                    </strong>

                                                </div>


                                                <div>

                                                    <small>
                                                        Peso
                                                    </small>

                                                    <strong>
                                                        {inscricao.peso
                                                            ? `${inscricao.peso} kg`
                                                            : '—'}
                                                    </strong>

                                                </div>


                                                <div>

                                                    <small>
                                                        Pagamento
                                                    </small>

                                                    <strong
                                                        className={`status-${inscricao.statusPagamento || 'desconhecido'}`}
                                                    >
                                                        {obterStatusPagamento(
                                                            inscricao.statusPagamento
                                                        )}
                                                    </strong>

                                                </div>


                                            </div>


                                            {/* ============================== */}
                                            {/* MODALIDADES */}
                                            {/* ============================== */}

                                            <div className="admin-inscricao__modalidades">

                                                <small>
                                                    Modalidade
                                                </small>

                                                <span>
                                                    {Array.isArray(
                                                        inscricao.modalidades
                                                    )
                                                        ? inscricao.modalidades
                                                            .map(
                                                                (modalidade) =>
                                                                    modalidade.label ||
                                                                    modalidade.valor
                                                            )
                                                            .join(', ')
                                                        : '—'}
                                                </span>

                                            </div>


                                            {/* ============================== */}
                                            {/* PAGAMENTO MANUAL */}
                                            {/* ============================== */}

                                            {(
                                                inscricao.statusPagamento === 'aguardando' ||
                                                !inscricao.statusPagamento
                                            ) && (

                                                    <div className="admin-inscricao__acoes">

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                marcarPagamentoManual(
                                                                    inscricao
                                                                )
                                                            }
                                                            disabled={
                                                                processandoPagamento ===
                                                                inscricao.id
                                                            }
                                                        >

                                                            {processandoPagamento ===
                                                                inscricao.id
                                                                ? 'Processando...'
                                                                : 'Marcar pagamento manual'}

                                                        </button>

                                                    </div>

                                                )}


                                        </article>

                                    )
                                )}

                            </div>

                        )}

                </div>

            )}

        </section>
    );

};


export default AdminEventoInscricoes;