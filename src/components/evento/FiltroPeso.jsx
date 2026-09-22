const FiltroPeso = ({
    tipoPeso,
    setTipoPeso,
    pesagem,
    setPesagem,
    sexo,
    setSexo,
    categoria,
    setCategoria,
    graduacao,
    setGraduacao,
    evento
}) => {

    return (
        <div className="filtro-peso">

            <div className="filtro-peso-field">

                <label htmlFor="tipo-peso">
                    Tipo de peso
                </label>

                <select
                    id="tipo-peso"
                    value={tipoPeso}
                    onChange={(event) => setTipoPeso(event.target.value)}
                >
                    <option value="">
                        Escolha um tipo de peso
                    </option>

                    <option value="atleta">
                        PESO ATLETA
                    </option>

                    <option value="kimono">
                        PESO KIMONO
                    </option>

                </select>

            </div>


            {tipoPeso && (

                <div className="filtro-peso-field">

                    <label htmlFor="pesagem">
                        Pesagem
                    </label>

                    <select
                        id="pesagem"
                        value={pesagem}
                        onChange={(event) => setPesagem(event.target.value)}
                    >
                        <option value="">
                            Escolha a pesagem
                        </option>

                        <option value="peso">
                            PESO
                        </option>

                        <option
                            value="absoluto"
                            disabled={!evento.absoluto}
                        >
                            ABSOLUTO
                        </option>

                    </select>

                </div>

            )}


            {pesagem === 'absoluto' && evento.absoluto && (

                <div className="filtro-peso-info">

                    <p>
                        {evento.absolutoTexto}
                    </p>

                </div>

            )}


            {pesagem === 'peso' && (

                <div className="filtro-peso-field">

                    <label htmlFor="sexo">
                        Sexo
                    </label>

                    <select
                        id="sexo"
                        value={sexo}
                        onChange={(event) => setSexo(event.target.value)}
                    >
                        <option value="">
                            Escolha o sexo
                        </option>

                        <option value="masculino">
                            MASCULINO
                        </option>

                        <option value="feminino">
                            FEMININO
                        </option>

                    </select>

                </div>

            )}


            {pesagem === 'peso' && sexo && (

                <div className="filtro-peso-field">

                    <label htmlFor="categoria">
                        Categoria
                    </label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(event) => setCategoria(event.target.value)}
                    >
                        <option value="">
                            Escolha a categoria
                        </option>

                        {evento.categorias?.map((item) => (

                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>

                        ))}

                    </select>

                </div>

            )}


            {pesagem === 'peso' && categoria && (

                <div className="filtro-peso-field">

                    <label htmlFor="graduacao">
                        Graduação
                    </label>

                    <select
                        id="graduacao"
                        value={graduacao}
                        onChange={(event) => setGraduacao(event.target.value)}
                    >
                        <option value="">
                            Escolha a graduação
                        </option>

                        {evento.graduacoes?.map((item) => (

                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>

                        ))}

                    </select>

                </div>

            )}

        </div>
    );
};

export default FiltroPeso;