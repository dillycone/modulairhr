import { describe, expect, it } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn()', () => {
  it('merges class names and removes duplicates', () => {
    const result = cn('p-4', 'text-sm', 'p-4');
    expect(result).toBe('p-4 text-sm');
  });
});