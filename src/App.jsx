import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./compoenents/Loading";

// Define routes with lazy imports
const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/Layout"),
    children: [
      { index: true, lazy: () => import("./pages/Home") },
      { path: "about", lazy: () => import("./pages/About") },
      {
        path: "dashboard",
        lazy: () => import("./pages/Dashboard"),
        children: [
          { index: true, lazy: () => import("./pages/DashboardHome") },
          { path: "settings", lazy: () => import("./pages/DashboardSettings") },
        ],
      },
      { path: "*", lazy: () => import("./pages/NotFound") },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Loading message="loading app..." />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
