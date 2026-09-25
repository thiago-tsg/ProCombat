import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

// styles
import '../styles/Menu.scss';


const Menu = ({
    logo = '/src/assets/logo.webp',
    links = [
        { label: 'Início', href: '/' },
        { label: 'Eventos', href: '/eventos' },
        { label: 'Atletas', href: '/atletas' },
        { label: 'Academias', href: '/academias' },
        { label: 'Ranking', href: '/ranking' },
        { label: 'Resultados', href: '/resultados' },
        { label: 'Mídia', href: '/midia' },
        { label: 'Sobre', href: '/sobre' },
    ],
}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const [usuarioMenuOpen, setUsuarioMenuOpen] = useState(false);


    const {
        usuario,
        sair
    } = useAuth();


    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };


    const closeMenu = () => {
        setMenuOpen(false);
        setUsuarioMenuOpen(false);
    };


    const toggleUsuarioMenu = () => {
        setUsuarioMenuOpen(prev => !prev);
    };


    const handleSair = async () => {

        await sair();

        setUsuarioMenuOpen(false);
        setMenuOpen(false);

    };


    /*
     * Nome que será exibido no botão.
     *
     * O Google fornece displayName.
     * No cadastro tradicional também salvamos
     * o nome no displayName do Firebase.
     */

    const nomeUsuario =
        usuario?.displayName ||
        usuario?.email?.split('@')[0] ||
        'Minha conta';


    return (
        <nav
            className={`menu space-between ${menuOpen ? 'menu-open' : ''}`}
        >

            {/* LOGO */}

            <div className="menu-logo">

                <NavLink
                    to="/"
                    onClick={closeMenu}
                    aria-label="Pro Combat - Início"
                >

                    <img
                        src={logo}
                        alt="Pro Combat Jiu-Jitsu"
                    />

                </NavLink>

            </div>


            {/* LINKS DESKTOP */}

            <div className="menu-links flex-center gap-xl">

                {links.map((link) => (

                    <NavLink
                        key={link.href}
                        to={link.href}
                        onClick={closeMenu}
                        end={link.href === '/'}
                    >
                        {link.label}
                    </NavLink>

                ))}

            </div>


            {/* AÇÕES DESKTOP */}

            <div className="menu-actions flex-center gap-md">

                {!usuario ? (

                    <>
                        <NavLink
                            to="/login"
                            className="menu-login"
                            onClick={closeMenu}
                        >
                            Fazer login
                        </NavLink>


                        <NavLink
                            to="/cadastro"
                            className="menu-register"
                            onClick={closeMenu}
                        >
                            Cadastrar
                        </NavLink>
                    </>

                ) : (

                    <div className="menu-user">

                        <button
                            type="button"
                            className="menu-user-button"
                            onClick={toggleUsuarioMenu}
                            aria-expanded={usuarioMenuOpen}
                            aria-haspopup="true"
                        >

                            <span>
                                {nomeUsuario}
                            </span>

                            <span
                                className={`menu-user-arrow ${usuarioMenuOpen
                                        ? 'menu-user-arrow-open'
                                        : ''
                                    }`}
                            >
                                ▾
                            </span>

                        </button>


                        {usuarioMenuOpen && (

                            <div className="menu-user-dropdown">

                                <NavLink
                                    to="/perfil"
                                    onClick={closeMenu}
                                >
                                    Perfil
                                </NavLink>


                                <button
                                    type="button"
                                    onClick={handleSair}
                                >
                                    Sair
                                </button>

                            </div>

                        )}

                    </div>

                )}

            </div>


            {/* HAMBURGER */}

            <button
                type="button"
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label={
                    menuOpen
                        ? 'Fechar menu'
                        : 'Abrir menu'
                }
                aria-expanded={menuOpen}
            >

                <span></span>
                <span></span>
                <span></span>

            </button>


            {/* MENU MOBILE */}

            <div className="menu-mobile">

                <div className="menu-mobile-links">

                    {links.map((link) => (

                        <NavLink
                            key={link.href}
                            to={link.href}
                            onClick={closeMenu}
                            end={link.href === '/'}
                        >
                            {link.label}
                        </NavLink>

                    ))}

                </div>


                {/* AÇÕES MOBILE */}

                <div className="menu-mobile-actions">

                    {!usuario ? (

                        <>
                            <NavLink
                                to="/login"
                                className="menu-login"
                                onClick={closeMenu}
                            >
                                Fazer login
                            </NavLink>


                            <NavLink
                                to="/cadastro"
                                className="menu-register"
                                onClick={closeMenu}
                            >
                                Cadastrar
                            </NavLink>
                        </>

                    ) : (

                        <div className="menu-user menu-user-mobile">

                            <button
                                type="button"
                                className="menu-user-button"
                                onClick={toggleUsuarioMenu}
                                aria-expanded={usuarioMenuOpen}
                                aria-haspopup="true"
                            >

                                <span>
                                    {nomeUsuario}
                                </span>

                                <span
                                    className={`menu-user-arrow ${usuarioMenuOpen
                                            ? 'menu-user-arrow-open'
                                            : ''
                                        }`}
                                >
                                    ▾
                                </span>

                            </button>


                            {usuarioMenuOpen && (

                                <div className="menu-user-dropdown">

                                    <NavLink
                                        to="/perfil"
                                        onClick={closeMenu}
                                    >
                                        Perfil
                                    </NavLink>


                                    <button
                                        type="button"
                                        onClick={handleSair}
                                    >
                                        Sair
                                    </button>

                                </div>

                            )}

                        </div>

                    )}

                </div>

            </div>

        </nav>
    );
};


export default Menu;