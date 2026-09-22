const InscricaoHeader = ({
    evento,
    onFechar
}) => {

    return (
        <div className="inscricao-header">

            <div>

                <span>
                    Inscrição
                </span>

                <h2 id="inscricao-titulo">
                    {evento.nome}
                </h2>

            </div>


            <button
                type="button"
                className="inscricao-fechar"
                onClick={onFechar}
                aria-label="Fechar inscrição"
            >
                ×
            </button>

        </div>
    );
};


export default InscricaoHeader;