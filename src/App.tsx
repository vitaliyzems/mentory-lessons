import coursesData from './data/courses.json';
import { useFavorites } from './hooks/useFavorites';
import CourseSelector from './components/CourseSelector/CourseSelector';
import FavoritesPanel from './components/FavoritesPanel/FavoritesPanel';
import { useState } from 'react';
import type { ICourse } from './types';
import Search from './components/Search/Search';
import ControlledFilter from './components/ControlledFilter/ControlledFilter';
import Panel from './components/Panel/Panel';
import './App.css';

const courses = coursesData as ICourse[];

function App() {
  const [activeTab, setActiveTab] = useState<'catalog' | 'favorites'>(
    'catalog',
  );
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    ICourse['category'] | 'all'
  >('all');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const { ids, toggle, clear } = useFavorites();

  const selectedCourse = courses.find(
    (course) => course.id === selectedCourseId,
  );

  const handleSelectCourse = (id: string) => {
    setSelectedCourseId(id);
  };

  const normalizedSearch = search.trim().toLowerCase();

  const filteredCourses = courses
    .filter(
      (course) =>
        selectedCategory === 'all' || course.category === selectedCategory,
    )
    .filter((course) => course.title.toLowerCase().includes(normalizedSearch));

  return (
    <>
      <nav className="dashboard-nav">
        <button
          className={`dashboard-nav__item ${
            activeTab === 'catalog' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('catalog')}
        >
          Каталог
        </button>

        <button
          className={`dashboard-nav__item ${
            activeTab === 'favorites' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('favorites')}
        >
          Избранное
          <span className="dashboard-nav__count">{ids.length}</span>
        </button>
      </nav>
      {activeTab === 'catalog' && (
        <>
          <div className="filters">
            <Search search={search} setSearch={setSearch} />
            <ControlledFilter
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
          {selectedCourse && (
            <Panel
              title="Выбранный курс"
              actions={
                <button onClick={() => setSelectedCourseId(null)}>
                  Сбросить выбор
                </button>
              }
            >
              <>
                <p>{selectedCourse.title}</p>
                <p>Категория: {selectedCourse.category}</p>
              </>
            </Panel>
          )}
          <CourseSelector
            courses={filteredCourses}
            ids={ids}
            onSelect={handleSelectCourse}
            onToggle={toggle}
          />
        </>
      )}
      {activeTab === 'favorites' && (
        <FavoritesPanel
          courses={courses}
          ids={ids}
          onSelect={handleSelectCourse}
          onToggle={toggle}
          onClear={clear}
        />
      )}
    </>
  );
}

export default App;
