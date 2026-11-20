import { useState } from 'react';
import type { ICourse } from './types';
import courseDataJson from './data/courses.json';
import Panel from './components/Panel/Panel';
import ControlledFilter from './components/ControlledFilter/ControlledFilter';
import UncontrolledFilter from './components/UncontrolledFilter/UncontrolledFilter';
import CourseListView from './components/CourseListView/CourseListView';
import './App.css';

const courseData = courseDataJson as ICourse[];

function App() {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    localStorage.setItem('selected-course', id);
    setSelectedId(id);
  };

  const filteredCourses = courseData.filter((course) =>
    course.title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <>
      <Panel title="Поиск">
        <div className="filters">
          <div className="filter">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Введите название курса"
            />
          </div>
        </div>
      </Panel>
      <Panel title="Фильтры">
        <div className="filters">
          <ControlledFilter />
          <UncontrolledFilter />
        </div>
      </Panel>
      <Panel title="Полный список">
        <div>Выбранный ID курса: {selectedId ?? 'Курс не выбран'}</div>
        <CourseListView
          items={filteredCourses}
          emptyText="Курсы не найдены"
          onSelect={handleSelect}
        />
      </Panel>
      <Panel title="Пустой список">
        <CourseListView
          items={[]}
          emptyText="Список курсов пуст"
          onSelect={handleSelect}
        />
      </Panel>
    </>
  );
}

export default App;
