export default function ConteudoCentral() {
    return (

        <div className='ConteudoCentral'>
            <div className="Stories">
                <div className="ItemStories">
                    <div className="Borda">
                       <span>Foto</span>
                    </div>
                    <span>Nome</span>
                 </div>
            </div>

            <div className="TimeLine">
                
                <div className="Post">

                    <div className="TopoPost">
                        <span>img usuario</span>
                        <span>nome usuario</span>
                        <span>data post</span>
                    </div>

                    <div className="Conteudo">
                        Img post
                    </div>

                    <div className="Botoes">
                         <span>btn curtir</span>
                         <span>btn comentar</span>
                         <span>btn compartilhar</span>
                         <span>btn salvar</span>
                    </div>

                    <div className="curtidas">
                        <span>curtidas</span>
                    </div>

                    <div className="Comentarios">
                        <span>Comentario 1: Meus párabens <br/></span>

                        <span>Comentario 2: Uau Guilherme<br/></span>

                        <span>Comentario 3: Que lindo<br/></span>

                        <span>Comentario 4: Que ótimo trabalho<br/></span>

                        <span>Comentario 5: Que orgulho<br/></span>
                    </div>
                </div>
            </div>  
        </div>               
    )
}