import { Link } from "react-router-dom"

const BtnBack = ({to}) => {
    return (
        <Link
            to={to}
            className="btn btn-light m-1">
            Volver Atras
        </Link>
    )
}

export default BtnBack
