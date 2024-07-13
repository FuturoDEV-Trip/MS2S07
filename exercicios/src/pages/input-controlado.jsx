import { useState } from "react"

export function InputControlado() {

  
    const [texto, setTexto] = useState(null)
    // const [visibled, setvisibled] = useState(false)

    return (
        <div className="container mt-4">
            <input 
                    placeholder="Informe seu nome" 
                    // type={visibled ? "text" : "password"} 
                    className="form-control" 
                    onChange={(event) => setTexto(event.target.value)} />

            <span>{texto}</span>
            {/* <button onClick={() => setvisibled(prevState => !prevState)}>{visibled ? "esconder" : "Ver"}</button> */}
        </div>
    )
}