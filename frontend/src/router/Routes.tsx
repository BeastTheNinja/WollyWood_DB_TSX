import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const HomeView = lazy(() => import("../pages/HomeView").then((m) => ({ default: m.HomeView })))
const Layout = lazy(() => import("../Layout/Layout").then((m) => ({ default: m.Layout })))
const ContactView = lazy(() => import("../pages/ContactView").then((m) => ({ default: m.ContactView })))
const Posters = lazy(() => import("../pages/PostersView").then((m) => ({ default: m.Posters })))
const AboutUsView = lazy(() => import("../pages/AboutUsView").then((m) => ({ default: m.AboutUsView })))
const LoginView = lazy(() => import("../pages/LogInView").then((m) => ({ default: m.LoginView })))
const Details = lazy(() => import("../components/pages/DetailsComponent/Details").then((m) => ({ default: m.Details })))

// Main routing component - defines all application routes
export const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<div className="p-4">Indlaeser...</div>}>
                    <Routes>
                        {/* Layout route wraps all child routes with header/footer */}
                        <Route element={<Layout />}>
                            <Route index element={<HomeView />} />
                            <Route path="/Om-os" element={<AboutUsView />} />
                            <Route path="/Plakater" element={<Posters />} />
                            <Route path="/details/:slug" element={<Details />} />
                            <Route path="/Kontakt" element={<ContactView />} />
                            <Route path="/login" element={<LoginView />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}