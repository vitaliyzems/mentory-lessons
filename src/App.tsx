import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import type { ICourse } from './types';
import courseDataJson from './data/courses.json';
import { CourseCard } from './components/CourseCard';
import './App.css';

const courseData = courseDataJson satisfies ICourse[];
const validateSeats = (seats: string) => {
  if (!seats.trim() || Number(seats) < 0 || !Number.isInteger(Number(seats))) {
    return false;
  }
  return true;
};

const validateTitle = (title: string) => {
  return Boolean(title.trim());
};

function App() {
  const [courses, setCourses] = useState<ICourse[]>(courseData);
  const [title, setTitle] = useState<string>('');
  const [seats, setSeats] = useState<string>('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const onSelect = (course: ICourse) => {
    setError('');

    if (selectedId === course.id) {
      setTitle('');
      setSeats('');
      setSelectedId(null);
      return;
    }

    setSelectedId(course.id);
    setTitle(course.title);
    setSeats(String(course.seats));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateTitle(title)) {
      setError('Название не может быть пустым');
      return;
    }

    if (!validateSeats(seats)) {
      setError('Введите корректное число');
      return;
    }

    setError('');

    const newCourses = courses.map((course) => {
      if (course.id === selectedId) {
        return { ...course, title, seats: Number(seats) };
      }
      return course;
    });

    setCourses(newCourses);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSeatsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSeats(e.target.value);
  };

  return (
    <div>
      {selectedId && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Название курса
              <input type="text" value={title} onChange={handleTitleChange} />
            </label>
          </div>
          <div>
            <label>
              Количество мест
              <input type="number" value={seats} onChange={handleSeatsChange} />
            </label>
          </div>
          <div>
            <button type="submit">Изменить</button>
            <div style={{ color: 'red' }}>{error}</div>
          </div>
        </form>
      )}
      <div
        style={{
          padding: '16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}
      >
        {courses.map((course) => (
          <CourseCard
            course={course}
            onSelect={onSelect}
            selectedId={selectedId}
            key={course.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
