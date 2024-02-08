import Footer from "../sections/Footer"
import Header from "../sections/Header"
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default RootLayout