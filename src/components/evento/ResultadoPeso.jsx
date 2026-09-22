const ResultadoPeso = ({ resultado }) => {

    if (!resultado) {
        return null;
    }

    return (
        <div className="resultado-peso">

            <div className="resultado-peso-header">

                <span>
                    Categorias disponíveis
                </span>

            </div>

            <div className="resultado-peso-list">

                {resultado.map((item) => (
                    <div
                        className="resultado-peso-item"
                        key={item.id}
                    >

                        <span>
                            {item.nome}
                        </span>

                        <strong>
                            {item.limite}
                        </strong>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default ResultadoPeso;