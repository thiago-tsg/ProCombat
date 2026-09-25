import {
  formatarSexo,
  formatarGraduacao,
} from "./inscricaoUtils";

const InscricaoDadosAtleta = ({
  usuarioLogado,
  categoria,
  idade,
  peso,
  onPesoChange,
}) => {
  if (!usuarioLogado) {
    return null;
  }

  return (
    <div className="inscricao-grid">

      <div className="inscricao-field">
        <label>
          Atleta
        </label>

        <div className="inscricao-readonly">
          {usuarioLogado.nome || "Nome não informado"}
        </div>
      </div>


      <div className="inscricao-field">
        <label>
          Categoria
        </label>

        <div className="inscricao-readonly">
          {categoria
            ? categoria.nome
            : "Categoria não encontrada"}
        </div>
      </div>


      <div className="inscricao-field">
        <label>
          Sexo
        </label>

        <div className="inscricao-readonly">
          {formatarSexo(
            usuarioLogado.sexo
          )}
        </div>
      </div>


      <div className="inscricao-field">
        <label>
          Graduação
        </label>

        <div className="inscricao-readonly">
          {formatarGraduacao(
            usuarioLogado.graduacao
          )}
        </div>
      </div>


      <div className="inscricao-field">
        <label htmlFor="inscricao-peso">
          Peso de competição
        </label>

        <div className="inscricao-input-wrapper">

          <input
            id="inscricao-peso"
            type="text"
            inputMode="decimal"
            value={peso || ""}
            onChange={(event) =>
              onPesoChange(
                event.target.value
              )
            }
            placeholder="Ex: 70.500"
            required
          />

          <span>
            kg
          </span>

        </div>

        <small>
          Informe o peso com o qual irá competir.
        </small>
      </div>


      <div className="inscricao-field">
        <label>
          Idade no evento
        </label>

        <div className="inscricao-readonly">

          {idade !== null &&
          idade !== undefined
            ? `${idade} anos`
            : "Idade não calculada"}

        </div>
      </div>

    </div>
  );
};

export default InscricaoDadosAtleta;