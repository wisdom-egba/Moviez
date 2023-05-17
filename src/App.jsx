import React from "react"
import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
} from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./components/Home"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>
    )
  )

  return
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
