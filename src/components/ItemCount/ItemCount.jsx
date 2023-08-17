import { useState } from "react"



const ItemCount = () => {
    const [count, setCount] = useState (0)

    const aumentar = () => {
        setCount( count +1 )
    };

    const reducir = () => {
        setCount( count -1)
    };

    return(
        <div className="d-flex align-items-center my-4">
            <button className="btn btn-secondary mx-2 badge rounded-pill text-bg-dark" onClick={reducir}>-</button>
            <p className="mx-2 mt-3 badge text-bg-light"> Cantidad: {count}</p>
            <button className="btn btn-secondary mx-2 badge rounded-pill text-bg-dark" onClick={aumentar}>+</button>
        </div>
    )
}

export default ItemCount;