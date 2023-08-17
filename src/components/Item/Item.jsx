import "./Item.css"

const Item = ({img, name, description, ref}) => {
    return (
        <div > 
            <div className="cardStyle m-3" style={{width: "18rem"}}>
                <img src={`${img}`} className="card-img-top rounded" alt={name}/>
                <div className="my-2 text-center">
                    <h5 className="">{name}</h5>
                    <p className="m-3 h-desc">Descripcion: {description}</p>
                    <a href={ref} className="btn btn-success">Mas Informacion</a>
                </div>
            </div>
        </div>
    )
}

export default Item