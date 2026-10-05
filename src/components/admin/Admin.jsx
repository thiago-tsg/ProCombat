import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import {
    buscarEventos
} from '../../services/eventosService';

import AdminDashboard from './dashboard/AdminDashboard';
import AdminEventos from './aventos/AdminEventos';

import '../../styles/admin/Admin.scss';


const EMAILS_ADMIN = [
    't.goncalves1999@gmail.com',
    'procombatf4l@gmail.com'
];


const Admin = () => {

    const {
        usuario,
        carregando
    } = useAuth();


    const [eventos, setEventos] = useState([]);

    const [carregandoEventos, setCarregandoEventos] =
        useState(true);

    const [erroEventos, setErroEventos] =
        useState('');

    const [pagina, setPagina] =
        useState('dashboard');


    // ==================================================
    // CARREGAR EVENTOS
    // ==================================================

    useEffect(() => {

        if (carregando || !usuario) {
            return;
        }


        const ehAdmin =
            EMAILS_ADMIN.includes(
                usuario.email?.toLowerCase()
            );


        if (!ehAdmin) {
            return;
        }


        const carregarEventos = async () => {

            try {

                setCarregandoEventos(true);
                setErroEventos('');

                const eventosFirebase =
                    await buscarEventos();

                setEventos(eventosFirebase);

            } catch (error) {

                console.error(
                    'Erro ao carregar eventos do Firebase:',
                    error
                );

                setErroEventos(
                    'Não foi possível carregar os eventos.'
                );

            } finally {

                setCarregandoEventos(false);

            }

        };


        carregarEventos();

    }, [carregando, usuario]);


    // ==================================================
    // CARREGANDO AUTENTICAÇÃO
    // ==================================================

    if (carregando) {

        return (
            <main className="admin">

                <div className="admin-carregando">
                    <span>
                        Verificando acesso...
                    </span>
                </div>

            </main>
        );
    }


    // ==================================================
    // USUÁRIO NÃO LOGADO
    // ==================================================

    if (!usuario) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }


    // ==================================================
    // VERIFICAR ADMIN
    // ==================================================

    const ehAdmin =
        EMAILS_ADMIN.includes(
            usuario.email?.toLowerCase()
        );


    if (!ehAdmin) {

        return (
            <Navigate
                to="/"
                replace
            />
        );
    }


    // ==================================================
    // CARREGANDO EVENTOS
    // ==================================================

    if (carregandoEventos) {

        return (
            <main className="admin">

                <div className="admin-carregando">

                    <div className="admin-carregando-spinner" />

                    <span>
                        Carregando painel administrativo...
                    </span>

                </div>

            </main>
        );
    }


    // ==================================================
    // PAINEL ADMINISTRATIVO
    // ==================================================

    return (
        <main className="admin">

            {/* ==================================================
                SIDEBAR
            ================================================== */}

            <aside className="admin-sidebar">

                <div className="admin-sidebar-top">

                    <div className="admin-brand">

                        <div className="admin-brand-mark">
                            PC
                        </div>

                        <div>
                            <strong>
                                PRO COMBAT
                            </strong>

                            <span>
                                ADMIN
                            </span>
                        </div>

                    </div>


                    <div className="admin-sidebar-divider" />


                    <nav className="admin-nav">

                        <button
                            type="button"
                            className={
                                pagina === 'dashboard'
                                    ? 'ativo'
                                    : ''
                            }
                            onClick={() =>
                                setPagina('dashboard')
                            }
                        >

                            <span className="admin-nav-icon">
                                ▦
                            </span>

                            <span>
                                Dashboard
                            </span>

                        </button>


                        <button
                            type="button"
                            className={
                                pagina === 'eventos'
                                    ? 'ativo'
                                    : ''
                            }
                            onClick={() =>
                                setPagina('eventos')
                            }
                        >

                            <span className="admin-nav-icon">
                                ◫
                            </span>

                            <span>
                                Eventos
                            </span>

                            {eventos.length > 0 && (
                                <small>
                                    {eventos.length}
                                </small>
                            )}

                        </button>


                        <button
                            type="button"
                            disabled
                        >

                            <span className="admin-nav-icon">
                                ♙
                            </span>

                            <span>
                                Atletas
                            </span>

                            <small>
                                em breve
                            </small>

                        </button>


                        <button
                            type="button"
                            disabled
                        >

                            <span className="admin-nav-icon">
                                ≡
                            </span>

                            <span>
                                Inscrições
                            </span>

                            <small>
                                em breve
                            </small>

                        </button>


                        <button
                            type="button"
                            disabled
                        >

                            <span className="admin-nav-icon">
                                ⚔
                            </span>

                            <span>
                                Lutas
                            </span>

                            <small>
                                em breve
                            </small>

                        </button>


                        <button
                            type="button"
                            disabled
                        >

                            <span className="admin-nav-icon">
                                ◈
                            </span>

                            <span>
                                Resultados
                            </span>

                            <small>
                                em breve
                            </small>

                        </button>

                    </nav>

                </div>


                <div className="admin-sidebar-bottom">

                    <div className="admin-usuario">

                        <div className="admin-usuario-avatar">
                            {
                                usuario.email
                                    ?.charAt(0)
                                    ?.toUpperCase() || 'A'
                            }
                        </div>

                        <div>

                            <strong>
                                Administrador
                            </strong>

                            <span>
                                {usuario.email}
                            </span>

                        </div>

                    </div>


                    <button
                        type="button"
                        className="admin-voltar-site"
                        onClick={() =>
                            window.location.href = '/'
                        }
                    >
                        <span>
                            ←
                        </span>

                        Voltar para o site
                    </button>

                </div>

            </aside>


            {/* ==================================================
                ÁREA PRINCIPAL
            ================================================== */}

            <div className="admin-content">

                {erroEventos && (

                    <div className="admin-erro">
                        {erroEventos}
                    </div>

                )}


                {pagina === 'dashboard' && (

                    <AdminDashboard
                        eventos={eventos}
                        onAbrirEventos={() =>
                            setPagina('eventos')
                        }
                        onCriarEvento={() =>
                            setPagina('eventos')
                        }
                    />

                )}


                {pagina === 'eventos' && (

                    <AdminEventos
                        eventos={eventos}
                        setEventos={setEventos}
                    />

                )}

            </div>

        </main>
    );
};


export default Admin;