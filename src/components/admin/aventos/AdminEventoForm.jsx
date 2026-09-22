

import { useState } from 'react';

import AdminEventoFormHeader from './form/AdminEventoFormHeader';
import AdminEventoInformacoes from './form/AdminEventoInformacoes';
import AdminEventoImagem from './form/AdminEventoImagem';
import AdminEventoConfiguracoes from './form/AdminEventoConfiguracoes';
import AdminEventoInfoGerais from './form/AdminEventoInfoGerais';
import AdminEventoCategorias from './form/AdminEventoCategorias';
import AdminEventoFases from './form/AdminEventoFases';
import AdminEventoTabelaPeso from './form/AdminEventoTabelaPeso';
import AdminEventoResumo from './form/AdminEventoResumo';
import AdminEventoFormFooter from './form/AdminEventoFormFooter';

import { criarDadosPadrao } from './templates/eventoPadrao';

import '../../../styles/admin/eventos/AdminEventoForm.scss';


const AdminEventoForm = ({
    eventoInicial,
    onCancelar,
    onSalvar
}) => {

    const [evento, setEvento] = useState(
        eventoInicial
            ? {
                status: 'rascunho',
                ...eventoInicial,

                infoGerais: {
                    ...criarDadosPadrao().infoGerais,
                    ...(eventoInicial.infoGerais || {})
                },

                categorias: eventoInicial.categorias || [
                    ...criarDadosPadrao().categorias
                ],

                graduacoes: eventoInicial.graduacoes || [
                    ...criarDadosPadrao().graduacoes
                ],

                fases: eventoInicial.fases || [
                    ...criarDadosPadrao().fases
                ],

                tabelaPeso: eventoInicial.tabelaPeso || [
                    ...criarDadosPadrao().tabelaPeso
                ]
            }
            : {
                nome: '',
                subtitulo: '',
                tipo: 'Lutas Casadas',
                dataEvento: '',
                local: '',
                endereco: '',
                imagem: '',

                inscricoes: false,
                checagem: false,
                absoluto: false,
                absolutoTexto: '',

                status: 'rascunho',

                ...criarDadosPadrao()
            }
    );


    const alterarCampo = (campo, valor) => {

        setEvento((eventoAtual) => ({
            ...eventoAtual,
            [campo]: valor
        }));
    };


    const formatarData = (data) => {

        if (!data) {
            return '';
        }

        const [ano, mes, dia] = data.split('-');

        const meses = [
            'JAN',
            'FEV',
            'MAR',
            'ABR',
            'MAI',
            'JUN',
            'JUL',
            'AGO',
            'SET',
            'OUT',
            'NOV',
            'DEZ'
        ];

        return `${dia} ${meses[Number(mes) - 1]} ${ano}`;
    };


    const salvarEvento = (e) => {

        e.preventDefault();

        const eventoFinal = {
            ...evento,

            id: evento.id || Date.now(),

            data: formatarData(evento.dataEvento)
        };

        onSalvar(eventoFinal);
    };


    const modoEdicao = Boolean(eventoInicial);


    return (
        <form
            className="admin-evento-form"
            onSubmit={salvarEvento}
        >

            <AdminEventoFormHeader
                modoEdicao={modoEdicao}
                onCancelar={onCancelar}
            />


            <AdminEventoInformacoes
                evento={evento}
                alterarCampo={alterarCampo}
            />


            <AdminEventoImagem
                evento={evento}
                alterarCampo={alterarCampo}
            />


            <AdminEventoConfiguracoes
                evento={evento}
                alterarCampo={alterarCampo}
            />


            <AdminEventoInfoGerais
                evento={evento}
                alterarCampo={alterarCampo}
            />


            <AdminEventoCategorias
                evento={evento}
                alterarCampo={alterarCampo}
            />


            <AdminEventoFases
                evento={evento}
                alterarCampo={alterarCampo}
            />


            <AdminEventoTabelaPeso
                evento={evento}
                alterarCampo={alterarCampo}
            />


            <AdminEventoResumo
                evento={evento}
                formatarData={formatarData}
            />


            <AdminEventoFormFooter
                modoEdicao={modoEdicao}
                onCancelar={onCancelar}
            />

        </form>
    );
};


export default AdminEventoForm;