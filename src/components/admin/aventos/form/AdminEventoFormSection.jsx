import { useState } from 'react';


const AdminEventoFormSection = ({
    numero,
    titulo,
    descricao,
    children
}) => {

    const [aberta, setAberta] = useState(false);


    const alternarSecao = () => {
        setAberta((estadoAtual) => !estadoAtual);
    };


    return (
        <section
            className={`admin-evento-form-section ${aberta ? 'aberta' : 'fechada'
                }`}
        >

            <button
                type="button"
                className="admin-evento-form-section-header"
                onClick={alternarSecao}
                aria-expanded={aberta}
            >

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


                <strong
                    className="admin-evento-form-section-icon"
                    aria-hidden="true"
                >
                    {aberta ? '−' : '+'}
                </strong>

            </button>


            {aberta && (
                <div className="admin-evento-form-section-content">
                    {children}
                </div>
            )}

        </section>
    );
};


export default AdminEventoFormSection;