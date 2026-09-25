import { useState } from 'react';

import {
    buscarInscricoesElegiveisParaCasamento
} from '../../../../services/inscricoesService';

import {
    agruparInscricoesParaCasamento,
    gerarSugestoesDeLutas,
    encontrarAtletasSemAdversario
} from '../../../../services/casamentoLutasService';

import '../../../../styles/admin/eventos/AdminEventoCasamento.scss';


const AdminEventoCasamento = ({ evento }) => {

    const [aberto, setAberto] = useState(false);

    const [inscricoes, setInscricoes] = useState([]);

    const [lutas, setLutas] = useState([]);

    const [semAdversario, setSemAdversario] = useState([]);

    const [carregando, setCarregando] = useState(false);

    const [gerando, setGerando] = useState(false);


    // ==================================================
    // CARREGAR INSCRIÇÕES ELEGÍVEIS
    // ==================================================

    const carregarInscricoes = async () => {

        try {

            setCarregando(true);

            const resultado =
                await buscarInscricoesElegiveisParaCasamento(
                    evento.id
                );

            setInscricoes(resultado);

        } catch (error) {

            console.error(
                'Erro ao buscar inscrições elegíveis:',
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
    // GERAR CASAMENTO
    // ==================================================

    const gerarCasamento = async () => {

        try {

            setGerando(true);

            const inscricoesAtualizadas =
                await buscarInscricoesElegiveisParaCasamento(
                    evento.id
                );

            setInscricoes(inscricoesAtualizadas);


            const grupos =
                agruparInscricoesParaCasamento(
                    inscricoesAtualizadas,
                    evento
                );

            console.log('=== DEBUG CASAMENTO ===');
            console.log(
                '=== INSCRIÇÕES COMPLETAS ===',
                JSON.stringify(inscricoesAtualizadas, null, 2)
            );

            console.log(
                '=== TABELA DE PESO COMPLETA ===',
                JSON.stringify(evento.tabelaPeso, null, 2)
            );

            console.log(
                '=== EVENTO COMPLETO ===',
                JSON.stringify(evento, null, 2)
            );

            console.log(
                '=== GRUPOS ===',
                JSON.stringify(grupos, null, 2)
            );


            const sugestoes =
                gerarSugestoesDeLutas(
                    grupos
                );

            console.log('LUTAS GERADAS:', sugestoes);


            const atletasSemAdversario =
                encontrarAtletasSemAdversario(
                    grupos
                );


            setLutas(sugestoes);

            setSemAdversario(
                atletasSemAdversario
            );

        } catch (error) {

            console.error(
                'Erro ao gerar casamento:',
                error
            );

            window.alert(
                'Não foi possível gerar o casamento de lutas.'
            );

        } finally {

            setGerando(false);

        }

    };


    // ==================================================
    // RENDER
    // ==================================================

    return (
        <section className="admin-evento-casamento">


            <button
                type="button"
                className="admin-evento-casamento__header"
                onClick={alternarAberto}
            >

                <div>

                    <span className="admin-evento-casamento__titulo">
                        Casamento de lutas
                    </span>

                    <span className="admin-evento-casamento__contador">
                        {inscricoes.length} inscrição
                        {inscricoes.length !== 1
                            ? 'ões'
                            : ''}
                    </span>

                </div>


                <span
                    className={`admin-evento-casamento__seta ${aberto ? 'aberto' : ''
                        }`}
                >
                    ▼
                </span>

            </button>


            {aberto && (

                <div className="admin-evento-casamento__conteudo">


                    {carregando && (

                        <p className="admin-evento-casamento__mensagem">
                            Carregando inscrições elegíveis...
                        </p>

                    )}


                    {!carregando && (

                        <>

                            <div className="admin-evento-casamento__resumo">

                                <strong>
                                    {inscricoes.length}
                                </strong>

                                <span>
                                    inscrições disponíveis para casamento
                                </span>

                            </div>


                            <button
                                type="button"
                                className="admin-evento-casamento__gerar"
                                onClick={gerarCasamento}
                                disabled={
                                    gerando ||
                                    inscricoes.length < 2
                                }
                            >

                                {gerando
                                    ? 'Gerando casamento...'
                                    : 'Gerar casamento'}

                            </button>


                            {inscricoes.length < 2 && (

                                <p className="admin-evento-casamento__aviso">
                                    São necessárias pelo menos 2 inscrições
                                    elegíveis para gerar uma luta.
                                </p>

                            )}


                            {lutas.length > 0 && (

                                <div className="admin-evento-casamento__resultado">

                                    <h3>
                                        Sugestões de lutas
                                    </h3>


                                    <div className="admin-evento-casamento__lutas">

                                        {lutas.map(
                                            (luta, index) => (

                                                <article
                                                    key={`${luta.atletaA.inscricaoId}-${luta.atletaB.inscricaoId}`}
                                                    className="admin-casamento-luta"
                                                >

                                                    <div className="admin-casamento-luta__numero">
                                                        Luta {index + 1}
                                                    </div>


                                                    <div className="admin-casamento-luta__atletas">

                                                        <div>
                                                            <strong>
                                                                {luta.atletaA.nome}
                                                            </strong>

                                                            <span>
                                                                {luta.atletaA.peso} kg
                                                            </span>
                                                        </div>


                                                        <span className="admin-casamento-luta__vs">
                                                            VS
                                                        </span>


                                                        <div>
                                                            <strong>
                                                                {luta.atletaB.nome}
                                                            </strong>

                                                            <span>
                                                                {luta.atletaB.peso} kg
                                                            </span>
                                                        </div>

                                                    </div>


                                                    <div className="admin-casamento-luta__detalhes">

                                                        <span>
                                                            {luta.categoria}
                                                        </span>

                                                        <span>
                                                            {luta.graduacao}
                                                        </span>

                                                        <span>
                                                            {luta.modalidadeLabel}
                                                        </span>

                                                        <span>
                                                            {luta.faixaPeso}
                                                        </span>

                                                        <span>
                                                            Diferença:{' '}
                                                            {luta.diferencaPeso} kg
                                                        </span>

                                                    </div>

                                                </article>

                                            )
                                        )}

                                    </div>

                                </div>

                            )}


                            {semAdversario.length > 0 && (

                                <div className="admin-evento-casamento__sobras">

                                    <h3>
                                        Sem adversário
                                    </h3>


                                    {semAdversario.map(
                                        (atleta) => (

                                            <div
                                                key={atleta.inscricaoId}
                                                className="admin-casamento-sobra"
                                            >

                                                <strong>
                                                    {atleta.nome}
                                                </strong>

                                                <span>
                                                    {atleta.peso} kg
                                                </span>

                                                <span>
                                                    {atleta.categoria}
                                                </span>

                                                <span>
                                                    {atleta.graduacao}
                                                </span>

                                                <span>
                                                    {atleta.modalidadeLabel}
                                                </span>

                                                <span>
                                                    {atleta.faixaPeso}
                                                </span>

                                            </div>

                                        )
                                    )}

                                </div>

                            )}


                            {!gerando &&
                                lutas.length === 0 &&
                                semAdversario.length === 0 &&
                                inscricoes.length >= 2 && (

                                    <p className="admin-evento-casamento__mensagem">
                                        Clique em "Gerar casamento" para criar
                                        as sugestões de lutas.
                                    </p>

                                )}

                        </>

                    )}

                </div>

            )}

        </section>
    );

};


export default AdminEventoCasamento;