import { useEffect, useState } from 'react';

import PerfilFormulario from './PerfilFormulario';
import PerfilVisualizacao from './PerfilVisualizacao';

const PerfilInformacoes = ({
    usuario,
    atleta,
    onSalvar,
    salvando
}) => {
    const [editando, setEditando] = useState(false);

    const [formulario, setFormulario] = useState({
        nome: '',
        dataNascimento: '',
        sexo: '',
        graduacao: ''
    });

    useEffect(() => {
        setFormulario({
            nome: atleta?.nome || '',
            dataNascimento: atleta?.dataNascimento || '',
            sexo: atleta?.sexo || '',
            graduacao: atleta?.graduacao || ''
        });
    }, [atleta]);

    const alterarCampo = (campo, valor) => {
        setFormulario((formularioAtual) => ({
            ...formularioAtual,
            [campo]: valor
        }));
    };

    const cancelarEdicao = () => {
        setFormulario({
            nome: atleta?.nome || '',
            dataNascimento: atleta?.dataNascimento || '',
            sexo: atleta?.sexo || '',
            graduacao: atleta?.graduacao || ''
        });

        setEditando(false);
    };

    const handleSalvar = async (e) => {
        e.preventDefault();

        const salvou = await onSalvar(formulario);

        if (salvou) {
            setEditando(false);
        }
    };

    return (
        <section className="perfil-informacoes">
            {editando ? (
                <PerfilFormulario
                    formulario={formulario}
                    alterarCampo={alterarCampo}
                    handleSalvar={handleSalvar}
                    cancelarEdicao={cancelarEdicao}
                    salvando={salvando}
                    usuario={usuario}
                    atleta={atleta}
                />
            ) : (
                <PerfilVisualizacao
                    usuario={usuario}
                    atleta={atleta}
                    onEditar={() => setEditando(true)}
                />
            )}
        </section>
    );
};

export default PerfilInformacoes;