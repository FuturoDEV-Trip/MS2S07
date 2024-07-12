import { useRef, useState } from "react";
import { Input } from "../components/input";
import { useEffect } from "react";

export function ComponentsUseRefSteps() {

    const inputNameRef = useRef(null)
    const inputAddressRef = useRef(null)

    const [step, setStep] = useState(1)


    function handleSubmit(event) {
        event.preventDefault()

        console.log(inputNameRef.current.value)
        inputNameRef.current.value = ""
    }
    
    useEffect(() => {
        if(step === 1 && inputNameRef.current) {
            inputNameRef.current.focus()
        }

        if(step === 2 && inputAddressRef.current) {
            inputAddressRef.current.focus()
        }
    }, [step])

    

    return (
        <div style={{ maxWidth: 250}}>
            { step === 1 && <strong style={{ display: 'block', marginBottom: 32 }}>Passo 1º</strong>}
            { step === 2 && <strong style={{ display: 'block', marginBottom: 32 }}>Passo 2º</strong>}
            
            
            <form onSubmit={handleSubmit} className="form-container">

                {step === 1 && (
                    <>
                        <input ref={inputNameRef} type="text" placeholder="Informe seu nome" />
                        <input type="text" placeholder="Informe seu email" />
                    </>
                )}

                { step === 2 && (
                    <input ref={inputAddressRef} type="text" placeholder="Informe seu endereço" />
                )}

                {/* <Input placeholder="Informe seu nome" value="Testando..." /> */}

            </form>

                <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
                    <button onClick={() => setStep(prevState => prevState - 1)}>Voltar</button>
                    <button onClick={() => setStep(prevState => prevState + 1)}>Próximo</button>
                </div>

        </div>
    )
}