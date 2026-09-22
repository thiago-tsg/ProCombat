// style
import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="header flex-colum">

            <div className="header-background"></div>

            <div className="header-overlay"></div>

            <div className="header-content container flex">

                <div className="header-text">

                    <span className="header-eyebrow">
                        PRO COMBAT
                    </span>

                    <h1>
                        MAIS QUE UM
                        <span>CAMPEONATO.</span>
                    </h1>

                    <p>
                        Uma plataforma completa para atletas,
                        academias e apaixonados por Jiu-Jitsu.
                        Competições, lutas, resultados e muito mais.
                    </p>

                    <div className="header-actions">

                        <a
                            href="#eventos"
                            className="btn btn-primary"
                        >
                            Ver eventos
                            <span>→</span>
                        </a>

                        <a
                            href="#sobre"
                            className="btn btn-outline"
                        >
                            Conheça o Pro Combat
                        </a>

                    </div>

                </div>

            </div>

            <div className="header-bottom">

                <span>
                    JIU-JITSU COMPETITIONS
                </span>

                <div className="header-scroll">
                    <span></span>
                </div>

                <span>
                    DISCIPLINA • RESPEITO • EVOLUÇÃO
                </span>

            </div>

        </header>
    );
};

export default Header;