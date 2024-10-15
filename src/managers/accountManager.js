const _url = "http://localhost:8000/users"
const token = `Token ${JSON.parse(localStorage.getItem("gondor_token")).token}`

export const getAccountDetailsForCurrentUser = () => {
    return fetch(`${_url}/me`, {headers: {Authorization: token}}).then((res => {
        if (res.status !== 201) {
            return res.json()
        }
   }))
}
export const updateAccountDetailsForCurrentUser = (userDetails) => {
    return fetch(`${_url}/edit-account`, {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(userDetails)
    }).then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
         if (res.status !== 201) {
            return res.json()
         }
        if(res === null) {
            return "response is null"
        }
    })

}