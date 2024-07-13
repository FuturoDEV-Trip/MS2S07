import { useEffect, useState } from "react"

export function BuscarDadosEffect() {

  
    const [texto, setTexto] = useState(null)

    async function getData() {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
        const data = await response.json()
        const titulo = data.items[0].titulo
        
        setTexto(titulo)
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div className="container mt-4">
           <h1>Noticias: </h1>

            <p>{texto}</p>
            
        </div>
    )
}