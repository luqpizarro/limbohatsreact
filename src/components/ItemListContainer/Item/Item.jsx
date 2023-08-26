import {Link} from 'react-router-dom'
import "./Item.css"

const Item = (product) => {
    return (
        <div key={product.id}> 
            <div className="cardStyle m-3" style={{width: "18rem"}}>
                <img src={`${product.img}`} className="card-img-top rounded" alt={product.name}/>
                <div className="my-2 text-center">
                    <h5 className="">{product.name}</h5>
                    <p className="mt-3 h-desc">{product.description}</p>
                    <p className="m-1">Precio: € {product.price}</p>
                    <p className="m-1 mb-4">Tipo: {product.category}</p>
                    <Link 
                        className="btn btn-primary" 
                        to={`/item/${product.id}`}>
                        Mas informacion
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item