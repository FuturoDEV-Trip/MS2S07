import { useRef } from "react";
import { Input } from "../components/input";
import { useEffect } from "react";
// import { useEffect } from "react";

// const div = document.querySelector('div')

export function ComponentsUseRef() {

    // const referencia = useRef(0)
    const inputNameRef = useRef(null)


    function handleSubmit(event) {
        event.preventDefault()

        console.log(inputNameRef.current.value)
        inputNameRef.current.value = ""
    }
    
    useEffect(() => {
        if(inputNameRef.current) {
            inputNameRef.current.focus()
        }
    }, [])

    // useEffect(() => {
    //     console.log("USE REF: ", referencia.current)
    // },[])

    return (
        <div style={{ maxWidth: 250}}>
            <strong style={{ display: 'block', marginBottom: 32 }}>Components useRef (uncontrolled)</strong>
            <strong style={{ display: 'block', marginBottom: 32 }}>CADASTRO DE USUÁRIO</strong>
            
            <form onSubmit={handleSubmit} className="form-container">
                <input ref={inputNameRef} type="text" placeholder="Informe seu nome" />
                <input type="text" placeholder="Informe seu email" />
                <input type="password" placeholder="Inform sua senha" />

                <Input placeholder="Informe seu nome" value="Testando..." />

                <button>Submit</button>
            </form>
        </div>
    )
}