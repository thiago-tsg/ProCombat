import AdminEventoFormSection from './AdminEventoFormSection';
import EditorTexto from './EditorTexto';


const fasesPadrao = [
    {
        id: 'pre-check',
        titulo: 'Pré checagem aberta',
        texto: 'Nesta etapa o atleta pode conferir seus dados e verificar se sua inscrição está correta antes da checagem oficial.'
    },
    {
        id: 'check',
        titulo: 'Checagem aberta',
        texto: 'A checagem oficial está aberta. Confira atentamente seu nome, categoria, peso, graduação e demais informações da inscrição.'
    },
    {
        id: 'alone',
        titulo: 'Atletas sozinhos',
        texto: 'Os atletas que não possuem adversários compatíveis dentro de sua categoria serão identificados nesta etapa.'
    },
    {
        id: 'closed',
        titulo: 'Checagem encerrada',
        texto: 'A checagem foi encerrada. Após este momento, alterações nas categorias e informações dos atletas estarão sujeitas às regras da organização.'
    },
    {
        id: 'finished',
        titulo: 'Finalizado',
        texto: 'O evento foi finalizado. Os resultados das disputas podem ser consultados através da área de resultados.'
    }
];


const gerarId = () => {

    return `fase-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`;

};


const AdminEventoFases = ({
    evento,
    alterarCampo
}) => {

    const fases = evento.fases || [];


    const alterarFase = (
        index,
        campo,
        valor
    ) => {

        const novasFases = fases.map(
            (fase, faseIndex) =>
                faseIndex === index
                    ? {
                        ...fase,
                        [campo]: valor
                    }
                    : fase
        );

        alterarCampo(
            'fases',
            novasFases
        );

    };


    const adicionarFase = () => {

        const novaFase = {
            id: gerarId(),
            titulo: '',
            texto: ''
        };

        alterarCampo(
            'fases',
            [
                ...fases,
                novaFase
            ]
        );

    };


    const removerFase = (index) => {

        alterarCampo(
            'fases',
            fases.filter(
                (_, faseIndex) =>
                    faseIndex !== index
            )
        );

    };


    const moverFase = (
        index,
        direcao
    ) => {

        const novoIndex =
            direcao === 'cima'
                ? index - 1
                : index + 1;


        if (
            novoIndex < 0 ||
            novoIndex >= fases.length
        ) {
            return;
        }


        const novasFases = [...fases];

        const faseAtual =
            novasFases[index];

        novasFases[index] =
            novasFases[novoIndex];

        novasFases[novoIndex] =
            faseAtual;


        alterarCampo(
            'fases',
            novasFases
        );

    };


    return (
        <AdminEventoFormSection
            numero="06"
            titulo="Fases do evento"
            descricao="Configure as etapas que serão apresentadas durante o andamento do evento."
        >

            <div className="admin-evento-fases">

                <div className="admin-evento-fases-header">

                    <div>

                        <h4>
                            Etapas
                        </h4>

                        <p>
                            Organize as fases e descreva o que acontece em cada uma delas.
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={adicionarFase}
                    >
                        + Adicionar fase
                    </button>

                </div>


                <div className="admin-evento-fases-lista">

                    {fases.map(
                        (fase, index) => (

                            <article
                                className="admin-evento-fase-item"
                                key={fase.id}
                            >

                                <div className="admin-evento-fase-topo">

                                    <span>
                                        Fase {index + 1}
                                    </span>


                                    <div className="admin-evento-fase-acoes">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                moverFase(
                                                    index,
                                                    'cima'
                                                )
                                            }
                                            disabled={
                                                index === 0
                                            }
                                            aria-label="Mover fase para cima"
                                        >
                                            ↑
                                        </button>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                moverFase(
                                                    index,
                                                    'baixo'
                                                )
                                            }
                                            disabled={
                                                index ===
                                                fases.length - 1
                                            }
                                            aria-label="Mover fase para baixo"
                                        >
                                            ↓
                                        </button>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                removerFase(
                                                    index
                                                )
                                            }
                                            aria-label="Remover fase"
                                        >
                                            ×
                                        </button>

                                    </div>

                                </div>


                                <div className="admin-evento-fase-campos">

                                    <div className="admin-form-group">

                                        <label
                                            htmlFor={`fase-titulo-${fase.id}`}
                                        >
                                            Título
                                        </label>

                                        <input
                                            id={`fase-titulo-${fase.id}`}
                                            type="text"
                                            value={
                                                fase.titulo
                                            }
                                            onChange={(e) =>
                                                alterarFase(
                                                    index,
                                                    'titulo',
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Ex: Checagem aberta"
                                        />

                                    </div>


                                    <div className="admin-form-group admin-form-group-full">

                                        <label>
                                            Descrição
                                        </label>

                                        <EditorTexto
                                            value={
                                                fase.texto ||
                                                ''
                                            }
                                            onChange={(
                                                valor
                                            ) =>
                                                alterarFase(
                                                    index,
                                                    'texto',
                                                    valor
                                                )
                                            }
                                            placeholder="Descreva o que acontece nesta fase..."
                                        />

                                    </div>

                                </div>

                            </article>

                        )
                    )}

                </div>

            </div>

        </AdminEventoFormSection>
    );

};


export {
    fasesPadrao
};


export default AdminEventoFases;