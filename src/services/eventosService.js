import { ref, push, get, set, update, remove } from "firebase/database";

import { db } from "../firebase/firebaseConfig";

const eventosRef = ref(db, "eventos");

// ==================================================
// BUSCAR TODOS OS EVENTOS
// ==================================================

export const buscarEventos = async () => {
  const snapshot = await get(eventosRef);

  if (!snapshot.exists()) {
    return [];
  }

  const dados = snapshot.val();

  return Object.entries(dados).map(([id, evento]) => ({
    id,
    ...evento,
  }));
};

// ==================================================
// BUSCAR UM EVENTO
// ==================================================

export const buscarEvento = async (id) => {
  const eventoRef = ref(db, `eventos/${id}`);

  const snapshot = await get(eventoRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id,
    ...snapshot.val(),
  };
};

// ==================================================
// CRIAR EVENTO
// ==================================================

export const criarEvento = async (evento) => {
  const novoEventoRef = push(eventosRef);

  const novoEvento = {
    ...evento,
    id: novoEventoRef.key,
  };

  await set(novoEventoRef, novoEvento);

  return novoEvento;
};

// ==================================================
// ATUALIZAR EVENTO
// ==================================================

export const atualizarEvento = async (id, evento) => {
  const eventoRef = ref(db, `eventos/${id}`);

  const eventoAtualizado = {
    ...evento,
    id,
  };

  await update(eventoRef, eventoAtualizado);

  return eventoAtualizado;
};

// ==================================================
// PUBLICAR EVENTO
// ==================================================

export const publicarEvento = async (id) => {
  const eventoRef = ref(db, `eventos/${id}`);

  await update(eventoRef, {
    status: "publicado",
  });
};

// ==================================================
// EXCLUIR EVENTO
// ==================================================

export const excluirEvento = async (id) => {
  const eventoRef = ref(db, `eventos/${id}`);

  await remove(eventoRef);
};
