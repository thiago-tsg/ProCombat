import AdminEventoFormSection from './AdminEventoFormSection';

import EditorTexto from './EditorTexto';


const camposInfoGerais = [
    {
        chave: 'organizacao',
        titulo: 'Organização',
        placeholder: 'Informe a organização responsável pelo evento...'
    },
    {
        chave: 'resultadosOnline',
        titulo: 'Resultados online',
        placeholder: 'Informe como e quando os resultados serão disponibilizados...'
    },
    {
        chave: 'agenda',
        titulo: 'Agenda',
        placeholder: 'Informe as datas e horários importantes do evento...'
    },
    {
        chave: 'quemPodeCompetir',
        titulo: 'Quem pode competir?',
        placeholder: 'Informe quem está autorizado a participar do evento...'
    },
    {
        chave: 'inscricao',
        titulo: 'Inscrição',
        placeholder: 'Informe as regras, condições e informações sobre as inscrições...'
    },
    {
        chave: 'tabelaPeso',
        titulo: 'Tabela de peso',
        placeholder: 'Informe as regras relacionadas à tabela de peso...'
    },
    {
        chave: 'agrupamentoPeso',
        titulo: 'Agrupamento de peso',
        placeholder: 'Informe como os atletas serão agrupados...'
    },
    {
        chave: 'absoluto',
        titulo: 'Absoluto',
        placeholder: 'Informe as regras e condições do absoluto...'
    },
    {
        chave: 'lutasCasadas',
        titulo: 'Lutas casadas',
        placeholder: 'Informe como funcionarão as lutas casadas...'
    },
    {
        chave: 'premiacao',
        titulo: 'Premiação',
        placeholder: 'Informe as regras e informações sobre a premiação...'
    },
    {
        chave: 'regrasPontosEquipe',
        titulo: 'Regras - pontos por equipe',
        placeholder: 'Informe como funcionará a pontuação por equipe...'
    },
    {
        chave: 'tempoLuta',
        titulo: 'Tempo de luta',
        placeholder: 'Informe os tempos de luta de acordo com as categorias...'
    },
    {
        chave: 'vestimentas',
        titulo: 'Regras de vestimentas',
        placeholder: 'Informe as regras relacionadas às vestimentas...'
    },
    {
        chave: 'pesagem',
        titulo: 'Regras de pesagem',
        placeholder: 'Informe como funcionará a pesagem dos atletas...'
    },
    {
        chave: 'horariosAbertura',
        titulo: 'Horários de abertura',
        placeholder: 'Informe os horários de abertura do evento...'
    },
    {
        chave: 'entradaPublico',
        titulo: 'Entrada do público',
        placeholder: 'Informe as condições para entrada do público...'
    },
    {
        chave: 'termoResponsabilidade',
        titulo: 'Termo de responsabilidade',
        placeholder: 'Informe as regras relacionadas ao termo de responsabilidade...'
    },
    {
        chave: 'filmagemFotos',
        titulo: 'Filmagem / fotos do evento',
        placeholder: 'Informe as regras relacionadas à filmagem e fotografia...'
    },
    {
        chave: 'reembolso',
        titulo: 'Reembolso',
        placeholder: 'Informe as regras de cancelamento e reembolso...'
    },
    {
        chave: 'glossario',
        titulo: 'Glossário',
        placeholder: 'Informe os termos importantes utilizados neste evento...'
    }
];


const AdminEventoInfoGerais = ({
    evento,
    alterarCampo
}) => {

    const infoGerais = evento.infoGerais || {};


    const alterarInfoGeral = (
        campo,
        valor
    ) => {

        alterarCampo(
            'infoGerais',
            {
                ...infoGerais,
                [campo]: valor
            }
        );

    };


    return (
        <AdminEventoFormSection
            numero="04"
            titulo="Informações gerais"
            descricao="Edite as informações que serão apresentadas na página pública deste evento."
        >

            <div className="admin-evento-info-gerais">

                {camposInfoGerais.map((campo) => (

                    <div
                        className="admin-form-group admin-form-group-full"
                        key={campo.chave}
                    >

                        <label>
                            {campo.titulo}
                        </label>


                        <EditorTexto
                            value={
                                infoGerais[campo.chave] || ''
                            }
                            onChange={(valor) =>
                                alterarInfoGeral(
                                    campo.chave,
                                    valor
                                )
                            }
                            placeholder={
                                campo.placeholder
                            }
                        />

                    </div>

                ))}

            </div>

        </AdminEventoFormSection>
    );
};


export default AdminEventoInfoGerais;