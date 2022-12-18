import {Link} from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navigation from './navigation'

function Header() {



  return (
    <header className="header">
      <div className="container bar">
        <Link 
        className="logo" to="/">
          <img className='logo' src={logo} alt='logo'/>
        </Link>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header