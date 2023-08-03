import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Home/Home";
import Income from "../Page/Income/Income";
import Gallery from "../Page/Gallery/Gallery";
import Foundation from "../Page/Foundation/Foundation";
import Donation from "../Page/Donation/Donation";
import Ons from "../Page/Ons/Ons";
import Documantation from "../Page/Documentation/Documantation";
import BloodRequest from "../Page/BloodRequest/BloodRequest";
import Ffa from "../Page/Project/Ffa/Ffa";
import Health from "../Page/Project/Health/Health";
import Education from "../Page/Project/Education/Education";
import About from "../Page/About/About";
import Profile from "../Page/Profile/Profile";

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
            },
            {
                path: '/ons',
                element: <Ons />
            },
            {
                path: '/document',
                element: <Documantation />
            },
            {
                path: '/blood',
                element: <BloodRequest />
            },
            {
                path: '/ffa',
                element: <Ffa />
            },
            {
                path: '/health',
                element: <Health />
            },
            {
                path: '/education',
                element: <Education />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    }
])
export default routes;