import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = 'https://floatchat-backend-h6bf.onrender.com'
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  
    const [userData, setUserData] = useState(false)

    const fetchUserData = async () => {
        if (!token) {
            setUserData(false)
            return;
        }

        try {
            const { data } = await axios.get(`${backendUrl}/api/user/getuser`, {
                headers: {
                    token: token
                }
            })
            if (data.success) {
                setUserData(data.userData)
            } else {
                setUserData(false)
            }
        } catch (error) {
            toast.error("Session Expired Please Login Again")
            setUserData(false)
            setToken('')
            localStorage.removeItem('token')
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [token])

    const value = {
        backendUrl,
        token,
        setToken,
        userData,
        setUserData,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;
