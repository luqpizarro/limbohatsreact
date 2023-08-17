import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
    return(
        <div className="backgroundDetail text-white p-5">
            <h1 className="text-center my-4">ItemDetail</h1>
            <div className="container d-flex justify-content-center">
                <div className="me-3 col-8 text-center">
                    <img src="../src/assets/bracelets/Acero.jpg" className="imgStyle" alt="" />
                </div>
                <div className="ms-3 col-4">
                    <h2>{props.name}</h2>
                    <h4>€30</h4>
                    <p>O 3 cuotas fijas sin interes de 10€</p>
                    <p>Disponibilidad: Media</p>
                    <div className="my-4">      
                            <ItemCount />
                            <button className="btn btn-success me-2">Añadir al Carrito</button>
                            <button type="submit" className="btn btn-primary ms-2">Comprar Ahora</button>
                    </div>
                    <div className="my-5">
                        <h5>Descripcion:</h5>
                        <p>Explora el lado audaz y vanguardista de la moda con nuestra pulsera de acero quirúrgico. Cada eslabón de cadena gruesa está meticulosamente diseñado para irradiar fuerza y estilo. Entre las cadenas, las intrincadas calaveras añaden un toque de misterio y atrevimiento.</p>

                        <p>Con una longitud de 20 cm, esta pulsera se adapta perfectamente a tu muñeca, y su cierre de gancho en color plata asegura un ajuste seguro y cómodo. Ya sea que desees destacar en un evento especial o simplemente expresar tu individualidad cotidiana, esta pulsera es una elección que fusiona calidad, diseño y actitud.</p>

                        <p>Atrévete a mostrar tu pasión por la moda con nuestra pulsera de acero quirúrgico de cadena gruesa con calaveras. Es más que una simple pulsera; es una declaración de estilo que encarna la fusión entre la robustez del acero y la expresión artística de las calaveras.</p>
                    </div>
                    <ul className="mt-5">
                        <li>Acero Quirurgico</li>
                        <li>Ajustable</li>
                        <li>Hecho a mano</li>
                    </ul>
                </div>
            </div>
        </div>
        /*<div className="backgroundDetail text-white p-5">
            <h1 className="text-center my-4">ItemDetail</h1>
            <div className="container d-flex justify-content-center">
                <div className="me-3 col-8 text-center">
                    <img src="../src/assets/bracelets/Acero.jpg" className="imgStyle" alt="" />
                </div>
                <div className="ms-3 col-4">
                    <h2>Acero y Calavera</h2>
                    <h4>€30</h4>
                    <p>O 3 cuotas fijas sin interes de 10€</p>
                    <p>Disponibilidad: Media</p>
                    <div className="my-4">      
                            <ItemCount />
                            <button className="btn btn-success me-2">Añadir al Carrito</button>
                            <button type="submit" className="btn btn-primary ms-2">Comprar Ahora</button>
                    </div>
                    <div className="my-5">
                        <h5>Descripcion:</h5>
                        <p>Explora el lado audaz y vanguardista de la moda con nuestra pulsera de acero quirúrgico. Cada eslabón de cadena gruesa está meticulosamente diseñado para irradiar fuerza y estilo. Entre las cadenas, las intrincadas calaveras añaden un toque de misterio y atrevimiento.</p>

                        <p>Con una longitud de 20 cm, esta pulsera se adapta perfectamente a tu muñeca, y su cierre de gancho en color plata asegura un ajuste seguro y cómodo. Ya sea que desees destacar en un evento especial o simplemente expresar tu individualidad cotidiana, esta pulsera es una elección que fusiona calidad, diseño y actitud.</p>

                        <p>Atrévete a mostrar tu pasión por la moda con nuestra pulsera de acero quirúrgico de cadena gruesa con calaveras. Es más que una simple pulsera; es una declaración de estilo que encarna la fusión entre la robustez del acero y la expresión artística de las calaveras.</p>
                    </div>
                    <ul className="mt-5">
                        <li>Acero Quirurgico</li>
                        <li>Ajustable</li>
                        <li>Hecho a mano</li>
                    </ul>
                </div>
            </div>
        </div>*/
    )
}

export default ItemDetail;
