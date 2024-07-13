import { useEffect, useState } from "react"

export function ExercicioQuatro() {

    const [formdata, setFormdata] = useState({
        nome: '',
        email: '',
        idade: ''
    })
    const [message, setMessage] = useState(null)


    useEffect(() => {

        const isError = Object.values(formdata).reduce((totalizador, item) => {
            if(!item) totalizador += 1
            return totalizador
        }, 0)
        

        if(isError > 0) {
            setMessage('Preencha todos os campos!!!')
        } else {
            setMessage(null)
        }
        
    }, [formdata])

    return (
        <div className="container mt-4">
            <form  className="mb-4">
                {/* INPUT DE NOME */}
                <input 
                    placeholder="Informe seu nome" 
                    type="text" 
                    className="form-control" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, nome: event.target.value }))} />
                {/* INPUT DE E-MAIL */}
                <input 
                    placeholder="Informe seu e-mail" 
                    type="text" 
                    className="form-control"  
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, email: event.target.value }))}  
                />

                {/* INPUT DE IDADE */}
                <input 
                    placeholder="Informe sua idade" 
                    type="text" 
                    className="form-control"  
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, idade: event.target.value }))}
                />

                <button className="btn btn-primary mt-4">Cadastrar</button>
            </form>

            <code>
                {message}
            </code>

            
        </div>
    )
}