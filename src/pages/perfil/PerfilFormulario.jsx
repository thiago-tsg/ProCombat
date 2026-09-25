import PerfilCampo from './PerfilCampo';

const PerfilFormulario = ({
    formulario,
    alterarCampo,
    handleSalvar,
    cancelarEdicao,
    salvando,
    usuario,
    atleta
}) => {
    return (
        <>
            <div className="perfil-section-header">
                <div>
                    <span>CADASTRO</span>

                    <h2>
                        Editar informações
                    </h2>
                </div>
            </div>

            <form
                className="perfil-form"
                onSubmit={handleSalvar}
            >
                <div className="perfil-form-grid">

                    <PerfilCampo label="Nome">
                        <input
                            type="text"
                            value={formulario.nome}
                            onChange={(e) =>
                                alterarCampo(
                                    'nome',
                                    e.target.value
                                )
                            }
                            required
                        />
                    </PerfilCampo>

                    <PerfilCampo label="E-mail">
                        <input
                            type="email"
                            value={
                                atleta?.email ||
                                usuario?.email ||
                                ''
                            }
                            disabled
                        />
                    </PerfilCampo>

                    <PerfilCampo label="Data de nascimento">
                        <input
                            type="date"
                            value={
                                formulario.dataNascimento
                            }
                            onChange={(e) =>
                                alterarCampo(
                                    'dataNascimento',
                                    e.target.value
                                )
                            }
                            required
                        />
                    </PerfilCampo>

                    <PerfilCampo label="Sexo">
                        <select
                            value={formulario.sexo}
                            onChange={(e) =>
                                alterarCampo(
                                    'sexo',
                                    e.target.value
                                )
                            }
                            required
                        >
                            <option value="">
                                Selecione
                            </option>

                            <option value="masculino">
                                Masculino
                            </option>

                            <option value="feminino">
                                Feminino
                            </option>
                        </select>
                    </PerfilCampo>

                    <PerfilCampo label="Graduação">
                        <select
                            value={formulario.graduacao}
                            onChange={(e) =>
                                alterarCampo(
                                    'graduacao',
                                    e.target.value
                                )
                            }
                            required
                        >
                            <option value="">
                                Selecione
                            </option>

                            <option value="branca">
                                Branca
                            </option>

                            <option value="azul">
                                Azul
                            </option>

                            <option value="roxa">
                                Roxa
                            </option>

                            <option value="marrom">
                                Marrom
                            </option>

                            <option value="preta">
                                Preta
                            </option>
                        </select>
                    </PerfilCampo>

                </div>

                <div className="perfil-form-acoes">
                    <button
                        type="button"
                        onClick={cancelarEdicao}
                        disabled={salvando}
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        disabled={salvando}
                    >
                        {salvando
                            ? 'Salvando...'
                            : 'Salvar alterações'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default PerfilFormulario;