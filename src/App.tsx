import courseDataJson from './data/courses.json';
import type { ICourse } from './types';
import CourseCard from './components/CourseCard/CourseCard';
import Panel from './components/Panel/Panel';
import './App.css';

const courseData = courseDataJson as ICourse[];

function App() {
  return (
    <>
      <Panel title="Фильтры">
        <input placeholder="Поиск курса..." />
        <select>
          <option value="all">Все категории</option>
          <option value="frontend">Frontend</option>
          <option value="fullstack">Fullstack</option>
          <option value="quality">Quality</option>
        </select>
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
