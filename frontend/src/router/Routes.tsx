import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeView } from "../pages/HomeView"
import { Layout } from "../Layout/Layout"
import { ContactView } from "../pages/ContactView"
import { Posters } from "../pages/PostersView"
import { AboutUsView } from "../pages/AboutUsView"
import { LoginView } from "../pages/LogInView"

// Main routing component - defines all application routes
export const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Layout route wraps all child routes with header/footer */}
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