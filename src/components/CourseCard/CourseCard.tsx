import type { ICourse } from '../../types';
import Panel from '../Panel/Panel';

function CourseCard({ course }: { course: ICourse }) {
  const handleSelect = () => {
    console.log('Course selected:', course.id);
    localStorage.setItem('selected-course', course.id);
  };

  console.log('CourseCard render:', course.id);

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
