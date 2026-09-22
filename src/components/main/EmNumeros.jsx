import '../../styles/main/EmNumeros.scss';

const EmNumeros = () => {
    const numeros = [
        {
            numero: '+12.500',
            texto: 'Atletas inscritos',
            icone: (
                <svg viewBox="0 0 48 48" fill="none">
                    <circle
                        cx="24"
                        cy="14"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="2"
                    />

                    <path
                        d="M11 40C11 31.7 16.8 26 24 26C31.2 26 37 31.7 37 40"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            numero: '+200',
            texto: 'Academias parceiras',
            icone: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path
                        d="M8 42V15L24 8L40 15V42"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />

                    <path
                        d="M4 42H44"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    <path
                        d="M16 42V23H32V42"
                        stroke="currentColor"
                        strokeWidth="2"
                    />

                    <path
                        d="M20 28H22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    <path
                        d="M26 28H28"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    <path
                        d="M20 33H22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    <path
                        d="M26 33H28"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            numero: '+15',
            texto: 'Eventos realizados',
            icone: (
                <svg viewBox="0 0 48 48" fill="none">
                    <path
                        d="M14 8H34V17C34 25 29.5 30 24 30C18.5 30 14 25 14 17V8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />

                    <path
                        d="M14 13H8C8 22 12 26 18 27"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    <path
                        d="M34 13H40C40 22 36 26 30 27"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    <path
                        d="M24 30V38"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    <path
                        d="M17 42H31"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    <path
                        d="M17 38H31"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section className="em-numeros container">
            <div className="em-numeros-overlay" />

            <div className="em-numeros-container space-between">

                <div className="em-numeros-header flex-colum">
                    <span>PRO COMBAT</span>

                    <h2>EM NÚMEROS</h2>

                    <p>
                        Uma comunidade em constante crescimento.
                    </p>
                </div>

                <div className="em-numeros-flex flex gap-xl">

                    {numeros.map((item, index) => (
                        <div
                            className="em-numero flex-colum"
                            key={index}
                        >

                            <div className="em-numero-icone">
                                {item.icone}
                            </div>

                            <strong>{item.numero}</strong>

                            <span>{item.texto}</span>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default EmNumeros;