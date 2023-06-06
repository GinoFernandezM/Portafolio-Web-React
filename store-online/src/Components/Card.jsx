import { useContext } from "react"
import { ShoppingCardContext } from "../Context/Context"
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";


const Card = (data) => {
  
  const context = useContext(ShoppingCardContext)
  
  const showProduct = (product) => {
    context.openProductDetail()
    context.closecheckoutSideMenu()
    context.setProductToShow(product)
  }

  const addProductsToCart = (event, dataProduct) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, dataProduct])
    context.opencheckoutSideMenu()
  }

  return (
    <div className="bg-white cursor-pointer w-56 h-72 rounded-lg hover:scale-105 transition-all duration-100"
      onClick={()=>showProduct(data.data)}>
      <div className="relative mb-2 w-full h-4/5">
        <figure>
          <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
          </span>
          <img
            className='absolute w-full h-full rounded-lg'
            src={data.data.image}
            alt={context.productToShow.title} 
          />
        </figure>

        <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2">  
          {
            context.cartProducts.filter((product) => product.id === data.data.id).length > 0
            ? <IoCheckmarkCircleSharp className="text-xl hover:text-2xl transition-all duration-100 bg-green-500 rounded-full text-white"/>
            : <BsFillPlusCircleFill className="text-xl hover:text-2xl transition-all duration-100 bg-black border-2 border-black text-white rounded-full" onClick={(event) => addProductsToCart(event, data.data)} />
          }
        </div>
        
      </div>
      <p className="flex justify-between bg-[#ffefd7] rounded-b-lg">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card
