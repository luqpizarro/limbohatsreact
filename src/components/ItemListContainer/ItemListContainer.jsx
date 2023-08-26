import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";
import { getProducts } from "../../services/products";
import "./ItemListContainer.css";



const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();

    useEffect(() => {

        setLoading(true)

        getProducts(categoryId)
            .then((result) => {
                setProducts(result);
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [categoryId])

    return(
        <div className="backgroundColor p-2">
            <h1 className="text-center">{greeting}</h1>
            <ItemList products={products} loading={loading} />
        </div>
    )
}

export default ItemListContainer