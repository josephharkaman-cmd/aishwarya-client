import React from 'react'
import { NavLink, Outlet } from 'react-router'

function AppLayout() {
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