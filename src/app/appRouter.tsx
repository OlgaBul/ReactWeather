import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { HistoryOfSearch } from "@/pages/historyOfSearch";
import { NotFound } from "@/pages/notFound";
import { Favourites } from "@/pages/favourites";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout/>,
    errorElement: <div>Error</div>, // added component
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/history",
        element: <HistoryOfSearch />
      },
      {
        path: "/favourites",
        element: <Favourites />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  }
])

