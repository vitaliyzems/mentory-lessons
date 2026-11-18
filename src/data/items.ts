import type { IItem } from '../types';

export const getItems: () => IItem[] = () =>
  Array.from({ length: 240 }, (_, i) => ({
    id: String(i),
    title: ['React', 'CSS', 'TypeScript'][i % 3] + ' ' + i,
  }));
