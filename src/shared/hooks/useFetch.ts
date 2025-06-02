import { useEffect, useState } from "react";

// type UseFetchParams = {
//   url: string;
//   // options?: RequestInit;
// };

type UseFetchReturn<T> = {
  data: string | null;
  isLoading: boolean;
  error: Error | null;
};

function useFetch<T>(url: string | null): UseFetchReturn<T> {
  const [data, setData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // const stableParams = useMemo(() => params, [params.url]);

  useEffect(() => {
    console.log("Fetching URL:", url);
    if (!url) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;



// import { useEffect, useState } from "react";

// type useFetchParams = {
//   url: string;
//   // options?: RequestInit;
// }

// type useFetchReturn<T> = {
//   data: T | null;
//   isLoading: boolean;
//   error: Error | null;
// };

// function useFetch<T>(url: useFetchParams): useFetchReturn<T>{
//   const [data, setData] = useState<T | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     if (!url) return;

//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return { data, isLoading, error };
// }

// export default useFetch;


