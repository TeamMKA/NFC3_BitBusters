

const NavBar = () => {
  return (
    <nav>
        <h1>Navbar</h1>

        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
        </div>

        <div>
            <button>
                Login
            </button>
            <button>
                Register
            </button>
        </div>
    </nav>
  )
}

export default NavBar