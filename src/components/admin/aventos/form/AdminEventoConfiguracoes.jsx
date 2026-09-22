import AdminEventoFormSection from './AdminEventoFormSection';

const AdminEventoConfiguracoes = ({
    evento,
    alterarCampo
}) => {

    return (
        <AdminEventoFormSection
            numero="03"
            titulo="Configurações"
            descricao="Defina quais recursos estarão disponíveis neste evento."
        >

            <div className="admin-evento-configuracoes">

                {/* INSCRIÇÕES */}

                <label className="admin-evento-toggle">

                    <input
                        type="checkbox"
                        checked={evento.inscricoes}
                        onChange={(e) =>
                            alterarCampo(
                                'inscricoes',
                                e.target.checked
                            )
                        }
                    />

                    <span className="admin-evento-toggle-content">

                        <strong>
                            Inscrições
                        </strong>

                        <small>
                            O evento possui inscrições abertas.
                        </small>

                    </span>

                </label>


                {/* CHECAGEM */}

                <label className="admin-evento-toggle">

                    <input
                        type="checkbox"
                        checked={evento.checagem}
                        onChange={(e) =>
                            alterarCampo(
                                'checagem',
                                e.target.checked
                            )
                        }
                    />

                    <span className="admin-evento-toggle-content">

                        <strong>
                            Checagem
                        </strong>

                        <small>
                            Habilitar informações de checagem.
                        </small>

                    </span>

                </label>


                {/* NOGI */}

                <label className="admin-evento-toggle">

                    <input
                        type="checkbox"
                        checked={evento.nogi ?? false}
                        onChange={(e) =>
                            alterarCampo(
                                'nogi',
                                e.target.checked
                            )
                        }
                    />

                    <span className="admin-evento-toggle-content">

                        <strong>
                            NoGi
                        </strong>

                        <small>
                            O evento possui disputas sem kimono.
                        </small>

                    </span>

                </label>


                {/* ABSOLUTO */}

                <label className="admin-evento-toggle">

                    <input
                        type="checkbox"
                        checked={evento.absoluto}
                        onChange={(e) =>
                            alterarCampo(
                                'absoluto',
                                e.target.checked
                            )
                        }
                    />

                    <span className="admin-evento-toggle-content">

                        <strong>
                            Absoluto
                        </strong>

                        <small>
                            O evento possui disputa de absoluto.
                        </small>

                    </span>

                </label>

            </div>


            {/* TEXTO DO ABSOLUTO */}

            {evento.absoluto && (

                <div className="admin-form-group admin-form-group-full">

                    <label htmlFor="absolutoTexto">
                        Informações sobre o absoluto
                    </label>

                    <textarea
                        id="absolutoTexto"
                        value={
                            evento.absolutoTexto || ''
                        }
                        onChange={(e) =>
                            alterarCampo(
                                'absolutoTexto',
                                e.target.value
                            )
                        }
                        placeholder="Digite as informações sobre o absoluto..."
                        rows="5"
                    />

                </div>

            )}

        </AdminEventoFormSection>
    );
};

export default AdminEventoConfiguracoes;