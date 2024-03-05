import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Overview from "./pages/Overview.jsx";
import Mail from "./pages/Mail.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Tasks from "./pages/Tasks.jsx";
import People from "./pages/People.jsx";

const router = createBrowserRouter([
  {
    path: "calendar/",
    element: <App />,
  },
  {
    path: "calendar/overview",
    element: <Overview />,
  },
  {
    path: "calendar/mail",
    element: <Mail />,
  },
  {
    path: "calendar/people",
    element: <People />,
  },
  {
    path: "calendar/tasks",
    element: <Tasks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
