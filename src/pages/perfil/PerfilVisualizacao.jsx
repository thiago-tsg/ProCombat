const formatarData = (data) => {
    if (!data) {
        return 'Não informado';
    }

    const partes = data.split('-');

    if (partes.length !== 3) {
        return data;
    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
};

const formatarTexto = (texto) => {
    if (!texto) {
        return 'Não informado';
    }

    return (
        texto.charAt(0).toUpperCase() +
        texto.slice(1)
    );
};

const PerfilVisualizacao = ({
    usuario,
    atleta,
    onEditar
}) => {
    return (
        <>
            <div className="perfil-section-header">
                <div>
                    <span>CADASTRO</span>

                    <h2>
                        Informações pessoais
                    </h2>
                </div>

                <button
                    type="button"
                    onClick={onEditar}
                >
                    Editar
                </button>
            </div>

            <div className="perfil-grid">
                <div className="perfil-info">
                    <span>Nome</span>

                    <strong>
                        {atleta?.nome ||
                            usuario?.displayName ||
                            'Não informado'}
                    </strong>
                </div>

                <div className="perfil-info">
                    <span>E-mail</span>

                    <strong>
                        {atleta?.email ||
                            usuario?.email ||
                            'Não informado'}
                    </strong>
                </div>

                <div className="perfil-info">
                    <span>Data de nascimento</span>

                    <strong>
                        {formatarData(
                            atleta?.dataNascimento
                        )}
                    </strong>
                </div>

                <div className="perfil-info">
                    <span>Sexo</span>

                    <strong>
                        {formatarTexto(
                            atleta?.sexo
                        )}
                    </strong>
                </div>

                <div className="perfil-info">
                    <span>Graduação</span>

                    <strong>
                        {formatarTexto(
                            atleta?.graduacao
                        )}
                    </strong>
                </div>
            </div>
        </>
    );
};

export default PerfilVisualizacao;