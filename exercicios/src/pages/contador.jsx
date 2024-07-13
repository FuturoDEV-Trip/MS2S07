import { useState } from "react"

export function Contador() {

  
    const [contador, setContador] = useState(0)

    return (
        <div className="container mt-4">
           
           <div>
            <button onClick={() => setContador(prevState => prevState - 1)} className="btn btn-danger"> - </button>
            <span>{contador}</span>
            <button onClick={() => setContador(prevState => prevState + 1)} className="btn btn-primary"> + </button>
           </div>
            
        </div>
    )
}