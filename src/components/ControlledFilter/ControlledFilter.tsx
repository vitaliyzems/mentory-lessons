import { useState } from 'react';
import type { ICourse } from '../../types';

function ControlledFilter() {
  const [value, setValue] = useState<ICourse['category'] | 'all'>('all');

  return (
    <div className="filter">
      <label className="filter__label" htmlFor="controlled-category">
        Категория курса controlled:
      </label>
      <select
        id="controlled-category"
        name="controlled-category"
        value={value}
        onChange={(e) =>
          setValue(e.target.value as ICourse['category'] | 'all')
        }
      >
        <option value="all">all</option>
        <option value="frontend">Frontend</option>
        <option value="fullstack">Fullstack</option>
        <option value="quality">Quality</option>
      </select>
      <div className="filter__actions">
        <button className="filter__actions" onClick={() => setValue('all')}>
          Сбросить
        </button>
      </div>
      <p className="filter__result">Выбранная категория: {value}</p>
    </div>
  );
}

export default ControlledFilter;
