import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import { createBrowserRouter, RouterProvider, redirect} from 'react-router-dom'
import Dashboard from './pages/dashboard.jsx'
import { account } from './appwrite'
import Survey from './pages/Survey.jsx'



const router = createBrowserRouter([  //initialize the browser rerouter to navigate between pages
  {
    path: '/',
    element: <Login />,    //creates default path to login page
  },
  {
    path: '/survey',
    element: <Survey />,    //creates default path to login page
  },
  
  {
    path: '/dashboard',     //creates path to dashboard page
    element: <Dashboard />,
    // loader: async () => {
    //   try{
    //     // logged in? pass user to the route
    //     const user = await account.get();
    //     return { user };
    //   }
    //   catch {
    //     // not logged in? redirect to login page
    //     throw redirect('/')  
    //   }
    // }
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
