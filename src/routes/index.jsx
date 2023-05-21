import { DashboardPage } from "../pages/private/Admin/Dashborad";
import { LoginPage } from "../pages/public/Auth/Login";
import { RegisterPage } from "../pages/public/Auth/Register";
import { BasketPage } from "../pages/public/Basket/BasketPage";
import { ProductsPage } from "../pages/public/Products/Products";
import {HomePage} from "../pages/public/Home/HomePage"



export const privateRoutes = [
    {
      path: "/admin",
      element: <DashboardPage />,
    },
  ];

export const publicRoutes = [
  {
    path: "/",
    element:<HomePage/>
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/basket",
    element: <BasketPage />,
  },
];
