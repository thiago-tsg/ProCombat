const ResultadoPeso = ({
    resultado,
    sexo,
    categoria,
    graduacao
}) => {

    if (!resultado) {

        return (
            <div className="resultado-peso vazio">

                <p>
                    Selecione todos os filtros para
                    consultar a tabela de peso.
                </p>

            </div>
        );

    }


    const formatarPeso = (valor) => {

        if (valor === null || valor === undefined) {
            return '';
        }


        return valor
            .toFixed(3)
            .replace('.', ',');
    };


    const formatarNome = (valor) => {

        if (!valor) {
            return '';
        }


        const nomes = {
            masculino: 'MASCULINO',
            feminino: 'FEMININO',

            'juvenil-nogi':
                'JUVENIL NOGI',

            'adulto-master6-nogi':
                'ADULTO AO MASTER 6 NOGI',

            'pre-mirim':
                'PRÉ-MIRIM',

            mirim:
                'MIRIM',

            'infantil-a':
                'INFANTIL A',

            'infantil-b':
                'INFANTIL B',

            'infanto-juvenil-a':
                'INF-JUV A',

            'infanto-juvenil-b':
                'INF-JUV B',

            juvenil:
                'JUVENIL',

            'adulto-master6':
                'ADULTO AO MASTER 6',

            branca:
                'BRANCA',

            cinza:
                'CINZA',

            amarela:
                'AMARELA',

            laranja:
                'LARANJA',

            verde:
                'VERDE',

            azul:
                'AZUL',

            roxa:
                'ROXA',

            marrom:
                'MARROM',

            preta:
                'PRETA'
        };


        return (
            nomes[valor] ||
            valor.toUpperCase()
        );

    };


    const gerarChave = (faixa) => {

        const partes = [];


        if (sexo) {
            partes.push(
                formatarNome(sexo)
            );
        }


        if (categoria) {
            partes.push(
                formatarNome(categoria)
            );
        }


        if (graduacao) {
            partes.push(
                formatarNome(graduacao)
            );
        }


        partes.push(
            faixa.nome.toUpperCase()
        );


        return partes.join('/');

    };


    const gerarTextoPeso = (
        faixa,
        index
    ) => {

        // ------------------------------------------
        // ÚLTIMA FAIXA SEM LIMITE
        // ------------------------------------------

        if (
            faixa.limite === null ||
            faixa.limite === undefined
        ) {

            const faixaAnterior =
                resultado.faixas[index - 1];


            if (
                faixaAnterior &&
                faixaAnterior.limite !== null &&
                faixaAnterior.limite !== undefined
            ) {

                const pesoInicial =
                    faixaAnterior.limite + 0.001;


                return `Acima de ${formatarPeso(
                    pesoInicial
                )} kg`;

            }


            return 'Acima do limite anterior';

        }


        // ------------------------------------------
        // LIMITE NORMAL
        // ------------------------------------------

        return `Até ${formatarPeso(
            faixa.limite
        )} kg`;

    };


    return (
        <div className="resultado-peso">

            <div className="resultado-peso-header">

                <span>
                    Chaves de luta
                </span>


                <h3>
                    Categorias encontradas
                </h3>


                <p>
                    Resultado baseado nos filtros
                    selecionados.
                </p>

            </div>


            <div className="resultado-peso-lista">

                {resultado.faixas.map(
                    (faixa, index) => (

                        <div
                            className="resultado-peso-item"
                            key={`${resultado.id}-${faixa.nome}`}
                        >

                            <div className="resultado-peso-chave">

                                {gerarChave(faixa)}

                            </div>


                            <div className="resultado-peso-limite">

                                {gerarTextoPeso(
                                    faixa,
                                    index
                                )}

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    );

};


export default ResultadoPeso;