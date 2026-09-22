import { useState } from 'react';

import FiltroPeso from './FiltroPeso';
import ResultadoPeso from './ResultadoPeso';

import { tabelasPeso } from '../../data/tabelasPeso';

import '../../styles/evento/TabelaPeso.scss';

const TabelaPeso = () => {

    const [tipoPeso, setTipoPeso] = useState('');
    const [pesagem, setPesagem] = useState('');
    const [sexo, setSexo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [graduacao, setGraduacao] = useState('');

    const resultado = tabelasPeso.find((item) => {

        const tipoPesoCorreto =
            item.tipoPeso === tipoPeso;

        const pesagemCorreta =
            item.pesagem === pesagem;

        const sexoCorreto =
            item.sexo === sexo ||
            item.sexo === 'ambos';

        const categoriaCorreta =
            item.categoria === categoria;

        const graduacaoCorreta =
            item.graduacoes?.includes(graduacao);

        return (
            tipoPesoCorreto &&
            pesagemCorreta &&
            sexoCorreto &&
            categoriaCorreta &&
            graduacaoCorreta
        );
    });

    const handleTipoPeso = (valor) => {

        setTipoPeso(valor);

        setPesagem('');
        setSexo('');
        setCategoria('');
        setGraduacao('');
    };

    const handlePesagem = (valor) => {

        setPesagem(valor);

        setSexo('');
        setCategoria('');
        setGraduacao('');
    };

    const handleSexo = (valor) => {

        setSexo(valor);

        setCategoria('');
        setGraduacao('');
    };

    const handleCategoria = (valor) => {

        setCategoria(valor);

        setGraduacao('');
    };

    return (
        <section className="tabela-peso">

            <div className="tabela-peso-header">

                <span>
                    Tabela de peso
                </span>

                <h2>
                    Categorias e pesos
                </h2>

                <p>
                    Consulte a categoria de peso
                    correspondente ao atleta.
                </p>

            </div>

            <FiltroPeso
                tipoPeso={tipoPeso}
                setTipoPeso={handleTipoPeso}

                pesagem={pesagem}
                setPesagem={handlePesagem}

                sexo={sexo}
                setSexo={handleSexo}

                categoria={categoria}
                setCategoria={handleCategoria}

                graduacao={graduacao}
                setGraduacao={setGraduacao}

                tabelas={tabelasPeso}
            />

            <ResultadoPeso
                resultado={resultado}
                sexo={sexo}
                categoria={categoria}
                graduacao={graduacao}
            />

        </section>
    );
};

export default TabelaPeso;