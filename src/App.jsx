import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Mainpage from "./Mainpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
]);

const App = () => {
  return (
    <div className="!w-full m-h-screen ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
