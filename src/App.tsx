import { memo, useDeferredValue, useState, useTransition } from 'react';
import { getItems } from './data/items';
import type { IItem, SearchMode } from './types';
import './App.css';

const items = getItems();

function CourseCard({ item, query }: { item: IItem; query: string }) {
  let checksum = item.id.length + query.length;
  for (let i = 0; i < 80000; i++) checksum = (Math.imul(checksum, 31) + i) | 0;
  return (
    <li>
      {item.title} — {checksum}
    </li>
  );
}

const Results = memo(function Results({ query }: { query: string }) {
  const normalizedQuery = query.trim().toLowerCase();

  return (
    <ul>
      {items
        .filter((item) => item.title.toLowerCase().includes(normalizedQuery))
        .map((item) => (
          <CourseCard key={item.id} item={item} query={query} />
        ))}
    </ul>
  );
});

export function Search() {
  const [mode, setMode] = useState<SearchMode>('sync');
  const [text, setText] = useState('');
  const [listQuery, setListQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const deferredValue = useDeferredValue(text);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);

    if (mode === 'sync') {
      setListQuery(value);
    } else if (mode === 'transition') {
      startTransition(() => {
        setListQuery(value);
      });
    }
  };

  const handleModeChange = (nextMode: SearchMode) => {
    setMode(nextMode);

    if (nextMode !== 'deferred') {
      setListQuery(text);
    }
  };

  const isDeferred = text !== deferredValue;
  const query = mode === 'deferred' ? deferredValue : listQuery;

  return (
    <>
      <div>
        {(['sync', 'transition', 'deferred'] as const).map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="mode"
              value={value}
              checked={mode === value}
              onChange={() => handleModeChange(value)}
            />
            {value}
          </label>
        ))}
      </div>

      <label>
        Поиск
        <input value={text} onChange={handleChange} />
      </label>
      {mode === 'transition' && isPending && <div>Обновляем результаты...</div>}
      {mode === 'deferred' && isDeferred && <div>Обновляем результаты...</div>}

      <div>Результаты по запросу: {query}</div>
      <Results query={query} />
    </>
  );
}

function App() {
  return (
    <div>
      <Search />
    </div>
  );
}

export default App;
