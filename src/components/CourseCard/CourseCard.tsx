import type { CourseCardProps } from '../../types';
import Panel from '../Panel/Panel';

function CourseCard({ ids, course, onSelect }: CourseCardProps) {
  const handleSelect = () => {
    onSelect(course.id);
  };

  return (
    <Panel
      title={course.title}
      actions={
        <button
          className={ids.includes(course.id) ? 'selected' : ''}
          onClick={handleSelect}
        >
          {ids.includes(course.id) ? 'Убрать из избранного' : 'В избранное'}
        </button>
      }
    >
      <div>{course.category}</div>
      <div>{course.seats}</div>
      <div>{course.version}</div>
    </Panel>
  );
}

export default CourseCard;
