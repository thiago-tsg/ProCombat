import { Link } from 'react-router-dom';

import '../styles/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* ------------------------------------------ */}
                {/* TOPO */}
                {/* ------------------------------------------ */}

                <div className="footer-top">

                    <div className="footer-brand">

                        <Link
                            to="/"
                            className="footer-logo"
                        >
                            PRO
                            <span>COMBAT</span>
                        </Link>

                        <p>
                            O palco onde atletas, academias e fãs
                            vivem a paixão pelo Jiu-Jitsu.
                        </p>

                        <div className="footer-social">

                            <a
                                href="#"
                                aria-label="Instagram"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />

                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />

                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>


                            <a
                                href="#"
                                aria-label="YouTube"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <rect
                                        x="3"
                                        y="6"
                                        width="18"
                                        height="12"
                                        rx="3"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />

                                    <path
                                        d="M10 9L16 12L10 15V9Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>


                            <a
                                href="#"
                                aria-label="Facebook"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M14 21V13H17L17.5 10H14V8.2C14 7.3 14.4 6.7 15.7 6.7H17.6V4.1C17.3 4.1 16.4 4 15.3 4C12.8 4 11 5.5 11 8.2V10H8V13H11V21"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>

                        </div>

                    </div>


                    {/* -------------------------------------- */}
                    {/* NAVEGAÇÃO */}
                    {/* -------------------------------------- */}

                    <div className="footer-column">

                        <h3>NAVEGAÇÃO</h3>

                        <nav>

                            <Link to="/">
                                Início
                            </Link>

                            <Link to="/eventos">
                                Eventos
                            </Link>

                            <Link to="/atletas">
                                Atletas
                            </Link>

                            <Link to="/academias">
                                Academias
                            </Link>

                            <Link to="/ranking">
                                Ranking
                            </Link>

                            <Link to="/resultados">
                                Resultados
                            </Link>

                        </nav>

                    </div>


                    {/* -------------------------------------- */}
                    {/* PRO COMBAT */}
                    {/* -------------------------------------- */}

                    <div className="footer-column">

                        <h3>PRO COMBAT</h3>

                        <nav>

                            <Link to="/midia">
                                Mídia
                            </Link>

                            <Link to="/noticias">
                                Notícias
                            </Link>

                            <Link to="/sobre">
                                Sobre nós
                            </Link>

                            <a href="#">
                                Seja um patrocinador
                            </a>

                            <a href="#">
                                Contato
                            </a>

                        </nav>

                    </div>


                    {/* -------------------------------------- */}
                    {/* CONTATO */}
                    {/* -------------------------------------- */}

                    <div className="footer-column footer-contato">

                        <h3>FALE CONOSCO</h3>

                        <p>
                            Entre em contato com a equipe
                            Pro Combat.
                        </p>

                        <a
                            href="mailto:contato@procombat.com.br"
                            className="footer-email"
                        >
                            contato@procombat.com.br
                        </a>

                        <a
                            href="#"
                            className="footer-whatsapp"
                        >
                            Falar pelo WhatsApp

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5 12H19"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M13 6L19 12L13 18"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </a>

                    </div>

                </div>


                {/* ------------------------------------------ */}
                {/* LINHA */}
                {/* ------------------------------------------ */}

                <div className="footer-divider" />


                {/* ------------------------------------------ */}
                {/* BOTTOM */}
                {/* ------------------------------------------ */}

                <div className="footer-bottom">

                    <span>
                        © 2026 Pro Combat. Todos os direitos reservados.
                    </span>

                    <div>

                        <a href="#">
                            Política de Privacidade
                        </a>

                        <a href="#">
                            Termos de Uso
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;