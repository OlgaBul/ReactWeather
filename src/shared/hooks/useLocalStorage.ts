import { useEffect, useState } from "react";

export const useLocalStorage = (key:string, initialValue:Array<string>) => {
  // const [isDark, toggleTheme] = useState(() => {
  //   const localData = localStorage.getItem(key);
  //   return localData || initialValue;
  // });

  // useEffect(() => {
  //   localStorage.setItem(key, isDark);
  // }, [isDark]);
  // return [isDark, toggleTheme];
}
