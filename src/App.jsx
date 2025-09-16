import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./pages/Layout";
import Loading from "./compoenents/Loading"; // 👈 import Loading

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DashboardHome = lazy(() => import("./pages/DashboardHome"));
const DashboardSettings = lazy(() => import("./pages/DashboardSettings"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading message="Loading home..." />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="about"
          element={
            <Suspense fallback={<Loading message="Loading about page..." />}>
              <About />
            </Suspense>
          }
        />

        <Route
          path="dashboard"
          element={
            <Suspense fallback={<Loading message="Loading dashboard area..." />}>
              <Dashboard />
            </Suspense>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Loading message="Loading not found..." />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
