import PropTypes from 'prop-types'

/** Contrato, interface */
Soma.propTypes = {
    numero1: PropTypes.number.isRequired,
    numero2: PropTypes.number.isRequired,
}

export function Soma({ numero1, numero2 }) {
    const total = numero1 + numero2;

    return (
        <div>
            <p>Total é: {total}</p>
        </div>
    )
}

