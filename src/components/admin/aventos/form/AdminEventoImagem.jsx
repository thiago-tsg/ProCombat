import AdminEventoFormSection from './AdminEventoFormSection';

const AdminEventoImagem = ({
    evento,
    alterarCampo
}) => {

    return (
        <AdminEventoFormSection
            numero="02"
            titulo="Imagem"
            descricao="Imagem principal utilizada no card e na página do evento."
        >

            <div className="admin-form-group">

                <label htmlFor="imagem">
                    URL da imagem
                </label>

                <input
                    id="imagem"
                    type="text"
                    value={evento.imagem}
                    onChange={(e) =>
                        alterarCampo(
                            'imagem',
                            e.target.value
                        )
                    }
                    placeholder="https://..."
                />

            </div>


            {evento.imagem && (

                <div className="admin-evento-imagem-preview">

                    <span>
                        Pré-visualização
                    </span>

                    <img
                        src={evento.imagem}
                        alt="Pré-visualização do evento"
                    />

                </div>

            )}

        </AdminEventoFormSection>
    );
};

export default AdminEventoImagem;