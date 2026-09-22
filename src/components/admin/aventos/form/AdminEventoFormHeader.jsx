const AdminEventoFormHeader = ({
    modoEdicao,
    onCancelar
}) => {

    return (
        <header className="admin-evento-form-header">

            <div>

                <span>
                    {modoEdicao
                        ? 'Editar evento'
                        : 'Novo evento'
                    }
                </span>

                <h2>
                    {modoEdicao
                        ? 'Editar evento'
                        : 'Criar evento'
                    }
                </h2>

            </div>


            <button
                type="button"
                onClick={onCancelar}
            >
                Cancelar
            </button>

        </header>
    );
};

export default AdminEventoFormHeader;