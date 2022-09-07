import { API } from '../constants'
const authService = {
    login(form) {
        return fetch(`${API}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(form)
        })
            .then(res => res.json())
    },
    refreshToken() {

    }
}

export default authService;