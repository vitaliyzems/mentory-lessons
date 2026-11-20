import { useState } from 'react';
import type { ICourse } from './types';
import courseDataJson from './data/courses.json';
import Panel from './components/Panel/Panel';
import ControlledFilter from './components/ControlledFilter/ControlledFilter';
import CourseListView from './components/CourseListView/CourseListView';
import Search from './components/Search/Search';
import './App.css';

const courseData = courseDataJson as ICourse[];

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    ICourse['category'] | 'all'
  >('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    localStorage.setItem('selected-course', id);
    setSelectedId(id);
  };

  const filteredCourses = courseData.filter((course) => {
    const matchesTitle = course.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || course.category === selectedCategory;

    return matchesTitle && matchesCategory;
  });

  const handleReset = () => {
    setSearch('');
    setSelectedCategory('all');
  };

  return (
    <>
      <Panel
        title="Фильтры"
        actions={
          <button type="button" onClick={handleReset}>
            Сбросить все фильтры
          </button>
        }
      >
        <div className="filters">
          <Search search={search} setSearch={setSearch} />
          <ControlledFilter
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
      </Panel>
      <Panel title="Список курсов">
        <div>Выбранный ID курса: {selectedId ?? 'Курс не выбран'}</div>
        <p>Найдено курсов: {filteredCourses.length}</p>
        <CourseListView
          items={filteredCourses}
          emptyText="Курсы не найдены"
          onSelect={handleSelect}
        />
      </Panel>
    </>
  );
}

export default App;
