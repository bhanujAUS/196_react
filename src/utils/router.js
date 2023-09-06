import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import ImageHoverComponent from '../components/earth/ImageHoverComponent';
import ErrorPage from '../error/error-page'
import ARComponent from '../components/ar/ARComponent';

const CustomRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>
    },
    {
      path: "earth",
      element: <ImageHoverComponent mainImage='/background.PNG' hoverImage='/poster.png'/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/ar",
      element: <ARComponent />,
      errorElement: <ErrorPage/>
    },
]);

export default CustomRouter;
