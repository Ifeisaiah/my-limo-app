import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="bg-white h-20 w-full shadow-xl flex items-center justify-between px-6">
        <Link to="/home" className="font-bold text-2xl uppercase">#LimoDrive</Link>
        <nav className="space-x-4 text-lg">
        <Link to="/about">About</Link>
        <Link to="/home">Vans</Link>
        </nav>
      </header>
    )
}

export default Header;