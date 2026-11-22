import { useFavorites } from './hooks/useFavorites';
import CourseSelector from './components/CourseSelector/CourseSelector';
import { generateCourses } from './utils/generateCourses';
import FavoritesPanel from './components/FavoritesPanel/FavoritesPanel';
import './App.css';

const courses = generateCourses();

function App() {
  const { ids, toggle, clear } = useFavorites();

  console.log('ids', ids);

  return (
    <>
      <FavoritesPanel
        courses={courses}
        ids={ids}
        onToggle={toggle}
        onClear={clear}
      />
      <CourseSelector courses={courses} ids={ids} onSelect={toggle} />
    </>
  );
}

export default App;
