import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`menu space-between ${menuOpen ? 'menu-open' : ''}`}>
            {/* LOGO */}
            <div className="menu-logo">
                <NavLink
                    to="/"
                    onClick={closeMenu}
                    aria-label="Pro Combat - Início"
                >
                    <img src={logo} alt="Pro Combat Jiu-Jitsu" />
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

            </div>

            {/* HAMBURGER */}
            <button
                type="button"
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
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

                </div>

            </div>
        </nav>
    );
};

export default Menu;