const LoginMensagem = ({ erro }) => {

    if (!erro) {
        return null;
    }


    return (
        <div className="login-erro">
            {erro}
        </div>
    );
};


export default LoginMensagem;