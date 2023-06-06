import { useContext } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { ShoppingCardContext } from "../Context/Context";
import OrderCard from "./OrderCard";
import sumProducts from "../utils";
import { Link } from "react-router-dom";


const CheckoutSideMenu = () => {
    const context= useContext(ShoppingCardContext)
    
    const handleDelete = (id) => {
      const newProduct = context.cartProducts.filter((item)=> item.id !== id)
      context.setCartProducts(newProduct)
    }

    const handleCheckout = () => {
      const orderToAdd = {
        date:'27/05/23',
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: sumProducts(context.cartProducts)
      }  
      context.setOrder([...context.order, orderToAdd])
      context.setCartProducts([])
      context.setInputSearch(null)
    }

    return (
      <aside className={`${context.ischeckoutSideMenuOpen? 'flex' : 'hidden'}  w-[360px] h-[calc(100vh-30%)] top-[68px] flex-col bg-white border border-black fixed right-0 rounded-lg `}>
        <div className="flex justify-between p-6 items-center">
          <h2 className="font-medium text-xl">My Order</h2>
          <IoCloseCircleSharp onClick={()=>context.closecheckoutSideMenu()} className=" cursor-pointer text-xl  hover:text-2xl transition-all duration-100"/>
        </div>
        <div className=" overflow-y-scroll w-full flex-1">
          {
            context.cartProducts.map( (item) => (
                <OrderCard 
                  key = {item.id}
                  id = {item.id} 
                  title= {item.title} 
                  img= {item.image}
                  price= {item.price}
                  handleDelete = {handleDelete}
                />
              )
            )
          }
        </div>
        <div className="  flex items-center justify-center flex-col">
          <p className=" font-medium text-lg bg-gray-400 w-32 rounded-md p-2 mt-4 mb-4">
            <span >Total: </span>  
            <span > {sumProducts(context.cartProducts)} </span> 
          </p>
          <Link to='/my-orders/last'>
            <button className="bg-black w-32 py-3 text-white rounded-md mb-4 font-medium" 
            onClick={() => handleCheckout()}>  Checkout </button>
          </Link>
    
        </div>
      </aside>
    );
  };
  
export default CheckoutSideMenu
