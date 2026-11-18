import { memo, useState, useTransition } from 'react';
import { getItems } from './data/items';
import type { IItem } from './types';
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

const Results = memo(function Results({
  query,
  isPending,
}: {
  query: string;
  isPending: boolean;
}) {
  const normalizedQuery = query.trim().toLowerCase();

  return (
    <>
      {isPending && <div>Обновление списка...</div>}
      <ul>
        {items
          .filter((item) => item.title.toLowerCase().includes(normalizedQuery))
          .map((item) => (
            <CourseCard key={item.id} item={item} query={query} />
          ))}
      </ul>
    </>
  );
});

export function Search() {
  const [isTransition, setIsTransition] = useState(false);
  const [text, setText] = useState('');
  const [listQuery, setListQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isTransition) {
      setText(value);

      startTransition(() => {
        setListQuery(value);
      });
    } else {
      setText(value);
      setListQuery(value);
    }
  };

  return (
    <>
      <div>
        <input
          type="radio"
          name="mode"
          value="sync"
          checked={!isTransition}
          onChange={() => setIsTransition(false)}
        />{' '}
        Обычный режим
        <input
          type="radio"
          name="mode"
          value="async"
          checked={isTransition}
          onChange={() => setIsTransition(true)}
        />{' '}
        useTransition
      </div>
      <label>
        Поиск
        <input value={text} onChange={handleChange} />
      </label>
      <Results query={listQuery} isPending={isPending} />
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
