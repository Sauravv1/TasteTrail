import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Cart from "./components/Cart";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Signup from "./components/SignUp";
//import Footer from "./components/Footer";


const AppLayout = () => {
  return(
      <Provider store={appStore}>
      <div className = "app">
          <Header/>
          <Outlet/>
          
      </div>
      </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout/>,
      children:[
          {
              path: "/",
              element: <Body/>,
          },
          {
              path: "/about",
              element: <About/>,
          },
          {
              path: "/contact",
              element: <Contact/>,
          },
          {
              path: "restaurants/:resId",
              element: <RestaurantMenu/>
          },
          {
              path: "/cart",
              element: <Cart/>
          },
          {
              path: "/login",
              element: <Login/>
          },
          {
              path: "/signup",
              element: <Signup/>
          }
      ],
      errorElement: <Error/>
  },
  {
      path: "/about",
      element: <About/>,
  },
  {
      path: "/login",
      element: <Login/>
  },
  {
      path: "/contact",
      element: <Contact/>,
  }
]);
          

const root = ReactDOM.createRoot( document.getElementById('root'));

root.render(<RouterProvider router= {appRouter}/>);