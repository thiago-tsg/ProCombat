import AdminEventoFormSection from './AdminEventoFormSection';


const resultadosPesoPadrao = [
    {
        id: 1,
        nome: 'GALO',
        limite: 'até 46,500 kg'
    },
    {
        id: 2,
        nome: 'PLUMA',
        limite: 'até 51,500 kg'
    },
    {
        id: 3,
        nome: 'PENA',
        limite: 'até 56,500 kg'
    },
    {
        id: 4,
        nome: 'LEVE',
        limite: 'até 61,500 kg'
    },
    {
        id: 5,
        nome: 'MEDIO',
        limite: 'até 66,500 kg'
    },
    {
        id: 6,
        nome: 'MEIO-PESADO',
        limite: 'até 71,500 kg'
    },
    {
        id: 7,
        nome: 'PESADO',
        limite: 'até 76,500 kg'
    },
    {
        id: 8,
        nome: 'SUPER-PESADO',
        limite: 'acima de 76,501 kg'
    }
];


const tabelaPesoPadrao = [
    {
        id: 1,
        tipoPeso: 'atleta',
        pesagem: 'peso',

        // A modalidade agora é um campo separado.
        modalidade: 'gi',

        sexo: 'feminino',
        categoria: 'MASTER 2',
        graduacao: 'MARROM',

        resultado: resultadosPesoPadrao
    }
];


const gerarId = () => {
    return Date.now() + Math.floor(
        Math.random() * 1000
    );
};


const AdminEventoTabelaPeso = ({
    evento,
    alterarCampo
}) => {

    const tabelaPeso = evento.tabelaPeso || [];


    const adicionarTabela = () => {

        const novaTabela = {
            id: gerarId(),

            tipoPeso: 'atleta',
            pesagem: 'peso',

            // Gi / NoGi ficam independentes da categoria.
            modalidade: 'gi',

            sexo: 'feminino',

            categoria: evento.categorias?.[0] || '',

            graduacao: evento.graduacoes?.[0] || '',

            resultado: []
        };

        alterarCampo(
            'tabelaPeso',
            [
                ...tabelaPeso,
                novaTabela
            ]
        );
    };


    const removerTabela = (index) => {

        alterarCampo(
            'tabelaPeso',
            tabelaPeso.filter(
                (_, tabelaIndex) =>
                    tabelaIndex !== index
            )
        );
    };


    const alterarTabela = (
        index,
        campo,
        valor
    ) => {

        const novaTabela = tabelaPeso.map(
            (tabela, tabelaIndex) =>
                tabelaIndex === index
                    ? {
                        ...tabela,
                        [campo]: valor
                    }
                    : tabela
        );

        alterarCampo(
            'tabelaPeso',
            novaTabela
        );
    };


    const adicionarResultado = (tabelaIndex) => {

        const novaTabela = tabelaPeso.map(
            (tabela, index) => {

                if (index !== tabelaIndex) {
                    return tabela;
                }

                return {
                    ...tabela,

                    resultado: [
                        ...(tabela.resultado || []),
                        {
                            id: gerarId(),
                            nome: '',
                            limite: ''
                        }
                    ]
                };
            }
        );

        alterarCampo(
            'tabelaPeso',
            novaTabela
        );
    };


    const alterarResultado = (
        tabelaIndex,
        resultadoIndex,
        campo,
        valor
    ) => {

        const novaTabela = tabelaPeso.map(
            (tabela, index) => {

                if (index !== tabelaIndex) {
                    return tabela;
                }

                return {
                    ...tabela,

                    resultado: tabela.resultado.map(
                        (resultado, indexResultado) =>
                            indexResultado === resultadoIndex
                                ? {
                                    ...resultado,
                                    [campo]: valor
                                }
                                : resultado
                    )
                };
            }
        );

        alterarCampo(
            'tabelaPeso',
            novaTabela
        );
    };


    const removerResultado = (
        tabelaIndex,
        resultadoIndex
    ) => {

        const novaTabela = tabelaPeso.map(
            (tabela, index) => {

                if (index !== tabelaIndex) {
                    return tabela;
                }

                return {
                    ...tabela,

                    resultado: tabela.resultado.filter(
                        (_, indexResultado) =>
                            indexResultado !== resultadoIndex
                    )
                };
            }
        );

        alterarCampo(
            'tabelaPeso',
            novaTabela
        );
    };


    return (
        <AdminEventoFormSection
            numero="07"
            titulo="Tabela de peso"
            descricao="Configure as combinações de modalidade, categoria, graduação, sexo e limites de peso."
        >

            <div className="admin-evento-tabela-peso">

                <div className="admin-evento-tabela-peso-header">

                    <div>

                        <h4>
                            Tabelas de peso
                        </h4>

                        <p>
                            Cada tabela representa uma combinação específica de modalidade, categoria, graduação e sexo.
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={adicionarTabela}
                    >
                        + Adicionar tabela
                    </button>

                </div>


                <div className="admin-evento-tabela-peso-lista">

                    {tabelaPeso.map((tabela, tabelaIndex) => (

                        <article
                            className="admin-evento-tabela-peso-item"
                            key={tabela.id}
                        >

                            <header className="admin-evento-tabela-peso-item-header">

                                <div>

                                    <span>
                                        Tabela {tabelaIndex + 1}
                                    </span>

                                    <h4>
                                        {tabela.categoria || 'Nova tabela'}
                                    </h4>

                                </div>


                                <button
                                    type="button"
                                    onClick={() =>
                                        removerTabela(tabelaIndex)
                                    }
                                >
                                    Remover tabela
                                </button>

                            </header>


                            <div className="admin-evento-form-grid">

                                <div className="admin-form-group">

                                    <label>
                                        Modalidade
                                    </label>

                                    <select
                                        value={tabela.modalidade || ''}
                                        onChange={(e) =>
                                            alterarTabela(
                                                tabelaIndex,
                                                'modalidade',
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option value="">
                                            Selecione
                                        </option>

                                        <option value="gi">
                                            Gi
                                        </option>

                                        <option value="nogi">
                                            NoGi
                                        </option>

                                        <option value="absoluto">
                                            Absoluto
                                        </option>

                                    </select>

                                </div>


                                <div className="admin-form-group">

                                    <label>
                                        Tipo de peso
                                    </label>

                                    <select
                                        value={tabela.tipoPeso || ''}
                                        onChange={(e) =>
                                            alterarTabela(
                                                tabelaIndex,
                                                'tipoPeso',
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option value="atleta">
                                            Atleta
                                        </option>

                                        <option value="categoria">
                                            Categoria
                                        </option>

                                    </select>

                                </div>


                                <div className="admin-form-group">

                                    <label>
                                        Tipo de pesagem
                                    </label>

                                    <select
                                        value={tabela.pesagem || ''}
                                        onChange={(e) =>
                                            alterarTabela(
                                                tabelaIndex,
                                                'pesagem',
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option value="peso">
                                            Peso
                                        </option>

                                        <option value="com-quimono">
                                            Com quimono
                                        </option>

                                        <option value="sem-quimono">
                                            Sem quimono
                                        </option>

                                    </select>

                                </div>


                                <div className="admin-form-group">

                                    <label>
                                        Sexo
                                    </label>

                                    <select
                                        value={tabela.sexo || ''}
                                        onChange={(e) =>
                                            alterarTabela(
                                                tabelaIndex,
                                                'sexo',
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option value="feminino">
                                            Feminino
                                        </option>

                                        <option value="masculino">
                                            Masculino
                                        </option>

                                        <option value="misto">
                                            Misto
                                        </option>

                                    </select>

                                </div>


                                <div className="admin-form-group">

                                    <label>
                                        Categoria
                                    </label>

                                    <select
                                        value={tabela.categoria || ''}
                                        onChange={(e) =>
                                            alterarTabela(
                                                tabelaIndex,
                                                'categoria',
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option value="">
                                            Selecione
                                        </option>

                                        {(evento.categorias || []).map(
                                            (categoria) => (
                                                <option
                                                    key={categoria}
                                                    value={categoria}
                                                >
                                                    {categoria}
                                                </option>
                                            )
                                        )}

                                    </select>

                                </div>


                                <div className="admin-form-group">

                                    <label>
                                        Graduação
                                    </label>

                                    <select
                                        value={tabela.graduacao || ''}
                                        onChange={(e) =>
                                            alterarTabela(
                                                tabelaIndex,
                                                'graduacao',
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option value="">
                                            Selecione
                                        </option>

                                        {(evento.graduacoes || []).map(
                                            (graduacao) => (
                                                <option
                                                    key={graduacao}
                                                    value={graduacao}
                                                >
                                                    {graduacao}
                                                </option>
                                            )
                                        )}

                                    </select>

                                </div>

                            </div>


                            <div className="admin-evento-tabela-peso-resultados">

                                <div className="admin-evento-tabela-peso-resultados-header">

                                    <div>

                                        <h5>
                                            Faixas de peso
                                        </h5>

                                        <p>
                                            Defina o nome e o limite de cada faixa.
                                        </p>

                                    </div>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            adicionarResultado(
                                                tabelaIndex
                                            )
                                        }
                                    >
                                        + Adicionar faixa
                                    </button>

                                </div>


                                <div className="admin-evento-tabela-peso-resultados-lista">

                                    {(tabela.resultado || []).map(
                                        (resultado, resultadoIndex) => (

                                            <div
                                                className="admin-evento-peso-item"
                                                key={resultado.id}
                                            >

                                                <span>
                                                    {resultadoIndex + 1}
                                                </span>


                                                <input
                                                    type="text"
                                                    value={resultado.nome || ''}
                                                    onChange={(e) =>
                                                        alterarResultado(
                                                            tabelaIndex,
                                                            resultadoIndex,
                                                            'nome',
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Ex: GALO"
                                                />


                                                <input
                                                    type="text"
                                                    value={resultado.limite || ''}
                                                    onChange={(e) =>
                                                        alterarResultado(
                                                            tabelaIndex,
                                                            resultadoIndex,
                                                            'limite',
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Ex: até 46,500 kg"
                                                />


                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removerResultado(
                                                            tabelaIndex,
                                                            resultadoIndex
                                                        )
                                                    }
                                                    aria-label="Remover faixa de peso"
                                                >
                                                    ×
                                                </button>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </AdminEventoFormSection>
    );
};


export {
    tabelaPesoPadrao
};


export default AdminEventoTabelaPeso;