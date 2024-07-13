import { forwardRef } from 'react'
import PropTypes from 'prop-types'

// const { status, ...rest } = {
//     status: false,
//     // restante coloca na => rest
//     name: "Teste",
//     ok: true,
// }

// // spread operator => Clone => espalhar dentro do outro objeto

// const cloneData = {
//     ...data
// }

// 1º props => propriedades do componente, 2º ref => referência recebida pelo o parente (pelo pai)
// forwardRef(1º, 2º) => retornar o elemento 

export const Input = forwardRef(({ label, ...rest }, ref) => {
    return (
        <div className='mb-3'>
            {label && <label className="form-label" htmlFor={rest.id}>{label}</label>}
            <input ref={ref} className="form-control" {...rest} />
        </div>
    )
})

Input.displayName = "Input"

Input.propTypes = {
    label: PropTypes.string,
}