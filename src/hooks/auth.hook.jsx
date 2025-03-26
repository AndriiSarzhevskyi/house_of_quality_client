import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userName, setName] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    const [status, setStatus] = useState(null)

    const login = useCallback((jwtToken, id, name, status) => {
        setToken(jwtToken)
        setUserId(id)
        setName(name);
        setStatus(status);
        console.log(name, status)
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken, userName: name, status: status
        }))
    }, [])

    const changeName = useCallback((name) => {
        setName(name);
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.token) {
            login(data.token, data.userId, name)
        }
    }, []);

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setName(null)
        setStatus(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId, data.userName, data.status)
        }
        setReady(true)
    }, [login])


    return { login, logout, changeName, token, userName,  userId, ready, status }
}