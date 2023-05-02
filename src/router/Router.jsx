import { createBrowserRouter } from "react-router-dom";
import Home from "../componets/Home/Home";
import ErrorPage from "../componets/ErrorPage/ErrorPage";
import App from "../App";
import Blog from "../componets/Blog/Blog";


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
        path : 'blogs',
        element: <Blog></Blog>
      }
    
    ]
  },
]);

export default router