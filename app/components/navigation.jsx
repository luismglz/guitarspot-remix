import { Link, useLocation } from '@remix-run/react'

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
        to="/store"
        className={location.pathname === '/store' ? 'active' : ''}
      >
        Store
      </Link>
      <Link
        to="/blog"
        className={location.pathname === '/blog' ? 'active' : ''}
      >
        Blog
      </Link>
    </nav>
  )
}

export default Navigation