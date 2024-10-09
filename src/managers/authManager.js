const _url = "http://localhost:8000"
// const token = `Token ${JSON.parse(localStorage.getItem("gondor_token")).token}`
// const auth = {headers: {Authorization: token}}

export const login = (data) => {
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }

    return fetch(`${_url}/login`, postOptions).then(res => {
        if (res.status !== 200) {
            return Promise.resolve(null)
        }
        
        return res.json().then(authInfo => {
            localStorage.setItem("gondor_token", JSON.stringify(authInfo))
            return authenticateUser()
        })
    })
}

export const register = (data) => {
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }

    return fetch(`${_url}/register`, postOptions).then(res => {
        if (res.status !== 201) {
            return res.json()
        }

        return res.json().then(authInfo => {
            localStorage.setItem("gondor_token", JSON.stringify(authInfo))
            return authenticateUser()
        })
    })
}

export const authenticateUser = () => {
    const token = {token: JSON.parse(localStorage.getItem("gondor_token")).token}
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(token)
    }

    return fetch(`${_url}/me`, postOptions).then(res => {
        return res.status === 401 ? Promise.resolve(null) : res.json()
    })
}