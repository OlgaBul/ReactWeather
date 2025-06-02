import styles from "./styles.module.css";
import { Search } from "@/features/search";
import { SwitcherTemp } from "@/features/toggleTemp";
import { Slider } from "@/features/slider";
import useFetch from "@/shared/hooks/useFetch";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const BASE_KEY = import.meta.env.VITE_BASE_KEY;

const MainPage = () => {
  const city = "Москва";
  const url = `${BASE_URL}/data/2.5/weather?q=${city}&appid=${BASE_KEY}`;

  const { data, isLoading, error } = useFetch(url);

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <main className={styles.container}>
      <SwitcherTemp />
      <Search />
      <Slider />
    </main>
  );
};

export default MainPage;
