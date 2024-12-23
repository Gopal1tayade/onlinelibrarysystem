import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'
import BrowseBook from './components/BrowseBook.jsx'
import AddBook from './components/AddBook.jsx'
import HomePage from "./components/homePage"
import NotFound from './components/NotFound.jsx';
import BookDetails from "./components/BookDetails";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import appStore from "./Redux/Store";

const appRoute = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        index:true,
        element: <HomePage />
      },
      {
        path:"/browsebooks",
        element: <BrowseBook />
      },
      {
        path:"/browsebooks/:category",
        element: <BrowseBook />
      },
      {
        path:"/addbooks",
        element: <AddBook />
      },
      {
        path:"/book/:id",
        element: <BookDetails />
      },
    ] 
  },
  {
    path:"*",
    element: <NotFound />
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={appStore}>
    <RouterProvider router={appRoute} />
    </Provider>
  </StrictMode>,
)
