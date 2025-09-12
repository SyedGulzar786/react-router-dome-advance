// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import DashboardHome from "./pages/DashboardHome";
// import DashboardSettings from "./pages/DashboardSettings";
// import NotFound from "./pages/NotFound";
// const About = lazy(() => import("./pages/About"));

// export default function App() {
//   return (
//     <Routes>
//       {/* top-level layout */}
//       <Route path="/" element={<Layout />}>
//         {/* index route: renders at "/" inside Layout */}
//         <Route index element={<Home />} />

//         {/* nested simple route */}
//         <Route
//           path="about"
//           element={
//             <Suspense fallback={<div>...isloading</div>}>
//               <About />
//             </Suspense>
//           }
//         />

//         {/* nested route with its own Outlet */}
//         <Route path="dashboard" element={<Dashboard />}>
//           {/* this is the "index" child of /dashboard: it shows at /dashboard */}
//           <Route index element={<DashboardHome />} />
//           {/* /dashboard/settings */}
//           <Route path="settings" element={<DashboardSettings />} />
//         </Route>

//         {/* catch-all */}
//         <Route path="*" element={<NotFound />} />
//       </Route>
// {/* 
//               <Route path="/" element={<Layout />} />
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="dashboard" element={<Dashboard />}>
//           <Route index element={<DashboardHome />} />
//           <Route path="settings" element={<DashboardSettings />} />

//         </Route>
//       </Route>
//       <Route path="*" element={<NotFound/>} /> */}
//     </Routes>
//   );
// }


import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy imports
const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DashboardHome = lazy(() => import("./pages/DashboardHome"));
const DashboardSettings = lazy(() => import("./pages/DashboardSettings"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Suspense fallback={<div>⏳ Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
