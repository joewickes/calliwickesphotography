import { describe, it, expect } from 'vitest';
import type { BlocksContent } from '@strapi/blocks-react-renderer';
import { blocksToText } from './blocks-to-text';

// Cast plain fixtures to the renderer's content type; blocksToText only reads
// `text` / `children`, so the structural subset is enough for these tests.
const content = (nodes: unknown[]): BlocksContent => nodes as BlocksContent;

describe('blocksToText', () => {
  it('extracts text from a single paragraph', () => {
    const input = content([{ type: 'paragraph', children: [{ type: 'text', text: 'Hello world' }] }]);
    expect(blocksToText(input)).toBe('Hello world');
  });

  it('joins multiple block-level nodes with newlines', () => {
    const input = content([
      { type: 'paragraph', children: [{ type: 'text', text: 'First.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Second.' }] },
    ]);
    expect(blocksToText(input)).toBe('First.\nSecond.');
  });

  it('concatenates inline children including links within a block', () => {
    const input = content([
      {
        type: 'paragraph',
        children: [
          { type: 'text', text: 'See ' },
          { type: 'link', url: 'https://x.test', children: [{ type: 'text', text: 'our guide' }] },
          { type: 'text', text: ' now.' },
        ],
      },
    ]);
    expect(blocksToText(input)).toBe('See our guide now.');
  });

  it('walks nested lists', () => {
    const input = content([
      {
        type: 'list',
        format: 'unordered',
        children: [
          { type: 'list-item', children: [{ type: 'text', text: 'one' }] },
          { type: 'list-item', children: [{ type: 'text', text: 'two' }] },
        ],
      },
    ]);
    expect(blocksToText(input)).toBe('onetwo');
  });

  it('returns an empty string for empty, null, or undefined content', () => {
    expect(blocksToText(content([]))).toBe('');
    expect(blocksToText(null)).toBe('');
    expect(blocksToText(undefined)).toBe('');
  });
});
