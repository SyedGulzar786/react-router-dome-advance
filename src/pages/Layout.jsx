import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ padding: 20 }}>
      <header style={{ marginBottom: 12 }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </header>

      <main style={{ border: "1px solid #ddd", padding: 12 }}>
        <Outlet />
      </main>
    </div>
  );
}
