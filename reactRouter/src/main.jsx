import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'


/*const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path:'contactus',
        element: <ContactUs/>
      }
    ]


  },
])*/

//another method to create route

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contactus' element={<ContactUs/>}/>
    <Route path='User/:userid' element={<User/>}/>
  </Route>
)
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />

  </StrictMode>,
)
