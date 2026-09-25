const LoginGoogle = ({
    onClick,
    carregando
}) => {

    return (
        <button
            type="button"
            className="login-google"
            onClick={onClick}
            disabled={carregando}
        >
            Continuar com Google
        </button>
    );
};


export default LoginGoogle;