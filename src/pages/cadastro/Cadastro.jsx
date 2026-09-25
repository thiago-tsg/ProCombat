import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    createUserWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

import { ref, set, get } from 'firebase/database';

import { auth, db } from '../../firebase/firebaseConfig';

import CadastroForm from './CadastroForm';
import CadastroGoogle from './CadastroGoogle';
import CadastroMensagem from './CadastroMensagem';

import '../../styles/pages/cadastro/Cadastro.scss';


const Cadastro = () => {

    const navigate = useNavigate();


    const [formulario, setFormulario] = useState({
        nome: '',
        email: '',
        senha: '',
        dataNascimento: '',
        sexo: '',
        graduacao: ''
    });


    const [carregando, setCarregando] = useState(false);

    const [erro, setErro] = useState('');

    const [sucesso, setSucesso] = useState('');


    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormulario((atual) => ({
            ...atual,
            [name]: value
        }));

    };


    const handleCadastro = async (event) => {

        event.preventDefault();

        setErro('');
        setSucesso('');
        setCarregando(true);

        try {

            const resultado = await createUserWithEmailAndPassword(
                auth,
                formulario.email,
                formulario.senha
            );

            const usuario = resultado.user;


            await updateProfile(usuario, {
                displayName: formulario.nome
            });


            await set(
                ref(db, `atletas/${usuario.uid}`),
                {
                    uid: usuario.uid,
                    nome: formulario.nome,
                    email: formulario.email,
                    dataNascimento: formulario.dataNascimento,
                    sexo: formulario.sexo,
                    graduacao: formulario.graduacao,
                    perfilCompleto: true,
                    criadoEm: new Date().toISOString()
                }
            );


            setSucesso(
                'Cadastro realizado com sucesso!'
            );


            setFormulario({
                nome: '',
                email: '',
                senha: '',
                dataNascimento: '',
                sexo: '',
                graduacao: ''
            });


            console.log(
                'ATLETA CADASTRADO:',
                usuario.uid
            );


        } catch (error) {

            console.error(
                'Erro ao cadastrar atleta:',
                error
            );


            if (
                error.code === 'auth/email-already-in-use'
            ) {

                setErro(
                    'Este e-mail já está cadastrado.'
                );

            } else if (
                error.code === 'auth/invalid-email'
            ) {

                setErro(
                    'Digite um e-mail válido.'
                );

            } else if (
                error.code === 'auth/weak-password'
            ) {

                setErro(
                    'A senha precisa ter pelo menos 6 caracteres.'
                );

            } else {

                setErro(
                    'Não foi possível realizar o cadastro.'
                );

            }

        } finally {

            setCarregando(false);

        }

    };


    const handleGoogleCadastro = async () => {

        setErro('');
        setSucesso('');
        setCarregando(true);

        try {

            const provider = new GoogleAuthProvider();

            const resultado = await signInWithPopup(
                auth,
                provider
            );

            const usuario = resultado.user;


            const atletaRef = ref(
                db,
                `atletas/${usuario.uid}`
            );


            const snapshot = await get(atletaRef);


            if (!snapshot.exists()) {

                await set(
                    atletaRef,
                    {
                        uid: usuario.uid,
                        nome: usuario.displayName || '',
                        email: usuario.email || '',
                        foto: usuario.photoURL || '',
                        perfilCompleto: false,
                        criadoEm: new Date().toISOString()
                    }
                );

            }


            console.log(
                'CADASTRO GOOGLE:',
                usuario.uid
            );


            navigate('/completar-cadastro');


        } catch (error) {

            console.error(
                'Erro ao cadastrar com Google:',
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
                    'Não foi possível criar sua conta com o Google.'
                );

            }

        } finally {

            setCarregando(false);

        }

    };


    return (
        <main className="cadastro">

            <div className="cadastro-container">

                <button
                    type="button"
                    className="cadastro-fechar"
                    onClick={() => navigate(-1)}
                    aria-label="Fechar cadastro"
                >
                    ×
                </button>

                <h1>
                    Criar conta
                </h1>

                <p>
                    Cadastre-se para participar dos eventos Pro Combat.
                </p>


                <CadastroMensagem
                    erro={erro}
                    sucesso={sucesso}
                />


                <CadastroGoogle
                    onClick={handleGoogleCadastro}
                    carregando={carregando}
                />


                <div className="cadastro-divisor">
                    <span>ou</span>
                </div>


                <CadastroForm
                    formulario={formulario}
                    onChange={handleChange}
                    onSubmit={handleCadastro}
                    carregando={carregando}
                />

            </div>

        </main>
    );
};


export default Cadastro;