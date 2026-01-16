import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import Products from "./Products";
import Blogs from "./Blogs";
import Contact from "./Contact";
import About from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: 'products',
            Component: Products
        },
        {
            path: 'blogs',
            Component: Blogs
        },
        {
            path: 'contact',
            Component: Contact
        },
        {
            path: 'about',
            Component: About
        }
    ],
  },
]);

export default router;










// 1.createBrowserRouter import korta hoba
// 2.createBrowserRouter ar vitor path and component set korta hoba
// 3.export default router korta hoba

// 4. main.jsx ar vitor import { RouterProvider } from 'react-router-dom'  and   RouterProvider ar vitor router set korta hoba
