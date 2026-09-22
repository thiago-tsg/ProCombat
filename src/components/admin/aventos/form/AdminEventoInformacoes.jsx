import AdminEventoFormSection from './AdminEventoFormSection';

const AdminEventoInformacoes = ({
    evento,
    alterarCampo
}) => {

    return (
        <AdminEventoFormSection
            numero="01"
            titulo="Informações básicas"
            descricao="Informações principais que serão exibidas no evento."
        >

            <div className="admin-evento-form-grid">

                {/* NOME */}

                <div className="admin-form-group admin-form-group-full">

                    <label htmlFor="nome">
                        Nome do evento
                    </label>

                    <input
                        id="nome"
                        type="text"
                        value={evento.nome}
                        onChange={(e) =>
                            alterarCampo(
                                'nome',
                                e.target.value
                            )
                        }
                        placeholder="Ex: Pro Combat Guerreiros"
                        required
                    />

                </div>


                {/* SUBTÍTULO */}

                <div className="admin-form-group admin-form-group-full">

                    <label htmlFor="subtitulo">
                        Subtítulo
                    </label>

                    <input
                        id="subtitulo"
                        type="text"
                        value={evento.subtitulo}
                        onChange={(e) =>
                            alterarCampo(
                                'subtitulo',
                                e.target.value
                            )
                        }
                        placeholder="Ex: Campeonato de Jiu-Jitsu"
                    />

                </div>


                {/* TIPO */}

                <div className="admin-form-group">

                    <label htmlFor="tipo">
                        Tipo de evento
                    </label>

                    <select
                        id="tipo"
                        value={evento.tipo}
                        onChange={(e) =>
                            alterarCampo(
                                'tipo',
                                e.target.value
                            )
                        }
                    >

                        <option value="Lutas Casadas">
                            Lutas Casadas
                        </option>

                        <option value="Lutas em Grupo">
                            Lutas em Grupo
                        </option>

                    </select>

                </div>


                {/* DATA */}

                <div className="admin-form-group">

                    <label htmlFor="dataEvento">
                        Data do evento
                    </label>

                    <input
                        id="dataEvento"
                        type="date"
                        value={evento.dataEvento}
                        onChange={(e) =>
                            alterarCampo(
                                'dataEvento',
                                e.target.value
                            )
                        }
                        required
                    />

                </div>


                {/* LOCAL */}

                <div className="admin-form-group admin-form-group-full">

                    <label htmlFor="local">
                        Local
                    </label>

                    <input
                        id="local"
                        type="text"
                        value={evento.local}
                        onChange={(e) =>
                            alterarCampo(
                                'local',
                                e.target.value
                            )
                        }
                        placeholder="Ex: São Paulo - SP"
                        required
                    />

                </div>


                {/* ENDEREÇO */}

                <div className="admin-form-group admin-form-group-full">

                    <label htmlFor="endereco">
                        Endereço
                    </label>

                    <input
                        id="endereco"
                        type="text"
                        value={evento.endereco}
                        onChange={(e) =>
                            alterarCampo(
                                'endereco',
                                e.target.value
                            )
                        }
                        placeholder="Ex: Rua, número, bairro..."
                    />

                </div>

            </div>

        </AdminEventoFormSection>
    );
};

export default AdminEventoInformacoes;