const _url = "http://localhost:8000"
//const token = `Token ${JSON.parse(localStorage.getItem("gondor_token")).token}`

const getToken = () =>
{
    return `Token ${JSON.parse(localStorage.getItem("gondor_token")).token}`
}

export const getAccountDetailsForCurrentUser = () => {
    return fetch(`${_url}/users/me`, {headers: {Authorization: getToken()}}).then((res => {
        if (res.status !== 201) {
            return res.json()
        }
   }))
}