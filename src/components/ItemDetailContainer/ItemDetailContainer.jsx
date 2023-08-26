import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../services/products"
import ItemDetail from "../ItemDetailContainer/ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [isloading, setIsLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => { 
        getProduct(id)
            .then((response) => {
                setProduct(response)
                
            })
            .catch((error) => {
                console.error(error)
                setProduct(null)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [id])

    return (
        <div>
            <ItemDetail product={product} isloading={isloading} />
        </div>
    )
}

export default ItemDetailContainer
