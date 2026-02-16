import { Outlet, Link } from "react-router"
import LogoSvg from '../../assets/crown.svg?react'
import './navbar.styles.scss'
const NavBar = () => {
  return(
    <>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
            <LogoSvg/>
        </Link>
        <div className="links-container">
            <Link className="link" to='/shop'>Shop</Link>
        </div>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default NavBar