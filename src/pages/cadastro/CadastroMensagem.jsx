const CadastroMensagem = ({ erro, sucesso }) => {
    return (
        <>
            {erro && (
                <div className="cadastro-erro">
                    {erro}
                </div>
            )}

            {sucesso && (
                <div className="cadastro-sucesso">
                    {sucesso}
                </div>
            )}
        </>
    );
};

export default CadastroMensagem;