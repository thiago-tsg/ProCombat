/*
|--------------------------------------------------------------------------
| CATEGORIAS POR IDADE
|--------------------------------------------------------------------------
*/

export const categoriasIdade = [
  {
    nome: "Kids 1",
    idadeMinima: 3,
    idadeMaxima: 5,
  },
  {
    nome: "Kids 2",
    idadeMinima: 6,
    idadeMaxima: 7,
  },
  {
    nome: "Kids 3",
    idadeMinima: 8,
    idadeMaxima: 9,
  },
  {
    nome: "Kids 4",
    idadeMinima: 10,
    idadeMaxima: 11,
  },
  {
    nome: "Kids 5",
    idadeMinima: 12,
    idadeMaxima: 13,
  },
  {
    nome: "Infanto Juvenil",
    idadeMinima: 14,
    idadeMaxima: 15,
  },
  {
    nome: "Juvenil",
    idadeMinima: 16,
    idadeMaxima: 17,
  },
  {
    nome: "Adulto",
    idadeMinima: 18,
    idadeMaxima: 29,
  },
  {
    nome: "Master 1",
    idadeMinima: 30,
    idadeMaxima: 35,
  },
  {
    nome: "Master 2",
    idadeMinima: 36,
    idadeMaxima: 40,
  },
  {
    nome: "Master 3",
    idadeMinima: 41,
    idadeMaxima: 45,
  },
  {
    nome: "Master 4",
    idadeMinima: 46,
    idadeMaxima: 50,
  },
  {
    nome: "Master 5",
    idadeMinima: 51,
    idadeMaxima: 55,
  },
  {
    nome: "Master 6",
    idadeMinima: 56,
    idadeMaxima: 60,
  },
  {
    nome: "Master 7",
    idadeMinima: 61,
    idadeMaxima: Infinity,
  },
];

/*
|--------------------------------------------------------------------------
| CALCULAR IDADE
|--------------------------------------------------------------------------
*/

export const calcularIdade = (dataNascimento, dataEvento) => {
  if (!dataNascimento || !dataEvento) {
    return null;
  }

  const nascimento = new Date(`${dataNascimento}T00:00:00`);
  const evento = new Date(`${dataEvento}T00:00:00`);

  if (Number.isNaN(nascimento.getTime()) || Number.isNaN(evento.getTime())) {
    return null;
  }

  let idade = evento.getFullYear() - nascimento.getFullYear();

  const mes = evento.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && evento.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade >= 0 ? idade : null;
};

/*
|--------------------------------------------------------------------------
| ENCONTRAR CATEGORIA
|--------------------------------------------------------------------------
*/

export const encontrarCategoria = (idade) => {
  if (idade === null || idade === undefined || Number.isNaN(Number(idade))) {
    return null;
  }

  return (
    categoriasIdade.find(
      (categoria) =>
        idade >= categoria.idadeMinima && idade <= categoria.idadeMaxima,
    ) || null
  );
};

/*
|--------------------------------------------------------------------------
| FORMATAR SEXO
|--------------------------------------------------------------------------
*/

export const formatarSexo = (sexo) => {
  const sexos = {
    masculino: "Masculino",
    feminino: "Feminino",
  };

  return sexos[sexo] || sexo || "-";
};

/*
|--------------------------------------------------------------------------
| FORMATAR GRADUAÇÃO
|--------------------------------------------------------------------------
*/

export const formatarGraduacao = (graduacao) => {
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

  return graduacoes[graduacao] || graduacao || "-";
};

/*
|--------------------------------------------------------------------------
| MONTAR MODALIDADES DO EVENTO
|--------------------------------------------------------------------------
*/

export const montarModalidades = (evento) => {
  if (!evento || typeof evento !== "object") {
    return [];
  }

  const modalidades = [];

  /*
  |--------------------------------------------------------------------------
  | GI
  |--------------------------------------------------------------------------
  */

  if (evento.gi !== false) {
    modalidades.push({
      valor: "gi",
      label: "Gi",
    });
  }

  /*
  |--------------------------------------------------------------------------
  | NOGI
  |--------------------------------------------------------------------------
  */

  if (evento.nogi === true) {
    modalidades.push({
      valor: "nogi",
      label: "NoGi",
    });
  }

  /*
  |--------------------------------------------------------------------------
  | ABSOLUTO
  |--------------------------------------------------------------------------
  */

  if (evento.absoluto === true) {
    modalidades.push({
      valor: "absoluto",
      label: "Absoluto",
    });
  }

  return modalidades;
};
