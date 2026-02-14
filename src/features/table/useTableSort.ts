import { useState } from "react";

export function useTableSort<T>() {
  const [key, setKey] = useState<keyof T | null>(null);
  const [dir, setDir] = useState<"asc" | "desc">("asc");

  function sort(data: T[]): T[] {
    if (!key) return data;

    return [...data].sort((a, b) => {
      const av = a[key];
      const bv = b[key];

      if (av === bv) return 0;
      if (av! > bv!) return dir === "asc" ? 1 : -1;
      return dir === "asc" ? -1 : 1;
    });
  }

  function toggleSort(newKey: keyof T) {
    if (key === newKey) setDir(dir === "asc" ? "desc" : "asc");
    else {
      setKey(newKey);
      setDir("asc");
    }
  }

  return { sort, toggleSort, key, dir };
}