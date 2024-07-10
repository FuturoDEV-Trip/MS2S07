import { useEffect, useState } from 'react'   
import data from './movies.json'

export function Filter() {
    const [filtro, setFiltro] = useState('todos')
    const [lista, setLista] = useState(data)

    useEffect(() => {
        if(filtro === 'todos') {
            setLista(data)
        } else {
            const listaFiltrada = data.filter(item => item.category === filtro)

            setLista(listaFiltrada)
        }
    }, [filtro])

    return (
        <div>
            <span>Filtros: </span>
            <div style={{ marginBottom: 32, display: 'flex', gap: 16}}>
                <button onClick={() => setFiltro('todos')}>Todos</button>      
                <button onClick={() => setFiltro('filmes')}>Filmes</button>      
                <button onClick={() => setFiltro('series')}>Series</button>      
                <button onClick={() => setFiltro('animes')}>Animes</button>      
            </div>

            <strong>Lista:</strong>
            <ul>
                {
                    lista.map(item => (
                        <li key={item.title}>{item.title} - {item.category}</li>
                    ))
                }
            </ul>
        </div>
    )
}