import React from "react";
import Create from "./components/create/Create";
import Event from "./components/event/Event";
import Welcome from "./components/welcome/Welcome";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "/create",
    element: <Create/>,
  },
  {
    path: "/event",
    element: <Event/>,
  },
]);



const Routes = () => (
  <RouterProvider router={router} />
);
export default Routes;
