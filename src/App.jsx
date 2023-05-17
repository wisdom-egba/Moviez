import React from "react"
import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./components/Home"
import { Bookmark } from "./components/Bookmark"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  )
}
export default App
