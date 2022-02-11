import React, { useState, useEffect } from "react";

function useLocalStorage(key) {
  const [name, setName] = useState(() => {
    return window.localStorage.getItem(key) || "aaa";
  });

  useEffect(() => {
    window.localStorage.setItem(key, name);
  }, [name]);

  return [name, setName];
}
export default useLocalStorage;
