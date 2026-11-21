import { useCallback, useMemo, useState } from 'react';
import { generateCourses } from '../../utils/generateCourses';
import CourseSelector from './CourseSelector';

const courses = generateCourses();

function CourseSelectorDemo() {
  const [count, setCount] = useState(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  console.log('Parent render');

  const onSelect = useCallback((id: string) => {
    setSelectedIds((prev) => [...prev, id]);
  }, []);

  //   const options = { isVisible: true };
  const options = useMemo(() => ({ isVisible: true }), []);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <p> {count} </p>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <p>Выбранные ID: {selectedIds.join(', ')}</p>
      <CourseSelector courses={courses} onSelect={onSelect} options={options} />
    </>
  );
}

export default CourseSelectorDemo;
