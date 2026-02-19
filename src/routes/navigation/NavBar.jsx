import { Outlet, Link } from "react-router"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { signOutUser } from "../../utilities/firebase/firebase"
import LogoSvg from '../../assets/crown.svg?react'
import './navbar.styles.scss'

const NavBar = () => {
  const {currentUser} = useContext(UserContext);

  return(
    <>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <LogoSvg/>
        </Link>
        <div className="links-container">
          {
            currentUser ? (
              <span className="link" onClick={signOutUser}>Sign Out</span>
            ) : (
              <Link className="link" to='/auth'>Sign In</Link>
            )
          }
        </div>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default NavBar