const PerfilMensagem = ({ erro }) => {
    if (!erro) {
        return null;
    }

    return (
        <div className="perfil-erro">
            {erro}
        </div>
    );
};

export default PerfilMensagem;