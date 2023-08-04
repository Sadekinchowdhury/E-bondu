import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Home/Home";
import Income from "../Page/Income/Income";
import Gallery from "../Page/Gallery/Gallery";
import Foundation from "../Page/Foundation/Foundation";
import Donation from "../Page/Donation/Donation";
import Ons from "../Page/Ons/Ons";
import Documantation from "../Page/Documentation/Documantation";

import Ffa from "../Page/Project/Ffa/Ffa";
import Health from "../Page/Project/Health/Health";
import Education from "../Page/Project/Education/Education";
import About from "../Page/About/About";
import Profile from "../Page/Profile/Profile";
import PrivacyText from "../Home/Privacy";
import TermsAnd from "../Home/TermsAnd";
import Blood from "../Page/Blood/Blood";
import Donate from "../Page/Danate/Donate";


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
                path: '/blood',
                element: <Blood />
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
            },
            {
                path: '/privacy',
                element: <PrivacyText />
            },
            {
                path: '/terms',
                element: <TermsAnd />
            },
            {
                path: '/donate',
                element: <Donate />
            }
        ]
    }
])
export default routes;