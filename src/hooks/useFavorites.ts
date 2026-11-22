import { useState } from 'react';

export function useFavorites() {
  const [ids, setIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const clear = () => {
    if (!ids.length) return;
    setIds([]);
  };

  return { ids, toggle, clear };
}
