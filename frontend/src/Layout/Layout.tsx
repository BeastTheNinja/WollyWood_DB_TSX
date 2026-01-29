import { Outlet } from "react-router"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

export const Layout = () => {
    return (
        <div className="max-w-341.5  mx-auto">
            <div className="bg-[#F9F9F9]  drop-shadow-[#000029]">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>



    )
}