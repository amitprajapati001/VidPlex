import Header from "./Components/Header"
import Body from "./Components/Body"
import Likedvideos  from "./Components/Likedvideos";
import Plyalist from "./Components/Playlist";
import History from "./Components/History";
import Player from "./Components/Player";
import Signup from "./Components/Signup"
import Login from "./Components/Login";
import { UserAuth } from "./context/AuthContext";
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
        element:<Plyalist />
      },

      
      {
        path:"/likedvideos",
        element:<Likedvideos />
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
