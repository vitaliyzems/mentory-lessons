import courseDataJson from './data/courses.json';
import type { ICourse } from './types';
import CourseCard from './components/CourseCard/CourseCard';
import Panel from './components/Panel/Panel';
import ControlledFilter from './components/ControlledFilter/ControlledFilter';
import UncontrolledFilter from './components/UncontrolledFilter/UncontrolledFilter';
import './App.css';

const courseData = courseDataJson as ICourse[];

function App() {
  return (
    <>
      <Panel title="Фильтры">
        <div className="filters">
          <ControlledFilter />
          <UncontrolledFilter />
        </div>
      </Panel>
      <div className="courses">
        {courseData.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </>
  );
}

export default App;
