import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Home/Home";
import AboutText from "../Home/About";
import Income from "../Page/Income/Income";
import Gallery from "../Page/Gallery/Gallery";
import Foundation from "../Page/Foundation/Foundation";
import Donation from "../Page/Donation/Donation";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/*',
                element: <AboutText />

            },
            {
                path: '/income',
                element: <Income />
            },
            {
                path: '/gallery',
                element: <Gallery />

            },
            {
                path: '/foundation',
                element: <Foundation />
            },
            {
                path: '/donation',
                element: <Donation />
            }
        ]
    }
])
export default routes;