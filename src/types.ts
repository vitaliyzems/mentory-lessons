export interface ICourse {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'quality';
  seats: number;
  version: number;
}
