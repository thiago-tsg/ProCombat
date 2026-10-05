import '../../../styles/admin/dashboard/AdminDashboard.scss';

const AdminDashboard = ({
    eventos = [],
    onAbrirEventos,
    onCriarEvento
}) => {

    const eventosPublicados = eventos.filter(
        (evento) => evento.status === 'publicado'
    );


    const eventosRascunho = eventos.filter(
        (evento) => evento.status === 'rascunho'
    );


    return (
        <section className="admin-dashboard">

            <div className="admin-dashboard-container">

                {/* ==================================================
                    CABEÇALHO
                ================================================== */}

                <header className="admin-dashboard-header">

                    <div>

                        <span>
                            Pro Combat
                        </span>

                        <h1>
                            Dashboard
                        </h1>

                        <p>
                            Visão geral da administração da competição.
                        </p>

                    </div>

                </header>


                {/* ==================================================
                    ESTATÍSTICAS
                ================================================== */}

                <div className="admin-dashboard-stats">

                    <article className="admin-dashboard-stat">

                        <span>
                            Eventos
                        </span>

                        <strong>
                            {eventos.length}
                        </strong>

                        <small>
                            Total cadastrado
                        </small>

                    </article>


                    <article className="admin-dashboard-stat">

                        <span>
                            Publicados
                        </span>

                        <strong>
                            {eventosPublicados.length}
                        </strong>

                        <small>
                            Eventos ativos
                        </small>

                    </article>


                    <article className="admin-dashboard-stat">

                        <span>
                            Rascunhos
                        </span>

                        <strong>
                            {eventosRascunho.length}
                        </strong>

                        <small>
                            Em configuração
                        </small>

                    </article>


                    <article className="admin-dashboard-stat">

                        <span>
                            Atletas
                        </span>

                        <strong>
                            0
                        </strong>

                        <small>
                            Inscritos
                        </small>

                    </article>

                </div>


                {/* ==================================================
                    AÇÕES RÁPIDAS
                ================================================== */}

                <section className="admin-dashboard-section">

                    <div className="admin-dashboard-section-header">

                        <div>

                            <span>
                                Administração
                            </span>

                            <h2>
                                Ações rápidas
                            </h2>

                        </div>

                    </div>


                    <div className="admin-dashboard-acoes">

                        <button
                            type="button"
                            onClick={onCriarEvento}
                        >

                            <strong>
                                +
                            </strong>

                            <div>

                                <span>
                                    Criar evento
                                </span>

                                <small>
                                    Criar uma nova competição
                                </small>

                            </div>

                        </button>


                        <button
                            type="button"
                            onClick={onAbrirEventos}
                        >

                            <strong>
                                E
                            </strong>

                            <div>

                                <span>
                                    Eventos
                                </span>

                                <small>
                                    Gerenciar competições
                                </small>

                            </div>

                        </button>


                        <button
                            type="button"
                        >

                            <strong>
                                A
                            </strong>

                            <div>

                                <span>
                                    Atletas
                                </span>

                                <small>
                                    Gerenciar atletas inscritos
                                </small>

                            </div>

                        </button>


                        <button
                            type="button"
                        >

                            <strong>
                                R
                            </strong>

                            <div>

                                <span>
                                    Resultados
                                </span>

                                <small>
                                    Gerenciar resultados
                                </small>

                            </div>

                        </button>

                    </div>

                </section>


                {/* ==================================================
                    EVENTOS RECENTES
                ================================================== */}

                <section className="admin-dashboard-section">

                    <div className="admin-dashboard-section-header">

                        <div>

                            <span>
                                Competições
                            </span>

                            <h2>
                                Eventos recentes
                            </h2>

                        </div>


                        {eventos.length > 0 && (

                            <button
                                type="button"
                                onClick={onAbrirEventos}
                            >
                                Ver todos
                            </button>

                        )}

                    </div>


                    {eventos.length === 0 ? (

                        <div className="admin-dashboard-vazio">

                            <strong>
                                Nenhum evento cadastrado
                            </strong>

                            <span>
                                Crie seu primeiro evento para começar.
                            </span>

                        </div>

                    ) : (

                        <div className="admin-dashboard-eventos">

                            {eventos
                                .slice(0, 5)
                                .map((evento) => (

                                    <article
                                        className="admin-dashboard-evento"
                                        key={evento.id}
                                    >

                                        <div className="admin-dashboard-evento-imagem">

                                            {evento.imagem ? (

                                                <img
                                                    src={evento.imagem}
                                                    alt={evento.nome}
                                                />

                                            ) : (

                                                <span>
                                                    PC
                                                </span>

                                            )}

                                        </div>


                                        <div className="admin-dashboard-evento-conteudo">

                                            <span>
                                                {evento.tipo}
                                            </span>

                                            <h3>
                                                {
                                                    evento.nome ||
                                                    'Evento sem nome'
                                                }
                                            </h3>

                                            <p>
                                                {
                                                    evento.data ||
                                                    'Data não definida'
                                                }
                                            </p>

                                        </div>


                                        <span
                                            className={`admin-dashboard-evento-status status-${evento.status || 'rascunho'}`}
                                        >
                                            {
                                                evento.status === 'publicado'
                                                    ? 'Publicado'
                                                    : 'Rascunho'
                                            }
                                        </span>

                                    </article>

                                ))}

                        </div>

                    )}

                </section>

            </div>

        </section>
    );
};


export default AdminDashboard;