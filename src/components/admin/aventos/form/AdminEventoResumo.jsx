

import AdminEventoFormSection from './AdminEventoFormSection';


const AdminEventoResumo = ({
    evento,
    formatarData
}) => {

    const quantidadeCategorias =
        evento.categorias?.length || 0;

    const quantidadeGraduacoes =
        evento.graduacoes?.length || 0;

    const quantidadeFases =
        evento.fases?.length || 0;

    const quantidadeTabelasPeso =
        evento.tabelaPeso?.length || 0;

    const quantidadeFaixasPeso =
        evento.tabelaPeso?.reduce(
            (total, tabela) =>
                total + (tabela.resultado?.length || 0),
            0
        ) || 0;


    return (
        <AdminEventoFormSection
            numero="08"
            titulo="Resumo"
            descricao="Confira as informações do evento antes de salvar."
        >

            <div className="admin-evento-resumo">

                <div className="admin-evento-resumo-item">

                    <small>
                        Evento
                    </small>

                    <strong>
                        {evento.nome || 'Novo evento'}
                    </strong>

                    {evento.subtitulo && (
                        <span>
                            {evento.subtitulo}
                        </span>
                    )}

                </div>


                <div className="admin-evento-resumo-item">

                    <small>
                        Data
                    </small>

                    <strong>
                        {formatarData(evento.dataEvento) || '--'}
                    </strong>

                </div>


                <div className="admin-evento-resumo-item">

                    <small>
                        Local
                    </small>

                    <strong>
                        {evento.local || '--'}
                    </strong>

                    {evento.endereco && (
                        <span>
                            {evento.endereco}
                        </span>
                    )}

                </div>


                <div className="admin-evento-resumo-item">

                    <small>
                        Tipo
                    </small>

                    <strong>
                        {evento.tipo || '--'}
                    </strong>

                </div>


                <div className="admin-evento-resumo-item">

                    <small>
                        Status
                    </small>

                    <strong>
                        {evento.status === 'publicado'
                            ? 'Publicado'
                            : evento.status === 'encerrado'
                                ? 'Encerrado'
                                : 'Rascunho'
                        }
                    </strong>

                </div>


                <div className="admin-evento-resumo-item">

                    <small>
                        Categorias
                    </small>

                    <strong>
                        {quantidadeCategorias}
                    </strong>

                </div>


                <div className="admin-evento-resumo-item">

                    <small>
                        Graduações
                    </small>

                    <strong>
                        {quantidadeGraduacoes}
                    </strong>

                </div>


                <div className="admin-evento-resumo-item">

                    <small>
                        Fases
                    </small>

                    <strong>
                        {quantidadeFases}
                    </strong>

                </div>


                <div className="admin-evento-resumo-item">

                    <small>
                        Tabelas de peso
                    </small>

                    <strong>
                        {quantidadeTabelasPeso}
                    </strong>

                </div>


                <div className="admin-evento-resumo-item">

                    <small>
                        Faixas de peso
                    </small>

                    <strong>
                        {quantidadeFaixasPeso}
                    </strong>

                </div>


                <div className="admin-evento-resumo-recursos">

                    <small>
                        Recursos habilitados
                    </small>


                    <div>

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

                        {!evento.inscricoes &&
                            !evento.checagem &&
                            !evento.absoluto && (
                                <span>
                                    Nenhum recurso adicional
                                </span>
                            )}

                    </div>

                </div>

            </div>

        </AdminEventoFormSection>
    );
};


export default AdminEventoResumo;