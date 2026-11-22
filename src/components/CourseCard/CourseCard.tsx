import type { CourseCardProps } from '../../types';
import Panel from '../Panel/Panel';

function CourseCard({ ids, course, onSelect, onToggle }: CourseCardProps) {
  const handleSelect = () => {
    onSelect(course.id);
  };

  const handleToggle = () => {
    onToggle(course.id);
  };

  const isFavorite = ids.includes(course.id);

  return (
    <Panel
      title={course.title}
      actions={
        <>
          <button onClick={handleSelect}>Выбрать</button>
          <button
            className={isFavorite ? 'selected' : ''}
            onClick={handleToggle}
          >
            {isFavorite ? 'Убрать из избранного' : 'В избранное'}
          </button>
        </>
      }
    >
      <div>{course.category}</div>
      <div>{course.seats}</div>
      <div>{course.version}</div>
    </Panel>
  );
}

export default CourseCard;
