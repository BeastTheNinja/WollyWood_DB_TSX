import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeView } from "../pages/HomeView"
import { Layout } from "../Layout/Layout"
import { ContactView } from "../pages/ContactView"

export const Routing = () => {
    return (
        // Define your routes here
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<HomeView />} />
                        <Route path="/about" element={<div>About Page</div>} />
                        <Route path="/posters" element={<div>Posters Page</div>} />
                        <Route path="/contact" element={<ContactView />} />
                        <Route path="/login" element={<div>Login Page</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}