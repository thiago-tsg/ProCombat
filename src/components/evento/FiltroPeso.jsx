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

    tabelas
}) => {

    // ==================================================
    // TIPOS DE PESO
    // ==================================================

    const tiposPeso = [
        {
            valor: 'com-kimono',
            label: 'Com kimono'
        },
        {
            valor: 'peso-atleta',
            label: 'Peso atleta'
        }
    ];


    // ==================================================
    // PESAGENS
    // ==================================================

    const pesagensDisponiveis = [
        {
            valor: 'peso',
            label: 'Peso'
        },
        {
            valor: 'absoluto',
            label: 'Absoluto'
        }
    ];


    // ==================================================
    // TABELAS APÓS O TIPO DE PESO
    // ==================================================

    const tabelasTipoPeso = tabelas.filter(
        (item) =>
            item.tipoPeso === tipoPeso
    );


    // ==================================================
    // TABELAS APÓS A PESAGEM
    // ==================================================

    const tabelasPesagem =
        tabelasTipoPeso.filter(
            (item) =>
                item.pesagem === pesagem
        );


    // ==================================================
    // SEXOS DISPONÍVEIS
    // ==================================================

    const sexosDisponiveis = [];

    tabelasPesagem.forEach((item) => {

        if (
            item.sexo === 'ambos'
        ) {

            if (
                !sexosDisponiveis.includes(
                    'masculino'
                )
            ) {
                sexosDisponiveis.push(
                    'masculino'
                );
            }


            if (
                !sexosDisponiveis.includes(
                    'feminino'
                )
            ) {
                sexosDisponiveis.push(
                    'feminino'
                );
            }

            return;
        }


        if (
            !sexosDisponiveis.includes(
                item.sexo
            )
        ) {
            sexosDisponiveis.push(
                item.sexo
            );
        }

    });


    // ==================================================
    // TABELAS APÓS O SEXO
    // ==================================================

    const tabelasSexo =
        tabelasPesagem.filter(
            (item) =>
                item.sexo === sexo ||
                item.sexo === 'ambos'
        );


    // ==================================================
    // CATEGORIAS DISPONÍVEIS
    // ==================================================

    const categoriasDisponiveis = [];

    tabelasSexo.forEach((item) => {

        if (
            !categoriasDisponiveis.some(
                (categoriaItem) =>
                    categoriaItem.valor ===
                    item.categoria
            )
        ) {

            categoriasDisponiveis.push({
                valor: item.categoria,
                label: item.categoriaLabel
            });

        }

    });


    // ==================================================
    // TABELAS APÓS A CATEGORIA
    // ==================================================

    const tabelasCategoria =
        tabelasSexo.filter(
            (item) =>
                item.categoria === categoria
        );


    // ==================================================
    // GRADUAÇÕES DISPONÍVEIS
    // ==================================================

    const graduacoesDisponiveis = [];

    tabelasCategoria.forEach((item) => {

        if (!item.graduacoes) {
            return;
        }


        item.graduacoes.forEach(
            (graduacaoItem) => {

                if (
                    !graduacoesDisponiveis.includes(
                        graduacaoItem
                    )
                ) {

                    graduacoesDisponiveis.push(
                        graduacaoItem
                    );

                }

            }
        );

    });


    // ==================================================
    // NOMES DAS GRADUAÇÕES
    // ==================================================

    const nomesGraduacoes = {
        branca: 'Branca',
        cinza: 'Cinza',
        amarela: 'Amarela',
        laranja: 'Laranja',
        verde: 'Verde',
        azul: 'Azul',
        roxa: 'Roxa',
        marrom: 'Marrom',
        preta: 'Preta'
    };


    // ==================================================
    // RENDER
    // ==================================================

    return (
        <div className="filtro-peso">


            {/* =========================================
                TIPO DE PESO
            ========================================= */}

            <div className="filtro-peso-group">

                <label htmlFor="tipo-peso">
                    Tipo de peso
                </label>


                <select
                    id="tipo-peso"
                    value={tipoPeso}
                    onChange={(event) =>
                        setTipoPeso(
                            event.target.value
                        )
                    }
                >

                    <option value="">
                        Escolha um tipo de peso
                    </option>


                    {tiposPeso.map(
                        (tipo) => (

                            <option
                                key={tipo.valor}
                                value={tipo.valor}
                            >
                                {tipo.label}
                            </option>

                        )
                    )}

                </select>

            </div>


            {/* =========================================
                PESAGEM
            ========================================= */}

            {tipoPeso && (

                <div className="filtro-peso-group">

                    <label htmlFor="pesagem">
                        Pesagem
                    </label>


                    <select
                        id="pesagem"
                        value={pesagem}
                        onChange={(event) =>
                            setPesagem(
                                event.target.value
                            )
                        }
                    >

                        <option value="">
                            Escolha a pesagem
                        </option>


                        {pesagensDisponiveis
                            .filter(
                                (pesagemItem) =>
                                    tabelasTipoPeso.some(
                                        (item) =>
                                            item.pesagem ===
                                            pesagemItem.valor
                                    )
                            )
                            .map(
                                (pesagemItem) => (

                                    <option
                                        key={
                                            pesagemItem.valor
                                        }
                                        value={
                                            pesagemItem.valor
                                        }
                                    >
                                        {
                                            pesagemItem.label
                                        }
                                    </option>

                                )
                            )}

                    </select>

                </div>

            )}


            {/* =========================================
                SEXO
            ========================================= */}

            {pesagem && (

                <div className="filtro-peso-group">

                    <label htmlFor="sexo">
                        Sexo
                    </label>


                    <select
                        id="sexo"
                        value={sexo}
                        onChange={(event) =>
                            setSexo(
                                event.target.value
                            )
                        }
                    >

                        <option value="">
                            Escolha o sexo
                        </option>


                        {sexosDisponiveis.map(
                            (sexoItem) => (

                                <option
                                    key={sexoItem}
                                    value={sexoItem}
                                >
                                    {
                                        sexoItem ===
                                        'masculino'
                                            ? 'Masculino'
                                            : 'Feminino'
                                    }
                                </option>

                            )
                        )}

                    </select>

                </div>

            )}


            {/* =========================================
                CATEGORIA
            ========================================= */}

            {sexo && (

                <div className="filtro-peso-group">

                    <label htmlFor="categoria">
                        Categoria
                    </label>


                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(event) =>
                            setCategoria(
                                event.target.value
                            )
                        }
                    >

                        <option value="">
                            Escolha a categoria
                        </option>


                        {categoriasDisponiveis.map(
                            (categoriaItem) => (

                                <option
                                    key={
                                        categoriaItem.valor
                                    }
                                    value={
                                        categoriaItem.valor
                                    }
                                >
                                    {
                                        categoriaItem.label
                                    }
                                </option>

                            )
                        )}

                    </select>

                </div>

            )}


            {/* =========================================
                GRADUAÇÃO
            ========================================= */}

            {categoria && (

                <div className="filtro-peso-group">

                    <label htmlFor="graduacao">
                        Graduação
                    </label>


                    <select
                        id="graduacao"
                        value={graduacao}
                        onChange={(event) =>
                            setGraduacao(
                                event.target.value
                            )
                        }
                    >

                        <option value="">
                            Escolha a graduação
                        </option>


                        {graduacoesDisponiveis.map(
                            (graduacaoItem) => (

                                <option
                                    key={
                                        graduacaoItem
                                    }
                                    value={
                                        graduacaoItem
                                    }
                                >
                                    {
                                        nomesGraduacoes[
                                            graduacaoItem
                                        ] ||
                                        graduacaoItem
                                    }
                                </option>

                            )
                        )}

                    </select>

                </div>

            )}

        </div>
    );
};


export default FiltroPeso;