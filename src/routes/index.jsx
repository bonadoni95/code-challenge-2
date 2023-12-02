import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import DetailProduct from "../components/DetailProduct";
import Home from "../pages/Home";
import Products from "../components/Products";
import About from "../components/About";
import Teams from "../components/Teams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <DetailProduct />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
    ],
  },
]);

export default router;
