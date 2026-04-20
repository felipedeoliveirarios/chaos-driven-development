import type {Root, Paragraph, Text} from 'mdast';
import type {Plugin} from 'unified';

/**
 * Plugin remark que envolve a primeira letra do primeiro parágrafo
 * em um <span class="drop-cap"> para permitir customização via CSS.
 *
 * Aplica-se apenas ao primeiro <p> do documento (antes de qualquer heading h2+).
 */
const remarkDropCap: Plugin<[], Root> = () => {
  return (tree) => {
    // Encontra o primeiro parágrafo do conteúdo
    const firstParagraph = tree.children.find(
      (node): node is Paragraph => node.type === 'paragraph',
    );

    if (!firstParagraph || firstParagraph.children.length === 0) {
      return;
    }

    const firstChild = firstParagraph.children[0];

    // Só processa se o primeiro filho for texto
    if (firstChild.type !== 'text' || firstChild.value.length === 0) {
      return;
    }

    const firstLetter = firstChild.value[0];
    const rest = firstChild.value.slice(1);

    // Substitui o primeiro nó de texto por: span + texto restante
    const spanNode = {
      type: 'mdxJsxTextElement' as const,
      name: 'span',
      attributes: [
        {
          type: 'mdxJsxAttribute' as const,
          name: 'className',
          value: 'drop-cap',
        },
      ],
      children: [{type: 'text' as const, value: firstLetter}],
      data: {_mdxExplicitJsx: true},
    };

    // Remove o primeiro filho e insere o span + texto restante
    firstParagraph.children.splice(0, 1, spanNode as any);

    if (rest) {
      firstParagraph.children.splice(1, 0, {
        type: 'text',
        value: rest,
      } as Text);
    }
  };
};

export default remarkDropCap;
