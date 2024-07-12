import { useRef } from "react"

export function ComponentsExercicio() {
    const inputEmailRef = useRef(null)
    const inputPasswordRef = useRef(null)

    function handleSubmit(event) {
        event.preventDefault()
        
        const data = {
            email: inputEmailRef.current.value,
            password: inputPasswordRef.current.value,
        }

        console.log(data)
    }
     
    return (
        <div style={{ maxWidth: 250}}>
            <form onSubmit={handleSubmit}>
                <input ref={inputEmailRef} placeholder="Email" type="text" />
                <input ref={inputPasswordRef} type="password" placeholder="Senha" />

                <button>Logar</button>
            </form>            

        </div>
    )
}