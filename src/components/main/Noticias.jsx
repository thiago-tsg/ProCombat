//React
import { Link } from 'react-router-dom';

//Style
import '../../styles/main/Noticias.scss';

//Imagens
import blog1 from '../../assets/blog/blog1.jpg';
import blog2 from '../../assets/blog/blog2.jpg';
import blog3 from '../../assets/blog/blog3.jpg';
import blog4 from '../../assets/blog/blog4.jpg';

const Noticias = () => {
    const noticias = [
        {
            id: 1,
            data: '10 MAR 2025',
            titulo: 'Pro Combat Guerreiros bate recorde de inscritos',
            imagem: blog1,
        },
        {
            id: 2,
            data: '28 FEV 2025',
            titulo: 'Confira o ranking atualizado do Pro Combat',
            imagem: blog2,
        },
        {
            id: 3,
            data: '15 JAN 2025',
            titulo: 'Transmissão ao vivo: saiba como acompanhar o evento',
            imagem: blog3,
        },
        {
            id: 4,
            data: '05 JAN 2025',
            titulo: 'Academias parceiras ganham destaque no Pro Combat',
            imagem: blog4,
        },
    ];

    return (
        <section className="noticias container">
            <div className="noticias-container flex-colum gap-md">

                <div className="noticias-header space-between gap-xl">

                    <div className="noticias-header-texto flex-colum gao-md">
                        <span>NOTÍCIAS</span>

                        <h2>ÚLTIMAS DO PRO COMBAT</h2>

                        <p>
                            Fique por dentro das novidades, resultados, entrevistas
                            e muito mais.
                        </p>
                    </div>

                    <Link
                        to="/noticias"
                        className="noticias-header-link space-between gap-md"
                    >
                        <span>Ver todas as notícias</span>

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
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
                    </Link>

                </div>

                <div className="noticias-grid grid4col gap-md">

                    {noticias.map((noticia) => (
                        <article
                            className="noticia-card"
                            key={noticia.id}
                        >

                            <Link
                                to={`/noticias/${noticia.id}`}
                                className="noticia-imagem"
                            >
                                <img
                                    src={noticia.imagem}
                                    alt={noticia.titulo}
                                />
                            </Link>


                            <div className="noticia-conteudo flex-colum gap-md">

                                <span className="noticia-data">
                                    {noticia.data}
                                </span>

                                <h3>
                                    {noticia.titulo}
                                </h3>

                                <Link
                                    to={`/noticias/${noticia.id}`}
                                    className="noticia-link"
                                >
                                    <span>Ler mais</span>

                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
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
                                </Link>

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Noticias;