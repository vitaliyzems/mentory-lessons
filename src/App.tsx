import { generateCourses } from './utils/generateCourses';
import CoursesWithMemo from './components/Courses/CoursesWithMemo/CoursesWithMemo';
import CoursesWithoutMemo from './components/Courses/CoursesWithoutMemo/CoursesWithoutMemo';
import './App.css';
import { useState } from 'react';

const courses = generateCourses();

function App() {
  const [activeMode, setActiveMode] = useState<'without' | 'with'>('without');

  return (
    <div className="comparison">
      <div className="comparison__switch">
        <button
          className={activeMode === 'without' ? 'active' : ''}
          onClick={() => setActiveMode('without')}
        >
          Без useMemo
        </button>

        <button
          className={activeMode === 'with' ? 'active' : ''}
          onClick={() => setActiveMode('with')}
        >
          С useMemo
        </button>
      </div>

      {activeMode === 'without' ? (
        <CoursesWithoutMemo courses={courses} />
      ) : (
        <CoursesWithMemo courses={courses} />
      )}
    </div>
  );
}

export default App;
