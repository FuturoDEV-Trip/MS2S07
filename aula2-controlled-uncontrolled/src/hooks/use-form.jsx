import { useEffect, useRef, useState } from "react"

export function useForm(valueInitial = null) {
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


    return {
        inputAddressRef,
        inputNameRef,
        step,
        setStep,
        handleSubmit,
        value: valueInitial
    }
}