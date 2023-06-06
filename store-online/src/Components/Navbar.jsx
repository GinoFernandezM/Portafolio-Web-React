import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCardContext } from "../Context/Context"
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {

  const activeStyle = 'underline underline-offset-4'
  const context = useContext(ShoppingCardContext)

  return (
    <nav className="flex justify-between items-center fixed z-10 bg-slate-400 w-full 
                    text-sm font-light py-5 px-8 top-0">
                      
      <ul className=" flex gap-3 justify-center items-center">
        <li className="text-lg font-semibold">
          <NavLink to="/">
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/" 
            onClick={() => context.setSearchByCategory()}
            className={ ({isActive}) => isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li> 
        <li>
          <NavLink 
          to="/women"
          onClick={() => context.setSearchByCategory('women')}
          className={ ({isActive}) => isActive ? activeStyle : undefined}
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/men"
          onClick={() => context.setSearchByCategory('men')}
          className={ ({isActive}) => isActive ? activeStyle : undefined}
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/electronics"
          onClick={() => context.setSearchByCategory('electronics')}
          className={ ({isActive}) => isActive ? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/jewelery"
          onClick={() => context.setSearchByCategory('jewelery')}
          className={ ({isActive}) => isActive ? activeStyle : undefined}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/others"
          onClick={() => context.setSearchByCategory()}
          className={ ({isActive}) => isActive ? activeStyle : undefined}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className=" flex gap-3 justify-center items-center">
        <li className="text-black/60">
          ginofm4@gmail.com
        </li>
        <li>
          <NavLink 
          to="/my-orders"
          className={ ({isActive}) => isActive ? activeStyle : undefined}
          >
            My orders
          </NavLink>
        </li> 
        <li>
          <NavLink 
          to="/my-account"
          className={ ({isActive}) => isActive ? activeStyle : undefined}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/sign-in"
          className={ ({isActive}) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center gap-1">
        <IoCartSharp /> {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
