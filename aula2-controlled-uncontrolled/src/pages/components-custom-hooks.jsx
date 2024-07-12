import { useForm } from "../hooks/use-form";


export function ComponentsCustomHooks() {
    const { 
        step,
        setStep,
        handleSubmit,
        inputAddressRef,
        inputNameRef,
     } = useForm()   
     
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