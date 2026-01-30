import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeView } from "../pages/HomeView"
import { Layout } from "../Layout/Layout"
import { ContactView } from "../pages/ContactView"
import { Posters } from "../pages/Posters"

export const Routing = () => {
    return (
        // Define your routes here
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<HomeView />} />
                        <Route path="/Om-os" element={<div>About Page</div>} />
                        <Route path="/Plakater" element={<Posters />} />
                        <Route path="/Kontakt" element={<ContactView />} />
                        <Route path="/login" element={<div>Login Page</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}