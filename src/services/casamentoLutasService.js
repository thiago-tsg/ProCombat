const normalizarTexto = (valor) => {
  return String(valor || "")
    .trim()
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const normalizarPeso = (peso) => {
  const valor = String(peso || "")
    .replace("kg", "")
    .replace(",", ".")
    .trim();

  const numero = Number(valor);

  return Number.isFinite(numero) ? numero : null;
};

const obterNomeCategoriaTabela = (categoria, modalidade) => {
  const categoriaNormalizada = normalizarTexto(categoria);
  const modalidadeNormalizada = normalizarTexto(modalidade);

  if (modalidadeNormalizada === "NOGI") {
    if (categoriaNormalizada.endsWith(" NOGI")) {
      return categoriaNormalizada;
    }

    return `${categoriaNormalizada} NOGI`;
  }

  return categoriaNormalizada.replace(/\s+NOGI$/, "");
};

const encontrarTabelaPeso = (
  tabelaPeso,
  categoria,
  graduacao,
  sexo,
  modalidade,
) => {
  if (!Array.isArray(tabelaPeso)) {
    return null;
  }

  const categoriaTabela = obterNomeCategoriaTabela(categoria, modalidade);

  const graduacaoNormalizada = normalizarTexto(graduacao);
  const sexoNormalizado = normalizarTexto(sexo);

  return (
    tabelaPeso.find((tabela) => {
      const categoriaTabelaNormalizada = normalizarTexto(tabela.categoria);

      const graduacaoTabela = normalizarTexto(tabela.graduacao);

      const sexoTabela = normalizarTexto(tabela.sexo);

      return (
        categoriaTabelaNormalizada === categoriaTabela &&
        graduacaoTabela === graduacaoNormalizada &&
        sexoTabela === sexoNormalizado &&
        Array.isArray(tabela.resultado) &&
        tabela.resultado.length > 0
      );
    }) || null
  );
};

const encontrarFaixaPeso = (resultado, peso) => {
  if (!Array.isArray(resultado) || peso === null) {
    return null;
  }

  for (let i = 0; i < resultado.length; i++) {
    const faixa = resultado[i];

    if (!faixa?.limite) {
      continue;
    }

    const limite = normalizarTexto(faixa.limite);

    if (limite.startsWith("ATE")) {
      const valorTexto = limite.replace("ATE", "").replace("KG", "").trim();

      const limitePeso = normalizarPeso(valorTexto);

      if (limitePeso !== null && peso <= limitePeso) {
        return {
          id: faixa.id,
          nome: faixa.nome,
          limite: faixa.limite,
        };
      }
    }

    if (limite.startsWith("ACIMA DE")) {
      const valorTexto = limite
        .replace("ACIMA DE", "")
        .replace("KG", "")
        .replace(",", ".")
        .trim();

      const limitePeso = Number(valorTexto.replace(/[^\d.]/g, ""));

      if (Number.isFinite(limitePeso) && peso >= limitePeso) {
        return {
          id: faixa.id,
          nome: faixa.nome,
          limite: faixa.limite,
        };
      }
    }
  }

  return null;
};

const obterModalidadeLabel = (modalidade) => {
  const modalidadeNormalizada = normalizarTexto(modalidade);

  if (modalidadeNormalizada === "NOGI") {
    return "NoGi";
  }

  if (modalidadeNormalizada === "ABSOLUTO") {
    return "Absoluto";
  }

  return "Gi";
};

export const encontrarFaixaPesoAtleta = ({ inscricao, evento, modalidade }) => {
  if (!inscricao || !evento) {
    return null;
  }

  const peso = normalizarPeso(inscricao.peso);

  if (peso === null) {
    return null;
  }

  const tabela = encontrarTabelaPeso(
    evento.tabelaPeso,
    inscricao.categoria,
    inscricao.graduacao,
    inscricao.sexo,
    modalidade,
  );

  if (!tabela) {
    return null;
  }

  const faixa = encontrarFaixaPeso(tabela.resultado, peso);

  if (!faixa) {
    return null;
  }

  return {
    peso,
    categoria: inscricao.categoria,
    sexo: inscricao.sexo,
    graduacao: inscricao.graduacao,
    modalidade,
    modalidadeLabel: obterModalidadeLabel(modalidade),
    faixaPeso: faixa.nome,
    limitePeso: faixa.limite,
    faixaId: faixa.id,
  };
};

export const criarChaveCasamento = (inscricao) => {
  return [
    inscricao.categoria || "",
    inscricao.sexo || "",
    inscricao.graduacao || "",
    inscricao.modalidade || "",
    inscricao.faixaPeso || "",
  ].join("|");
};

export const agruparInscricoesParaCasamento = (inscricoes, evento) => {
  const grupos = {};

  inscricoes.forEach((inscricao) => {
    const modalidades = Array.isArray(inscricao.modalidades)
      ? inscricao.modalidades
      : [];

    modalidades.forEach((modalidade) => {
      const dadosPeso = encontrarFaixaPesoAtleta({
        inscricao,
        evento,
        modalidade: modalidade.valor,
      });

      if (!dadosPeso) {
        return;
      }

      const grupo = {
        ...inscricao,
        ...dadosPeso,
      };

      const chave = [
        grupo.categoria,
        grupo.sexo,
        grupo.graduacao,
        grupo.modalidade,
        grupo.faixaPeso,
      ].join("|");

      if (!grupos[chave]) {
        grupos[chave] = {
          chave,
          categoria: grupo.categoria,
          sexo: grupo.sexo,
          graduacao: grupo.graduacao,
          modalidade: grupo.modalidade,
          modalidadeLabel: grupo.modalidadeLabel,
          faixaPeso: grupo.faixaPeso,
          limitePeso: grupo.limitePeso,
          atletas: [],
        };
      }

      grupos[chave].atletas.push(grupo);
    });
  });

  return Object.values(grupos);
};

export const gerarSugestoesDeLutas = (grupos) => {
  const lutas = [];

  grupos.forEach((grupo) => {
    const atletas = [...grupo.atletas]
      .map((atleta) => ({
        ...atleta,
        pesoNumerico: normalizarPeso(atleta.peso),
      }))
      .filter((atleta) => atleta.pesoNumerico !== null)
      .sort((a, b) => {
        return a.pesoNumerico - b.pesoNumerico;
      });

    let numeroLuta = 1;

    for (let i = 0; i + 1 < atletas.length; i += 2) {
      const atletaA = atletas[i];
      const atletaB = atletas[i + 1];

      lutas.push({
        eventoId: grupo.eventoId || null,

        categoria: grupo.categoria,
        sexo: grupo.sexo,
        graduacao: grupo.graduacao,

        modalidade: grupo.modalidade,
        modalidadeLabel: grupo.modalidadeLabel,

        faixaPeso: grupo.faixaPeso,
        limitePeso: grupo.limitePeso,

        atletaA: {
          inscricaoId: atletaA.id,
          atletaId: atletaA.atletaId,
          nome: atletaA.atleta || "Atleta",
          peso: atletaA.pesoNumerico,
        },

        atletaB: {
          inscricaoId: atletaB.id,
          atletaId: atletaB.atletaId,
          nome: atletaB.atleta || "Atleta",
          peso: atletaB.pesoNumerico,
        },

        diferencaPeso: Number(
          Math.abs(atletaA.pesoNumerico - atletaB.pesoNumerico).toFixed(3),
        ),

        numeroLuta,

        status: "montagem",
      });

      numeroLuta += 1;
    }
  });

  return lutas;
};

export const encontrarAtletasSemAdversario = (grupos) => {
  const semAdversario = [];

  grupos.forEach((grupo) => {
    const atletas = [...grupo.atletas]
      .map((atleta) => ({
        ...atleta,
        pesoNumerico: normalizarPeso(atleta.peso),
      }))
      .filter((atleta) => atleta.pesoNumerico !== null)
      .sort((a, b) => {
        return a.pesoNumerico - b.pesoNumerico;
      });

    if (atletas.length % 2 !== 0) {
      const atleta = atletas[atletas.length - 1];

      semAdversario.push({
        inscricaoId: atleta.id,
        atletaId: atleta.atletaId,
        nome: atleta.atleta || "Atleta",
        peso: atleta.pesoNumerico,

        categoria: grupo.categoria,
        sexo: grupo.sexo,
        graduacao: grupo.graduacao,
        modalidade: grupo.modalidade,
        modalidadeLabel: grupo.modalidadeLabel,
        faixaPeso: grupo.faixaPeso,
      });
    }
  });

  return semAdversario;
};
