import { Outlet, Link } from "react-router"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { signOutUser } from "../../utilities/firebase/firebase"
import LogoSvg from '../../assets/crown.svg?react'
import { useState } from "react"
import './navbar.styles.scss'

import CartIcon from "../../components/cart-icon/CartIcon"
import CartDropdown from "../../components/cart-dropdown/CartDropdown"
import { CartContext } from "../../contexts/cartContext"

const NavBar = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

  return(
    <>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <LogoSvg/>
        </Link>
        <div className="links-container">
          <Link className="link" to='/shop'>Shop</Link>
          {
            currentUser ? (
              <span className="link" onClick={signOutUser}>Sign Out</span>
            ) : (
              <Link className="link" to='/auth'>Sign In</Link>
            )
          }
          <CartIcon/>
        </div>
        {isCartOpen && (<CartDropdown/>)}
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default NavBar