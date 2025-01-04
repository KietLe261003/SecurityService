import AboutPage from "../Page/AboutPage/AboutPage";
import ContactPage from "../Page/ContactPage/ContactPage";
import GuardsPage from "../Page/GuardsPage/GuardsPage";
import HomPage from "../Page/HomePage/HomPage";
import ServicePage from "../Page/ServicePage/ServicePage";
import RouterLink from "../Untils/RouterLink";

export const clientRoute=[
    {
        path: RouterLink.Home,
        element: HomPage
    },
    {
        path: RouterLink.About,
        element: AboutPage
    },
    {
        path: RouterLink.Service,
        element: ServicePage
    },
    {
        path: RouterLink.Guards,
        element: GuardsPage
    },
    {
        path: RouterLink.Contact,
        element: ContactPage
    }
]