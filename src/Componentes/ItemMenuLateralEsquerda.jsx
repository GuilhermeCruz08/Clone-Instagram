export default function ItemMenuLateralEsquerda (props) {
    return (
        <li>
            <span className="titulo">{props.icone} </span>
            <span className="titulo2">{props.texto}</span>
        </li>
    )
}