import { useState } from 'react';

import FiltroPeso from './FiltroPeso';
import ResultadoPeso from './ResultadoPeso';

import '../../styles/evento/TabelaPeso.scss';

const TabelaPeso = ({ evento }) => {

    const [tipoPeso, setTipoPeso] = useState('');
    const [pesagem, setPesagem] = useState('');
    const [sexo, setSexo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [graduacao, setGraduacao] = useState('');

    const resultado = evento.tabelaPeso?.find((item) => (
        item.tipoPeso === tipoPeso &&
        item.pesagem === pesagem &&
        item.sexo === sexo &&
        item.categoria === categoria &&
        item.graduacao === graduacao
    ));

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
                    Consulte as categorias de peso disponíveis
                    para este evento.
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

                evento={evento}
            />

            <ResultadoPeso
                resultado={resultado?.resultado}
            />

        </section>
    );
};

export default TabelaPeso;