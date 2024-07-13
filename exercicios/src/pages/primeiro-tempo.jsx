import { useRef } from "react"
import { Input } from "../components"

export function PrimeiroTempo() {
    const inputRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    console.log(inputRef.current.value)

    inputRef.current.value = ""
  }

  return (
    <div>
      <div className="container">
        <h1>Testando...</h1>
        <form onSubmit={handleSubmit}>
          <input label="test" type="text" />

          <Input ref={inputRef} label="Nome" id="name" placeholder="Informe seu nome" />

          <button className="btn btn-primary">Entrar</button>
        </form>

      </div>
    </div>
  )
}