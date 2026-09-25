const CadastroGoogle = ({ onClick, carregando }) => {
    return (
        <button
            type="button"
            className="cadastro-google"
            onClick={onClick}
            disabled={carregando}
        >
            Continuar com Google
        </button>
    );
};

export default CadastroGoogle;