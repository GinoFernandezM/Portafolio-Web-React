import Card from '../Components/Card'
import Layout from '../Components/Layout'
import ProductDetail from '../Components/ProductDetail'
import { useContext } from "react";
import { ShoppingCardContext } from "../Context/Context";

const Home = () => {
  const context = useContext(ShoppingCardContext)
  
  const renderView = () => {
    if(context.filteredItems?.length > 0){
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item}/>
        ))
        )
    } else {
      return(
        <div className='text-3xl bg-orange-30 w-96 ml-96 mt-36 font-semibold'> Do not have anythig</div>
      )
    }
  }

  return (
    <Layout> 
      
      <div className='flex flex-col items-center justify-center relative w-80 mb-4 '>
        <h1 className='font-medium text-xl '>
          Exclusive Products
        </h1>
        <input type="text" 
        placeholder='Search a product' 
        className=' rounded-full w-96 p-3 mt-6 mb-10 border border-black focus:outline-none'
        onChange={(e) => context.setInputSearch(e.target.value)}/>
      </div>
      <div className='grid grid-cols-3 gap-6 w-full max-w-screen-lg'>
        {
          renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
