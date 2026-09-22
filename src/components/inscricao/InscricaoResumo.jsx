const InscricaoResumo = ({
    usuario,
    categoria,
    peso,
    modalidadesSelecionadas,
    modalidades,
    formatarSexo,
    formatarGraduacao
}) => {

    const nomesModalidades =
        modalidadesSelecionadas
            .map(
                (modalidade) => {

                    const encontrada =
                        modalidades.find(
                            (item) =>
                                item.valor ===
                                modalidade
                        );

                    return encontrada?.label;

                }
            )
            .filter(Boolean)
            .join(' • ');


    return (
        <div className="inscricao-resumo">

            <span>
                Resumo da inscrição
            </span>


            <div>

                <strong>
                    {usuario.nome}
                </strong>


                <p>

                    {categoria?.nome || '—'}

                    {' • '}

                    {formatarSexo(
                        usuario.sexo
                    )}

                    {' • '}

                    {formatarGraduacao(
                        usuario.graduacao
                    )}

                    {' • '}

                    {peso
                        ? `${peso} kg`
                        : 'Peso não informado'
                    }

                </p>


                <p>

                    <strong>
                        Modalidades:
                    </strong>

                    {' '}

                    {nomesModalidades || 'Nenhuma'}

                </p>

            </div>

        </div>
    );
};


export default InscricaoResumo;