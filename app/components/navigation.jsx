import { Link, useLocation } from '@remix-run/react'
import cartIcon from '../../public/img/cart.png'

function Navigation() {

  const location = useLocation();
  
  return (
    <nav className="navigation">
      <Link
        to="/"
        className={location.pathname === '/' ? 'active' : ''}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={location.pathname === '/about' ? 'active' : ''}
      >
        About Us
      </Link>
      <Link
        to="/guitars"
        className={location.pathname === '/guitars' ? 'active' : ''}
      >
        Store
      </Link>
      <Link
        to="/blog"
        className={location.pathname === '/blog' ? 'active' : ''}
      >
        Blog
      </Link>
      <Link
        to="/cart"
      >
        <img src={cartIcon} alt="shopping cart icon"/>
      </Link>
    </nav>
  )
}

export default Navigation