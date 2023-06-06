import { useContext } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { ShoppingCardContext } from "../Context/Context";

const ProductDetail = () => {
  const context= useContext(ShoppingCardContext)
  //console.log(context.productToShow.images[1])
  return (
    <aside className={`${context.isProductDetailOpen? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-30%)] top-[68px] flex-col bg-white border border-black fixed right-0 rounded-lg items-center justify-center`}>
      <div className="flex p-6 items-center justify-between w-full mb-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <IoCloseCircleSharp onClick={()=>context.closeProductDetail()} className=" cursor-pointer text-xl  hover:text-2xl transition-all duration-100"/>
      </div>
      <figure className="px-6 h-60 w-60 flex justify-center items-center ">
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.image&&context.productToShow.image} 
          alt={context.productToShow.title} 
          />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-bold text-lg mb-2">${context.productToShow.price}</span>
        <span className="font-bold text-sm">{context.productToShow.title}</span>
        <span className="text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
