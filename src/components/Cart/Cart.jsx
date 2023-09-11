import { useContext } from "react";
import CartContext from "../../context/CartContext";


const Cart = () => {
    const { cart, addItem, removeItem, clear } = useContext(CartContext);
    
    console.log(cart)

    return (
        <div>
            <h1>Cart</h1>
            <div>
                <p>no aparece nada</p>
                {cart.map((item) => (
                    <div key={item.id}>
                        
                        <p>hola perro {item.quantity}</p>
                        
                    </div>
            ))}
            </div>
            
            {/*<button onClick={addItem}> Agregar</button>
            <button onClick={removeItem}> remover </button>
            <button onClick={clear}> Eliminar todo </button>*/}
        </div>
    )
}

export default Cart
