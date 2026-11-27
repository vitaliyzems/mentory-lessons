export interface ICourse {
  id: string;
  title: string;
  category: string;
  seats: number;
  version: number;
}

export interface CourseCardProps {
  course: ICourse;
  selectedId: string | null;
  onSelect: (course: ICourse) => void;
}
