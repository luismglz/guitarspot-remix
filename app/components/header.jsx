import {Link} from '@remix-run/react'
function Header() {
  return (
    <header className="header">
      <div className="container bar">
        <div className="logo">

        </div>
        <nav className="navigation">
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About Us
          </Link>
          <Link to="/store">
            Store
          </Link>
          <Link to="/blog">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header