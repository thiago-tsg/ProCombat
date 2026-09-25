import "../../styles/inscricao/InscricaoEvento.scss";

import InscricaoHeader from "./InscricaoHeader";
import InscricaoDadosAtleta from "./InscricaoDadosAtleta";
import InscricaoModalidades from "./InscricaoModalidades";
import InscricaoResumo from "./InscricaoResumo";
import InscricaoAcoes from "./InscricaoAcoes";

import useInscricaoEvento from "./useInscricaoEvento";

const InscricaoEvento = ({ evento, onFechar }) => {
    const {
        usuarioLogado,
        carregandoUsuario,

        peso,
        handlePeso,

        modalidades,
        modalidadesSelecionadas,
        alternarModalidade,

        idade,
        categoria,

        etapa,
        inscricao,

        salvando,
        erro,

        handleSubmit,
        handlePagamento,
    } = useInscricaoEvento(evento);

    if (carregandoUsuario) {
        return (
            <div className="inscricao-overlay">
                <div className="inscricao-modal">
                    <div className="inscricao-carregando">
                        <span>Carregando seus dados...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="inscricao-overlay">
            <div className="inscricao-modal">
                <InscricaoHeader
                    evento={evento}
                    onFechar={onFechar}
                />

                {erro && (
                    <div className="inscricao-erro">
                        {erro}
                    </div>
                )}

                {etapa === 1 && (
                    <form
                        onSubmit={handleSubmit}
                        className="inscricao-form"
                    >
                        <InscricaoDadosAtleta
                            usuarioLogado={usuarioLogado}
                            idade={idade}
                            categoria={categoria}
                            peso={peso}
                            onPesoChange={handlePeso}
                        />

                        <InscricaoModalidades
                            modalidades={modalidades}
                            modalidadesSelecionadas={modalidadesSelecionadas}
                            onAlternarModalidade={alternarModalidade}
                        />

                        <InscricaoAcoes
                            etapa={etapa}
                            salvando={salvando}
                            onFechar={onFechar}
                        />
                    </form>
                )}

                {etapa === 2 && inscricao && (
                    <div className="inscricao-confirmacao">
                        <InscricaoResumo
                            inscricao={inscricao}
                        />

                        <InscricaoAcoes
                            etapa={etapa}
                            salvando={salvando}
                            onFechar={onFechar}
                            onPagamento={handlePagamento}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default InscricaoEvento;