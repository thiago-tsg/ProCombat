const InscricaoAcoes = ({
    onFechar,
    etapa = 1,
    onConfirmar,
    onPagamento
}) => {

    if (etapa === 2) {
        return (
            <div className="inscricao-acoes">

                <button
                    type="button"
                    className="inscricao-pagamento"
                    onClick={onPagamento}
                >
                    Efetuar pagamento
                </button>

            </div>
        );
    }

    return (
        <div className="inscricao-acoes">

            <button
                type="button"
                className="inscricao-cancelar"
                onClick={onFechar}
            >
                Cancelar
            </button>

            <button
                type="submit"
                className="inscricao-confirmar"
                onClick={onConfirmar}
            >
                Confirmar inscrição
            </button>

        </div>
    );
};

export default InscricaoAcoes;