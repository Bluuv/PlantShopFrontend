import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavLayout from "./pages/NavLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WalletPage from "./pages/WalletPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,  
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/shop/product", element: <ShopPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/news", element: <NewsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/shop/manage-account/add-money", element: <WalletPage/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
