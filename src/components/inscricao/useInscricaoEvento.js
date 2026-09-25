import { useEffect, useMemo, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { get, ref } from "firebase/database";

import { auth, db } from "../../firebase/firebaseConfig";

import {
  criarInscricao,
  buscarInscricaoPorAtletaEvento,
} from "../../services/inscricoesService";

import {
  calcularIdade,
  encontrarCategoria,
  montarModalidades,
} from "./inscricaoUtils";

const useInscricaoEvento = (evento) => {
  /*
  |--------------------------------------------------------------------------
  | USUÁRIO
  |--------------------------------------------------------------------------
  */

  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const [carregandoUsuario, setCarregandoUsuario] = useState(true);

  /*
  |--------------------------------------------------------------------------
  | INSCRIÇÃO
  |--------------------------------------------------------------------------
  */

  const [peso, setPeso] = useState("");

  const [modalidadesSelecionadas, setModalidadesSelecionadas] = useState([]);

  const [etapa, setEtapa] = useState(1);

  const [inscricao, setInscricao] = useState(null);

  const [salvando, setSalvando] = useState(false);

  const [erro, setErro] = useState("");

  /*
  |--------------------------------------------------------------------------
  | MODALIDADES
  |--------------------------------------------------------------------------
  */

  const modalidades = useMemo(() => {
    return montarModalidades(evento);
  }, [evento]);

  /*
  |--------------------------------------------------------------------------
  | CARREGAR USUÁRIO
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let ativo = true;

    const cancelarObservador = onAuthStateChanged(auth, async (usuario) => {
      if (!ativo) {
        return;
      }

      setCarregandoUsuario(true);
      setErro("");

      /*
        |--------------------------------------------------------------------------
        | USUÁRIO NÃO LOGADO
        |--------------------------------------------------------------------------
        */

      if (!usuario) {
        setUsuarioLogado(null);
        setCarregandoUsuario(false);

        return;
      }

      try {
        /*
          |--------------------------------------------------------------------------
          | BUSCAR DADOS DO ATLETA
          |--------------------------------------------------------------------------
          */

        const atletaRef = ref(db, `atletas/${usuario.uid}`);

        const snapshot = await get(atletaRef);

        if (!ativo) {
          return;
        }

        /*
          |--------------------------------------------------------------------------
          | ATLETA NÃO ENCONTRADO
          |--------------------------------------------------------------------------
          */

        if (!snapshot.exists()) {
          setUsuarioLogado({
            uid: usuario.uid,

            nome: usuario.displayName || "Atleta",

            email: usuario.email || "",

            foto: usuario.photoURL || "",

            dataNascimento: "",

            sexo: "",

            graduacao: "",

            perfilCompleto: false,
          });

          setErro("Seu cadastro de atleta não foi encontrado.");

          return;
        }

        const atleta = snapshot.val() || {};

        /*
          |--------------------------------------------------------------------------
          | DADOS
          |--------------------------------------------------------------------------
          |
          | Nome e e-mail vêm do Firebase Authentication.
          |
          | Data de nascimento, sexo e graduação vêm
          | do Realtime Database.
          |
          |--------------------------------------------------------------------------
          */

        setUsuarioLogado({
          uid: usuario.uid,

          nome: usuario.displayName || "Atleta",

          email: usuario.email || "",

          foto: usuario.photoURL || "",

          dataNascimento: atleta.dataNascimento || "",

          sexo: atleta.sexo || "",

          graduacao: atleta.graduacao || "",

          perfilCompleto: atleta.perfilCompleto || false,
        });
      } catch (error) {
        console.error("Erro ao carregar atleta:", error);

        if (!ativo) {
          return;
        }

        setUsuarioLogado(null);

        setErro("Não foi possível carregar seus dados.");
      } finally {
        if (ativo) {
          setCarregandoUsuario(false);
        }
      }
    });

    return () => {
      ativo = false;
      cancelarObservador();
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | DATA DO EVENTO
  |--------------------------------------------------------------------------
  */

  const dataEvento =
    evento?.dataEvento || evento?.data_evento || evento?.data || "";

  /*
  |--------------------------------------------------------------------------
  | IDADE
  |--------------------------------------------------------------------------
  */

  const idade = useMemo(() => {
    if (!usuarioLogado?.dataNascimento || !dataEvento) {
      return null;
    }

    return calcularIdade(usuarioLogado.dataNascimento, dataEvento);
  }, [usuarioLogado?.dataNascimento, dataEvento]);

  /*
  |--------------------------------------------------------------------------
  | CATEGORIA
  |--------------------------------------------------------------------------
  */

  const categoria = useMemo(() => {
    return encontrarCategoria(idade);
  }, [idade]);

  /*
  |--------------------------------------------------------------------------
  | MODALIDADE PADRÃO
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    setModalidadesSelecionadas((atuais) => {
      if (!modalidades.length) {
        return [];
      }

      const validas = atuais.filter((valor) =>
        modalidades.some((modalidade) => modalidade.valor === valor),
      );

      if (validas.length > 0) {
        return validas;
      }

      return [modalidades[0].valor];
    });
  }, [modalidades]);

  /*
  |--------------------------------------------------------------------------
  | ALTERAR MODALIDADE
  |--------------------------------------------------------------------------
  */

  const alternarModalidade = (modalidadeValor) => {
    setModalidadesSelecionadas((atuais) => {
      const jaSelecionada = atuais.includes(modalidadeValor);

      /*
      | Não permite ficar sem modalidade.
      */

      if (jaSelecionada) {
        if (atuais.length === 1) {
          return atuais;
        }

        return atuais.filter((valor) => valor !== modalidadeValor);
      }

      return [...atuais, modalidadeValor];
    });
  };

  /*
  |--------------------------------------------------------------------------
  | PESO
  |--------------------------------------------------------------------------
  */

  const handlePeso = (valor) => {
    const valorTexto =
      valor === null || valor === undefined ? "" : String(valor);

    const valorLimpo = valorTexto.replace(/[^0-9.,]/g, "");

    setPeso(valorLimpo);
  };

  /*
  |--------------------------------------------------------------------------
  | ENVIAR INSCRIÇÃO
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (eventSubmit) => {
    eventSubmit.preventDefault();

    if (salvando) {
      return;
    }

    setErro("");

    /*
    |--------------------------------------------------------------------------
    | USUÁRIO
    |--------------------------------------------------------------------------
    */

    if (!usuarioLogado) {
      setErro("Você precisa estar logado para realizar a inscrição.");

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | CADASTRO
    |--------------------------------------------------------------------------
    */

    if (
      !usuarioLogado.dataNascimento ||
      !usuarioLogado.sexo ||
      !usuarioLogado.graduacao
    ) {
      setErro("Complete seu cadastro antes de realizar a inscrição.");

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | EVENTO
    |--------------------------------------------------------------------------
    */

    if (!evento?.id) {
      setErro("Evento inválido.");

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | IDADE
    |--------------------------------------------------------------------------
    */

    if (idade === null) {
      setErro("Não foi possível calcular sua idade para este evento.");

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | CATEGORIA
    |--------------------------------------------------------------------------
    */

    if (!categoria) {
      setErro("Não foi possível identificar sua categoria.");

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | PESO
    |--------------------------------------------------------------------------
    */

    if (!peso) {
      setErro("Informe seu peso.");

      return;
    }

    const pesoNumerico = Number(String(peso).replace(",", "."));

    if (!Number.isFinite(pesoNumerico) || pesoNumerico <= 0) {
      setErro("Informe um peso válido.");

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | MODALIDADES
    |--------------------------------------------------------------------------
    */

    if (!modalidadesSelecionadas.length) {
      setErro("Selecione pelo menos uma modalidade.");

      return;
    }

    try {
      setSalvando(true);

      /*
      |--------------------------------------------------------------------------
      | VERIFICAR INSCRIÇÃO EXISTENTE
      |--------------------------------------------------------------------------
      */

      const inscricaoExistente = await buscarInscricaoPorAtletaEvento(
        usuarioLogado.uid,
        evento.id,
      );

      if (inscricaoExistente) {
        setErro("Você já possui uma inscrição neste evento.");

        return;
      }

      /*
      |--------------------------------------------------------------------------
      | DADOS DAS MODALIDADES
      |--------------------------------------------------------------------------
      */

      const modalidadesSelecionadasDados = modalidades.filter((modalidade) =>
        modalidadesSelecionadas.includes(modalidade.valor),
      );

      /*
      |--------------------------------------------------------------------------
      | NOVA INSCRIÇÃO
      |--------------------------------------------------------------------------
      */

      const novaInscricao = {
        atletaId: usuarioLogado.uid,

        eventoId: evento.id,

        evento: evento.nome || "",

        atleta: usuarioLogado.nome || "Atleta",

        email: usuarioLogado.email || "",

        dataNascimento: usuarioLogado.dataNascimento,

        idade,

        categoria: categoria.nome,

        sexo: usuarioLogado.sexo,

        graduacao: usuarioLogado.graduacao,

        peso: pesoNumerico,

        modalidades: modalidadesSelecionadasDados,
      };

      /*
      |--------------------------------------------------------------------------
      | SALVAR
      |--------------------------------------------------------------------------
      */

      const inscricaoCriada = await criarInscricao(novaInscricao);

      /*
      |--------------------------------------------------------------------------
      | MOSTRAR RESUMO
      |--------------------------------------------------------------------------
      */

      setInscricao(inscricaoCriada);

      setEtapa(2);
    } catch (error) {
      console.error("Erro ao realizar inscrição:", error);

      setErro(
        error?.message ||
          "Não foi possível realizar sua inscrição. Tente novamente.",
      );
    } finally {
      setSalvando(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | PAGAMENTO
  |--------------------------------------------------------------------------
  */

  const handlePagamento = () => {
    if (!inscricao) {
      return;
    }

    console.log("Pagamento da inscrição:", inscricao);
  };

  /*
  |--------------------------------------------------------------------------
  | RETORNO
  |--------------------------------------------------------------------------
  */

  return {
    usuarioLogado,

    carregandoUsuario,

    peso,
    handlePeso,

    modalidades,
    modalidadesSelecionadas,
    alternarModalidade,

    idade,
    categoria,

    etapa,
    inscricao,

    salvando,
    erro,

    handleSubmit,
    handlePagamento,
  };
};

export default useInscricaoEvento;
