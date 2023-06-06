import { createContext, useState, useEffect } from 'react'

export const ShoppingCardContext = createContext()

const ShoppingCardProvider = ({children}) => {
  const [count, setCount] = useState(0)

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const [ischeckoutSideMenuOpen, setIscheckoutSideMenuOpen] = useState(false)
  const opencheckoutSideMenu = () => setIscheckoutSideMenuOpen(true)
  const closecheckoutSideMenu = () => setIscheckoutSideMenuOpen(false)

  const [productToShow, setProductToShow] = useState({})

  const [cartProducts, setCartProducts] = useState([])

  const [order, setOrder] = useState([])

  const[items, setItems] = useState(null) 

  const[filteredItems, setFilteredItems] = useState(null) 

  const[inputSearch, setInputSearch] = useState(null) 

  const[searchByCategory, setSearchByCategory] = useState(null) 
  
  const filteredItemByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemByCategory = (items, searchByCategory) => {
    //console.log(items)
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, inputSearch, searchByCategory) => {
    if(searchType === 'BY_TITLE'){
      return filteredItemByTitle(items, inputSearch)
    }

    if(searchType === 'BY_CATEGORY'){
      return filteredItemByCategory(items, searchByCategory)
    }
    if(searchType === 'BY_TITLE_AND_CATEGORY'){
      return filteredItemByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(inputSearch.toLowerCase()))
    }
    if(!searchType){
      return items
    }
  }

  useEffect(() => {
    //fetch('https://api.escuelajs.co/api/v1/products') 
    fetch('https://fakestoreapi.com/products')
    .then(response =>response.json())
    .then(data => setItems(data))
  }, [])

  useEffect(() => {

    if (inputSearch && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, inputSearch, searchByCategory))
    if (inputSearch && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, inputSearch, searchByCategory))
    if (!inputSearch && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, inputSearch, searchByCategory))
    if (!inputSearch && !searchByCategory) setFilteredItems(filterBy(null, items, inputSearch, searchByCategory))

  }, [items, inputSearch, searchByCategory])

  return (
    <ShoppingCardContext.Provider value= {{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      ischeckoutSideMenuOpen,
      opencheckoutSideMenu,
      closecheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      inputSearch,
      setInputSearch,
      filteredItems,
      searchByCategory,
      setSearchByCategory
    }}> 

      {children}

    </ShoppingCardContext.Provider>
    
  )
}

export default ShoppingCardProvider
