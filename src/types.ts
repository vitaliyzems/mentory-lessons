export interface ICourse {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'quality';
  seats: number;
  version: number;
}

export interface PanelProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}
