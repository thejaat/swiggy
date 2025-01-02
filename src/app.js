import Header from "./components/header"
import Home from "./pages/home"
import Footer from "./components/footer"
import About from "./pages/about"
import Contact from "./pages/contact"
import { createBrowserRouter,Outlet } from "react-router-dom"
import Restromenu from "./pages/restaurentmenu"
const Applayout = () => {
        return (
                <div >
                        <Header />
                        <Outlet />
                        <Footer />
                </div>

        )
}

const appRouter = createBrowserRouter([
        {
        path:"/",
        element:<Applayout/>,
        children:[
                {
                        path:"/",
                        element:<Home/>
                },
                {
                        path:"/about",
                        element:<About/>
                },
                {
                        path:"/contact",
                        element:<Contact/>
                },{
                        path:"/restaurent/:id",
                        element:<Restromenu/>
                }
        ]


}
])
export default appRouter