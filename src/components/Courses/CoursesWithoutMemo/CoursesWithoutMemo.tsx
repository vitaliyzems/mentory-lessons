import { useState } from 'react';
import type { CoursesProps, SortDirection } from '../../../types';
import Panel from '../../Panel/Panel';
import CourseListView from '../../CourseListView/CourseListView';
import '../Courses.css';

function CoursesWithoutMemo({ courses }: CoursesProps) {
  const [count, setCount] = useState(0);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  console.log('Сортировка без useMemo');

  const sortedCourses = [...courses].sort((a, b) => {
    return sortDirection === 'asc'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  return (
    <>
      <div className="course-controls">
        <div className="counter">
          <button
            className="counter__button"
            onClick={() => setCount((prev) => prev - 1)}
            aria-label="Уменьшить счётчик"
          >
            −
          </button>

          <span className="counter__value">{count}</span>

          <button
            className="counter__button"
            onClick={() => setCount((prev) => prev + 1)}
            aria-label="Увеличить счётчик"
          >
            +
          </button>
        </div>

        <button
          className="sort-button"
          onClick={() =>
            setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
          }
        >
          Сортировка: {sortDirection === 'asc' ? 'А–Я' : 'Я–А'}
        </button>
      </div>
      <Panel title="Список курсов без Memo">
        <CourseListView
          // items={sortedCourses}
          items={sortedCourses.slice(0, 20)}
          emptyText="Курсов не найдено"
          onSelect={() => {}}
        />
      </Panel>
    </>
  );
}

export default CoursesWithoutMemo;
