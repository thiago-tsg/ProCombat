const InscricaoModalidades = ({
    modalidades,
    modalidadesSelecionadas,
    onAlternar
}) => {

    if (!modalidades.length) {
        return null;
    }


    return (
        <div className="inscricao-modalidade">

            <div className="inscricao-section-title">

                <span>
                    Modalidades
                </span>

                <p>
                    Selecione uma ou mais modalidades.
                </p>

            </div>


            <div className="inscricao-modalidade-opcoes">

                {modalidades.map(
                    (item) => {

                        const selecionada =
                            modalidadesSelecionadas.includes(
                                item.valor
                            );


                        return (
                            <label
                                className={
                                    selecionada
                                        ? 'inscricao-modalidade-opcao ativo'
                                        : 'inscricao-modalidade-opcao'
                                }
                                key={item.valor}
                            >

                                <input
                                    type="checkbox"
                                    value={item.valor}
                                    checked={selecionada}
                                    onChange={() =>
                                        onAlternar(
                                            item.valor
                                        )
                                    }
                                />

                                <span>
                                    {item.label}
                                </span>

                            </label>
                        );

                    }
                )}

            </div>

        </div>
    );
};


export default InscricaoModalidades;