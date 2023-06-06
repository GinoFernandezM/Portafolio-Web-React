import { HiChevronRight } from "react-icons/hi2";

const OrdersCard = (props) => {

  const { totalPrice, totalProducts } = props

  return (
    <div className="border-black flex justify-between items-center  px-4 gap-4 w-[100%] mb-2 border-2 rounded-lg py-4 hover:scale-105 duration-100 transition-transform">
      <div className="flex items-center">
        <div className="flex flex-col w-72 font-semibold">
          <span>29/25/23</span>
          <span>{totalProducts} articles</span>
        </div>
        <div className="flex items-center gap-2 font-bold text-xl">
          <span>${totalPrice}</span>
          <HiChevronRight className='h-6 w-6 cursor-pointer'/>
        </div>
      </div>    
    </div>
  )
}

export default OrdersCard
