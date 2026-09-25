import {
  ref,
  push,
  get,
  set,
  update,
  remove,
} from "firebase/database";

import { db } from "../firebase/firebaseConfig";

const lutasRef = ref(db, "lutas");

export const buscarLutas = async () => {
  const snapshot = await get(lutasRef);

  if (!snapshot.exists()) {
    return [];
  }

  const lutas = snapshot.val();

  return Object.entries(lutas).map(([id, luta]) => ({
    id,
    ...luta,
  }));
};

export const buscarLutasPorEvento = async (eventoId) => {
  const lutas = await buscarLutas();

  return lutas.filter((luta) => luta.eventoId === eventoId);
};

export const criarLuta = async (luta) => {
  const novaLutaRef = push(lutasRef);

  const novaLuta = {
    ...luta,
    id: novaLutaRef.key,
    status: "montagem",
    criadoEm: Date.now(),
    atualizadoEm: Date.now(),
  };

  await set(novaLutaRef, novaLuta);

  return novaLuta;
};

export const atualizarLuta = async (id, luta) => {
  const lutaRef = ref(db, `lutas/${id}`);

  const atualizacao = {
    ...luta,
    atualizadoEm: Date.now(),
  };

  await update(lutaRef, atualizacao);

  return {
    id,
    ...atualizacao,
  };
};

export const publicarLuta = async (id) => {
  const lutaRef = ref(db, `lutas/${id}`);

  const atualizacao = {
    status: "publicada",
    atualizadoEm: Date.now(),
  };

  await update(lutaRef, atualizacao);

  return {
    id,
    ...atualizacao,
  };
};

export const excluirLuta = async (id) => {
  const lutaRef = ref(db, `lutas/${id}`);

  await remove(lutaRef);
};