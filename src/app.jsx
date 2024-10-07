import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import 'react-toastify/dist/ReactToastify.css';

export function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/regi" element ={ <Registration/>}/>
      <Route path="/login" element ={ <Login/>}/>
    </Route>
  )
)

  return (
   <>
  <RouterProvider router={router}/>
   </>
  )
}
