

import AdminEventoFormSection from './AdminEventoFormSection';


const categoriasPadrao = [
    'PRE-MIRIM',
    'MIRIM',
    'INFANTIL A',
    'INFANTIL B',
    'INFANTO-JUVENIL A',
    'INFANTO-JUVENIL B',
    'JUVENIL',
    'ADULTO',
    'MASTER 1',
    'MASTER 2',
    'MASTER 3',
    'MASTER 4',
    'MASTER 5',
    'MASTER 6',
    'MASTER 7'
];


const graduacoesPadrao = [
    'BRANCA',
    'AZUL',
    'ROXA',
    'MARROM',
    'PRETA'
];


const AdminEventoCategorias = ({
    evento,
    alterarCampo
}) => {

    const categorias = evento.categorias || [];
    const graduacoes = evento.graduacoes || [];


    const alterarCategoria = (index, valor) => {

        const novasCategorias = [...categorias];

        novasCategorias[index] = valor;

        alterarCampo(
            'categorias',
            novasCategorias
        );
    };


    const adicionarCategoria = () => {

        alterarCampo(
            'categorias',
            [
                ...categorias,
                ''
            ]
        );
    };


    const removerCategoria = (index) => {

        alterarCampo(
            'categorias',
            categorias.filter(
                (_, categoriaIndex) =>
                    categoriaIndex !== index
            )
        );
    };


    const alterarGraduacao = (index, valor) => {

        const novasGraduacoes = [...graduacoes];

        novasGraduacoes[index] = valor;

        alterarCampo(
            'graduacoes',
            novasGraduacoes
        );
    };


    const adicionarGraduacao = () => {

        alterarCampo(
            'graduacoes',
            [
                ...graduacoes,
                ''
            ]
        );
    };


    const removerGraduacao = (index) => {

        alterarCampo(
            'graduacoes',
            graduacoes.filter(
                (_, graduacaoIndex) =>
                    graduacaoIndex !== index
            )
        );
    };


    return (
        <AdminEventoFormSection
            numero="05"
            titulo="Categorias e graduações"
            descricao="Defina as categorias e graduações disponíveis neste evento."
        >

            <div className="admin-evento-categorias">

                <div className="admin-evento-categorias-bloco">

                    <div className="admin-evento-categorias-header">

                        <div>

                            <h4>
                                Categorias
                            </h4>

                            <p>
                                Categorias disponíveis para este evento.
                            </p>

                        </div>

                        <button
                            type="button"
                            onClick={adicionarCategoria}
                        >
                            + Adicionar categoria
                        </button>

                    </div>


                    <div className="admin-evento-categorias-lista">

                        {categorias.map((categoria, index) => (

                            <div
                                className="admin-evento-categoria-item"
                                key={`categoria-${index}`}
                            >

                                <input
                                    type="text"
                                    value={categoria}
                                    onChange={(e) =>
                                        alterarCategoria(
                                            index,
                                            e.target.value
                                        )
                                    }
                                    placeholder="Ex: ADULTO NOGI"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        removerCategoria(index)
                                    }
                                    aria-label={`Remover categoria ${categoria || index + 1}`}
                                >
                                    ×
                                </button>

                            </div>

                        ))}

                    </div>

                </div>


                <div className="admin-evento-categorias-bloco">

                    <div className="admin-evento-categorias-header">

                        <div>

                            <h4>
                                Graduações
                            </h4>

                            <p>
                                Graduações permitidas neste evento.
                            </p>

                        </div>

                        <button
                            type="button"
                            onClick={adicionarGraduacao}
                        >
                            + Adicionar graduação
                        </button>

                    </div>


                    <div className="admin-evento-graduacoes-lista">

                        {graduacoes.map((graduacao, index) => (

                            <div
                                className="admin-evento-graduacao-item"
                                key={`graduacao-${index}`}
                            >

                                <input
                                    type="text"
                                    value={graduacao}
                                    onChange={(e) =>
                                        alterarGraduacao(
                                            index,
                                            e.target.value
                                        )
                                    }
                                    placeholder="Ex: BRANCA"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        removerGraduacao(index)
                                    }
                                    aria-label={`Remover graduação ${graduacao || index + 1}`}
                                >
                                    ×
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </AdminEventoFormSection>
    );
};


export {
    categoriasPadrao,
    graduacoesPadrao
};


export default AdminEventoCategorias;