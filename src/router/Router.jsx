import { createBrowserRouter } from "react-router-dom";
import Home from "../componets/Home/Home";
import ErrorPage from "../componets/ErrorPage/ErrorPage";
import App from "../App";
import Blog from "../componets/Blog/Blog";
import ChefDetails from "../componets/ChefDetails/ChefDetails";
import Login from "../componets/Login/Login/Login";
import Register from "../componets/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
      path: '/recipes/:id',
      element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
      loader: ({params})=> fetch(`https://assignment10-server-site-showrab15.vercel.app/recipes/${params.id}`)
    },
    {
      path : 'login',
      element: <Login></Login>
    },
    {
      path : 'register',
      element: <Register></Register>
    },
      {
        path : 'blogs',
        element: <Blog></Blog>
      }
    
    ]
  },
]);

export default router