const LoginForm = ({
    formulario,
    onChange,
    onSubmit,
    carregando
}) => {

    return (
        <form onSubmit={onSubmit}>

            <div className="login-field">

                <label htmlFor="email">
                    E-mail
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formulario.email}
                    onChange={onChange}
                    placeholder="Digite seu e-mail"
                    required
                />

            </div>


            <div className="login-field">

                <label htmlFor="senha">
                    Senha
                </label>

                <input
                    id="senha"
                    name="senha"
                    type="password"
                    value={formulario.senha}
                    onChange={onChange}
                    placeholder="Digite sua senha"
                    required
                />

            </div>


            <button
                type="submit"
                disabled={carregando}
            >
                {carregando
                    ? 'Entrando...'
                    : 'Entrar'
                }
            </button>

        </form>
    );
};


export default LoginForm;