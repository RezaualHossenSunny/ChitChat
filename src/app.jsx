import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Logeduserourter from "./PrivateRout/Logeduserourter";
import Notloginuser from "./PrivateRout/Notloginuser";
import Message from "./pages/Message";
import Rotlayout from "./Rotlayout";
import "cropperjs/dist/cropper.css";
export function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element ={<Logeduserourter/>}>
     <Route element ={< Rotlayout/>}>
     <Route path="/" element ={ <Home/>}/>
     <Route path="/message" element ={ <Message/>}/>
     </Route>
      </Route>

      <Route element={<Notloginuser/>}>
      
      <Route path="/regi" element ={ <Registration/>}/>
      <Route path="/login" element ={ <Login/>}/>
      </Route>

      
      
    </Route>
  )
)

  return (
   <>
  <RouterProvider router={router}/>
   </>
  )
}
