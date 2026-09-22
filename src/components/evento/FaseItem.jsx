const FaseItem = ({ titulo, texto }) => {
    return (
        <details className="fase-item">

            <summary>
                <span>{titulo}</span>

                <span className="fase-item-icon">
                    +
                </span>
            </summary>

            <div className="fase-item-content">
                <p>{texto}</p>
            </div>

        </details>
    );
};

export default FaseItem;