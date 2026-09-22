import { useEffect, useState } from 'react';

import '../../styles/inscricao/InscricaoEvento.scss';

import InscricaoHeader from './InscricaoHeader';
import InscricaoDadosAtleta from './InscricaoDadosAtleta';
import InscricaoModalidades from './InscricaoModalidades';
import InscricaoResumo from './InscricaoResumo';
import InscricaoAcoes from './InscricaoAcoes';


const categoriasIdade = [
    {
        nome: 'Kids 1',
        idadeMin: 3,
        idadeMax: 5
    },
    {
        nome: 'Kids 2',
        idadeMin: 6,
        idadeMax: 7
    },
    {
        nome: 'Kids 3',
        idadeMin: 8,
        idadeMax: 9
    },
    {
        nome: 'Infantil 1',
        idadeMin: 10,
        idadeMax: 11
    },
    {
        nome: 'Infantil 2',
        idadeMin: 12,
        idadeMax: 13
    },
    {
        nome: 'Juvenil 1',
        idadeMin: 14,
        idadeMax: 15
    },
    {
        nome: 'Juvenil 2',
        idadeMin: 16,
        idadeMax: 17
    },
    {
        nome: 'Adulto',
        idadeMin: 18,
        idadeMax: 29
    },
    {
        nome: 'Master 1',
        idadeMin: 30,
        idadeMax: 35
    },
    {
        nome: 'Master 2',
        idadeMin: 36,
        idadeMax: 40
    },
    {
        nome: 'Master 3',
        idadeMin: 41,
        idadeMax: 45
    },
    {
        nome: 'Master 4',
        idadeMin: 46,
        idadeMax: 50
    },
    {
        nome: 'Master 5',
        idadeMin: 51,
        idadeMax: 55
    },
    {
        nome: 'Master 6',
        idadeMin: 56,
        idadeMax: 60
    },
    {
        nome: 'Master 7',
        idadeMin: 61,
        idadeMax: null
    }
];


const usuarioLogado = {
    nome: 'João Silva',
    dataNascimento: '1998-05-12',
    sexo: 'masculino',
    graduacao: 'azul'
};


const calcularIdade = (
    dataNascimento,
    dataEvento
) => {

    const nascimento = new Date(
        `${ dataNascimento } T00:00:00`
    );

    const evento = new Date(
        `${ dataEvento } T00:00:00`
    );

    let idade =
        evento.getFullYear() -
        nascimento.getFullYear();

    const mes =
        evento.getMonth() -
        nascimento.getMonth();

    const dia =
        evento.getDate() -
        nascimento.getDate();

    if (
        mes < 0 ||
        (mes === 0 && dia < 0)
    ) {
        idade--;
    }

    return idade;
};


const encontrarCategoria = (
    idade
) => {

    return categoriasIdade.find(
        (categoria) =>
            idade >= categoria.idadeMin &&
            (
                categoria.idadeMax === null ||
                idade <= categoria.idadeMax
            )
    );
};


const formatarSexo = (sexo) => {

    if (sexo === 'masculino') {
        return 'Masculino';
    }

    if (sexo === 'feminino') {
        return 'Feminino';
    }

    return sexo;
};


const formatarGraduacao = (
    graduacao
) => {

    const graduacoes = {
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

    return (
        graduacoes[graduacao] ||
        graduacao
    );
};


const InscricaoEvento = ({
    evento,
    onFechar
}) => {

    const [peso, setPeso] = useState('');

    const [
        modalidadesSelecionadas,
        setModalidadesSelecionadas
    ] = useState([]);

    /*
     * Controla a etapa atual do popup.
     *
     * 1 = preenchimento
     * 2 = inscrição registrada / pagamento
     */
    const [
        etapa,
        setEtapa
    ] = useState(1);

    /*
     * Guarda os dados da inscrição
     * depois que o usuário confirma.
     */
    const [
        inscricao,
        setInscricao
    ] = useState(null);


    const idade = calcularIdade(
        usuarioLogado.dataNascimento,
        evento.dataEvento
    );


    const categoria =
        encontrarCategoria(idade);


    const modalidades = [];


    /*
     * GI
     */

    if (evento.gi !== false) {

        modalidades.push({
            valor: 'gi',
            label: 'Gi'
        });

    }


    /*
     * NOGI
     */

    if (evento.nogi) {

        modalidades.push({
            valor: 'nogi',
            label: 'NoGi'
        });

    }


    /*
     * ABSOLUTO
     */

    if (evento.absoluto) {

        modalidades.push({
            valor: 'absoluto',
            label: 'Absoluto'
        });

    }


    /*
     * Garante que sempre exista
     * pelo menos uma modalidade válida.
     */

    useEffect(() => {

        if (!modalidades.length) {

            setModalidadesSelecionadas([]);

            return;
        }


        setModalidadesSelecionadas(
            (atuais) => {

                const modalidadesValidas =
                    atuais.filter(
                        (modalidadeSelecionada) =>
                            modalidades.some(
                                (modalidade) =>
                                    modalidade.valor ===
                                    modalidadeSelecionada
                            )
                    );


                if (modalidadesValidas.length) {
                    return modalidadesValidas;
                }


                return [
                    modalidades[0].valor
                ];

            }
        );

    }, [
        evento,
        modalidades.length
    ]);


    const alternarModalidade = (
        valor
    ) => {

        setModalidadesSelecionadas(
            (atuais) => {

                const selecionada =
                    atuais.includes(valor);


                if (selecionada) {

                    /*
                     * Não deixa o atleta
                     * ficar sem modalidade.
                     */

                    if (atuais.length === 1) {
                        return atuais;
                    }


                    return atuais.filter(
                        (item) =>
                            item !== valor
                    );

                }


                return [
                    ...atuais,
                    valor
                ];

            }
        );

    };


    const handlePeso = (event) => {

        const valor =
            event.target.value
                .replace(',', '.')
                .replace(/[^0-9.]/g, '');

        setPeso(valor);

    };


    /*
     * Confirma a primeira etapa da inscrição.
     */
    const handleSubmit = (event) => {

        event.preventDefault();


        const novaInscricao = {

            eventoId:
                evento.id,

            evento:
                evento.nome,

            atleta:
                usuarioLogado.nome,

            dataNascimento:
                usuarioLogado.dataNascimento,

            idade,

            categoria:
                categoria?.nome || null,

            sexo:
                usuarioLogado.sexo,

            graduacao:
                usuarioLogado.graduacao,

            peso:
                Number(peso),

            modalidades:
                modalidadesSelecionadas,

            status:
                'aguardando_pagamento'

        };


        /*
         * Guarda a inscrição para
         * utilizarmos na segunda etapa.
         */
        setInscricao(novaInscricao);


        /*
         * Avança o popup para
         * a etapa de pagamento.
         */
        setEtapa(2);


        console.log(
            'INSCRIÇÃO REGISTRADA:',
            novaInscricao
        );

    };


    /*
     * Executado quando o usuário
     * clicar em "Efetuar pagamento".
     *
     * Por enquanto apenas exibimos
     * os dados no console.
     *
     * Depois vamos conectar ao
     * Mercado Pago.
     */
    const handlePagamento = () => {

        console.log(
            'EFETUAR PAGAMENTO:',
            inscricao
        );

    };


    return (
        <div
            className="inscricao-overlay"
            onMouseDown={(event) => {

                if (
                    event.target ===
                    event.currentTarget
                ) {
                    onFechar();
                }

            }}
        >

            <div
                className="inscricao-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="inscricao-titulo"
            >

                <InscricaoHeader
                    evento={evento}
                    onFechar={onFechar}
                />


                {etapa === 1 && (

                    <form
                        className="inscricao-form"
                        onSubmit={handleSubmit}
                    >

                        <InscricaoDadosAtleta
                            usuario={usuarioLogado}
                            categoria={categoria}
                            idade={idade}
                            peso={peso}
                            onPesoChange={handlePeso}
                            formatarSexo={formatarSexo}
                            formatarGraduacao={
                                formatarGraduacao
                            }
                        />


                        <InscricaoModalidades
                            modalidades={modalidades}
                            modalidadesSelecionadas={
                                modalidadesSelecionadas
                            }
                            onAlternar={
                                alternarModalidade
                            }
                        />


                        <InscricaoResumo
                            usuario={usuarioLogado}
                            categoria={categoria}
                            peso={peso}
                            modalidadesSelecionadas={
                                modalidadesSelecionadas
                            }
                            modalidades={modalidades}
                            formatarSexo={formatarSexo}
                            formatarGraduacao={
                                formatarGraduacao
                            }
                        />


                        <InscricaoAcoes
                            etapa={1}
                            onFechar={onFechar}
                        />

                    </form>

                )}


                {etapa === 2 && inscricao && (

                    <div className="inscricao-confirmacao">

                        <div className="inscricao-confirmacao-icone">
                            ✓
                        </div>


                        <h2>
                            Inscrição registrada
                        </h2>


                        <p>
                            Confira os dados da sua
                            inscrição antes de efetuar
                            o pagamento.
                        </p>


                        <div className="inscricao-confirmacao-dados">

                            <div className="inscricao-confirmacao-item">

                                <span>
                                    Evento
                                </span>

                                <strong>
                                    {inscricao.evento}
                                </strong>

                            </div>


                            <div className="inscricao-confirmacao-item">

                                <span>
                                    Atleta
                                </span>

                                <strong>
                                    {inscricao.atleta}
                                </strong>

                            </div>


                            <div className="inscricao-confirmacao-item">

                                <span>
                                    Categoria
                                </span>

                                <strong>
                                    {inscricao.categoria}
                                </strong>

                            </div>


                            <div className="inscricao-confirmacao-item">

                                <span>
                                    Faixa
                                </span>

                                <strong>
                                    {
                                        formatarGraduacao(
                                            inscricao.graduacao
                                        )
                                    }
                                </strong>

                            </div>


                            <div className="inscricao-confirmacao-item">

                                <span>
                                    Peso
                                </span>

                                <strong>
                                    {inscricao.peso} kg
                                </strong>

                            </div>


                            <div className="inscricao-confirmacao-item">

                                <span>
                                    Modalidade
                                </span>

                                <strong>
                                    {
                                        inscricao.modalidades
                                            .map(
                                                (modalidade) => {

                                                    const encontrada =
                                                        modalidades.find(
                                                            (item) =>
                                                                item.valor ===
                                                                modalidade
                                                        );

                                                    return encontrada?.label ||
                                                        modalidade;

                                                }
                                            )
                                            .join(' / ')
                                    }
                                </strong>

                            </div>

                        </div>


                        <div className="inscricao-confirmacao-aviso">

                            Sua inscrição foi registrada.
                            Para confirmar sua participação
                            no evento, efetue o pagamento.

                        </div>


                        <InscricaoAcoes
                            etapa={2}
                            onPagamento={handlePagamento}
                        />

                    </div>

                )}

            </div>

        </div>
    );
};


export default InscricaoEvento;