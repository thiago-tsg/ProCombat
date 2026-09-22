const InfoItem = ({ titulo, texto }) => {
    const classesPorTag = {
        red: 'info-item-red',
        yellow: 'info-item-yellow',
        blue: 'info-item-blue',
        bold: 'info-item-bold',
    };

    // --------------------------------------------------
    // RENDERIZA TEXTO COM TAGS
    // --------------------------------------------------
    const renderInline = (texto) => {
        if (!texto) {
            return null;
        }

        const regex = /<(red|yellow|blue|bold)>(.*?)<\/\1>/gs;

        const partes = [];
        let ultimoIndex = 0;
        let match;

        while ((match = regex.exec(texto)) !== null) {
            // Texto antes da tag
            if (match.index > ultimoIndex) {
                partes.push(
                    texto.slice(ultimoIndex, match.index)
                );
            }

            const tag = match[1];
            const conteudo = match[2];

            partes.push(
                <span
                    key={`${match.index}-${tag}`}
                    className={classesPorTag[tag]}
                >
                    {renderInline(conteudo)}
                </span>
            );

            ultimoIndex = regex.lastIndex;
        }

        // Texto depois da última tag
        if (ultimoIndex < texto.length) {
            partes.push(
                texto.slice(ultimoIndex)
            );
        }

        return partes;
    };

    // --------------------------------------------------
    // REMOVE APENAS INDENTAÇÃO
    // PRESERVA QUEBRAS DE LINHA
    // --------------------------------------------------
    const limparTexto = (texto) => {
        return texto
            .trim()
            .split('\n')
            .map((linha) => linha.trim())
            .join('\n');
    };

    // --------------------------------------------------
    // RENDERIZA LISTAS
    // --------------------------------------------------
    const renderLista = (conteudo, tipo) => {
        const itens = conteudo
            .trim()
            .split('\n')
            .map((linha) => linha.trim())
            .filter(Boolean)
            .map((linha) => {
                return linha
                    .replace(/^[-•]\s*/, '')
                    .replace(/^\d+\.\s*/, '')
                    .replace(/^[a-zA-Z]\)\s*/, '');
            });

        const TagLista = tipo === 'ul' ? 'ul' : 'ol';

        const classeLista =
            tipo === 'ul'
                ? 'info-item-list info-item-list-disc'
                : tipo === 'dash'
                    ? 'info-item-list info-item-list-dash'
                    : tipo === 'alpha'
                        ? 'info-item-list info-item-list-alpha'
                        : 'info-item-list info-item-list-number';

        return (
            <TagLista className={classeLista}>
                {itens.map((item, index) => (
                    <li key={index}>
                        {renderInline(item)}
                    </li>
                ))}
            </TagLista>
        );
    };

    // --------------------------------------------------
    // RENDERIZA TEXTO NORMAL PRESERVANDO QUEBRA DE LINHA
    // --------------------------------------------------
    const renderParagrafo = (texto, key) => {
        const linhas = texto.split('\n');

        return (
            <p key={key}>
                {linhas.map((linha, index) => (
                    <span key={index}>
                        {renderInline(linha)}

                        {index < linhas.length - 1 && (
                            <br />
                        )}
                    </span>
                ))}
            </p>
        );
    };

    // --------------------------------------------------
    // RENDERIZA O CONTEÚDO COMPLETO
    // --------------------------------------------------
    const renderTexto = (texto) => {
        if (!texto) {
            return null;
        }

        const textoLimpo = limparTexto(texto);

        // Procura blocos de lista
        const blocos = textoLimpo.split(
            /(<ul>[\s\S]*?<\/ul>|<ol>[\s\S]*?<\/ol>|<dash>[\s\S]*?<\/dash>|<alpha>[\s\S]*?<\/alpha>)/g
        );

        return blocos.map((bloco, index) => {
            // --------------------------------------------------
            // BLOCO VAZIO / QUEBRA DE PARÁGRAFO
            // --------------------------------------------------
            if (!bloco.trim()) {
                return (
                    <div
                        key={index}
                        className="info-item-break"
                    />
                );
            }

            // --------------------------------------------------
            // LISTA COM BOLINHA
            // --------------------------------------------------
            if (
                bloco.startsWith('<ul>') &&
                bloco.endsWith('</ul>')
            ) {
                const conteudo = bloco
                    .replace('<ul>', '')
                    .replace('</ul>', '');

                return (
                    <div key={index}>
                        {renderLista(conteudo, 'ul')}
                    </div>
                );
            }

            // --------------------------------------------------
            // LISTA NUMERADA
            // --------------------------------------------------
            if (
                bloco.startsWith('<ol>') &&
                bloco.endsWith('</ol>')
            ) {
                const conteudo = bloco
                    .replace('<ol>', '')
                    .replace('</ol>', '');

                return (
                    <div key={index}>
                        {renderLista(conteudo, 'ol')}
                    </div>
                );
            }

            // --------------------------------------------------
            // LISTA COM TRAÇO
            // --------------------------------------------------
            if (
                bloco.startsWith('<dash>') &&
                bloco.endsWith('</dash>')
            ) {
                const conteudo = bloco
                    .replace('<dash>', '')
                    .replace('</dash>', '');

                return (
                    <div key={index}>
                        {renderLista(conteudo, 'dash')}
                    </div>
                );
            }

            // --------------------------------------------------
            // LISTA ALFABÉTICA
            // --------------------------------------------------
            if (
                bloco.startsWith('<alpha>') &&
                bloco.endsWith('</alpha>')
            ) {
                const conteudo = bloco
                    .replace('<alpha>', '')
                    .replace('</alpha>', '');

                return (
                    <div key={index}>
                        {renderLista(conteudo, 'alpha')}
                    </div>
                );
            }

            // --------------------------------------------------
            // TEXTO NORMAL
            // PRESERVA TODAS AS QUEBRAS DE LINHA
            // --------------------------------------------------
            return renderParagrafo(bloco, index);
        });
    };

    // --------------------------------------------------
    // COMPONENTE
    // --------------------------------------------------
    return (
        <details className="info-item">
            <summary>
                <span>
                    {titulo}
                </span>

                <span className="info-item-icon">
                    +
                </span>
            </summary>

            <div className="info-item-content">
                {renderTexto(texto)}
            </div>
        </details>
    );
};

export default InfoItem;