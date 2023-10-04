import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import docApp from "../../Firebase/Firebase.config";
import { set } from "date-fns";

export const AuthContext = createContext();
const auth = getAuth(docApp)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // sign up with email and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }  

    const logout = () => {
        return signOut(auth)
    }


    // on authstatechange 
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=> unsubscribe()
    },[])
    const authInfo = {
        createUser,
        loginUser,
        user,
        logout
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;