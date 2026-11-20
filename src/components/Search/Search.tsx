import type { ISearchProps } from '../../types';

function Search({ search, setSearch }: ISearchProps) {
  return (
    <div className="filter">
      <label className="filter__label" htmlFor="course-title">
        Поиск по названию курса:
      </label>
      <input
        type="text"
        id="course-title"
        name="course-title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Введите название курса"
      />
      <div className="filter__actions">
        <button onClick={() => setSearch('')}>Сбросить</button>
      </div>
    </div>
  );
}

export default Search;
