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
  ids: string[];
  emptyText: string;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
}

export interface CourseCardProps {
  ids: string[];
  course: ICourse;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
}

export interface ISearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export interface IControlledFilterProps {
  value: ICourse['category'] | 'all';
  onChange: (value: ICourse['category'] | 'all') => void;
}

export type SortDirection = 'asc' | 'desc';

export interface CoursesProps {
  courses: ICourse[];
}

export interface CourseSelectorProps {
  courses: ICourse[];
  ids: string[];
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
}

export interface FavoritesPanelProps {
  courses: ICourse[];
  ids: string[];
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
  onClear: () => void;
}
