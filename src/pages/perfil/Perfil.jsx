import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { ref, get, update } from 'firebase/database';

import { auth, db } from '../../firebase/firebaseConfig';

import PerfilFoto from './PerfilFoto';
import PerfilInformacoes from './PerfilInformacoes';
import PerfilMensagem from './PerfilMensagem';

import '../../styles/pages/perfil/Perfil.scss';

const Perfil = () => {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState(null);
    const [atleta, setAtleta] = useState(null);

    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);

    const [erro, setErro] = useState('');
    const [mensagem, setMensagem] = useState('');

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

                    if (!snapshot.exists()) {
                        setErro(
                            'Não foi possível encontrar seus dados.'
                        );
                        return;
                    }

                    setAtleta(snapshot.val());
                } catch (error) {
                    console.error(
                        'Erro ao carregar perfil:',
                        error
                    );

                    setErro(
                        'Não foi possível carregar seu perfil.'
                    );
                } finally {
                    setCarregando(false);
                }
            }
        );

        return () => unsubscribe();
    }, [navigate]);


    // ==================================================
    // SALVAR ALTERAÇÕES
    // ==================================================

    const salvarInformacoes = async (dados) => {
        if (!usuario) {
            return false;
        }

        try {
            setSalvando(true);
            setErro('');
            setMensagem('');

            const atletaRef = ref(
                db,
                `atletas/${usuario.uid}`
            );

            await update(atletaRef, {
                nome: dados.nome,
                dataNascimento: dados.dataNascimento,
                sexo: dados.sexo,
                graduacao: dados.graduacao
            });

            setAtleta((atletaAtual) => ({
                ...atletaAtual,
                nome: dados.nome,
                dataNascimento: dados.dataNascimento,
                sexo: dados.sexo,
                graduacao: dados.graduacao
            }));

            setMensagem(
                'Informações atualizadas com sucesso.'
            );

            return true;

        } catch (error) {
            console.error(
                'Erro ao salvar informações:',
                error
            );

            setErro(
                'Não foi possível salvar suas informações.'
            );

            return false;

        } finally {
            setSalvando(false);
        }
    };


    // ==================================================
    // CARREGANDO
    // ==================================================

    if (carregando) {
        return (
            <main className="perfil">
                <div className="perfil-container">
                    <p>Carregando perfil...</p>
                </div>
            </main>
        );
    }


    // ==================================================
    // PERFIL
    // ==================================================

    return (
        <main className="perfil">

            <div className="perfil-container">

                <PerfilMensagem
                    erro={erro}
                    mensagem={mensagem}
                />


                {usuario && atleta && (

                    <>

                        <div className="perfil-header">

                            <div>

                                <span className="perfil-kicker">
                                    PRO COMBAT
                                </span>

                                <h1>
                                    Meu perfil
                                </h1>

                                <p>
                                    Gerencie suas informações
                                    de atleta.
                                </p>

                            </div>

                        </div>


                        <div className="perfil-content">

                            <PerfilFoto
                                usuario={usuario}
                                atleta={atleta}
                            />


                            <PerfilInformacoes
                                usuario={usuario}
                                atleta={atleta}
                                onSalvar={salvarInformacoes}
                                salvando={salvando}
                            />

                        </div>

                    </>

                )}

            </div>

        </main>
    );
};


export default Perfil;