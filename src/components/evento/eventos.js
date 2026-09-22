//Imagens
import guerreiros from "../../assets/eventos/guerreiros.jpg";
import guerreiros2 from "../../assets/eventos/guerreiros2.jpg";
import guerreiros3 from "../../assets/eventos/guerreiros3.jpg";

const eventos = [
  {
    id: 1,

    nome: "Pro Combat Guerreiros",

    subtitulo: "Campeonato de Jiu-Jitsu",

    tipo: "Lutas Casadas",

    data: "15 NOV 2026",

    dataEvento: "2026-11-15",

    local: "São Paulo - SP",

    endereco: "São Paulo - SP",

    imagem: guerreiros,

    inscricoes: true,

    checagem: true,

    absoluto: true,

    absolutoTexto:
      "O absoluto será realizado de acordo com as categorias disponíveis para este evento. Consulte a organização para informações sobre horários, inscrições e critérios de participação.",

    infoGerais: {
      organizacao: `
        <red>#ORGANIZAÇÃO</red>

        Centurias Eventos

        <red>EMAIL:</red> claudionand@yahoo.com.br

        <red>FACEBOOK:</red> Centuria Romana
    `,

      resultadosOnline: `
        <red>#RESULTADO ONLINE</red>

        Este evento se compromete a lançar todos os resultados de forma ONLINE em até 5 dias após a realização do mesmo.
    `,

      quemPodeCompetir: `
        <red>#QUEM PODE COMPETIR?</red>

        Todos os praticantes de Jiu-Jitsu podem competir, sem ser necessário filiação.

        Seguindo as regras do item "TABELA DE PESO".
    `,

      agenda: `
        <red>#AGENDA / SCHEDULE</red>

        <red>Período de inscrição: (Podendo ser antecipado o fim com base no limite de atletas)</red>

        <ul>
            Até: 22/09/2026 às 18h (terça-feira) - Boleto, PIX ou cartão de crédito.
            Até: 23/09/2026 às 17h (quarta-feira) - Somente PIX ou cartão de crédito.
        </ul>

        <red>Período de CHECAGEM ABERTA (Com direito a alteração em inscrição)</red>

        <ul>
            De: 22/09/2026 (terça-feira)
            Até: 24/09/2026 às 11h da manhã (quinta-feira)
        </ul>

        <red>Atletas Sozinhos (Somente atletas sozinhos em suas categorias ainda terão direito a alteração em inscrição)</red>

        <ul>
            Até: 24/09/2026 às 13h (quinta-feira)
        </ul>

        <red>Divulgação do Cronograma Oficial</red>

        <ul>
            A partir de: 25/09/2026 às 14h (sexta-feira)
        </ul>

        <red>Divulgação da CHAVE DE LUTA</red>

        <ul>
            A partir de: 25/09/2026 às 14h (sexta-feira)
        </ul>
    `,

      inscricao: `
        <red>#INSCRIÇÃO</red>

        <bold>INSCRIÇÕES LIMITADAS e somente ON-LINE (via SouCompetidor)</bold>

        <bold>ATENÇÃO ATLETAS!</bold>

        <ul>
            A equipe SouCompetidor prestará suporte/atendimento aos atletas com dificuldade em se inscrever ou efetuar seu pagamento, até <yellow>22/09/2026</yellow> às 18h (terça-feira). Desde que o atleta abra um chamado/ticket no canal de atendimento FALE CONOSCO, disponível no site SouCompetidor.

            Após este horário, mesmo que as inscrições sejam prorrogadas, o atleta não contará com o atendimento da equipe SouCompetidor.

            Pagamento via cartão de crédito deve ser respeitado a data de vencimento e valores para cartão.

            Pagamento via boleto deve ser respeitado a data de vencimento e valores para boleto.

            Todos os horários divulgados no site SouCompetidor seguem o FUSO HORÁRIO de BRASILIA-DF.

            Pagamentos (via BOLETO BANCÁRIO) realizados após as 18h (do dia do vencimento), estarão sujeitos a serem recusados de acordo com a hora limite de compensação de cada banco. Por isso, orientamos que pagamentos realizados na data de vencimento do boleto sejam feitos até as 18h.
        </ul>

        <bold>LOTE 1:</bold>

        <red>Data Fim: 28/06/2026 às 23:59 (domingo)</red>
        <red>Vencimento do Boleto: 29/06/2026 (segunda-feira)</red>

        <ul>
            R$ 99,00 => PESO (Até 15 anos)
            R$ 99,00 => PESO GI (Juvenil / Adulto / Master)
            R$ 99,00 => PESO NOGI (Juvenil e Adulto a partir da AZUL)
        </ul>

        Combo (GI + NOGI) = +R$ 99,00 (adicionais)

        <bold>LOTE 2:</bold>

        <red>Data Fim: 27/07/2026 às 23:59 (segunda-feira)</red>
        <red>Vencimento do Boleto: 28/07/2026 (terça-feira)</red>

        <ul>
            R$ 155,00 => PESO (Até 15 anos)
            R$ 189,00 => PESO GI (Juvenil / Adulto / Master)
            R$ 189,00 => PESO NOGI (Juvenil e Adulto a partir da AZUL)
        </ul>

        Combo (GI + NOGI) = +R$ 99,00 (adicionais)

        <bold>LOTE 3:</bold>

        <red>Data Fim: 26/08/2026 às 23:59 (quarta-feira)</red>
        <red>Vencimento do Boleto: 27/08/2026 (quinta-feira)</red>

        <ul>
            R$ 165,00 => PESO (Até 15 anos)
            R$ 209,00 => PESO GI (Juvenil / Adulto / Master)
            R$ 209,00 => PESO NOGI (Juvenil e Adulto a partir da AZUL)
        </ul>

        Combo (GI + NOGI) = +R$ 99,00 (adicionais)

        <bold>LOTE 4:</bold>

        <red>Data Fim: 17/09/2026 às 23:59 (quinta-feira)</red>
        <red>Vencimento do Boleto: 18/09/2026 (sexta-feira)</red>

        <ul>
            R$ 170,00 => PESO (Até 15 anos)
            R$ 219,00 => PESO GI (Juvenil / Adulto / Master)
            R$ 219,00 => PESO NOGI (Juvenil e Adulto a partir da AZUL)
        </ul>

        Combo (GI + NOGI) = +R$ 120,00 (adicionais)

        <bold>LOTE 5:</bold>

        <red>Data Fim: 22/09/2026 às 18h (terça-feira)</red>
        <red>Vencimento do Boleto: 22/09/2026 (terça-feira)</red>

        <ul>
            R$ 200,00 => PESO (Até 15 anos)
            R$ 250,00 => PESO GI (Juvenil / Adulto / Master)
            R$ 250,00 => PESO NOGI (Juvenil e Adulto a partir da AZUL)
        </ul>

        Combo (GI + NOGI) = +R$ 150,00 (adicionais)

        Poderemos encerrar antes as inscrições se alcançarmos 100% da capacidade do evento.

        -----------------------

        <red>PRINCIPAIS DÚVIDAS EM INSCRIÇÕES:</red>

        <bold>1) PERDI A DATA DE VENCIMENTO DO MEU BOLETO, E AGORA?</bold>

        <ul>
            Acesse o seu perfil e clique em PAGAMENTOS PENDENTES e depois em REEMITIR.

            Esta ação irá atualizar a data de vencimento do seu boleto e os valores de inscrição compatíveis com o lote vigente.

            <bold>ATENÇÃO!</bold>

            Somente poderá gerar um novo boleto com data atualizada, se estiver dentro do prazo limite de pagamento da inscrição do evento.

            Obs: Não realize o pagamento do seu boleto fora do prazo, pois isto acarretará em reembolso parcial (descontando as taxas bancárias) e NÃO garantirá a vaga no evento!

            Tendo dúvidas, estamos à disposição via <red><bold>FALE CONOSCO.</bold></red>
        </ul>

        <bold>2) NÃO TENHO MAIS ACESSO AO E-MAIL CADASTRADO, E AGORA?</bold>

        <ul>
            Utilize o link abaixo para recuperação de acesso:

            https://soucompetidor.com.br/pt-br/perfil-usuario/esqueci/

            Caso não tenha sucesso, nos informe através do <red><bold>FALE CONOSCO.</bold></red>, seu nome completo + CPF + e-mail atual.
        </ul>

        <bold>3) É NECESSÁRIO ENVIAR COMPROVANTE DE PAGAMENTO PARA O SITE SOUCOMPETIDOR?</bold>

        <ul>
            <red>Não é necessário.</red> A compensação do pagamento é automática.

            Quando pago via boleto, o status de sua inscrição irá ser alterado para PAGO em até 2 dias úteis seguinte ao pagamento, devido a compensação bancária.

            Quando pago via cartão de crédito, o status de sua inscrição é alterado <red><bold>em até 24 horas.</bold></red>

            Após a identificação do pagamento do seu boleto, voce receberá um e-mail de confirmação de pagamento.
        </ul>
    `,

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
        "Os horários de abertura das áreas do evento serão divulgados na programação oficial.",

      entradaPublico:
        "A entrada do público seguirá as regras e condições determinadas pela organização.",

      termoResponsabilidade:
        "Todos os atletas deverão aceitar o termo de responsabilidade antes de participar do evento.",

      filmagemFotos:
        "O evento poderá contar com cobertura de fotos e vídeos. Ao participar, o atleta declara estar ciente das condições de uso de imagem previstas pela organização.",

      reembolso:
        "As condições para cancelamento e reembolso seguem as regras estabelecidas no regulamento do evento.",

      glossario:
        "O glossário apresenta os principais termos utilizados na organização, categorias, regras e andamento das competições.",
    },

    categorias: [
      "PRE-MIRIM NOGI",
      "MIRIM NOGI",
      "INFANTIL A NOGI",
      "INFANTIL B NOGI",
      "INFANTO-JUVENIL A NOGI",
      "INFANTO-JUVENIL B NOGI",
      "JUVENIL NOGI",
      "ADULTO NOGI",
      "MASTER 1 NOGI",
      "MASTER 2 NOGI",
      "MASTER 3 NOGI",
      "MASTER 4 NOGI",
      "MASTER 5 NOGI",
      "MASTER 6 NOGI",
      "MASTER 7 NOGI",
    ],

    graduacoes: ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],

    fases: [
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
    ],

    tabelaPeso: [
      {
        id: 1,
        tipoPeso: "atleta",
        pesagem: "peso",
        sexo: "feminino",
        categoria: "MASTER 2 NOGI",
        graduacao: "MARROM",

        resultado: [
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
        ],
      },
    ],
  },
  {
    id: 2,

    nome: "Pro Combat Guerreiros",

    subtitulo: "Campeonato de Jiu-Jitsu",

    tipo: "Lutas Casadas",

    data: "15 NOV 2026",

    dataEvento: "2026-11-15",

    local: "São Paulo - SP",

    endereco: "São Paulo - SP",

    imagem: guerreiros2,

    inscricoes: true,

    checagem: true,

    absoluto: true,

    absolutoTexto:
      "O absoluto será realizado de acordo com as categorias disponíveis para este evento. Consulte a organização para informações sobre horários, inscrições e critérios de participação.",

    infoGerais: {
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
        "Os horários de abertura das áreas do evento serão divulgados na programação oficial.",

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
    },

    categorias: [
      "PRE-MIRIM NOGI",
      "MIRIM NOGI",
      "INFANTIL A NOGI",
      "INFANTIL B NOGI",
      "INFANTO-JUVENIL A NOGI",
      "INFANTO-JUVENIL B NOGI",
      "JUVENIL NOGI",
      "ADULTO NOGI",
      "MASTER 1 NOGI",
      "MASTER 2 NOGI",
      "MASTER 3 NOGI",
      "MASTER 4 NOGI",
      "MASTER 5 NOGI",
      "MASTER 6 NOGI",
      "MASTER 7 NOGI",
    ],

    graduacoes: ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],

    fases: [
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
    ],

    tabelaPeso: [
      {
        id: 1,
        tipoPeso: "atleta",
        pesagem: "peso",
        sexo: "feminino",
        categoria: "MASTER 2 NOGI",
        graduacao: "MARROM",

        resultado: [
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
        ],
      },
    ],
  },
  {
    id: 3,

    nome: "Pro Combat Guerreiros",

    subtitulo: "Campeonato de Jiu-Jitsu",

    tipo: "Lutas Casadas",

    data: "15 NOV 2026",

    dataEvento: "2026-11-15",

    local: "São Paulo - SP",

    endereco: "São Paulo - SP",

    imagem: guerreiros3,

    inscricoes: true,

    checagem: true,

    absoluto: true,

    absolutoTexto:
      "O absoluto será realizado de acordo com as categorias disponíveis para este evento. Consulte a organização para informações sobre horários, inscrições e critérios de participação.",

    infoGerais: {
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
        "Os horários de abertura das áreas do evento serão divulgados na programação oficial.",

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
    },

    categorias: [
      "PRE-MIRIM NOGI",
      "MIRIM NOGI",
      "INFANTIL A NOGI",
      "INFANTIL B NOGI",
      "INFANTO-JUVENIL A NOGI",
      "INFANTO-JUVENIL B NOGI",
      "JUVENIL NOGI",
      "ADULTO NOGI",
      "MASTER 1 NOGI",
      "MASTER 2 NOGI",
      "MASTER 3 NOGI",
      "MASTER 4 NOGI",
      "MASTER 5 NOGI",
      "MASTER 6 NOGI",
      "MASTER 7 NOGI",
    ],

    graduacoes: ["BRANCA", "AZUL", "ROXA", "MARROM", "PRETA"],

    fases: [
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
    ],

    tabelaPeso: [
      {
        id: 1,
        tipoPeso: "atleta",
        pesagem: "peso",
        sexo: "feminino",
        categoria: "MASTER 2 NOGI",
        graduacao: "MARROM",

        resultado: [
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
        ],
      },
    ],
  },
];

export default eventos;
