import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import Contactus from "./Pages/Contactus";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/contact",
    element: <Contactus />,
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="!w-full m-h-screen ">
      <RouterProvider router={router} />
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[30px] right-[30px] z-[1000] p-[10px] rounded-full border-none bg-[#333] text-white cursor-pointer text-xl shadow-md transition duration-300 hover:bg-[#555]"
          aria-label="Scroll to top"
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AiOutlineArrowUp />
          </span>
        </button>
      )}
    </div>
  );
};

export default App;
