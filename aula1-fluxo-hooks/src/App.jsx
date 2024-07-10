// import { useState } from "react"
import { useState } from "react"
import { Contador } from "./components/contador"
import { Soma } from "./components/soma"
import { Filter } from "./components/filter"
import { Post } from "./components/post"
// import { api } from "./utils/api"

function App() {
  // const [contador, setContador] = useState(0)
  const [token] = useState(() => {
    const tokenStorage = localStorage.getItem('[chave-storage]')
    
    if(tokenStorage) return tokenStorage

    return null
  })

  // api('/test')

  return (
    <div>
      <Soma numero1={10} numero2={30} />
      <Soma numero1={500} numero2={10} />
      <hr />

      <div className="list">
        {/* <button onClick={() => setContador(contador + 1)}>Adicionar +1</button> */}
        <Contador 
          // contadorPadrao={5000}
          // contador={contador} 
        />
        {/* <Contador 
          // contador={contador} 
        />
        <Contador 
          // contador={contador} 
        />
        <Contador 
          // contador={contador} 
        />
        <Contador 
          // contador={contador} 
        />
        <Contador 
          // contador={contador} 
        />
        <Contador 
          // contador={contador} 
        /> */}

        <div className="container">
          <p>{token}</p>
        </div>

        {/* Filtros */}
        <Filter />

        <hr />

        <Post />
      </div>
    </div>
  )
}

export default App
