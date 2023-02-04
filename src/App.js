import Header from "./Components/Header"
import Body from "./Components/Body"
import Liked  from "./Components/Likedvideos";
import WatchList from "./Components/WatchList"
import History from "./Components/History";
import Player from "./Components/Player";
import Signup from "./Components/Signup"
import Login from "./Components/Login";
import { AuthContextProvider } from './context/AuthContext';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


export const appRouter =createBrowserRouter([
   
  {
    path:"/",
    element:<App />,
    children:[{
      path:"/history",
      element: <History />
      },

      {
        path:"/",
        element:<Body />
      },
      {
        path:"/signout",
        element:<Body />
      },

      
      {
        path:"/playlist",
        element:<WatchList />
      },

      
      {
        path:"/likedvideos",
        element:<Liked />
      },
      {
        path:"/signup",
        element:<Signup />
      },
      {
        path:"/login",
        element:<Login />
      },

      {
        path:"/player/:id",
        element:<Player />
      },

    ]
  },


]);

function App() {

 
  return (
    <AuthContextProvider>
    <Header />
    <Outlet />
    </AuthContextProvider>
  ); 
}

export default App;
