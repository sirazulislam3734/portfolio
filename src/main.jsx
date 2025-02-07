import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ProjectsDetails from "./pages/ProjectsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detailsPage/:id",
    element: <ProjectsDetails />,
    loader: () => fetch(`project.json`)
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
