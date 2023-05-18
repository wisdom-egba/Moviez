import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Sling as Hamburger } from "hamburger-react"
import { motion } from "framer-motion"

export const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      {/* <Link to="/bookmark">Bookmark</Link>
      <Link to="/">Home</Link> */}
      <>
        <div className="shadow-lg py-2  ">
          <div className=" relative flex bg-[#FFFF] justify-between items-center max-w-[90%] md:max-w-[85%] lg:max-w-[70%] m-auto mt-4">
            <div className="">
              <a href="#">
                <h1>
                  MOVIE <span>Z</span>
                </h1>
              </a>
            </div>
            <div className="hidden md:flex">
              <ul className="outline-none uppercase flex gap-8 tracking-wider text-[15px]">
                <Link to="/">
                  <li>
                    <a href="#header">Home</a>
                  </li>
                </Link>

                <Link to="/bookmark">
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                </Link>

                <Link to="/categories">
                  <li>
                    <a href="#experience">About us</a>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="md:hidden" onClick={() => setToggle(!toggle)}>
              <Hamburger size={25} duration={0.5} />
            </div>
          </div>
          <motion.div
            initial={{ x: toggle ? 0 : -500 }}
            animate={{ x: toggle ? 0 : -500 }}
            transition={{ duration: toggle ? 0.5 : 2.5 }}
            className={
              toggle
                ? "absolute z-10 p-4 px-8 w-full bg-white md:hidden rounded-b-lg mt-2"
                : "hidden absolute"
            }
          >
            <ul className="p-1 text-center uppercase ">
              <Link to="/">
                <a href="" className="font-semibold">
                  <li className="p-2 cursor-pointer my-6 hover:bg-gray-100  ">
                    home
                  </li>
                </a>
              </Link>

              <Link to="/bookmark">
                <a href="" className="font-semibold">
                  <li className="p-2 cursor-pointer my-6 hover:bg-gray-100  ">
                    bookmark
                  </li>
                </a>
              </Link>

              <Link to="/categories">
                <a href="" className="font-semibold">
                  <li className="p-2 cursor-pointer my-6 hover:bg-gray-100  ">
                    categories
                  </li>
                </a>
              </Link>
            </ul>
          </motion.div>
        </div>
      </>
    </div>
  )
}
