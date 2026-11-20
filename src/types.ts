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

export interface CourseListViewProps {
  items: ICourse[];
  emptyText: string;
  onSelect: (id: string) => void;
}

export interface CourseCardProps {
  course: ICourse;
  onSelect: (id: string) => void;
}
