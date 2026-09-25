import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import '../../styles/admin/Admin.scss';

import AdminEventos from './aventos/AdminEventos';


const EMAILS_ADMIN = [
    't.goncalves1999@gmail.com',
    'procombatf4l@gmail.com'
];


const Admin = () => {

    const {
        usuario,
        carregando
    } = useAuth();


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
    // VERIFICAR SE É ADMIN
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
    // ÁREA ADMINISTRATIVA
    // ==================================================

    return (
        <main className="admin">

            <AdminEventos />

        </main>
    );
};


export default Admin;