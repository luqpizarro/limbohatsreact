import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../services/products";



const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then((result) => {
                setProducts(result.products);
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [])

    return(
        <div className="">
            <h1 className="text-center">{greeting}</h1>
            <ItemList products={products} loading={loading} />

        </div>
    )
}

export default ItemListContainer