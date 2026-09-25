const PerfilFoto = ({ usuario, atleta }) => {
    const foto =
        atleta?.foto ||
        usuario?.photoURL ||
        '';

    const nome =
        atleta?.nome ||
        usuario?.displayName ||
        'Atleta';

    const primeiraLetra = nome
        .charAt(0)
        .toUpperCase();

    return (
        <section className="perfil-foto">
            <div className="perfil-foto-area">
                {foto ? (
                    <img
                        src={foto}
                        alt={`Foto de ${nome}`}
                    />
                ) : (
                    <div className="perfil-foto-placeholder">
                        {primeiraLetra}
                    </div>
                )}
            </div>

            <h2>{nome}</h2>

            <label
                htmlFor="foto-perfil"
                className="perfil-foto-botao"
            >
                Alterar foto
            </label>

            <input
                id="foto-perfil"
                type="file"
                accept="image/*"
                hidden
                onChange={() => {
                    console.log(
                        'Imagem selecionada. Storage será configurado no próximo passo.'
                    );
                }}
            />
        </section>
    );
};

export default PerfilFoto;