const CadastroForm = ({
    formulario,
    onChange,
    onSubmit,
    carregando
}) => {

    return (
        <form onSubmit={onSubmit}>

            <div className="cadastro-field">

                <label htmlFor="nome">
                    Nome completo
                </label>

                <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formulario.nome}
                    onChange={onChange}
                    placeholder="Digite seu nome"
                    required
                />

            </div>


            <div className="cadastro-field">

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


            <div className="cadastro-field">

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
                    minLength={6}
                    required
                />

            </div>


            <div className="cadastro-field">

                <label htmlFor="dataNascimento">
                    Data de nascimento
                </label>

                <input
                    id="dataNascimento"
                    name="dataNascimento"
                    type="date"
                    value={formulario.dataNascimento}
                    onChange={onChange}
                    required
                />

            </div>


            <div className="cadastro-field">

                <label htmlFor="sexo">
                    Sexo
                </label>

                <select
                    id="sexo"
                    name="sexo"
                    value={formulario.sexo}
                    onChange={onChange}
                    required
                >

                    <option value="">
                        Selecione
                    </option>

                    <option value="masculino">
                        Masculino
                    </option>

                    <option value="feminino">
                        Feminino
                    </option>

                </select>

            </div>


            <div className="cadastro-field">

                <label htmlFor="graduacao">
                    Graduação
                </label>

                <select
                    id="graduacao"
                    name="graduacao"
                    value={formulario.graduacao}
                    onChange={onChange}
                    required
                >

                    <option value="">
                        Selecione
                    </option>

                    <option value="branca">
                        Branca
                    </option>

                    <option value="cinza">
                        Cinza
                    </option>

                    <option value="amarela">
                        Amarela
                    </option>

                    <option value="laranja">
                        Laranja
                    </option>

                    <option value="verde">
                        Verde
                    </option>

                    <option value="azul">
                        Azul
                    </option>

                    <option value="roxa">
                        Roxa
                    </option>

                    <option value="marrom">
                        Marrom
                    </option>

                    <option value="preta">
                        Preta
                    </option>

                </select>

            </div>


            <button
                type="submit"
                disabled={carregando}
            >
                {carregando
                    ? 'Criando conta...'
                    : 'Criar conta'
                }
            </button>

        </form>
    );
};

export default CadastroForm;