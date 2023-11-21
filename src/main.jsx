import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Movies = lazy(() => import("./modules/Movies.jsx"));
const Counter = lazy(() => import("./modules/Counter.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies",
    element: (
      <Suspense>
        <Movies />
      </Suspense>
    ),
  },
  {
    path: "/counter",
    element: (
      <Suspense>
        <Counter />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
