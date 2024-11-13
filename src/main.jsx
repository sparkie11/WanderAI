import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip'
import Header from './components/custom/header'


const router =createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // component: App,
    // exact: true,
  },
  {
    path: '/create-trip',
    element: <CreateTrip/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </StrictMode>,
)
