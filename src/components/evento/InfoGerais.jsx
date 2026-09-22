import '../../styles/evento/InfoGerais.scss';

import InfoItem from './InfoItem';

const InfoGerais = ({ evento }) => {

    const itens = [
        {
            chave: 'organizacao',
            titulo: 'Organização'
        },
        {
            chave: 'resultadosOnline',
            titulo: 'Resultados online'
        },
        {
            chave: 'agenda',
            titulo: 'Agenda'
        },
        {
            chave: 'quemPodeCompetir',
            titulo: 'Quem pode competir?'
        },
        {
            chave: 'inscricao',
            titulo: 'Inscrição'
        },
        {
            chave: 'tabelaPeso',
            titulo: 'Tabela de peso'
        },
        {
            chave: 'agrupamentoPeso',
            titulo: 'Agrupamento de peso'
        },
        {
            chave: 'absoluto',
            titulo: 'Absoluto'
        },
        {
            chave: 'lutasCasadas',
            titulo: 'Lutas casadas'
        },
        {
            chave: 'premiacao',
            titulo: 'Premiação'
        },
        {
            chave: 'regrasPontosEquipe',
            titulo: 'Regras - pontos por equipe'
        },
        {
            chave: 'tempoLuta',
            titulo: 'Tempo de luta'
        },
        {
            chave: 'vestimentas',
            titulo: 'Regras de vestimentas'
        },
        {
            chave: 'pesagem',
            titulo: 'Regras de pesagem'
        },
        {
            chave: 'horariosAbertura',
            titulo: 'Horários de abertura'
        },
        {
            chave: 'entradaPublico',
            titulo: 'Entrada do público'
        },
        {
            chave: 'termoResponsabilidade',
            titulo: 'Termo de responsabilidade'
        },
        {
            chave: 'filmagemFotos',
            titulo: 'Filmagem / fotos do evento'
        },
        {
            chave: 'reembolso',
            titulo: 'Reembolso'
        },
        {
            chave: 'glossario',
            titulo: 'Glossário'
        }
    ];

    return (
        <section className="info-gerais">

            <div className="info-gerais-list">

                {itens.map((item) => (
                    <InfoItem
                        key={item.chave}
                        titulo={item.titulo}
                        texto={evento.infoGerais?.[item.chave]}
                    />
                ))}

            </div>

        </section>
    );
};

export default InfoGerais;