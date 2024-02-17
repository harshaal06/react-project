import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Project from './views/Project/Project';
import About from './views/About/About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Quant from './views/Quant/Quant';
import Todo from './views/To-do/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/project",
    element: <Project/>
  },
  {
    path: "/project/1",
    element: <Todo/>
  },
  {
    path: "/project/5",
    element: <Quant/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "*",
    element: <h1>Not Found</h1>
  }
])

root.render(<RouterProvider router={router}/>);