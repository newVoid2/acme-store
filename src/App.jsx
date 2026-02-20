import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Home from "./routes/home/Home";
import NavBar from "./routes/navigation/NavBar";
import Authentication from "./routes/Authentication/Authentication";
import { UserProvider } from "./contexts/userProvider";
import { ShopProvider } from "./contexts/shopProvider";
import { CartProvider } from "./contexts/cartProvider";
import Shop from "./routes/shop/Shop";


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: NavBar,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: 'shop',
          Component: Shop
        },
        {
          path: 'auth',
          Component: Authentication
        }
      ]
      
    }
  ])
  return (
    <UserProvider>
      <ShopProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ShopProvider>
    </UserProvider>
  );
}

export default App
