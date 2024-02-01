import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default RootLayout