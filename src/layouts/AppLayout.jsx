import React from "react";
import { NavLink, Outlet } from "react-router";
import LoginScreen from "../screens/LoginScreen";

function AppLayout() {
  const [isAppReady, updateAppStatus] = React.useState(false);
  const token = localStorage.getItem("@token");

  setTimeout(() => {
    updateAppStatus(true);
  }, 3 * 1000);

  if (!isAppReady) {
    return <div>Page is Loading</div>;
  }

  if (!token) {
    return <LoginScreen />;
  }

  return (
    <div>
      <header>HEADER</header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/student"}>Student</NavLink>
          </li>
          <li>Teacher</li>
          <li>Staff</li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default AppLayout;
