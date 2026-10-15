import React from 'react'
import { NavLink, Outlet } from 'react-router'

function AppLayout() {
  const [isAppReady, updateAppStatus] = React.useState(false)

  setTimeout(() => {
    updateAppStatus(true)
  }, 3 * 1000);

  if(!isAppReady) {
    return (<div>
      Page is Loading
    </div>);
  }

  return (
    <div>
        <header>HEADER</header>
        <nav>
        <ul>
            <li><NavLink to={"/"}>Dashboard</NavLink></li>
            <li><NavLink to={"/student"}>Student</NavLink></li>
            <li>Teacher</li>
            <li>Staff</li>
        </ul>
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>FOOTER</footer>
    </div>
  )
}

export default AppLayout