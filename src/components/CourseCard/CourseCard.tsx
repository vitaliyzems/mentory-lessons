import type { CourseCardProps } from '../../types';
import Panel from '../Panel/Panel';

function CourseCard({ course, onSelect }: CourseCardProps) {
  const handleSelect = () => {
    onSelect(course.id);
  };

  return (
    <Panel
      title={course.title}
      actions={<button onClick={handleSelect}>Выбрать</button>}
    >
      <div>{course.category}</div>
      <div>{course.seats}</div>
      <div>{course.version}</div>
    </Panel>
  );
}

export default CourseCard;
