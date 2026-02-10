import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import Abt from './Pages/Abt'
import Sol from './Pages/Sol'
import Pro from './Pages/Pro'
import Cont from './Pages/Cont'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/solutions",
          element:<Sol/>
        },
        {
          path:"/about",
          element:<Abt/>
        },
        {
          path:"/process",
          element:<Pro/>
        },
        {
          path:"/contact",
          element:<Cont/>
        },
        {
          path:"/privacy-policy",
          element:<Privacy/>
        },
        {
          path:"/terms-conditions",
          element:<Terms/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App