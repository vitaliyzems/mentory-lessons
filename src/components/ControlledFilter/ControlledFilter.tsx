import type { ICourse, IControlledFilterProps } from '../../types';

function ControlledFilter({ value, onChange }: IControlledFilterProps) {
  return (
    <div className="filter">
      <label className="filter__label" htmlFor="controlled-category">
        Категория курса:
      </label>
      <select
        id="controlled-category"
        name="controlled-category"
        value={value}
        onChange={(e) =>
          onChange(e.target.value as ICourse['category'] | 'all')
        }
      >
        <option value="all">all</option>
        <option value="frontend">Frontend</option>
        <option value="fullstack">Fullstack</option>
        <option value="quality">Quality</option>
      </select>
      <div className="filter__actions">
        <button onClick={() => onChange('all')}>Сбросить</button>
      </div>
      <p className="filter__result">Выбранная категория: {value}</p>
    </div>
  );
}

export default ControlledFilter;
