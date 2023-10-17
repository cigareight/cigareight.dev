import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";



const Auth = () => {
    const [token, setToken] = useState('');


    useEffect(() => {
        fetch('http://localhost:3001/users/get'), {
            method: 'POST',
        }
        .then((response) => {
            
            const responseToken = response.headers.get(token)
            console.log(response)
            setToken(responseToken)


            if(responseToken) {
                <Navigate to='/' />
            }
            else {
                <Navigate to='/login' />
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }, [Navigate])


    if(token) {
        return <Home />
    } else {
        return <Navigate to="/error" />
    }
}

export default Auth