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

const graduacoesPadrao = ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"];

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
| FAIXAS DE PESO PADRÃO
|--------------------------------------------------------------------------
|
| A mesma estrutura de faixas fica disponível inicialmente em todas as
| combinações.
|
| O administrador poderá alterar os limites posteriormente.
|
*/

const resultadosPesoPadrao = [
  {
    id: 1,
    nome: "GALO",
    limite: "até 46,500 kg",
  },

  {
    id: 2,
    nome: "PLUMA",
    limite: "até 51,500 kg",
  },

  {
    id: 3,
    nome: "PENA",
    limite: "até 56,500 kg",
  },

  {
    id: 4,
    nome: "LEVE",
    limite: "até 61,500 kg",
  },

  {
    id: 5,
    nome: "MEDIO",
    limite: "até 66,500 kg",
  },

  {
    id: 6,
    nome: "MEIO-PESADO",
    limite: "até 71,500 kg",
  },

  {
    id: 7,
    nome: "PESADO",
    limite: "até 76,500 kg",
  },

  {
    id: 8,
    nome: "SUPER-PESADO",
    limite: "acima de 76,501 kg",
  },
];

/*
|--------------------------------------------------------------------------
| GERAR TABELAS DE PESO PADRÃO
|--------------------------------------------------------------------------
|
| Cada combinação possui:
|
| modalidade
| sexo
| categoria
| graduação
| resultado
|
| Exemplo:
|
| ADULTO + AZUL + MASCULINO + GI
| ADULTO + AZUL + MASCULINO + NOGI
| ADULTO + AZUL + FEMININO + GI
| ADULTO + AZUL + FEMININO + NOGI
|
| E assim por diante.
|
*/

const gerarTabelaPesoPadrao = () => {
  let id = 1;

  const tabelas = [];

  modalidadesPadrao.forEach((modalidade) => {
    sexosPadrao.forEach((sexo) => {
      categoriasPadrao.forEach((categoria) => {
        graduacoesPadrao.forEach((graduacao) => {
          tabelas.push({
            id: id++,

            tipoPeso: "atleta",

            pesagem: "peso",

            modalidade: modalidade.valor,

            sexo: sexo.valor,

            categoria,

            graduacao,

            resultado: resultadosPesoPadrao.map((resultado) => ({
              ...resultado,
            })),
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
