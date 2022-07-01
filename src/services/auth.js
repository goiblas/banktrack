const API_ENDPOINT = "https://xi3z5youw7.execute-api.eu-west-1.amazonaws.com/prod/connect_bank"

export const login = ({ username, password }) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ u: username, p: password })
    }

    return fetch(API_ENDPOINT, options).then(res => res.json())
}