import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomePage from './pages/HomePage';
import MenuPage from "./pages/MenuPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import HomePages from "./pages/Admin/HomesPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/Admin/UserPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";

import "./App.css";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/menu",
          element: <MenuPage />
        },
        {
          path: "/product-details/:id",
          element: <ProductDetailsPage />
        },
        {
          path: "/cart",
          element: <CartPage/> 
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        }
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/admin",
          element: <HomePages />,
        },
        {
          path: "/admin/kategoriler",
          element: <CategoryPage />,
        },
        {
          path: "/admin/kategoriler/update/:id",
          element: <UpdateCategoryPage/>,
        },
        {
          path: "/admin/users",
          element: <UserPage />,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;