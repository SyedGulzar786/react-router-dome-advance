import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="">Overview</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <div style={{ marginTop: 10 }}>
        <Outlet />
      </div>
    </div>
  );
}
