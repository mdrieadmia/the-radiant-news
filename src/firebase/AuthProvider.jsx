import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/Firebase.config.js";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loginStatus, setLoginStatus] = useState(null)
    const [registerStatus, setRegisterStatus] = useState(null)

    // User register with email and password
    const emailRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    //User sign in function
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User sign out function
    const logOutUser = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loginStatus,
        setLoginStatus,
        registerStatus,
        setRegisterStatus,
        emailRegister,
        logInUser,
        logOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;