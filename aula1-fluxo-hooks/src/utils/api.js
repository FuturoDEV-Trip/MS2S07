export function api(url, init) { 
    const token = localStorage.getItem('@amoraid:token')

    return fetch(url, {
        ...init,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}