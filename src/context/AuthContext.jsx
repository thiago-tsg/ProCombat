import { createContext, useContext, useEffect, useState } from 'react';

import {
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

import { auth } from '../firebase/firebaseConfig';


const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(null);

    const [carregando, setCarregando] = useState(true);


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            auth,
            (usuarioAtual) => {

                setUsuario(usuarioAtual);

                setCarregando(false);

            }
        );


        return () => unsubscribe();

    }, []);


    const sair = async () => {

        try {

            await signOut(auth);

        } catch (error) {

            console.error(
                'Erro ao sair:',
                error
            );

        }

    };


    return (
        <AuthContext.Provider
            value={{
                usuario,
                carregando,
                sair
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};


export const useAuth = () => {

    return useContext(AuthContext);

};