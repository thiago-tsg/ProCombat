const infoGeraisPadrao = {
  organizacao:
    "O Pro Combat é responsável pela organização, estrutura e realização do evento.",

  resultadosOnline:
    "Os resultados das lutas poderão ser acompanhados online durante e após o evento.",

  agenda:
    "A programação completa do evento será divulgada pela organização com horários de abertura, pesagem, checagem e início das lutas.",

  quemPodeCompetir:
    "Podem competir atletas que estejam dentro das categorias, idades, pesos e graduações determinadas para este evento.",

  inscricao:
    "As inscrições devem ser realizadas através da plataforma oficial do evento. O atleta deve conferir todas as informações antes de finalizar sua inscrição.",

  tabelaPeso:
    "Consulte a tabela de peso para verificar os limites correspondentes à sua categoria, sexo, graduação e modalidade.",

  agrupamentoPeso:
    "Os atletas serão agrupados de acordo com categoria, faixa etária, sexo, graduação e peso, conforme as regras do evento.",

  absoluto:
    "O absoluto reúne atletas de categorias de peso determinadas pela organização, seguindo os critérios e regras definidos para esta edição.",

  lutasCasadas:
    "As lutas casadas são definidas previamente pela organização de acordo com as informações fornecidas pelos atletas.",

  premiacao:
    "A premiação será realizada conforme as categorias e disputas previstas na programação oficial do evento.",

  regrasPontosEquipe:
    "A pontuação por equipe seguirá os critérios estabelecidos pela organização para esta edição.",

  tempoLuta:
    "O tempo de cada luta será definido de acordo com a categoria, faixa etária e regras aplicáveis.",

  vestimentas:
    "Os atletas devem utilizar as vestimentas permitidas para sua modalidade e categoria, seguindo as regras da organização.",

  pesagem:
    "A pesagem deverá ser realizada conforme os horários e procedimentos definidos pela organização.",

  horariosAbertura:
    "Os horários de abertura das áreas do evento serão divulgados pela organização.",

  entradaPublico:
    "A entrada do público seguirá as regras e condições determinadas pela organização do evento.",

  termoResponsabilidade:
    "Todos os atletas deverão aceitar o termo de responsabilidade antes de participar do evento.",

  filmagemFotos:
    "O evento poderá contar com cobertura de fotos e vídeos. Ao participar, o atleta declara estar ciente das condições de uso de imagem previstas pela organização.",

  reembolso:
    "As condições para cancelamento e reembolso seguem as regras estabelecidas no regulamento do evento.",

  glossario:
    "O glossário apresenta os principais termos utilizados na organização, categorias, regras e andamento das competições.",
};

/*
|--------------------------------------------------------------------------
| CATEGORIAS PADRÃO
|--------------------------------------------------------------------------
*/

const categoriasPadrao = [
  "PRE-MIRIM",
  "MIRIM",

  "INFANTIL A",
  "INFANTIL B",

  "INFANTO-JUVENIL A",
  "INFANTO-JUVENIL B",

  "JUVENIL",

  "ADULTO",

  "MASTER 1",
  "MASTER 2",
  "MASTER 3",
  "MASTER 4",
  "MASTER 5",
  "MASTER 6",
  "MASTER 7",
];

/*
|--------------------------------------------------------------------------
| GRADUAÇÕES PADRÃO
|--------------------------------------------------------------------------
*/

const graduacoesPadrao = [
  "BRANCA",
  "CINZA",
  "AMARELA",
  "LARANJA",
  "VERDE",
  "AZUL",
  "ROXA",
  "MARROM",
  "PRETA",
];

/*
|--------------------------------------------------------------------------
| MODALIDADES PADRÃO
|--------------------------------------------------------------------------
*/

const modalidadesPadrao = [
  {
    valor: "gi",
    label: "Gi",
  },

  {
    valor: "nogi",
    label: "NoGi",
  },
];

/*
|--------------------------------------------------------------------------
| SEXOS PADRÃO
|--------------------------------------------------------------------------
*/

const sexosPadrao = [
  {
    valor: "masculino",
    label: "Masculino",
  },

  {
    valor: "feminino",
    label: "Feminino",
  },
];

/*
|--------------------------------------------------------------------------
| FAIXAS DE PESO
|--------------------------------------------------------------------------
|
| Aqui ficam somente os pesos.
|
| Cada categoria possui sua própria tabela.
| Masculino e feminino possuem tabelas separadas.
| Adulto e cada Master possuem tabelas separadas.
|
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| FUNÇÃO AUXILIAR
|--------------------------------------------------------------------------
*/

const criarResultadoPeso = (pesos) => {
  return pesos.map((peso, index) => ({
    id: index + 1,
    nome: peso.nome,
    limite: peso.limite,
  }));
};

/*
|--------------------------------------------------------------------------
| P.A. / NOGI
|--------------------------------------------------------------------------
*/

const pesosNoGi = {
  "PRE-MIRIM": {
    masculino: [
      ["GALO", "até 14,700 kg"],
      ["PLUMA", "até 17,900 kg"],
      ["PENA", "até 20 kg"],
      ["LEVE", "até 24 kg"],
      ["MEDIO", "até 26 kg"],
      ["MEIO-PESADO", "até 29 kg"],
      ["PESADO", "até 32 kg"],
      ["SUPER-PESADO", "até 35 kg"],
      ["PESADISSIMO", "acima de 35,001 kg"],
    ],

    feminino: [
      ["GALO", "até 14,700 kg"],
      ["PLUMA", "até 17,900 kg"],
      ["PENA", "até 20 kg"],
      ["LEVE", "até 24 kg"],
      ["MEDIO", "até 26 kg"],
      ["MEIO-PESADO", "até 29 kg"],
      ["PESADO", "até 32 kg"],
      ["SUPER-PESADO", "até 35 kg"],
      ["PESADISSIMO", "acima de 35,001 kg"],
    ],
  },

  MIRIM: {
    masculino: [
      ["GALO", "até 18,200 kg"],
      ["PLUMA", "até 21 kg"],
      ["PENA", "até 24 kg"],
      ["LEVE", "até 27 kg"],
      ["MEDIO", "até 30,200 kg"],
      ["MEIO-PESADO", "até 33,200 kg"],
      ["PESADO", "até 36,200 kg"],
      ["SUPER-PESADO", "até 39,300 kg"],
      ["PESADISSIMO", "acima de 39,301 kg"],
    ],

    feminino: [
      ["GALO", "até 18,200 kg"],
      ["PLUMA", "até 21 kg"],
      ["PENA", "até 24 kg"],
      ["LEVE", "até 27 kg"],
      ["MEDIO", "até 30,200 kg"],
      ["MEIO-PESADO", "até 33,200 kg"],
      ["PESADO", "até 36,200 kg"],
      ["SUPER-PESADO", "até 39,300 kg"],
      ["PESADISSIMO", "acima de 39,301 kg"],
    ],
  },

  "INFANTIL A": {
    masculino: [
      ["GALO", "até 24 kg"],
      ["PLUMA", "até 27 kg"],
      ["PENA", "até 30,200 kg"],
      ["LEVE", "até 33,200 kg"],
      ["MEDIO", "até 36,200 kg"],
      ["MEIO-PESADO", "até 39,300 kg"],
      ["PESADO", "até 42,300 kg"],
      ["SUPER-PESADO", "até 45,300 kg"],
      ["PESADISSIMO", "acima de 45,301 kg"],
    ],

    feminino: [
      ["GALO", "até 24 kg"],
      ["PLUMA", "até 27 kg"],
      ["PENA", "até 30,200 kg"],
      ["LEVE", "até 33,200 kg"],
      ["MEDIO", "até 36,200 kg"],
      ["MEIO-PESADO", "até 39,300 kg"],
      ["PESADO", "até 42,300 kg"],
      ["SUPER-PESADO", "até 45,300 kg"],
      ["PESADISSIMO", "acima de 45,301 kg"],
    ],
  },

  "INFANTIL B": {
    masculino: [
      ["GALO", "até 30,200 kg"],
      ["PLUMA", "até 33,200 kg"],
      ["PENA", "até 36,200 kg"],
      ["LEVE", "até 39,300 kg"],
      ["MEDIO", "até 42,300 kg"],
      ["MEIO-PESADO", "até 45,300 kg"],
      ["PESADO", "até 48,300 kg"],
      ["SUPER-PESADO", "até 51,500 kg"],
      ["PESADISSIMO", "acima de 51,501 kg"],
    ],

    feminino: [
      ["GALO", "até 30,200 kg"],
      ["PLUMA", "até 33,200 kg"],
      ["PENA", "até 36,200 kg"],
      ["LEVE", "até 39,300 kg"],
      ["MEDIO", "até 42,300 kg"],
      ["MEIO-PESADO", "até 45,300 kg"],
      ["PESADO", "até 48,300 kg"],
      ["SUPER-PESADO", "até 51,500 kg"],
      ["PESADISSIMO", "acima de 51,501 kg"],
    ],
  },

  "INFANTO-JUVENIL A": {
    masculino: [
      ["GALO", "até 36,200 kg"],
      ["PLUMA", "até 40,300 kg"],
      ["PENA", "até 44,300 kg"],
      ["LEVE", "até 48,300 kg"],
      ["MEDIO", "até 52,500 kg"],
      ["MEIO-PESADO", "até 56,500 kg"],
      ["PESADO", "até 60,500 kg"],
      ["SUPER-PESADO", "até 65 kg"],
      ["PESADISSIMO", "acima de 65,001 kg"],
    ],

    feminino: [
      ["GALO", "até 36,200 kg"],
      ["PLUMA", "até 40,300 kg"],
      ["PENA", "até 44,300 kg"],
      ["LEVE", "até 48,300 kg"],
      ["MEDIO", "até 52,500 kg"],
      ["MEIO-PESADO", "até 56,500 kg"],
      ["PESADO", "até 60,500 kg"],
      ["SUPER-PESADO", "até 65 kg"],
      ["PESADISSIMO", "acima de 65,001 kg"],
    ],
  },

  "INFANTO-JUVENIL B": {
    masculino: [
      ["GALO", "até 44,300 kg"],
      ["PLUMA", "até 48,300 kg"],
      ["PENA", "até 52,500 kg"],
      ["LEVE", "até 56,500 kg"],
      ["MEDIO", "até 60,500 kg"],
      ["MEIO-PESADO", "até 65 kg"],
      ["PESADO", "até 69 kg"],
      ["SUPER-PESADO", "até 73 kg"],
      ["PESADISSIMO", "acima de 73,001 kg"],
    ],

    feminino: [
      ["GALO", "até 44,300 kg"],
      ["PLUMA", "até 48,300 kg"],
      ["PENA", "até 52,500 kg"],
      ["LEVE", "até 56,500 kg"],
      ["MEDIO", "até 60,500 kg"],
      ["MEIO-PESADO", "até 65 kg"],
      ["PESADO", "até 69 kg"],
      ["SUPER-PESADO", "até 73 kg"],
      ["PESADISSIMO", "acima de 73,001 kg"],
    ],
  },

  JUVENIL: {
    masculino: [
      ["GALO", "até 51,500 kg"],
      ["PLUMA", "até 56,500 kg"],
      ["PENA", "até 61,500 kg"],
      ["LEVE", "até 66,500 kg"],
      ["MEDIO", "até 71,500 kg"],
      ["MEIO-PESADO", "até 76,500 kg"],
      ["PESADO", "até 81,500 kg"],
      ["SUPER-PESADO", "até 86,500 kg"],
      ["PESADISSIMO", "acima de 86,501 kg"],
    ],

    feminino: [
      ["GALO", "até 42,500 kg"],
      ["PLUMA", "até 46,500 kg"],
      ["PENA", "até 50,500 kg"],
      ["LEVE", "até 54,500 kg"],
      ["MEDIO", "até 58,500 kg"],
      ["MEIO-PESADO", "até 62,500 kg"],
      ["PESADO", "até 66,500 kg"],
      ["SUPER-PESADO", "acima de 66,501 kg"],
    ],
  },

  ADULTO: {
    masculino: [
      ["GALO", "até 55,500 kg"],
      ["PLUMA", "até 61,500 kg"],
      ["PENA", "até 67,500 kg"],
      ["LEVE", "até 73,500 kg"],
      ["MEDIO", "até 79,500 kg"],
      ["MEIO-PESADO", "até 85,500 kg"],
      ["PESADO", "até 91,500 kg"],
      ["SUPER-PESADO", "até 97,500 kg"],
      ["PESADISSIMO", "acima de 97,501 kg"],
    ],

    feminino: [
      ["GALO", "até 46,500 kg"],
      ["PLUMA", "até 51,500 kg"],
      ["PENA", "até 56,500 kg"],
      ["LEVE", "até 61,500 kg"],
      ["MEDIO", "até 66,500 kg"],
      ["MEIO-PESADO", "até 71,500 kg"],
      ["PESADO", "até 76,500 kg"],
      ["SUPER-PESADO", "acima de 76,501 kg"],
    ],
  },
};

/*
|--------------------------------------------------------------------------
| GI / KIMONO
|--------------------------------------------------------------------------
*/

const pesosGi = {
  "PRE-MIRIM": {
    masculino: [
      ["GALO", "até 14,700 kg"],
      ["PLUMA", "até 17,900 kg"],
      ["PENA", "até 20 kg"],
      ["LEVE", "até 24 kg"],
      ["MEDIO", "até 26 kg"],
      ["MEIO-PESADO", "até 29 kg"],
      ["PESADO", "até 32 kg"],
      ["SUPER-PESADO", "até 35 kg"],
      ["PESADISSIMO", "acima de 35,001 kg"],
    ],

    feminino: [
      ["GALO", "até 14,700 kg"],
      ["PLUMA", "até 17,900 kg"],
      ["PENA", "até 20 kg"],
      ["LEVE", "até 24 kg"],
      ["MEDIO", "até 26 kg"],
      ["MEIO-PESADO", "até 29 kg"],
      ["PESADO", "até 32 kg"],
      ["SUPER-PESADO", "até 35 kg"],
      ["PESADISSIMO", "acima de 35,001 kg"],
    ],
  },

  MIRIM: {
    masculino: [
      ["GALO", "até 18,200 kg"],
      ["PLUMA", "até 21 kg"],
      ["PENA", "até 24 kg"],
      ["LEVE", "até 27 kg"],
      ["MEDIO", "até 30,200 kg"],
      ["MEIO-PESADO", "até 33,200 kg"],
      ["PESADO", "até 36,200 kg"],
      ["SUPER-PESADO", "até 39,300 kg"],
      ["PESADISSIMO", "acima de 39,301 kg"],
    ],

    feminino: [
      ["GALO", "até 18,200 kg"],
      ["PLUMA", "até 21 kg"],
      ["PENA", "até 24 kg"],
      ["LEVE", "até 27 kg"],
      ["MEDIO", "até 30,200 kg"],
      ["MEIO-PESADO", "até 33,200 kg"],
      ["PESADO", "até 36,200 kg"],
      ["SUPER-PESADO", "até 39,300 kg"],
      ["PESADISSIMO", "acima de 39,301 kg"],
    ],
  },

  "INFANTIL A": {
    masculino: [
      ["GALO", "até 24 kg"],
      ["PLUMA", "até 27 kg"],
      ["PENA", "até 30,200 kg"],
      ["LEVE", "até 33,200 kg"],
      ["MEDIO", "até 36,200 kg"],
      ["MEIO-PESADO", "até 39,300 kg"],
      ["PESADO", "até 42,300 kg"],
      ["SUPER-PESADO", "até 45,300 kg"],
      ["PESADISSIMO", "acima de 45,301 kg"],
    ],

    feminino: [
      ["GALO", "até 24 kg"],
      ["PLUMA", "até 27 kg"],
      ["PENA", "até 30,200 kg"],
      ["LEVE", "até 33,200 kg"],
      ["MEDIO", "até 36,200 kg"],
      ["MEIO-PESADO", "até 39,300 kg"],
      ["PESADO", "até 42,300 kg"],
      ["SUPER-PESADO", "até 45,300 kg"],
      ["PESADISSIMO", "acima de 45,301 kg"],
    ],
  },

  "INFANTIL B": {
    masculino: [
      ["GALO", "até 30,200 kg"],
      ["PLUMA", "até 33,200 kg"],
      ["PENA", "até 36,200 kg"],
      ["LEVE", "até 39,300 kg"],
      ["MEDIO", "até 42,300 kg"],
      ["MEIO-PESADO", "até 45,300 kg"],
      ["PESADO", "até 48,300 kg"],
      ["SUPER-PESADO", "até 51,500 kg"],
      ["PESADISSIMO", "acima de 51,501 kg"],
    ],

    feminino: [
      ["GALO", "até 30,200 kg"],
      ["PLUMA", "até 33,200 kg"],
      ["PENA", "até 36,200 kg"],
      ["LEVE", "até 39,300 kg"],
      ["MEDIO", "até 42,300 kg"],
      ["MEIO-PESADO", "até 45,300 kg"],
      ["PESADO", "até 48,300 kg"],
      ["SUPER-PESADO", "até 51,500 kg"],
      ["PESADISSIMO", "acima de 51,501 kg"],
    ],
  },

  "INFANTO-JUVENIL A": {
    masculino: [
      ["GALO", "até 36,200 kg"],
      ["PLUMA", "até 40,300 kg"],
      ["PENA", "até 44,300 kg"],
      ["LEVE", "até 48,300 kg"],
      ["MEDIO", "até 52,500 kg"],
      ["MEIO-PESADO", "até 56,500 kg"],
      ["PESADO", "até 60,500 kg"],
      ["SUPER-PESADO", "até 65 kg"],
      ["PESADISSIMO", "acima de 65,001 kg"],
    ],

    feminino: [
      ["GALO", "até 36,200 kg"],
      ["PLUMA", "até 40,300 kg"],
      ["PENA", "até 44,300 kg"],
      ["LEVE", "até 48,300 kg"],
      ["MEDIO", "até 52,500 kg"],
      ["MEIO-PESADO", "até 56,500 kg"],
      ["PESADO", "até 60,500 kg"],
      ["SUPER-PESADO", "até 65 kg"],
      ["PESADISSIMO", "acima de 65,001 kg"],
    ],
  },

  "INFANTO-JUVENIL B": {
    masculino: [
      ["GALO", "até 44,300 kg"],
      ["PLUMA", "até 48,300 kg"],
      ["PENA", "até 52,500 kg"],
      ["LEVE", "até 56,500 kg"],
      ["MEDIO", "até 60,500 kg"],
      ["MEIO-PESADO", "até 65 kg"],
      ["PESADO", "até 69 kg"],
      ["SUPER-PESADO", "até 73 kg"],
      ["PESADISSIMO", "acima de 73,001 kg"],
    ],

    feminino: [
      ["GALO", "até 44,300 kg"],
      ["PLUMA", "até 48,300 kg"],
      ["PENA", "até 52,500 kg"],
      ["LEVE", "até 56,500 kg"],
      ["MEDIO", "até 60,500 kg"],
      ["MEIO-PESADO", "até 65 kg"],
      ["PESADO", "até 69 kg"],
      ["SUPER-PESADO", "até 73 kg"],
      ["PESADISSIMO", "acima de 73,001 kg"],
    ],
  },

  JUVENIL: {
    masculino: [
      ["GALO", "até 53,500 kg"],
      ["PLUMA", "até 58,500 kg"],
      ["PENA", "até 64 kg"],
      ["LEVE", "até 69 kg"],
      ["MEDIO", "até 74 kg"],
      ["MEIO-PESADO", "até 79,300 kg"],
      ["PESADO", "até 84,300 kg"],
      ["SUPER-PESADO", "até 89,300 kg"],
      ["PESADISSIMO", "acima de 89,301 kg"],
    ],

    feminino: [
      ["GALO", "até 44,300 kg"],
      ["PLUMA", "até 48,300 kg"],
      ["PENA", "até 52,500 kg"],
      ["LEVE", "até 56,500 kg"],
      ["MEDIO", "até 60,500 kg"],
      ["MEIO-PESADO", "até 65 kg"],
      ["PESADO", "até 69 kg"],
      ["SUPER-PESADO", "acima de 69,001 kg"],
    ],
  },

  ADULTO: {
    masculino: [
      ["GALO", "até 57,500 kg"],
      ["PLUMA", "até 64 kg"],
      ["PENA", "até 70 kg"],
      ["LEVE", "até 76 kg"],
      ["MEDIO", "até 82,300 kg"],
      ["MEIO-PESADO", "até 88,300 kg"],
      ["PESADO", "até 94,300 kg"],
      ["SUPER-PESADO", "até 100,500 kg"],
      ["PESADISSIMO", "acima de 100,501 kg"],
    ],

    feminino: [
      ["GALO", "até 48,500 kg"],
      ["PLUMA", "até 53,500 kg"],
      ["PENA", "até 58,500 kg"],
      ["LEVE", "até 64 kg"],
      ["MEDIO", "até 69 kg"],
      ["MEIO-PESADO", "até 74 kg"],
      ["PESADO", "até 79,300 kg"],
      ["SUPER-PESADO", "acima de 79,301 kg"],
    ],
  },
};

/*
|--------------------------------------------------------------------------
| MASTER
|--------------------------------------------------------------------------
|
| Master 1 até Master 7 possuem suas próprias tabelas.
|
| Os valores são iguais aos do Adulto, mas NÃO são agrupados.
| Cada Master terá um registro independente.
|
|--------------------------------------------------------------------------
*/

const categoriasMaster = [
  "MASTER 1",
  "MASTER 2",
  "MASTER 3",
  "MASTER 4",
  "MASTER 5",
  "MASTER 6",
  "MASTER 7",
];

categoriasMaster.forEach((categoria) => {
  pesosNoGi[categoria] = {
    masculino: pesosNoGi.ADULTO.masculino.map((peso) => [...peso]),
    feminino: pesosNoGi.ADULTO.feminino.map((peso) => [...peso]),
  };

  pesosGi[categoria] = {
    masculino: pesosGi.ADULTO.masculino.map((peso) => [...peso]),
    feminino: pesosGi.ADULTO.feminino.map((peso) => [...peso]),
  };
});

/*
|--------------------------------------------------------------------------
| RESULTADOS PESO PADRÃO
|--------------------------------------------------------------------------
|
| Mantemos o nome resultadosPesoPadrao para não quebrar imports existentes.
|
| Ele representa a estrutura padrão de pesos do sistema.
|
|--------------------------------------------------------------------------
*/

const resultadosPesoPadrao = {
  nogi: pesosNoGi,
  gi: pesosGi,
};

/*
|--------------------------------------------------------------------------
| GRADUAÇÕES PERMITIDAS POR CATEGORIA
|--------------------------------------------------------------------------
|
| As graduações infantis respeitam a idade mínima.
|
|--------------------------------------------------------------------------
*/

const graduacoesInfantis = {
  "PRE-MIRIM": ["BRANCA", "CINZA/BRANCA", "CINZA", "CINZA/PRETA"],

  MIRIM: [
    "BRANCA",
    "CINZA/BRANCA",
    "CINZA",
    "CINZA/PRETA",
    "AMARELA/BRANCA",
    "AMARELA",
    "AMARELA/PRETA",
  ],

  "INFANTIL A": [
    "BRANCA",
    "CINZA/BRANCA",
    "CINZA",
    "CINZA/PRETA",
    "AMARELA/BRANCA",
    "AMARELA",
    "AMARELA/PRETA",
  ],

  "INFANTIL B": [
    "BRANCA",
    "CINZA/BRANCA",
    "CINZA",
    "CINZA/PRETA",
    "AMARELA/BRANCA",
    "AMARELA",
    "AMARELA/PRETA",
    "LARANJA/BRANCA",
    "LARANJA",
    "LARANJA/PRETA",
  ],

  "INFANTO-JUVENIL A": [
    "BRANCA",
    "CINZA/BRANCA",
    "CINZA",
    "CINZA/PRETA",
    "AMARELA/BRANCA",
    "AMARELA",
    "AMARELA/PRETA",
    "LARANJA/BRANCA",
    "LARANJA",
    "LARANJA/PRETA",
    "VERDE/BRANCA",
    "VERDE",
    "VERDE/PRETA",
  ],

  "INFANTO-JUVENIL B": [
    "BRANCA",
    "CINZA/BRANCA",
    "CINZA",
    "CINZA/PRETA",
    "AMARELA/BRANCA",
    "AMARELA",
    "AMARELA/PRETA",
    "LARANJA/BRANCA",
    "LARANJA",
    "LARANJA/PRETA",
    "VERDE/BRANCA",
    "VERDE",
    "VERDE/PRETA",
  ],

  JUVENIL: ["BRANCA", "VERDE", "AZUL", "ROXA"],

  ADULTO: ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],

  "MASTER 1": ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],

  "MASTER 2": ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],

  "MASTER 3": ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],

  "MASTER 4": ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],

  "MASTER 5": ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],

  "MASTER 6": ["BRANCA", "AZUL", "ROXA", "ROXA", "MARROM", "PRETA"],

  "MASTER 7": ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],
};

/*
|--------------------------------------------------------------------------
| GERAR TABELAS DE PESO PADRÃO
|--------------------------------------------------------------------------
|
| Cada combinação gera uma tabela independente.
|
| Exemplo:
|
| NoGi + Masculino + Adulto + Azul
| NoGi + Feminino + Adulto + Azul
| Gi + Masculino + Adulto + Azul
| Gi + Feminino + Adulto + Azul
|
| Mesmo quando os pesos forem iguais, os registros continuam separados.
|
|--------------------------------------------------------------------------
*/

const gerarTabelaPesoPadrao = () => {
  let id = 1;

  const tabelas = [];

  modalidadesPadrao.forEach((modalidade) => {
    sexosPadrao.forEach((sexo) => {
      categoriasPadrao.forEach((categoria) => {
        const graduacoesDaCategoria =
          graduacoesInfantis[categoria] || graduacoesPadrao;

        const tabelaModalidade =
          modalidade.valor === "nogi" ? pesosNoGi : pesosGi;

        const pesosCategoria = tabelaModalidade[categoria]?.[sexo.valor] || [];

        graduacoesDaCategoria.forEach((graduacao) => {
          tabelas.push({
            id: id++,

            tipoPeso: "atleta",

            pesagem: "peso",

            modalidade: modalidade.valor,

            sexo: sexo.valor,

            categoria,

            graduacao,

            resultado: criarResultadoPeso(
              pesosCategoria.map(([nome, limite]) => ({
                nome,
                limite,
              })),
            ),
          });
        });
      });
    });
  });

  return tabelas;
};

const tabelaPesoPadrao = gerarTabelaPesoPadrao();

/*
|--------------------------------------------------------------------------
| FASES PADRÃO
|--------------------------------------------------------------------------
*/

const fasesPadrao = [
  {
    id: "pre-check",
    titulo: "Pré checagem aberta",
    texto:
      "Nesta etapa o atleta pode conferir seus dados e verificar se sua inscrição está correta antes da checagem oficial.",
  },

  {
    id: "check",
    titulo: "Checagem aberta",
    texto:
      "A checagem oficial está aberta. Confira atentamente seu nome, categoria, peso, graduação e demais informações da inscrição.",
  },

  {
    id: "alone",
    titulo: "Atletas sozinhos",
    texto:
      "Os atletas que não possuem adversários compatíveis dentro de sua categoria serão identificados nesta etapa.",
  },

  {
    id: "closed",
    titulo: "Checagem encerrada",
    texto:
      "A checagem foi encerrada. Após este momento, alterações nas categorias e informações dos atletas estarão sujeitas às regras da organização.",
  },

  {
    id: "finished",
    titulo: "Finalizado",
    texto:
      "O evento foi finalizado. Os resultados das disputas podem ser consultados através da área de resultados.",
  },
];

/*
|--------------------------------------------------------------------------
| CRIAR DADOS PADRÃO
|--------------------------------------------------------------------------
*/

const criarDadosPadrao = () => {
  return {
    infoGerais: {
      ...infoGeraisPadrao,
    },

    categorias: [...categoriasPadrao],

    graduacoes: [...graduacoesPadrao],

    fases: fasesPadrao.map((fase) => ({
      ...fase,
    })),

    tabelaPeso: tabelaPesoPadrao.map((tabela) => ({
      ...tabela,

      resultado: tabela.resultado.map((resultado) => ({
        ...resultado,
      })),
    })),
  };
};

/*
|--------------------------------------------------------------------------
| EXPORTS
|--------------------------------------------------------------------------
*/

export {
  infoGeraisPadrao,
  categoriasPadrao,
  graduacoesPadrao,
  modalidadesPadrao,
  sexosPadrao,
  resultadosPesoPadrao,
  fasesPadrao,
  tabelaPesoPadrao,
  criarDadosPadrao,
};
