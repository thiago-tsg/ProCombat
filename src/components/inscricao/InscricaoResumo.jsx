const InscricaoResumo = ({ inscricao }) => {
  if (!inscricao) {
    return null;
  }

  const modalidades = Array.isArray(inscricao.modalidades)
    ? inscricao.modalidades
    : [];

  const nomesModalidades = modalidades
    .map((modalidade) => modalidade?.label)
    .filter(Boolean)
    .join(" • ");

  const formatarSexo = (sexo) => {
    const sexos = {
      masculino: "Masculino",
      feminino: "Feminino",
    };

    return sexos[sexo] || sexo || "—";
  };

  const formatarGraduacao = (graduacao) => {
    const graduacoes = {
      branca: "Faixa Branca",
      cinza: "Faixa Cinza",
      amarela: "Faixa Amarela",
      laranja: "Faixa Laranja",
      verde: "Faixa Verde",
      azul: "Faixa Azul",
      roxa: "Faixa Roxa",
      marrom: "Faixa Marrom",
      preta: "Faixa Preta",
      coral: "Faixa Coral",
      vermelha: "Faixa Vermelha",
    };

    return graduacoes[graduacao] || graduacao || "—";
  };

  return (
    <div className="inscricao-resumo">
      <div className="inscricao-resumo-titulo">
        <span>Resumo da inscrição</span>
        <h3>Inscrição realizada com sucesso</h3>
      </div>

      <div className="inscricao-resumo-dados">
        <div className="inscricao-resumo-item">
          <span>Atleta</span>
          <strong>{inscricao.atleta || "—"}</strong>
        </div>

        <div className="inscricao-resumo-item">
          <span>Evento</span>
          <strong>{inscricao.evento || "—"}</strong>
        </div>

        <div className="inscricao-resumo-item">
          <span>Categoria</span>
          <strong>{inscricao.categoria || "—"}</strong>
        </div>

        <div className="inscricao-resumo-item">
          <span>Idade no evento</span>
          <strong>
            {inscricao.idade !== undefined && inscricao.idade !== null
              ? `${inscricao.idade} anos`
              : "—"}
          </strong>
        </div>

        <div className="inscricao-resumo-item">
          <span>Sexo</span>
          <strong>{formatarSexo(inscricao.sexo)}</strong>
        </div>

        <div className="inscricao-resumo-item">
          <span>Graduação</span>
          <strong>{formatarGraduacao(inscricao.graduacao)}</strong>
        </div>

        <div className="inscricao-resumo-item">
          <span>Peso</span>
          <strong>
            {inscricao.peso ? `${inscricao.peso} kg` : "—"}
          </strong>
        </div>

        <div className="inscricao-resumo-item">
          <span>Modalidades</span>
          <strong>{nomesModalidades || "Nenhuma"}</strong>
        </div>
      </div>

      <div className="inscricao-resumo-status">
        <span>Status</span>
        <strong>Aguardando pagamento</strong>
      </div>
    </div>
  );
};

export default InscricaoResumo;