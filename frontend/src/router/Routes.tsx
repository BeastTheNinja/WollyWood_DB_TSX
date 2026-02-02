import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeView } from "../pages/HomeView"
import { Layout } from "../Layout/Layout"
import { ContactView } from "../pages/ContactView"
import { Posters } from "../pages/PostersView"
import { AboutUsView } from "../pages/AboutUsView"
import { LoginView } from "../pages/LogInView"

export const Routing = () => {
    return (
        // Define your routes here
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<HomeView />} />
                        <Route path="/Om-os" element={<AboutUsView />} />
                        <Route path="/Plakater" element={<Posters />} />
                        <Route path="/Kontakt" element={<ContactView />} />
                        <Route path="/login" element={<LoginView />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}