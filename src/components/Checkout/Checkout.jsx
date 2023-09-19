import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"
import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { cartTotal, mapCartToToOrderItems } from "../../utils"
import Field from "./Field/Field"
import BtnBack from "../BtnBack/BtnBack"


const Checkout = () => {
    const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    });
    const { name, email, phone } = formState;

    const { cart, clear } = useContext(CartContext)

        const onChange = (event) => {
        setFormState({
        ...formState,
        [event.target.name]: event.target.value,
        });
    };

    const isFormValid = name && email && phone;

    
    const createOrder = (event) => {
        event.preventDefault();

        if (isFormValid) {
            const order = {
            buyer: formState,
            items: mapCartToToOrderItems(cart),
            total,
            date: serverTimestamp(),
            }

            console.log(order)
            const db = getFirestore();

            const orderCollection = collection(db, "orders");

            addDoc(orderCollection, order)
                .then((docRef) => {
                    console.log("Orden Creada con ID", docRef.id);
                })
                .catch((err) => {
                    console.log("Error al crear la orden:", err)
                })
        
            clear()
        }        
    }

    const total = cartTotal(cart)


    return (
        <div>
            <BtnBack to="/cart" />
            <h1>Ingresa tus datos para completar la compra 🛍</h1>

            <form onSubmit={createOrder}>
                <Field label="Nombre y Apellido" name="name" type="text" onChange={onChange} />
                <Field label="Email" name="email" type="email" onChange={onChange} />
                <Field label="Telefono" name="phone" type="tel" onChange={onChange} />
                <button disabled={!isFormValid} type="submit">
                Crear orden
                </button>
            </form>

            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        <p>hola</p>
                    </li>
                    
                ))}
            </ul>
            

            <p>total de la compra: €{total}</p>
        </div>
    )
}

export default Checkout
