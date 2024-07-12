import { useState } from "react"

export function ComponentsControladosPage() {
    const [nome, setNome] = useState('')
    const [error, setError] = useState({
        error: false,
        message: '' 
    })
    // const [isFocus, setIsFocus] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        
        console.log(nome)
    }

    function onBlur(event) {
        // console.log(event.target)
        if(!event.target.value.includes('hello')) {
            setError({
                error: true,
                message: 'Informe um hello para seguir...'
            })
        } else {
            setError({
                error: false,
                message: ''
            })
        }
    }
    // function onFocus() {
    //     setIsFocus(true)
    // }

    // function onBlur() {
    //     setIsFocus(false)
    // }

    return (
        <div style={{ maxWidth: 250}}>
            {/* <span style={{ display: 'block' }}>INPUT FOCUS: {isFocus ? 'FOCADÃO' : 'SEM FOCO NENHUM'}</span> */}
            <span style={{ display: 'block' }}>texto: {nome}</span>

            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    // className={isFocus ? 'input-focus' : ''} ternário
                    // className={isFocus && 'input-focus'} // condição verdadeira
                    // onFocus={onFocus} // focado
                    // onBlur={onBlur} // sem foco
                    onBlur={onBlur}
                    type="text" 
                    placeholder="Informe seu nome" 
                    onChange={(event) => setNome(event.target.value)} 
                />

                {error.error && (
                    <span>ERROR: {error.message}</span>
                )}


                <button disabled={!nome}>Cadastrar</button>
            </form>
            
        </div>
    )
}