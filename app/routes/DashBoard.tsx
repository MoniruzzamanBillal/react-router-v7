import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div className="dashboardContainer">
      <h1>this is my dashboard!!!!</h1>
      <Outlet />
    </div>
  );
}
