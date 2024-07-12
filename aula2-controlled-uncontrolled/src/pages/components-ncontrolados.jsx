
async function api(url, data) {
    return new Promise(resolve => setTimeout(() => resolve({
        id: Date.now(),
        url,
        ...data,
    }), 3000))
}

export function ComponentsNControlados() {

    async function handleSubmit(event) {
        event.preventDefault()

        const formdata = new FormData(event.target)

        const data = {
            nome: formdata.get('nome'),
            email: formdata.get('email')
        }
        
        const response = await api('/users', data) // tipo um fetch

        console.log(response)
    }

    return (
        <div style={{ maxWidth: 250}}>
            <strong style={{ display: 'block', marginBottom: 32 }}>Components não controlados (uncontrolled)</strong>
            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    name="nome"
                    type="text" 
                    placeholder="Informe seu nome" 
                />
    
                <input 
                    name="email"
                    type="text" 
                    placeholder="Informe seu e-mail" 
                />

                <button>Cadastrar</button>
            </form>
                
        </div>
    )
}