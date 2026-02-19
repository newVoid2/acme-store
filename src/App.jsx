import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Home from "./routes/home/Home";
import NavBar from "./routes/navigation/NavBar";
import Authentication from "./routes/Authentication/Authentication";
import { UserProvider } from "./contexts/userProvider";


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
          path: 'auth',
          Component: Authentication
        }
      ]
      
    }
  ])
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App
