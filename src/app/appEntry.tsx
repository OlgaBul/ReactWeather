import React from "react";
import ReactDOM from "react-dom/client";
import "../shared/index.css";
import { Provider } from "react-redux";
import { store } from "./appStore";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  </React.StrictMode>
);
