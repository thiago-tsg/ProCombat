const PerfilCampo = ({
    label,
    children
}) => {
    return (
        <label className="perfil-form-campo">
            <span>{label}</span>

            {children}
        </label>
    );
};

export default PerfilCampo;