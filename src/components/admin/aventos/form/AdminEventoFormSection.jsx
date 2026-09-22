const AdminEventoFormSection = ({
    numero,
    titulo,
    descricao,
    children
}) => {

    return (
        <section className="admin-evento-form-section">

            <div className="admin-evento-form-section-header">

                <span>
                    {numero}
                </span>

                <div>

                    <h3>
                        {titulo}
                    </h3>

                    <p>
                        {descricao}
                    </p>

                </div>

            </div>


            {children}

        </section>
    );
};

export default AdminEventoFormSection;