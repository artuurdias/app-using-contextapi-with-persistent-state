import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function usePersistedState<T = any> (key: string, initialState: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const storagedState = localStorage.getItem(key);

    if (storagedState) {
      return JSON.parse(storagedState) as T;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;