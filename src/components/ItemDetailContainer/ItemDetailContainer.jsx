import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetailContainer/ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [isloading, setIsLoading] = useState(true);
    const { id } = useParams();
    

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id)

        setIsLoading(true)

        getDoc(itemRef)
            .then((snapshot) => {

                setIsLoading(false);

                if (snapshot.exists()) {
                    setProduct({
                        id: snapshot.id,
                        ...snapshot.data(),
                    })
                }
            })
    }, [id])

    return (
        <div>
            <ItemDetail product={product} isloading={isloading} />
        </div>
    )
}

export default ItemDetailContainer
