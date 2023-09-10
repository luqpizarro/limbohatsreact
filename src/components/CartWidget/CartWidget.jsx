import { Link } from "react-router-dom";
import Cart from "../../assets/cart.png"
import "./CartWidget.css"

const Carrito = () => {
    return <Link to={'/cart'}><img src={Cart} alt="imagen de carrito"/></Link> 
};

export default Carrito