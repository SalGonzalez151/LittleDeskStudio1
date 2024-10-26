import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Art from './components/art.jsx'
import Homepage from './components/homepage.jsx'
import News from './components/news.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {
      index:true,
      element: <Homepage />
    },
    {
      path: '/art',
      element: <Art/>
    },
    {
      path: '/news',
      element: <News/>
    },
    {
     path: '/NewsPageOne',
     element: <NewsPageOne/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)





















// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
