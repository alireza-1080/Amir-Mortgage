import React from 'react';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
]

export default routes;