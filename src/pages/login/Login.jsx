import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

import {
    ref,
    get
} from 'firebase/database';

import { auth, db } from '../../firebase/firebaseConfig';

import LoginForm from './LoginForm';
import LoginGoogle from './LoginGoogle';
import LoginMensagem from './LoginMensagem';

import '../../styles/pages/login/Login.scss';


const Login = () => {

    const navigate = useNavigate();


    const [formulario, setFormulario] = useState({
        email: '',
        senha: ''
    });


    const [carregando, setCarregando] = useState(false);

    const [erro, setErro] = useState('');


    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormulario((atual) => ({
            ...atual,
            [name]: value
        }));

    };


    const handleLogin = async (event) => {

        event.preventDefault();

        setErro('');
        setCarregando(true);

        try {

            const resultado =
                await signInWithEmailAndPassword(
                    auth,
                    formulario.email,
                    formulario.senha
                );


            console.log(
                'USUÁRIO LOGADO:',
                resultado.user.uid
            );


            navigate('/');


        } catch (error) {

            console.error(
                'Erro ao fazer login:',
                error
            );


            if (
                error.code === 'auth/invalid-credential' ||
                error.code === 'auth/wrong-password' ||
                error.code === 'auth/user-not-found'
            ) {

                setErro(
                    'E-mail ou senha incorretos.'
                );

            } else if (
                error.code === 'auth/invalid-email'
            ) {

                setErro(
                    'Digite um e-mail válido.'
                );

            } else {

                setErro(
                    'Não foi possível fazer login.'
                );

            }

        } finally {

            setCarregando(false);

        }

    };


    const handleGoogleLogin = async () => {

        setErro('');
        setCarregando(true);

        try {

            const provider = new GoogleAuthProvider();


            const resultado =
                await signInWithPopup(
                    auth,
                    provider
                );


            const usuario = resultado.user;


            console.log(
                'LOGIN GOOGLE:',
                usuario.uid
            );


            const atletaRef = ref(
                db,
                `atletas/${usuario.uid}`
            );


            const snapshot = await get(
                atletaRef
            );


            /*
             * Não existe cadastro no banco.
             *
             * Isso pode acontecer quando a pessoa
             * entra com Google pela primeira vez.
             */

            if (!snapshot.exists()) {

                navigate('/completar-cadastro');

                return;

            }


            const atleta = snapshot.val();


            /*
             * Cadastro existe, mas ainda não
             * foi completado.
             */

            if (
                atleta.perfilCompleto !== true
            ) {

                navigate('/completar-cadastro');

                return;

            }


            /*
             * Cadastro completo.
             */

            navigate('/');


        } catch (error) {

            console.error(
                'Erro ao entrar com Google:',
                error
            );


            if (
                error.code === 'auth/popup-closed-by-user'
            ) {

                setErro(
                    'O login com Google foi cancelado.'
                );

            } else {

                setErro(
                    'Não foi possível entrar com o Google.'
                );

            }

        } finally {

            setCarregando(false);

        }

    };


    return (
        <main className="login">

            <div className="login-container">

                <button
                    type="button"
                    className="login-fechar"
                    onClick={() => navigate(-1)}
                    aria-label="Fechar login"
                >
                    ×
                </button>

                <h1>
                    Entrar
                </h1>

                <p>
                    Entre na sua conta Pro Combat.
                </p>


                <LoginMensagem
                    erro={erro}
                />


                <LoginForm
                    formulario={formulario}
                    onChange={handleChange}
                    onSubmit={handleLogin}
                    carregando={carregando}
                />


                <div className="login-divisor">
                    <span>ou</span>
                </div>


                <LoginGoogle
                    onClick={handleGoogleLogin}
                    carregando={carregando}
                />

            </div>

        </main>
    );
};


export default Login;