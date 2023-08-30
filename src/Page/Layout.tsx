import { Outlet } from "react-router-dom"
import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"

export const Layout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
