export interface ICourse {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'quality';
  seats: number;
  version: number;
}

export interface IItem {
  id: string;
  title: string;
}

export type SearchMode = 'sync' | 'transition' | 'deferred';
