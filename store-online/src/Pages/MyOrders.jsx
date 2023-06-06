import { useContext } from 'react'
import Layout from '../Components/Layout'
import OrdersCard from '../Components/OrdersCard'
import { ShoppingCardContext } from "../Context/Context";
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const context = useContext(ShoppingCardContext)
  return (
    <Layout>
      <div className=' flex gap-8 items-center w-80 bg-orange-200 justify-evenly mb-4'>
        <h1 className=' text-2xl font-medium'>My Orders</h1>
      </div>
      
      <div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts} 
              />
            </Link>
            
          ))
        }
      </div>
      
    </Layout>
  )
}

export default MyOrders
