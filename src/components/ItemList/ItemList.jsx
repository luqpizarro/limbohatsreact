import Item from "../Item/Item"

const ItemList = ({products, loading}) => {

    return(
        <div className="d-flex flex-wrap justify-content-center m-2">
            {loading && <p> Cargando...</p>}
            {!loading && products.length === 0 && <p> No hay productos </p>}

            {products.map(({id, name, description, img}) => (
                <Item 
                key={id} 
                name={name} 
                description={description}
                img={`../src/assets/bracelets/${img}`}/>
            ))}
        </div>
    )
}

export default ItemList