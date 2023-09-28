import reactLogo from './assets/react.svg'
import ConteudoCentral from './Componentes/ConteudoCentral'
import './App.css'
import ConteudoEsquerdo from './Componentes/ConteudoEsquerdo'

export default function App() {

  return (
    <main>
      <ConteudoEsquerdo />
      <ConteudoCentral />
      <div className='LateralDireita'>
        <h1>Conversa</h1>
      </div>
    </main>
  )
}
