import ItemMenuLateralEsquerda from "./ItemMenuLateralEsquerda";

export default function LateralEsquerda() {
    return (
        <div className="LateralEsquerda">
            <div className="logoLateralEsquerda">
                <p>Logo</p>
            </div>
            <div className="menuLateralEsquerda"></div>
            <span>Home</span>
            <ItemMenuLateralEsquerda />
        </div>
    )
}