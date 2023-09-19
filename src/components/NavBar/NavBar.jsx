import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Logo from "../../assets/logo.png";
import Link from "../Link/Link.jsx"
import CartWidget from "../CartWidget/CartWidget.jsx"

const Navbar = () => {

    return(
        <>
            <nav className='container-fluid d-flex justify-content-between py-2 background'>
                <NavLink
                    to="/">
                    <img className='logoSize' src={Logo} alt="limbo logo" />
                </NavLink>
                <li className='d-flex align-items-center me-2'>
                    <ul className='text-white ulNavbar mx-3'> 
                        <Link 
                            link="/"
                            nombre="Home" /> 
                    </ul>
                    <ul className='text-white ulNavbar mx-3'> 
                        <Link 
                            link="/category/trucker"
                            nombre="Trucker" /> 
                    </ul>
                    <ul className='text-white ulNavbar mx-3'> 
                        <Link 
                            link="/category/snap" 
                            nombre="Snap" /> 
                    </ul>
                    <ul className='text-white ulNavbar mx-3'> 
                        <Link 
                            link="/category/baseball" 
                            nombre="Baseball" /> 
                    </ul>
                    <ul className='text-white mx-3 ulNavbar'>
                        <button type="button" className="btn position-relative">
                            <CartWidget />
                        </button>
                    </ul>
                </li>   
            </nav>
        </>
    );
};

export default Navbar;