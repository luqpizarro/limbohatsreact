import Item from "../Item/Item"

const ItemList = ({ products, loading }) => {
    
        

    if (loading) {
        setTimeout(() => { 
            return (
                <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                </div>)
        }, 2000)
    }

    return(
        <div className="d-flex flex-wrap justify-content-center m-2">
            {/*loading && <p> Cargando...</p>*/}

            {/*!loading && products.length === 0 && <p> No hay productos </p>*/}
            
            {products.map((product) => (
                <Item 
                price={product.price}
                key={product.id} 
                id={product.id} 
                name={product.name} 
                description={product.description}
                category={product.category}
                color={product.color}
                img={`../src/assets/gorras/${product.img}`}/>
            ))}
            
        </div>
    )
}

export default ItemList