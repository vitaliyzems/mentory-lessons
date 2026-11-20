import { useRef, useState } from 'react';

function UncontrolledFilter() {
  const courseRef = useRef<HTMLSelectElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleShow = () => {
    setSelectedCategory(courseRef.current?.value ?? '');
  };

  const handleReset = () => {
    if (courseRef.current) {
      courseRef.current.value = 'all';
    }
    setSelectedCategory('all');
  };

  return (
    <div className="filter">
      <label className="filter__label" htmlFor="uncontrolled-category">
        Категория курса uncontrolled:
      </label>
      <select
        id="uncontrolled-category"
        name="uncontrolled-category"
        ref={courseRef}
        defaultValue="all"
      >
        <option value="all">all</option>
        <option value="frontend">Frontend</option>
        <option value="fullstack">Fullstack</option>
        <option value="quality">Quality</option>
      </select>
      <div className="filter__actions">
        <button className="filter__actions" onClick={handleShow}>
          Показать значение
        </button>
        <button className="filter__actions" onClick={handleReset}>
          Сбросить
        </button>
      </div>
      <p className="filter__result">
        Выбранная категория: {selectedCategory || 'Нажмите «Показать значение»'}
      </p>
    </div>
  );
}

export default UncontrolledFilter;
