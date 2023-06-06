import { BrowserRouter, useRoutes } from 'react-router-dom'
import '../App.css'
import Home from './Home'
import MyOrders from './MyOrders'
import MyOrder from './MyOrder'
import MyAccount from './MyAccount'
import NotFound from './NotFound'
import SignIn from './SignIn'
import Navbar from '../Components/Navbar'
import ShoppingCardProvider from '../Context/Context'
import CheckoutSideMenu from '../Components/CheckoutSideMenu'

const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> } ,
    { path: '/women', element: <Home /> } ,
    { path: '/men', element: <Home /> } ,
    { path: '/electronics', element: <Home /> } ,
    { path: '/jewelery', element: <Home /> } ,
    { path: '/others', element: <Home /> } ,
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders/last', element: <MyOrder />},
    { path: '/my-orders/:id', element: <MyOrder />},  
    { path: '/my-account', element: <MyAccount />},
    { path: '/sign-in', element: <SignIn />},
    { path: '/*', element: <NotFound />},
    
  ])
  return routes;
}

function App() {

  return (
    <ShoppingCardProvider>
      <BrowserRouter>
      <AppRouter />
      <Navbar />
      <CheckoutSideMenu />
    </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
