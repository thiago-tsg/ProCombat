import {
  ref,
  push,
  get,
  set,
  update,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";

import { db } from "../firebase/firebaseConfig";

const inscricoesRef = ref(db, "inscricoes");

export const criarInscricao = async (inscricao) => {
  const novaInscricaoRef = push(inscricoesRef);

  const novaInscricao = {
    ...inscricao,
    id: novaInscricaoRef.key,
    statusPagamento: "aguardando",
    statusCasamento: "aguardando",
    criadoEm: Date.now(),
  };

  await set(novaInscricaoRef, novaInscricao);

  return novaInscricao;
};

export const buscarInscricaoPorAtletaEvento = async (atletaId, eventoId) => {
  const consulta = query(
    inscricoesRef,
    orderByChild("atletaId"),
    equalTo(atletaId),
  );

  const snapshot = await get(consulta);

  if (!snapshot.exists()) {
    return null;
  }

  const inscricoes = snapshot.val();

  const resultado = Object.entries(inscricoes).find(
    ([, inscricao]) => inscricao.eventoId === eventoId,
  );

  if (!resultado) {
    return null;
  }

  const [id, inscricao] = resultado;

  return {
    id,
    ...inscricao,
  };
};

export const buscarInscricoesDoAtleta = async (atletaId) => {
  const consulta = query(
    inscricoesRef,
    orderByChild("atletaId"),
    equalTo(atletaId),
  );

  const snapshot = await get(consulta);

  if (!snapshot.exists()) {
    return [];
  }

  const inscricoes = snapshot.val();

  return Object.entries(inscricoes).map(([id, inscricao]) => ({
    id,
    ...inscricao,
  }));
};

export const definirPagamentoManual = async (inscricaoId) => {
  const inscricaoRef = ref(db, `inscricoes/${inscricaoId}`);

  const atualizacao = {
    statusPagamento: "pagamento_manual",
    atualizadoEm: Date.now(),
  };

  await update(inscricaoRef, atualizacao);

  return {
    id: inscricaoId,
    ...atualizacao,
  };
};

export const criarInscricaoManual = async (inscricao) => {
  const novaInscricaoRef = push(inscricoesRef);

  const novaInscricao = {
    ...inscricao,
    id: novaInscricaoRef.key,
    statusPagamento: "pagamento_manual",
    statusCasamento: "aguardando",
    criadoEm: Date.now(),
  };

  await set(novaInscricaoRef, novaInscricao);

  return novaInscricao;
};

export const buscarInscricoesElegiveisParaCasamento = async (eventoId) => {
  const snapshot = await get(inscricoesRef);

  if (!snapshot.exists()) {
    return [];
  }

  const inscricoes = snapshot.val();

  return Object.entries(inscricoes)
    .map(([id, inscricao]) => ({
      id,
      ...inscricao,
    }))
    .filter(
      (inscricao) =>
        inscricao.eventoId === eventoId &&
        (inscricao.statusPagamento === "pago" ||
          inscricao.statusPagamento === "pagamento_manual") &&
        inscricao.statusCasamento === "aguardando",
    );
};
