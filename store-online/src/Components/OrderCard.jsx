import { IoCloseCircleSharp } from "react-icons/io5";

const OrderCard = (props) => {
  const {id, title, img, price, handleDelete} = props

  return (
    <div className="flex justify-between items-center  px-4 py-2 gap-4 w-[100%] mb-2">
      <div className="flex items-center gap-2 w-[70%] ">
        <figure className="w-[40%] h-20">
          <img className="h-full w-full rounded-lg" src={img} alt={title} />
        </figure>
        <p className=" text-sm font-light w-[60%] text-ellipsis overflow-hidden whitespace-nowrap"> {title} </p>
      </div>
      <div className="flex items-center gap-6 w-[30%] justify-end">
        <p className=" text-lg font-medium">{price}</p>
        
        {handleDelete && <IoCloseCircleSharp onClick={()=>handleDelete(id)} className=" cursor-pointer text-xl  hover:text-2xl transition-all duration-100 "/>}
        
      </div>
    </div>
  )
}

export default OrderCard
