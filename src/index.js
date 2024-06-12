import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import BlogPages from "./view/BlogPages/BlogPages"
import Home from "./view/Home/Home"


const root = ReactDOM.createRoot(document.getElementById('root'));
 
 const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/blogpage/:id",
    element:<BlogPages />
  }
 ]);

 root.render(<RouterProvider router={router}/>);
