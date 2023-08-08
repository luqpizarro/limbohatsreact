import "./links.css"


const Link = ({link, nombre}) => { 
    return <a className="linkNavegacion" href={link}> {nombre} </a> 
}

export default Link;