import Navigation from "./navigation"

function Footer(){
  return(
    <footer className="footer">
      <div className="container content">
        <Navigation/>
        <p className="copyright">Copyright ©{new Date().getFullYear()}. All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer