import type { CourseCardProps } from '../../types';
import Panel from '../Panel/Panel';

function CourseCard({ course, onSelect, options }: CourseCardProps) {
  const handleSelect = () => {
    onSelect(course.id);
  };

  return (
    <Panel
      title={course.title}
      actions={<button onClick={handleSelect}>Выбрать</button>}
    >
      <div>{course.category}</div>
      {options.isVisible && <div>{course.seats}</div>}
      {options.isVisible && <div>{course.version}</div>}
    </Panel>
  );
}

export default CourseCard;
