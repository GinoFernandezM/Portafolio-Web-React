import Layout from '../Components/Layout'
import { useContext } from "react";
import { ShoppingCardContext } from "../Context/Context";
import OrderCard from '../Components/OrderCard';
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const MyOrder = () => {
  const context= useContext(ShoppingCardContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  //console.log(index)
  if(index === 'last') index = context.order?.length - 1

  return (
    <Layout>
       <div className=' flex gap-8 items-center w-80 bg-orange-200 justify-evenly mb-8'>
        <Link to='/my-orders'>
         <HiChevronDoubleLeft className='h-6 w-6 cursor-pointer hover:-translate-x-2 duration-100 transition-all hover:w-8'/>
        </Link>
        <h1 className=' text-2xl font-medium'>My Order</h1>
      </div>

      <div className='flex flex-col bg-orange-500 w-96'>
        {
          context.order?.[index].products.map( (item) => (
              <OrderCard 
                key = {item.id}
                id = {item.id} 
                title= {item.title} 
                img= {item.image}
                price= {item.price}
              />
            )
          )
        }
      </div>
    </Layout>
  )
}

export default MyOrder
