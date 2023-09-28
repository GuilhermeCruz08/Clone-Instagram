import ItemMenuLateralEsquerda from "./ItemMenuLateralEsquerda"

import { AiFillHome } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";
import { BiMoviePlay, BiPaperPlane, BiHeart } from "react-icons/bi";
import { MdAddBox }  from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogoInstagram } from "react-icons/bi";

var icons = {"font-size": "20px"}

export default function ConteudoEsquerdo () {

    return (

    <div className="LateralEsquerda">
        <div className="logo"></div>
        <div>
            <div className="menu">
                <ul>
                    <ItemMenuLateralEsquerda icone= {<BiLogoInstagram style={icons}/>} texto="ㅤInstagram" /> <br/>
                    <ItemMenuLateralEsquerda icone= {<AiFillHome style={icons}/>} texto="ㅤPagina Inicial" />
                    <ItemMenuLateralEsquerda icone= {<FaMagnifyingGlass style={icons}/>} texto="ㅤPesquisar" />
                    <ItemMenuLateralEsquerda icone= {<FaCompass style={icons}/>} texto="ㅤExplorar" />
                    <ItemMenuLateralEsquerda icone= {<BiMoviePlay style={icons}/>} texto="ㅤRells" />
                    <ItemMenuLateralEsquerda icone= {<BiPaperPlane style={icons}/>} texto="ㅤMensagens" />
                    <ItemMenuLateralEsquerda icone= {<BiHeart style={icons}/>} texto="ㅤNotificações" />
                    <ItemMenuLateralEsquerda icone= {<MdAddBox style={icons}/>} texto="ㅤCriar" />
                    <ItemMenuLateralEsquerda icone= {<CgProfile style={icons}/>} texto="ㅤPerfil" />
                </ul>
            </div>
        </div>
    </div>
)
}