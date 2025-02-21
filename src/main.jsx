import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import { createBrowserRouter, RouterProvider, redirect} from 'react-router-dom'
import Dashboard from './pages/dashboard.jsx'
import { account } from './appwrite'
import Question1 from './pages/Question1.jsx'
import Question2 from './pages/Question2.jsx'



const router = createBrowserRouter([  //initialize the browser rerouter to navigate between pages
  {
    path: '/',
    element: <Login />,    //creates default path to login page
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

  {
    path: '/question1',    //creates path to login page
    element: <Question1 />,
  },

  {
    path: '/question2',    //creates path to login page
    element: <Question2 />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


