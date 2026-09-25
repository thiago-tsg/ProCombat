import { useNavigate } from 'react-router-dom';

import '../../styles/evento/EventoCard.scss';


const EventoCard = ({
    evento,
    onClick,
    eventoAberto = false,
    onInscrever
}) => {

    const navigate = useNavigate();


    const dataEvento = new Date(
        `${evento.dataEvento}T00:00:00`
    );


    const hoje = new Date();


    const hojeSemHorario = new Date(
        hoje.getFullYear(),
        hoje.getMonth(),
        hoje.getDate()
    );


    const diferenca =
        dataEvento.getTime() -
        hojeSemHorario.getTime();


    const diasRestantes = Math.ceil(
        diferenca / (1000 * 60 * 60 * 24)
    );


    const eventoFinalizado =
        diasRestantes < 0;


    const mapaUrl =
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            evento.endereco
        )}`;


    const handleInscrever = (event) => {

        event.preventDefault();
        event.stopPropagation();

        if (onInscrever) {
            onInscrever();
        }

    };


    const handleCardClick = () => {

        if (onClick) {
            onClick();
            return;
        }

        navigate(`/eventos/${evento.id}`);

    };


    return (
        <article
            className="evento-card evento-card-clickable"
            onClick={handleCardClick}
        >

            <div className="evento-card-main flex-colum">

                <div className="evento-card-cover">

                    <img
                        src={evento.imagem}
                        alt={evento.nome}
                    />

                </div>


                <div className="evento-card-info flex-colum">

                    <div className="evento-card-heading">

                        <span className="evento-card-type">
                            {evento.tipo}
                        </span>


                        <h2>
                            {evento.nome}
                        </h2>


                        <p className="evento-card-subtitle">
                            {evento.subtitulo}
                        </p>

                    </div>


                    <div className="evento-card-date flex-colum">

                        <span>
                            {evento.data}
                        </span>


                        <strong>
                            {eventoFinalizado
                                ? 'Evento finalizado'
                                : `${diasRestantes} dias`
                            }
                        </strong>

                    </div>


                    <div className="evento-card-actions flex">

                        {eventoAberto ? (

                            evento.inscricoes && !eventoFinalizado ? (

                                <button
                                    type="button"
                                    className="evento-card-button flex-center"
                                    onClick={handleInscrever}
                                >
                                    Inscrever-se
                                </button>

                            ) : (

                                <span className="evento-card-button flex-center">
                                    Evento finalizado
                                </span>

                            )

                        ) : (

                            <span className="evento-card-button flex-center">
                                Ver evento
                            </span>

                        )}

                    </div>

                </div>

            </div>


            <div className="evento-card-location space-between gap-p">

                <div className="evento-card-address">

                    <span className="evento-card-address-label">
                        Local do evento
                    </span>


                    <p>
                        {evento.endereco}
                    </p>

                </div>


                <a
                    href={mapaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evento-card-map flex-center gap-p"
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    Mapa

                    <span>
                        →
                    </span>

                </a>

            </div>

        </article>
    );
};


export default EventoCard;