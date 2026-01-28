import { Outlet } from "react-router"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

export const Layout = () => {
    return (
        <div className="max-w-[1366px]  mx-auto">
            <div className="bg-[#F9F9F9]  shadow-lg">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>



    )
}