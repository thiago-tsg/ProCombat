import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { ref, get, update } from 'firebase/database';

import { auth, db } from '../../firebase/firebaseConfig';

import '../../styles/pages/completar-cadastro/CompletarCadastro.scss';


const CompletarCadastro = () => {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState(null);

    const [formulario, setFormulario] = useState({
        dataNascimento: '',
        sexo: '',
        graduacao: ''
    });

    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro] = useState('');


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            auth,
            async (usuarioAtual) => {

                if (!usuarioAtual) {
                    navigate('/login');
                    return;
                }

                setUsuario(usuarioAtual);

                try {

                    const atletaRef = ref(
                        db,
                        `atletas/${usuarioAtual.uid}`
                    );

                    const snapshot = await get(atletaRef);

                    if (snapshot.exists()) {

                        const atleta = snapshot.val();

                        setFormulario({
                            dataNascimento: atleta.dataNascimento || '',
                            sexo: atleta.sexo || '',
                            graduacao: atleta.graduacao || ''
                        });

                    }

                } catch (error) {

                    console.error(
                        'Erro ao carregar cadastro:',
                        error
                    );

                    setErro(
                        'Não foi possível carregar seus dados.'
                    );

                } finally {

                    setCarregando(false);

                }
            }
        );

        return () => unsubscribe();

    }, [navigate]);


    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormulario((atual) => ({
            ...atual,
            [name]: value
        }));

    };


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!usuario) {
            return;
        }

        setErro('');
        setSalvando(true);

        try {

            const atletaRef = ref(
                db,
                `atletas/${usuario.uid}`
            );

            await update(atletaRef, {

                dataNascimento: formulario.dataNascimento,

                sexo: formulario.sexo,

                graduacao: formulario.graduacao,

                perfilCompleto: true,

                atualizadoEm: new Date().toISOString()

            });


            console.log(
                'CADASTRO COMPLETADO:',
                usuario.uid
            );


            navigate('/');

        } catch (error) {

            console.error(
                'Erro ao completar cadastro:',
                error
            );

            setErro(
                'Não foi possível salvar seus dados.'
            );

        } finally {

            setSalvando(false);

        }

    };


    if (carregando) {

        return (
            <main className="completar-cadastro">

                <div className="completar-cadastro-container">

                    <p>
                        Carregando...
                    </p>

                </div>

            </main>
        );

    }


    return (
        <main className="completar-cadastro">

            <div className="completar-cadastro-container">

                <h1>
                    Complete seu cadastro
                </h1>

                <p>
                    Precisamos de algumas informações
                    para você participar dos eventos Pro Combat.
                </p>


                {usuario?.displayName && (
                    <p>
                        Olá, {usuario.displayName}!
                    </p>
                )}


                {erro && (
                    <div className="completar-cadastro-erro">
                        {erro}
                    </div>
                )}


                <form onSubmit={handleSubmit}>

                    <div className="completar-cadastro-field">

                        <label htmlFor="dataNascimento">
                            Data de nascimento
                        </label>

                        <input
                            id="dataNascimento"
                            name="dataNascimento"
                            type="date"
                            value={formulario.dataNascimento}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="completar-cadastro-field">

                        <label htmlFor="sexo">
                            Sexo
                        </label>

                        <select
                            id="sexo"
                            name="sexo"
                            value={formulario.sexo}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Selecione
                            </option>

                            <option value="masculino">
                                Masculino
                            </option>

                            <option value="feminino">
                                Feminino
                            </option>

                        </select>

                    </div>


                    <div className="completar-cadastro-field">

                        <label htmlFor="graduacao">
                            Graduação
                        </label>

                        <select
                            id="graduacao"
                            name="graduacao"
                            value={formulario.graduacao}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Selecione
                            </option>

                            <option value="branca">
                                Branca
                            </option>

                            <option value="cinza">
                                Cinza
                            </option>

                            <option value="amarela">
                                Amarela
                            </option>

                            <option value="laranja">
                                Laranja
                            </option>

                            <option value="verde">
                                Verde
                            </option>

                            <option value="azul">
                                Azul
                            </option>

                            <option value="roxa">
                                Roxa
                            </option>

                            <option value="marrom">
                                Marrom
                            </option>

                            <option value="preta">
                                Preta
                            </option>

                        </select>

                    </div>


                    <button
                        type="submit"
                        disabled={salvando}
                    >

                        {salvando
                            ? 'Salvando...'
                            : 'Completar cadastro'
                        }

                    </button>

                </form>

            </div>

        </main>
    );
};


export default CompletarCadastro;