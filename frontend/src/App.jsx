import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/hompage/homepage.jsx'
import DashboardPage from './routes/dashboardPage/dashboardPage.jsx'
import ChatPage from './routes/chatPage/chatPage.jsx'
import RootLayout from './layouts/rootLayout/rootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout.jsx'
import LoginPage from './routes/loginPage/loginPage.jsx'
import RegisterPage from './routes/registerPage/registerPage.jsx'

const App = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path:'/',
          element: <Homepage />
        },
        {
          path:'/login/*',
          element: <LoginPage />
        },
        {
          path:'/register/*',
          element: <RegisterPage />
        },
        {
          element: <DashboardLayout />,
          children: [
            {
              path:"/dashboard",
              element: <DashboardPage />,
            },
            {
              path:"/dashboard/chats/:id", 
              element: <ChatPage />
            }
          ]
        }
      ],
      
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
