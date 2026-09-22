const InfoItem = ({
    titulo,
    texto
}) => {

    // ==================================================
    // COMPONENTE
    // ==================================================

    return (
        <details className="info-item">

            <summary>

                <span>
                    {titulo}
                </span>


                <span className="info-item-icon">
                    +
                </span>

            </summary>


            <div
                className="info-item-content"
                dangerouslySetInnerHTML={{
                    __html: texto || ''
                }}
            />

        </details>
    );
};


export default InfoItem;