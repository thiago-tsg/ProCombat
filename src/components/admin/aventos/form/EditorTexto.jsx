import { useEffect } from 'react';

import {
    EditorContent,
    useEditor
} from '@tiptap/react';

import StarterKit from '@tiptap/starter-kit';

import { TextStyle } from '@tiptap/extension-text-style';

import { Color } from '@tiptap/extension-color';

import { Highlight } from '@tiptap/extension-highlight';


// ==================================================
// EXTENSÃO PARA TAMANHO DA FONTE
// ==================================================

const FontSize = TextStyle.extend({

    addAttributes() {

        return {

            ...this.parent?.(),

            fontSize: {

                default: null,

                parseHTML: (element) =>
                    element.style.fontSize || null,

                renderHTML: (attributes) => {

                    if (!attributes.fontSize) {
                        return {};
                    }

                    return {
                        style: `font-size: ${attributes.fontSize}`
                    };

                }

            }

        };

    }

});


const EditorTexto = ({
    value,
    onChange,
    placeholder = 'Digite o conteúdo...'
}) => {

    const editor = useEditor({

        extensions: [

            StarterKit.configure({

                heading: {
                    levels: [1, 2, 3]
                }

            }),

            FontSize,

            Color,

            Highlight.configure({
                multicolor: true
            })

        ],


        content: value || '',


        editorProps: {

            attributes: {
                class: 'editor-texto-conteudo',
                'data-placeholder': placeholder
            }

        },


        onUpdate: ({ editor }) => {

            onChange(
                editor.getHTML()
            );

        }

    });


    // ==================================================
    // ATUALIZAR CONTEÚDO
    // ==================================================

    useEffect(() => {

        if (!editor) {
            return;
        }


        const conteudoAtual =
            editor.getHTML();


        const novoConteudo =
            value || '';


        if (
            novoConteudo !== conteudoAtual
        ) {

            editor.commands.setContent(
                novoConteudo,
                false
            );

        }

    }, [value, editor]);


    if (!editor) {
        return null;
    }


    // ==================================================
    // TAMANHO DA FONTE
    // ==================================================

    const alterarTamanhoFonte = (tamanho) => {

        editor
            .chain()
            .focus()
            .setMark('textStyle', {
                fontSize: tamanho
            })
            .run();

    };


    // ==================================================
    // COR DO TEXTO
    // ==================================================

    const alterarCorTexto = (cor) => {

        editor
            .chain()
            .focus()
            .setColor(cor)
            .run();

    };


    // ==================================================
    // MARCA-TEXTO
    // ==================================================

    const alterarMarcaTexto = (cor) => {

        editor
            .chain()
            .focus()
            .toggleHighlight({
                color: cor
            })
            .run();

    };


    return (
        <div className="editor-texto">


            {/* ==========================================
                BARRA DE FERRAMENTAS
            ========================================== */}

            <div className="editor-texto-toolbar">


                {/* NEGRITO */}

                <button
                    type="button"
                    title="Negrito"
                    className={
                        editor.isActive('bold')
                            ? 'ativo'
                            : ''
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                >
                    <strong>
                        B
                    </strong>
                </button>


                {/* ITÁLICO */}

                <button
                    type="button"
                    title="Itálico"
                    className={
                        editor.isActive('italic')
                            ? 'ativo'
                            : ''
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                >
                    <em>
                        I
                    </em>
                </button>


                {/* RISCADO */}

                <button
                    type="button"
                    title="Texto riscado"
                    className={
                        editor.isActive('strike')
                            ? 'ativo'
                            : ''
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                >
                    <s>
                        S
                    </s>
                </button>


                {/* TAMANHO DA FONTE */}

                <select
                    title="Tamanho da fonte"
                    defaultValue=""
                    onChange={(event) => {

                        const tamanho =
                            event.target.value;


                        if (!tamanho) {
                            return;
                        }


                        alterarTamanhoFonte(
                            tamanho
                        );

                    }}
                >

                    <option value="">
                        Tamanho
                    </option>

                    <option value="12px">
                        12 px
                    </option>

                    <option value="14px">
                        14 px
                    </option>

                    <option value="16px">
                        16 px
                    </option>

                    <option value="18px">
                        18 px
                    </option>

                    <option value="20px">
                        20 px
                    </option>

                    <option value="24px">
                        24 px
                    </option>

                    <option value="28px">
                        28 px
                    </option>

                    <option value="32px">
                        32 px
                    </option>

                    <option value="40px">
                        40 px
                    </option>

                </select>


                {/* COR DO TEXTO */}

                <label
                    className="editor-texto-cor"
                    title="Cor do texto"
                >

                    <span>
                        A
                    </span>


                    <input
                        type="color"
                        defaultValue="#ffffff"
                        onChange={(event) =>
                            alterarCorTexto(
                                event.target.value
                            )
                        }
                    />

                </label>


                {/* MARCA-TEXTO */}

                <label
                    className="editor-texto-marca"
                    title="Cor do marca-texto"
                >

                    <span>
                        A
                    </span>


                    <input
                        type="color"
                        defaultValue="#ffff00"
                        onChange={(event) =>
                            alterarMarcaTexto(
                                event.target.value
                            )
                        }
                    />

                </label>


                {/* TIPO DE TEXTO */}

                <select
                    title="Tipo de texto"
                    defaultValue="paragraph"
                    onChange={(event) => {

                        const tipo =
                            event.target.value;


                        if (
                            tipo ===
                            'paragraph'
                        ) {

                            editor
                                .chain()
                                .focus()
                                .setParagraph()
                                .run();

                            return;
                        }


                        editor
                            .chain()
                            .focus()
                            .toggleHeading({
                                level:
                                    Number(tipo)
                            })
                            .run();

                    }}
                >

                    <option value="paragraph">
                        Texto
                    </option>

                    <option value="1">
                        Título 1
                    </option>

                    <option value="2">
                        Título 2
                    </option>

                    <option value="3">
                        Título 3
                    </option>

                </select>


                {/* LISTA */}

                <button
                    type="button"
                    title="Lista"
                    className={
                        editor.isActive(
                            'bulletList'
                        )
                            ? 'ativo'
                            : ''
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBulletList()
                            .run()
                    }
                >
                    •☰
                </button>


                {/* LISTA NUMERADA */}

                <button
                    type="button"
                    title="Lista numerada"
                    className={
                        editor.isActive(
                            'orderedList'
                        )
                            ? 'ativo'
                            : ''
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleOrderedList()
                            .run()
                    }
                >
                    1☰
                </button>


                {/* DESFAZER */}

                <button
                    type="button"
                    title="Desfazer"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                >
                    ↶
                </button>


                {/* REFAZER */}

                <button
                    type="button"
                    title="Refazer"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                >
                    ↷
                </button>


                {/* LIMPAR FORMATAÇÃO */}

                <button
                    type="button"
                    title="Limpar formatação"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .clearNodes()
                            .unsetAllMarks()
                            .run()
                    }
                >
                    Tx
                </button>


            </div>


            {/* ==========================================
                ÁREA DE EDIÇÃO
            ========================================== */}

            <EditorContent
                editor={editor}
            />


        </div>
    );
};


export default EditorTexto;