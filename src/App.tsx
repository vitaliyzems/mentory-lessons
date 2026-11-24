import { useState } from 'react';
import type { ICourse } from './types';
import courseDataJson from './data/courses.json';
import { CourseCard } from './components/CourseCard';
import './App.css';

const courseData = courseDataJson satisfies ICourse[];

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const onSelect = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const wrongHandler = (id: number) => {
    console.log(id);
  };

  return (
    <div>
      {courseData.map((course) => (
        <CourseCard
          course={course}
          onSelect={onSelect}
          selectedId={selectedId}
          key={course.id}
        />
      ))}
      {false &&
        courseData.map((course) => (
          <CourseCard
            course={course}
            // @ts-expect-error number id вместо string
            onSelect={wrongHandler}
            selectedId={selectedId}
            key={course.id}
          />
        ))}
    </div>
  );
}

export default App;
