import type { CourseCardProps } from '../../types';
import './index.css';

export function CourseCard({ course, onSelect, selectedId }: CourseCardProps) {
  const isSelected = selectedId === course.id;

  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '10px',
        padding: '16px 0',
      }}
    >
      <div>{course.title}</div>
      <div>Категория: {course.category}</div>
      <div>Мест: {course.seats}</div>
      <div>Версия: {course.version}</div>
      <button
        className={isSelected ? 'selected' : ''}
        onClick={() => onSelect(course)}
      >
        {isSelected ? 'Отменить выбор' : 'Выбрать'}
      </button>
    </div>
  );
}
