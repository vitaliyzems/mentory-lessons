import type { CourseCardProps } from '../../types';
import './index.css';

export function CourseCard({ course, onSelect, selectedId }: CourseCardProps) {
  const isSelected = selectedId === course.id;

  return (
    <div>
      <div>{course.title}</div>
      <div>{course.category}</div>
      <div>{course.seats}</div>
      <div>{course.version}</div>
      <button
        className={isSelected ? 'selected' : ''}
        onClick={() => onSelect(course.id)}
      >
        {isSelected ? 'Отменить выбор' : 'Выбрать'}
      </button>
    </div>
  );
}
