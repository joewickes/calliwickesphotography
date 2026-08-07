import type { BlocksContent } from '@strapi/blocks-react-renderer';

/**
 * A permissive view of a Strapi blocks node: either a text leaf (`{ text }`)
 * or a block/inline node with nested `children`. We only need the text, so the
 * walker treats anything with a string `text` as a leaf and recurses into
 * `children` otherwise.
 */
type BlockNode = {
  type?: string;
  text?: unknown;
  children?: unknown;
};

function nodeToText(node: BlockNode): string {
  if (typeof node.text === 'string') return node.text;
  if (Array.isArray(node.children)) {
    return node.children.map((child) => nodeToText(child as BlockNode)).join('');
  }
  return '';
}

/**
 * Flattens Strapi rich-text blocks into a plain string suitable for JSON-LD
 * (e.g. FAQ answers). Block-level nodes are separated by newlines; inline
 * content within a block is concatenated. Unknown node shapes contribute the
 * empty string rather than throwing.
 */
export function blocksToText(content: BlocksContent | null | undefined): string {
  if (!Array.isArray(content)) return '';
  return content
    .map((node) => nodeToText(node as BlockNode).trim())
    .filter((text) => text.length > 0)
    .join('\n')
    .trim();
}
