const AdminEventoFormFooter = ({
    modoEdicao,
    onCancelar
}) => {

    return (
        <footer className="admin-evento-form-footer">

            <button
                type="button"
                onClick={onCancelar}
            >
                Cancelar
            </button>


            <button
                type="submit"
            >
                {modoEdicao
                    ? 'Salvar alterações'
                    : 'Criar evento'
                }
            </button>

        </footer>
    );
};

export default AdminEventoFormFooter;