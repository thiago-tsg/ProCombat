import '../styles/Sobre.scss';

const Sobre = () => {
    return (
        <section className="sobre">
            <div className="sobre-container">

                <div className="sobre-header">
                    <span className="sobre-label">PRO COMBAT</span>

                    <h1>
                        MAIS QUE UM EVENTO.
                        <br />
                        UMA <strong>EXPERIÊNCIA.</strong>
                    </h1>

                    <p>
                        O Pro Combat nasceu para transformar a forma como
                        atletas, academias e fãs vivem o Jiu-Jitsu competitivo.
                    </p>
                </div>

                <div className="sobre-content">

                    <div className="sobre-image">
                        <img
                            src="/images/sobre/pro-combat.jpg"
                            alt="Pro Combat Jiu-Jitsu"
                        />
                    </div>

                    <div className="sobre-text">

                        <div className="sobre-item">
                            <span>01</span>

                            <div>
                                <h2>Quem somos</h2>

                                <p>
                                    O Pro Combat é uma organização voltada para
                                    a realização de eventos de artes marciais,
                                    criando uma estrutura profissional para
                                    atletas, academias e equipes.
                                </p>
                            </div>
                        </div>

                        <div className="sobre-item">
                            <span>02</span>

                            <div>
                                <h2>Nossa missão</h2>

                                <p>
                                    Proporcionar competições organizadas,
                                    seguras e competitivas, valorizando cada
                                    atleta e oferecendo uma experiência completa
                                    dentro e fora dos tatames.
                                </p>
                            </div>
                        </div>

                        <div className="sobre-item">
                            <span>03</span>

                            <div>
                                <h2>O futuro</h2>

                                <p>
                                    Conectar atletas, academias, patrocinadores
                                    e fãs em uma única plataforma, reunindo
                                    eventos, resultados, rankings, mídia e
                                    transmissões.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="sobre-destaque">
                    <span>PRO COMBAT</span>

                    <h2>
                        O JIU-JITSU
                        <br />
                        <strong>É O NOSSO PALCO.</strong>
                    </h2>

                    <p>
                        Competição, respeito, evolução e paixão pelo esporte.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Sobre;