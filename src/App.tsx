import courseDataJson from './data/courses.json';
import type { ICourse } from './types';
import './App.css';
import { useState } from 'react';

const courseData = courseDataJson as ICourse[];

function CourseCard({ course }: { course: ICourse }) {
  const handleSelect = () => {
    console.log('Course selected:', course.id);
    localStorage.setItem('selected-course', course.id);
  };

  console.log('CourseCard render:', course.id);

  return (
    <div>
      <div>{course.title}</div>
      <div>{course.category}</div>
      <div>{course.seats}</div>
      <div>{course.version}</div>
      <button onClick={handleSelect}>Выбрать</button>
    </div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Счетчик: {counter}
      </button>
      {courseData.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </div>
  );
}

export default App;
